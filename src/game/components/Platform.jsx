import React from 'react';

const Platform = ( props ) => {
    const { src, body, width, height, style } = props

    let x, y;
    if (body.type === "body") {
        x = body.position.x - width/5;
        y = body.position.y + height/2;
    }

    return (
        <div 
            className='c-platform'
            style={{ 
                ...style,
                backgroundImage: `url(${src})`,
                height: `${height}px`,
                width: `${width}px`,
                position: 'absolute',
                top: `${y}px`,
                left: `${x}px`,
            }}
      />  
    )
    
}


export default Platform;