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
  
  console.log(`total width given`, width, 'height', height)
  let windowWidth, windowHeight;
  if ( consoleType === 'vertical' ) {
    windowWidth = width - 30 /* padding */ - 12 /* borders width */ 
    windowHeight = height * .5 /* set window to take half of the div */
  } else {
    windowWidth = width - 200 /* static controller width */ - 30 /* game window padding */ - 6
    windowHeight = height - 30 /* game window padding */ - 6 /* borders width */
  }
 
  return (
    <div id="game-container">
      <Console 
        type={consoleType}
        windowHeight={windowHeight}
        windowWidth={windowWidth}
      >
          <GameEngine 
            id="game-engine"
            ref={(ref) => gameEngine.current = ref}
            style={{  
              width: '100%',
              height: '100%',
              position: 'relative', // must set position to relative so positioning for entities is relative to game engine div
            }}
            running={true}
            systems={Systems} // collection of functions ran per tick
            entities={ Entities({
              gameWindowWidth: windowWidth, 
              gameWindowHeight: windowHeight,
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