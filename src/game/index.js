import React, { useState, useRef, useEffect } from "react";
import { GameEngine } from "react-game-engine";
import {Provider, useSelector } from "react-redux";
import Entities from "./entities.js";
import Systems from "./systems/index.js";

import store from './store.js';

const Game = ({
  width, 
  height, 
  debug = false, 
  ...props 
}) => {

  const gameEngine = useRef(null);
  const gameState = useSelector((state) => state.game.value)
 

  useEffect(() => {

  }, []);

  function updateWindowDimensions() {
   // const newState = { windowWidth: width, windowHeight: (height) }
    //setWindowState(newState)
    //gameEngine.current.swap(Entities({ ...newState}))
  }
  
  const gameStyle = {
    width: width, 
    height: height, 
    // must set position to relative so that other css positioning is relative to this container
    position: 'relative'
  }

  return (
    <>
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
    </>
  );
}


const PokePlatformer = (props) => (
  <Provider store={store}>
    <Game {...props}/>
  </Provider>
);

export default PokePlatformer;