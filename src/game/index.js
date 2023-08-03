import React, { PureComponent } from "react";
import { lazy } from 'react';
import { GameEngine } from "react-game-engine";
import KeyboardController from "./systems/keyboard-controller";
import Entities from "./entities";
import Background from './components/Background'
import Clouds from '../assets/img/clouds.png'
import Move from "./systems/move";


export default class Game extends PureComponent {
  render() {
    return (
      <Background
        colorHex="#8abdf0"
        width={825}
        height={128}
        img={Clouds}
      >
        <GameEngine
          style={{ width: 825, height: 128 }}
          systems={[ 
            KeyboardController( ),
            Move 
          ]}
          entities={ Entities() 
            
            //-- Notice that each entity has a unique id (required)
            //-- and a renderer property (optional). If no renderer
            //-- is supplied with the entity - it won't get displayed.
            //sprite: { x: 200,  y: 200, renderer: <Player />}
            
          }>
        </GameEngine>
      </Background>
      
    );
  }
}