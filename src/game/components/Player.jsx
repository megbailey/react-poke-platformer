import React from 'react';
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
    Up: 0,
    Down: 1,
    Left: 2,
    Right: 3
}
const Player = ( ) => {
 
    return (
        <Sprite  
            {...backFrames}
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

export default Player