import React from "react"
import { useSelector } from "react-redux";

import Health from "./Health.jsx";
import pokeball from '../assets/img/pokeball.svg';


const TopBar = ( props ) => {
    const { 
        height
    } = props

    const gameState = useSelector((state) => state.game.value)

    return (
        <div 
            id='game-top'
            style={{ 
                height: height,
                display: 'flex',
                border: 'solid'
            }}
        >
            <Health />
            <div 
                id='state-pokeballs' 
                style={{ display: 'flex' }}
            >
                <img 
                    style={{ 
                        height: `${16}px`,
                        width: `${16}px`,
                    }}
                    src={pokeball}
                />
                <div key={gameState.bag.pokeballs}>
                    {gameState.bag.pokeballs}
                </div>
            </div>
      </div>
    )
}

export default TopBar;