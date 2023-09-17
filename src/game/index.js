import React, { memo, createContext, useState, useRef, useEffect } from "react";
import { GameEngine } from "react-game-engine";
import Entities from "./entities.js";
import Systems from "./systems/index.js";
import Background from './components/Background.jsx'

import Trees from '../assets/img/trees.png'
import DesertA from '../assets/img/desert_a.png'
import MountainA from '../assets/img/mountains_a.png'

const Game = memo(function Game(props) {
  const [windowState, setWindowState] = useState({ width: window.innerWidth, height: (window.innerHeight / 2) });
  const gameEngine = useRef(null);
  
  useEffect(() => {
    window.addEventListener('resize', updateDimensions);
  },[])

  function updateDimensions() {
    const newState = { width: window.innerWidth, height: (window.innerHeight / 3) }
    setWindowState(newState)
    gameEngine.current.swap(Entities({ ...newState}))
  }

  return (
    <ForestBackground
      width={windowState.width}
      height={windowState.height}
    >
      <GameEngine
        ref={(ref) => { gameEngine.current = ref; } }
        style={{ width: windowState.width, height: windowState.height }}
        systems={Systems} // collection of functions ran per tick
        entities={Entities({...windowState})}
      >
      </GameEngine>
    </ForestBackground>
  );
})

export default Game;

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