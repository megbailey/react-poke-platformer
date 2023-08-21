import React, { lazy, useState } from 'react';
import PropTypes from 'prop-types';


const Background = ( props ) => {
    const { width, height, colorHex, img, children } = props
    const { src, height: imgHeight, width: imgWidth } = img

    return (
      <>
      {/* <div 
        className='background' 
        style={{
            backgroundColor: `${colorHex}`,
            width: `${width}px`,
            height: `${height}px`,
            overflow: 'hidden',
            transformOrigin: 'top left'
        }}
    > */}
         <img
            style={{
                width: `${imgWidth}px`,
                height: `${imgHeight}px`,
                overflow: 'hidden',
                transformOrigin: 'top left',
                backgroundColor: `${colorHex}`,
            }}
            src={src}
        />
        {children}
     {/*  </div> */}
      </>
    )
    
}


export default Background