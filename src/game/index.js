import React, { useRef } from "react";
import { GameEngine } from "react-game-engine";
import { Provider } from "react-redux";
import Entities from "./entities.js";
import Systems from "./systems/index.js";


import store from './store.js';
import TopBar from "./components/TopBar.jsx";
import { LeftGamePad, RightGamePad } from "./components/GamePad.jsx";

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


  return (
    <div 
      id="game-container" 
      style={{   
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div 
        className="left-content" 
        style={{  
          backgroundColor: 'purple', 
          height: `${height + 50}px`,
          width: `${width/6}px`,
          borderRadius: '15px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      > 
        <LeftGamePad />
      </div>
      <div 
        className="middle-content"
        style={{
          paddingTop: `10px`,
          paddingBottom: `20px`,
          backgroundColor: 'purple',
          borderRadius: '15px',
        }}
      > 
        <div 
          className="game"
          style={{  
            border: 'solid',
            borderWidth: '5px',
            borderRadius: '25px'
          }}
        >
          <TopBar height={20} />
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
      </div>
      <div 
        className="right-content"
        style={{  
          backgroundColor: 'purple', 
          height: `${height + 50}px`,
          width: `${width/6}px`,
          borderRadius: '15px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      > 
        <RightGamePad />
      </div>
    </div>
  );
}


const PokePlatformer = (props) => (
  <Provider store={store}>
    <Game {...props}/>
  </Provider>
);

export default PokePlatformer;