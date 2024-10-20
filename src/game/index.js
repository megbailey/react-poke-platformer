import React, { useEffect, useRef } from "react";
import { GameEngine } from "react-game-engine";
import { Provider } from "react-redux";
import Entities from "./entities.js";
import Systems from "./systems/index.js";

import store from './store.js';
import { dimmensions } from './reducers.js';

import Console from "./components/Console.jsx";

const Game = (props) => {
  const { 
    width, 
    height, 
    debug = false, 
  } = props
  const gameEngine = useRef(null);
  const consoleType = width < 500 ? 'vertical' : 'horizontal'

  useEffect(() => {
    store.dispatch( 
      dimmensions({ width: width, height: height }) 
    );
  }, [])
  
  const gameStyle = {
    width: width - (consoleType === 'horizontal' ? 214 : 0), 
    height: height, 
    overflow: 'hidden',
    // must set position to relative so that other css positioning is relative to this container
    position: 'relative',
    borderRadius: '20px'
  }

  return (
    <div id="game-container" >
      <Console type={consoleType}>
          <GameEngine 
            className="game-engine"
            ref={(ref) => { gameEngine.current = ref; } }
            style={gameStyle}
            running={true}
            systems={Systems} // collection of functions ran per tick
            entities={ Entities({
              gameWidth: gameStyle.width, 
              gameHeight: height,
              debug: debug
            })}
          > 
            { debug === true && (
              <canvas id="debug-matter-canvas" />
            )}
          </GameEngine>
        </Console> 
    </div>
  );
}


const PokePlatformer = (props) => (
  <Provider store={store}>
    <Game {...props}/>
  </Provider>
);

export default PokePlatformer;