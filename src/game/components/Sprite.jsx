import React, { useEffect, useState } from 'react';
import Tile from './Tile.jsx';

const Sprite = (props) => {
    const { src, tile, states, scale, framesPerStep, startWidth } = props
    const { width, height, x, y } = tile
    const [ state, setState ] = useState(0);
    let tick = 0;
   

    const animate = () => {
        if (tick === framesPerStep) {
            tick = 0;
            setState(( state + 1) % states );
        }
        tick += 1;

        return requestAnimationFrame(animate);
    };

    useEffect(( ) => {
        const id = animate()

        return function cancelFrame() {
            cancelAnimationFrame(id)
        }
    }, [state])

    return (
        <Tile 
            src={src} 
            state={state} 
            width={width} 
            height={height} 
            x={x}
            y={y}
            scale={scale} 
            start={startWidth} 
        />
    )
}

export default Sprite;