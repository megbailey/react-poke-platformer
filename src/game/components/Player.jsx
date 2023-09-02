import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Sprite from './Sprite.jsx';

const frontFrames = {
    startWidth: 1,
    states: 3
}
const backFrames = {
    startWidth: 49,
    states: 3
}
const leftFrames = {
    startWidth: 98,
    states: 2
}
const rightFrames = {
    startWidth: 130,
    states: 2
}

const playerState = {
    FORWARD: frontFrames,
    BACK: backFrames,
    LEFT: leftFrames,
    RIGHT: rightFrames
}

const Player = ( props ) => {
    const { src, state, body } = props

    /* const width = body.bounds.max.x - body.bounds.min.x;
    const height = body.bounds.max.y - body.bounds.min.y; */
    const x = body.position.x;
    const y = body.position.y

    return (
        <Sprite
            {...playerState[state]}
            src={src}
            tile={{
                width: 16,
                height: 16,
                x: x,
                y: y,
            }}
            scale={1.5}
            framesPerStep={16}
        />
    )
}

Player.propTypes = {
    state: PropTypes.oneOf(['FORWARD', 'BACK', 'LEFT', 'RIGHT'])
}

Player.defaultProps = {
    state: 'FORWARD'
}

export default Player