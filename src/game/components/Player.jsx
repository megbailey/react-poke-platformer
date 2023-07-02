import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Sprite from './Sprite';
import sprite1 from '../../assets/img/trainer-sprite-1.png'

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
    return (
        <Sprite
            {...playerState[props.state]}
            src={sprite1}
            tile={{
                width: 16,
                height: 16
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