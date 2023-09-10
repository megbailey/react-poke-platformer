import React from 'react';
import PropTypes from 'prop-types';


const Platform = ( props ) => {
    const { src, body, border, style } = props

    return (
        <img 
            className='c-platform'
            style={{ 
                ...style,
                top: `${body.position.y}px`,
                left: `${body.position.x}px`,
                borderStyle: border ? 'solid' : 'none',
                position: 'absolute',
            }}
            src={src}
      />
          
    )
    
}


export default Platform