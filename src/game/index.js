import React, { PureComponent } from "react";
import { GameEngine } from "react-game-engine";
import Player from "./components/Player";
import KeyboardController from "./systems/KeyboardController";



export default class SimpleGame extends PureComponent {
  render() {
    return (
      <GameEngine
        style={{ width: 800, height: 600, backgroundColor: "blue" }}
        systems={[ KeyboardController( ) ]}
        entities={{
          //-- Notice that each entity has a unique id (required)
          //-- and a renderer property (optional). If no renderer
          //-- is supplied with the entity - it won't get displayed.
          sprite: { x: 200,  y: 200, renderer: <Player />}
        }}>

      </GameEngine>
    );
  }
}