import React, { PureComponent } from "react";
import { lazy } from 'react';
import { GameEngine } from "react-game-engine";
import KeyboardController from "./systems/KeyboardController";
import Entities from "./entities";
import Background from './components/Background'
import Mountain from '../assets/img/mountains_a.png'



export default class Game extends PureComponent {
  render() {
    return (
      <Background
        img={Mountain}
      >
        <GameEngine
          style={{ width: 825, height: 128 }}
          systems={[ KeyboardController( ) ]}
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