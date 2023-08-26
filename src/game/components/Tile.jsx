import React from 'react';

const Tile = (props) => {
    const { src, x, y, width, height, scale, state, start} = props
    const left = width * state + start
    
    return (
       <div style={{
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