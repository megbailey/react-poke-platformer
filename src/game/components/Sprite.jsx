import React, { useEffect, useRef } from 'react';
import { useSelector } from "react-redux";
import Tile from './Tile.jsx';

const framesPerStep = 16;
const Sprite = (props) => {
    const { src, tile, scale } = props
    const { width, height, x, y } = tile
    const spriteState = useSelector((state) => state.sprite.value)
    const animationRef = useRef(null)
    const frameCountRef = useRef(0)
    let tickRef = useRef(0)

    const animate = () => {
        if (tickRef.current === framesPerStep) {
            tickRef.current = 0;
            frameCountRef.current = (frameCountRef.current + 1) % spriteState.frames.states   
        }
        tickRef.current += 1;
        // console.log( `${tickRef.current} -- current: ${frameCountRef.current} -- total states: ${spriteState.frames.states} -- next: ${(frameCountRef.current + 1) % spriteState.frames.states}`)
        // When spriteState changes quickly, sometimes the current frame count will be the same ( or greater ) than the number states that represent the current direction. 
        // When this condition occurs, just go to the next state. 
        if ( frameCountRef.current >= spriteState.frames.states ){
            frameCountRef.current = (frameCountRef.current + 1) % spriteState.frames.states  
        } else {
            animationRef.current = requestAnimationFrame(animate);
        }
       
       
    };

    useEffect(( ) => {
        animationRef.current = requestAnimationFrame(animate)

        return () => cancelAnimationFrame(animationRef.current)
    
    }, [spriteState])

    return (
        <Tile 
            src={src} 
            width={width} 
            height={height} 
            x={x}
            y={y}
            scale={scale} 
            state={ frameCountRef.current}
            start={ spriteState.frames.startWidth} 
        />
    )
}

export default Sprite;