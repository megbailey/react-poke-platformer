import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from "react-redux";
import store from '../store.js'
import { running } from '../reducers';


const Menu = ( props ) => {
    const { src, width, height, left, bottom } = props
    const gameState = useSelector((state) => state.game.value)

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
            onClick={() => store.dispatch( running(!gameState.isRunning) )}
        >Start Game</button>
      </div>
    )
    
}


export default Menu