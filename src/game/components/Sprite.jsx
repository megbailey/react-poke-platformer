import React, { useEffect, useState, useRef } from 'react';
import { useSelector } from "react-redux";
import Tile from './Tile.jsx';

const framesPerStep = 16;
const Sprite = (props) => {
    const { src, tile, scale } = props
    const { width, height, x, y } = tile
    const [ frameCount, setFrameCount ] = useState(0);
    const spriteState = useSelector((state) => state.sprite.value)
    const animationRef = useRef(null)

    let tick = 0;
   
    const animate = () => {
        if (tick === framesPerStep) {
            tick = 0;
            setFrameCount( prevCount => (prevCount + 1) % (spriteState.frames.states -1 ))
        }
        tick += 1;

        animationRef.current = requestAnimationFrame(animate);
    };

    useEffect(( ) => {
        animationRef.current = requestAnimationFrame(animate)

        return () => cancelAnimationFrame(animationRef.current)
    
    }, [])

    return (
        <Tile 
            src={src} 
            width={width} 
            height={height} 
            x={x}
            y={y}
            scale={scale} 
            state={frameCount}
            start={ spriteState.frames.startWidth} 
        />
    )
}

export default Sprite;