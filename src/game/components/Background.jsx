import React from 'react';
import PropTypes from 'prop-types';


const Background = ( props ) => {
    const { src, width, height, colorHex, children } = props

    return (
      <div 
        style={{
            width: `${width}px`,
            height: `${height}px`,
            backgroundColor: `${colorHex}`,
            overflow: 'hidden',
        }}
    >
         <img
            style={{
                overflow: 'hidden',
                transformOrigin: 'top left',
                backgroundColor: `${colorHex}`,
            }}
            src={src}
        />
        {children}
      </div>
    )
    
}


export default Background