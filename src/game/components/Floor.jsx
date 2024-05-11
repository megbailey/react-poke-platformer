import React from 'react';

const Floor = ({ 
    src, 
    body, 
}) => {

    const width = body.bounds.max.x - body.bounds.min.x;
    const height = body.bounds.max.y - body.bounds.min.y;
    const x = body.position.x - width/2;
    const y = body.position.y - height/5;
    
    return (
        <div 
            style={{
                backgroundImage: `url(${src})`,
                position: `absolute`,
                width: `${width}px`,
                height: `${height}px`,
                top: `${y}px`,
                left: `${x}px`
            }}  
        />
    );
}

export default Floor