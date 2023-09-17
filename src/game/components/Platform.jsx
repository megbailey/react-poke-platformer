import React from 'react';
import PropTypes from 'prop-types';


const Platform = ( props ) => {
    const { src, body, width, height, border, style } = props

    let x, y;
    if (body.type === "body") {
        x = body.position.x - (width /2);
        y = body.position.y;
    }

    //height = auto; width = auto;
    //let angle = body.angle;
    //let degrees = angle * (180 / Math.PI);

    //console.log(body, width, height)
    return (
        <div 
            className='c-platform'
            style={{ 
                ...style,
                height: `${height}px`,
                width: `${width}px`,
                transform: `translate(${x}px, ${y }px)`,
                borderStyle: border ? 'solid' : 'none',
                position: 'absolute',
            }}
      >
        <img src={src} />
    </div>
          
    )
    
}


export default Platform;