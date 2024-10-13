import React, { useRef } from "react";
import { GameEngine } from "react-game-engine";
import { Provider } from "react-redux";
import Entities from "./entities.js";
import Systems from "./systems/index.js";


import store from './store.js';
import TopBar from "./components/TopBar.jsx";

const Game = ({
  width, 
  height, 
  debug = false, 
  ...props 
}) => {

  const gameEngine = useRef(null);
 
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

  const barHeight = height/10
  
  return (
    <div id="game-container">
      <TopBar height={barHeight} />
      <GameEngine
        id="game-engine"
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