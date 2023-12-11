import React, { memo, createContext, useState, useRef, useEffect, useContext } from "react";
import { GameEngine } from "react-game-engine";
import Entities from "./entities.js";
import Systems from "./systems/index.js";
import Background from './components/Background.jsx'

import Trees from '../assets/img/trees.png'
import DesertA from '../assets/img/desert_a.png'
import MountainA from '../assets/img/mountains_a.png'
import Menu from "./components/Menu.jsx";

export const RunningContext = createContext(null)

const Game = memo(function Game({ width, height }) {
  const [running, setRunningState] = useState(false)
  const gameEngine = useRef(null);
  
/*   useEffect(() => {
    window.addEventListener('resize', updateDimensions);
  },[])
  function updateDimensions() {
    const newState = { width: width, height: (height) }
    setWindowState(newState)
    gameEngine.current.swap(Entities({ ...newState}))
  } */

  //console.log(windowState)
  return (
      <RunningContext.Provider value={running}>
        <ForestBackground
          width={width}
          height={height}
        >
            <GameEngine
              ref={(ref) => { gameEngine.current = ref; } }
              style={{ width: width, height: height }}
              running={running}
              systems={Systems} // collection of functions ran per tick
              entities={Entities({ width: width, height: height })}
            >
            </GameEngine>
        </ForestBackground>
        { !running && (
          <Menu 
            left={`${width/2 - width/3}px`}
            bottom={`${height/2 + height/3}px`}
            width={width * .666} 
            height={height * .666}
            updateGameState={setRunningState}
          />
        )}
    </RunningContext.Provider>
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