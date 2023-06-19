import React, { PureComponent } from "react";
import { GameEngine } from "react-game-engine";
import Sprite from "./components/Sprite";
import { MoveBox } from "./systems/move-box"


export default class SimpleGame extends PureComponent {
  render() {
    return (
      <GameEngine
        style={{ width: 800, height: 600, backgroundColor: "white" }}
        //systems={[MoveBox]}
        entities={{
          //-- Notice that each entity has a unique id (required)
          //-- and a renderer property (optional). If no renderer
          //-- is supplied with the entity - it won't get displayed.
          sprite: { x: 200,  y: 200, renderer: <Sprite />}
        }}>

      </GameEngine>
    );
  }
}