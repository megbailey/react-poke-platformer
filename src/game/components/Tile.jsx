import React, { useContext } from 'react';
import { RunningContext } from '../index.js';

const Tile = (props) => {
    const { src, x, y, width, height, scale, state, start} = props
    const left = width * state + start
    const runningState = useContext(RunningContext);
    
    return (
      <div style={{
            display: runningState === false ? 'none' : null,
            left: `${x}px`,
            top: `${y}px`,
            width: `${width}px`,
            height: `${height}px`,
            transform: `scale(${scale}, ${scale}`,
            position: `absolute`,
            overflow: `hidden`,
            transformOrigin: `top left`
          }}
        >
          <img 
            src={src} 
            style={{
              transform: `translate(-${left}px, 0)`
            }}
          />
       </div>
    );
}

export default Tile