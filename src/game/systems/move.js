import Matter from 'matter-js';
import store from '../store.js'
import { direction, keyPress } from '../reducers.js';

const Move = (entities, { KeyboardController }) => {
  const player = entities['player']
  let keypress = null;

  // walking
  if ( KeyboardController.w) {
    store.dispatch( direction('BACK') );
    keypress = 'DPAD-UP'
  } else if ( KeyboardController.a ) {
    store.dispatch( direction('LEFT') );
    Matter.Body.translate( player.body, { 
      x: -2,
      y: 0
    })
    keypress = 'DPAD-LEFT'
  } else if ( KeyboardController.s  ) {
    store.dispatch( direction('FRONT') );
    keypress = 'DPAD-DOWN'
  } else if ( KeyboardController.d ) {
    store.dispatch( direction('RIGHT') );
    Matter.Body.translate( player.body, { 
      x: 2,
      y: 0
    }) 
    keypress = 'DPAD-RIGHT'
  }
 
  // jumping
  if (KeyboardController.space  && KeyboardController.previous.space !== KeyboardController.space ) {
    Matter.Body.setVelocity( player.body, {
      x: player.body.velocity.x,
      y: -16
    });
    keypress = 'ACTION-X'
  } 

  store.dispatch( keyPress(keypress) );

  return entities;
};

export default Move;