import React, { useEffect, useState } from 'react';
import Tile from './Tile';
import sprite1 from '../../assets/img/trainer-sprite-1.png'


const Sprite = (props) => {
    const { src, states, scale, tile, framesPerStep } = props
    const { width, height } = tile
    const [ state, setState ] = useState(0);
    let tick = 0;
    let frame = 0;
   

    const animate = () => {
        if (tick === framesPerStep) {
            tick = 0;
            setState(( state + 1) % states );
        }
        tick += 1;

        frame = requestAnimationFrame(animate);
    };

    useEffect(( ) => {
        animate()
    }, [state])

    return <Tile src={src} state={state} width={width} height={height} scale={scale} />
}

Sprite.defaultProps = {
    src: sprite1,
    tile: {
        width: 16,
        height: 16
    },
    states: 3, 
    scale: 1.5,
    framesPerStep: 16
}

export default Sprite;