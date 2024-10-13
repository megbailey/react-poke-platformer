import React from "react";
import { useSelector } from "react-redux";

import pokeball from '../assets/img/pokeball.svg';


const Bag = () => {

    const gameState = useSelector((state) => state.game.value)

    return (
        <div id='state-bag'> 
            <div 
                id='state-pokeballs' 
                style={{ display: 'flex', color: 'white' }}
            >
                <img 
                    style={{ 
                        height: `${16}px`,
                        width: `${16}px`,
                    }}
                    src={pokeball}
                />
                <span key={gameState.bag.pokeballs}>{gameState.bag.pokeballs}</span>
            </div>
        </div>
    )
}

export default Bag;