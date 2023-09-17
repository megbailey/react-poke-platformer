import React from 'react';

const Floor = (props) => {
    const { src, body, color } = props

    const width = body.bounds.max.x - body.bounds.min.x;
    const height = body.bounds.max.y - body.bounds.min.y;
    const x = body.position.x - width / 2;
    const y = body.position.y;
    
    return (
        <div 
            style={{
                //backgroundColor: color,
                backgroundImage: `url(${src})`,
                transform: `translate(${x}px, ${y - 10}px)`,
                position: `absolute`,
                width: `${width}px`,
                height: `${height}px`
            }}  
        />
           
        
        
    );
}

export default Floor