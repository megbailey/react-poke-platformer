import React, { useState, useRef, useEffect } from "react";
import { GameEngine } from "react-game-engine";
import {Provider, useSelector } from "react-redux";
import Entities from "./entities.js";
import Systems from "./systems/index.js";
import Background from './components/Background.jsx'

import Trees from './assets/img/trees.png'
import DesertA from './assets/img/desert_a.png'
import MountainA from './assets/img/mountains_a.png'
import Menu from "./components/Menu.jsx";
import store from './store.js';

//console.log(ReactGameEngine);

const Game = ({ width, height }) => {
  const gameEngine = useRef(null);
  const gameState = useSelector((state) => state.game.value)
 
  useEffect(() => {
    console.log(width, height)
  },[width, height])
  /*
  function updateDimensions() {
    const newState = { width: width, height: (height) }
    setWindowState(newState)
    gameEngine.current.swap(Entities({ ...newState}))
  } */

  console.log("in game", width, height)
  //console.log(windowState)
  return (
    <>
        
        <ForestBackground
          width={width}
          height={height}
        >
            <GameEngine
              ref={(ref) => { gameEngine.current = ref; } }
              style={{ width: width, height: height }}
              running={gameState.isRunning}
              systems={Systems} // collection of functions ran per tick
              entities={Entities({ width: width, height: height })}
            >
            </GameEngine>
        </ForestBackground>
        { !gameState.isRunning && (
          <Menu 
            left={`${width/2 - width/3}px`}
            bottom={`${height/2 + height/3}px`}
            width={width * .666} 
            height={height * .666}
          />
        )}
        </>
       
  );
}


/*  const DesertBackground = ({width, height, children}) => {
  return (
    <Background
        color="#f4e474"
        src={DesertA}
        width={width}
        //height={height}
    >
      {children}
    </Background>
  )
} */

const ForestBackground = ({width, height, children}) => {
  return (
    <Background
        color="#8abdf0"
        width={width}
        height={height}
        src={Trees}
        style={{
          backgroundPosition: 'center bottom'
        }}
    >
      {children}
    </Background>
  )
}

/* const MountainsBackground = ({ width, height, children }) => {
  return (
    <Background
        color="#8abdf0"
        width={width}
        height={height}
        src={MountainA}
        style={{
          backgroundPosition: 'center bottom'
        }}
    >
      {children}
    </Background>
  )
} */

const PokePlatformer = (props) => (
  <Provider store={store}>
    <Game {...props}/>
  </Provider>
);

export default PokePlatformer;