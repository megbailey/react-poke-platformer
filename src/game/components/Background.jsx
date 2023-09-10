import React from 'react';
import PropTypes from 'prop-types';


const Background = ( props ) => {
    const { src, width, height, color, style, children } = props

    return (
      <div 
        className='c-background'
        style={{
          ...style,
          width: `${width}px`,
          height: `${height}px`,
          backgroundColor: `${color}`,
          overflow: 'hidden',
          backgroundImage: `url(${src})`,
          backgroundRepeat: 'repeat-x',
        }}
      >
          {children}
      </div>
    )
    
}


export default Background