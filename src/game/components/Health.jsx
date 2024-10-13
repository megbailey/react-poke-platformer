import React from "react"
import { useSelector } from "react-redux";
import hearts from '../assets/img/hearts.png';

const Heart = (props) => { 
    const { style, left } = props    

    return (
        <div 
            className='c-heart'
            style={{ 
                ...style,
                height: `16px`,
                width: `16px`,
                overflow: `hidden`                        
            }}
      >
        <img 
            style={{ transform: `translate(-${left}px, 0)` }}
            src={hearts}
        />
    </div>  
    )
      
}

const FullHeart = ( props ) => {
    return <Heart {...props} />
}

const HalfHeart = ( props ) => {
    return <Heart left={32} {...props} />
}

const DamagedHeart = ( props ) => {
    return <Heart left={16} {...props} />
}


const Health = (props) => { 
    const gameState = useSelector((state) => state.game.value)
    
    let heartsToRender = [ ]
    for ( let i = 0; i < gameState.hearts; i++ ) {
        heartsToRender.push( <FullHeart key={i} /> )
    }

    if (( gameState.hearts % 1) > 0 ) {
        heartsToRender.push( <HalfHeart key={i} /> )
    }

    for ( let i = gameState.hearts; i < 5; i++ ) {
        heartsToRender.push( <DamagedHeart key={i} /> )
    }

    return (
        <div className='c-health' style={{ display: "flex"}}>
            {heartsToRender}
        </div>  
    )
}

  export default Health;