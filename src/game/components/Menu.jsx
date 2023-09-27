import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { RunningContext } from '../index.js';


const Menu = ( props ) => {
    const { src, width, height, left, bottom, updateGameState } = props
    const  runningState = useContext(RunningContext);

    //console.log(width * .5, height * .66)
    return (
      <div 
        className='c-menu'
        style={{
            bottom: bottom,
            left: left,
            position: 'relative',
            width: `${width}px`,
            height: `${height}px`,
            opacity: .7,
            //overflow: 'hidden',
            //backgroundImage: `url(${src})`,
            backgroundColor: '#000'
        }}
      >
        <h2
            style={{ 
                color: '#fff',
                justifyContent: 'center',
                display: 'flex'
            }}
        >Poké-Platformer</h2>
        <button
            style={{
                height: '22px',
                width: '85px',
                left: `${width * .5 - 42.5}px`,
                bottom: `-${height * .667 - 50}px`,
                position: 'relative',
            }}
            onClick={() => updateGameState(!runningState)}
        >Start Game</button>
      </div>
    )
    
}


export default Menu