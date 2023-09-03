import React, { memo, createContext, useState, useRef, useEffect } from "react";
import { GameEngine } from "react-game-engine";
import Entities from "./entities.js";
import Systems from "./systems/index.js";
import Background from './components/Background.jsx'
import Clouds from '../assets/img/clouds.png'
import DesertA from '../assets/svg/desert_a.svg'
import MountainA from '../assets/img/mountains_a.png'

const Game = memo(function Game(props) {
  const [windowState, setWindowState] = useState({ width: window.innerWidth, height: (window.innerHeight / 3) });
  const gameEngine = useRef(null);
  
  console.log(DesertA)
  useEffect(() => {
    window.addEventListener('resize', updateDimensions);
  },[])

  function updateDimensions() {
    const newState = { width: window.innerWidth, height: (window.innerHeight / 3) }
    setWindowState(newState)
    gameEngine.current.swap(Entities({ ...newState}))
  }

  return (
    <DesertBackground
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
    </DesertBackground>
  );
})

export default Game;

 const DesertBackground = ({width, height, children}) => {
  return (
    <Background
        colorHex="#f4e474"
        src={DesertA}
        width={width}
        height={height}
    >
      {children}
    </Background>
  )
}

const CloudsBackground = ({width, height, children}) => {
  return (
    <Background
        colorHex="#8abdf0"
        width={width}
        height={height}
        src={Clouds}
    >
      {children}
    </Background>
  )
}

const MountainsBackground = ({ width, height, children }) => {
  return (
    <Background
        colorHex="#8abdf0"
        width={width}
        height={height}
        /* img={{
          width: width,
          height: height,
          src: MountainA
        }} */
    >
      {children}
    </Background>
  )
}