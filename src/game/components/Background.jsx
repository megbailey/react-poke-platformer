import React from 'react';
import PropTypes from 'prop-types';
import { ReactSVG } from 'react-svg'


const Background = ( props ) => {
    const { src, width, height, colorHex, children } = props

    const matches = src.match(/(.*)(.svg)$/g)
    // if the given src is a svg   
    return (
      <div 
        style={{
            width: `${width}px`,
            height: `${height}px`,
            backgroundColor: `${colorHex}`,
            overflow: 'hidden',
        }}
    >
      { matches !== null &&
        // if the given src is a svg
        <ReactSVG src={src} />
      }
        { matches == null && 
          <img
              style={{
                  overflow: 'hidden',
                  transformOrigin: 'top left',
                  backgroundColor: `${colorHex}`,
              }}
              src={src}
          />
        }
        {children}
      </div>
    )
    
}


export default Background