import React from "react"
import { useSelector } from "react-redux";

const Item = (props) => { 
    const { src, body, style } = props

    const gameState = useSelector((state) => state.game.value)
    
    // If item has been recorded as consumed, do not render
    if ( gameState.consumedBodies.includes(body.label) )
        return;


    const width = body.bounds.max.x - body.bounds.min.x;
    const height = body.bounds.max.y - body.bounds.min.y;

    let x, y;
    if (body.type === "body") {
        x = body.position.x - width/5;
        y = body.position.y + height/2;
    }

    //console.log(body)
    return (
        <div 
            className='c-consumable'
            style={{ 
                ...style,
                height: `${height}px`,
                width: `${width}px`,
                position: 'absolute',
                top: `${y}px`,
                left: `${x}px`,            
            }}
      >
        <img 
            style={{ 
                width: '100%',
                height: '100%'
            }}
            src={src}
        />
    </div>  
    )
      
  }

  export default Item;