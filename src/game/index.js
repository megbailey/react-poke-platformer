import React, { useRef } from "react";
import { GameEngine } from "react-game-engine";
import { Provider, useSelector } from "react-redux";
import Entities from "./entities.js";
import Systems from "./systems/index.js";


import store from './store.js';

import pokeball from './assets/img/pokeball.svg';
import Health from "./components/Health.jsx";


const Game = ({
  width, 
  height, 
  debug = false, 
  ...props 
}) => {

  const gameEngine = useRef(null);
  const gameState = useSelector((state) => state.game.value)
 
  /* function updateWindowDimensions() {
    const newState = { windowWidth: width, windowHeight: (height) }
    setWindowState(newState)
    gameEngine.current.swap(Entities({ ...newState}))
  }
  */
  
  const gameStyle = {
    width: width, 
    height: height, 
    overflow: 'hidden',
    // must set position to relative so that other css positioning is relative to this container
    position: 'relative'
  }

  return (
    <div id="game-container">
      <div 
        id='game-top'
        style={{ 
          height: height/10,
          display: 'flex'
        }}
      >
       <Health />
        <div 
          id='pokeballs' 
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
      <GameEngine
        //ref={(ref) => { gameEngine.current = ref; } }
        style={ debug === false ? gameStyle : null}
        running={true}
        systems={Systems} // collection of functions ran per tick
        entities={ Entities({
          gameWidth: width, 
          gameHeight: height,
          debug: debug
        })}
      > 
        { debug === true && (
          <canvas id="debug-matter-canvas" />
        )}
      </GameEngine>
    </div>
  );
}


const PokePlatformer = (props) => (
  <Provider store={store}>
    <Game {...props}/>
  </Provider>
);

export default PokePlatformer;