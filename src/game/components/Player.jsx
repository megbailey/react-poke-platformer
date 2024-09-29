import React from 'react';
import Sprite from './Sprite.jsx';

const Player = ( props ) => {
    const { src, body } = props

    /* const width = body.bounds.max.x - body.bounds.min.x;
    const height = body.bounds.max.y - body.bounds.min.y; */
    const x = body.position.x;
    const y = body.position.y

    return (
        <Sprite
            src={src}
            tile={{
                width: 16,
                height: 16,
                x: x,
                y: y,
            }}
            scale={1.5}
        />
    )
}

export default Player