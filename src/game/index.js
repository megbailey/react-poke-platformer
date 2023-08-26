import React, { memo, createContext, useState, useRef, useEffect } from "react";
import { GameEngine } from "react-game-engine";
import Entities from "./entities";
import Systems from "./systems";
import Background from './components/Background'
import Clouds from '../assets/img/clouds.png'
import DesertA from '../assets/img/desert_a.png'
import MountainA from '../assets/img/mountains_a.png'

const Game = memo(function Game(props) {
  const [windowState, setWindowState] = useState({ width: window.innerWidth, height: (window.innerHeight / 3) });
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
    <MountainsBackground
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
    </MountainsBackground>
  );
})

export default Game;

const DesertBackground = ({children}) => {
  return (
    <Background
        colorHex="#f4e474"
        img={{
          src: DesertA
        }}
    >
      {children}
    </Background>
  )
}

const CloudsBackground = ({children}) => {
  return (
    <Background
        colorHex="#8abdf0"
        img={{
          src: Clouds
        }}
    >
      {children}
    </Background>
  )
}

const MountainsBackground = ({ width, height, children }) => {
  return (
    <Background
        colorHex="#8abdf0"
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