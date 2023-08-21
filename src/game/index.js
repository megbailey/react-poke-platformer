import React, { PureComponent } from "react";
import { GameEngine } from "react-game-engine";
import Entities from "./entities";
import Systems from "./systems";
import { MAX_HEIGHT, MAX_WIDTH } from "./constants";
import Background from './components/Background'
import Clouds from '../assets/img/clouds.png'
import DesertA from '../assets/img/desert_a.png'


export default class Game extends PureComponent {

  constructor(props) {
    super(props);
    this.gameEngine = null;
    this.entities = Entities();    
  }

  render() {
    return (
      <DesertBackground>
        <GameEngine
          ref={(ref) => { this.gameEngine = ref; }}
          style={{ width: MAX_WIDTH, height: MAX_HEIGHT }}
          systems={ Systems } // collection of functions ran per tick
          entities={ this.entities}
        >
        </GameEngine>
      </DesertBackground>
      
    );
  }
}

const DesertBackground = ({children}) => {
  return (
    <Background
        colorHex="#f4e474"
        width={MAX_WIDTH}
        height={MAX_HEIGHT}
        img={{
          height: MAX_HEIGHT,
          width: MAX_WIDTH,
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
        width={MAX_WIDTH}
        height={MAX_HEIGHT}
        img={{
          height: MAX_HEIGHT,
          width:  MAX_WIDTH,
          src: Clouds
        }}
    >
      {children}
    </Background>
  )
}