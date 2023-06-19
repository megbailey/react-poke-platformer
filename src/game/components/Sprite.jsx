import React, { useEffect, useState } from 'react';
import Tile from './Tile';

const Sprite = (props) => {
    const { src, states, scale, tile, framesPerStep, startWidth } = props
    const { width, height } = tile
    const [ state, setState ] = useState(0);
    let tick = 0;
   

    const animate = () => {
        if (tick === framesPerStep) {
            tick = 0;
            setState(( state + 1) % states );
        }
        tick += 1;

        requestAnimationFrame(animate);
    };

    useEffect(( ) => {
        animate()
    }, [state])

    return <Tile src={src} state={state} width={width} height={height} scale={scale} start={startWidth} />
}

export default Sprite;