import React, { PureComponent } from "react";
import { lazy } from 'react';
import { GameEngine } from "react-game-engine";
import Entities from "./entities";
import Background from './components/Background'
import Clouds from '../assets/img/clouds.png'
import Systems from "./systems";


export default class Game extends PureComponent {

  constructor(props) {
    super(props);
    //this.gameEngine = null;
    this.entities = Entities();
    //const { engine } = this.entities
    
  }

  render() {
    return (
      <Background
        colorhex="#8abdf0"
        width={825}
        height={128}
        img={Clouds}
      >
        <GameEngine
          ref={(ref) => { this.gameEngine = ref; }}
          style={{ width: 825, height: 128 }}
          systems={ Systems } // collection of functions ran per tick
          entities={ this.entities
            
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