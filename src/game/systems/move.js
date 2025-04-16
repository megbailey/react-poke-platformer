import store from '../store.js'
import { keyPress, direction } from '../reducers.js';
import { onMoveBottom, onMoveLeft, onMoveRight, onMoveTop, onMoveUp } from '../utils/onMove.js';
import Matter from 'matter-js';

const Move = (entities, { KeyboardController }) => {
  if ( KeyboardController.w ) {
    // face back
    store.dispatch( direction('BACK') );
    store.dispatch( keyPress('DPAD-UP') );
  }
  if ( KeyboardController.a ) {
    // face & walk left
    store.dispatch( direction('LEFT') );
    store.dispatch( keyPress('DPAD-LEFT') );
    Matter.Body.translate( entities['player']['body'], { 
      x: -2,
      y: 0
    })
  }
  if ( KeyboardController.s  ) {
    // face bottom
    store.dispatch( direction('FRONT') );
    store.dispatch( keyPress('DPAD-DOWN') );
  } 
  if ( KeyboardController.d ) {
    // face & walk right
    store.dispatch( direction('RIGHT') );
    store.dispatch( keyPress('DPAD-RIGHT') );
    Matter.Body.translate( entities['player']['body'], { 
      x: 2,
      y: 0
    })
  } 
  if ( KeyboardController.space  && KeyboardController.previous.space !== KeyboardController.space ) {
    // jump
    store.dispatch( keyPress('ACTION-X') );
    Matter.Body.setVelocity( entities['player']['body'], {
      x: entities['player']['body'].velocity.x,
      y: -16
    })
  } 
  
  /* if ( !KeyboardController.w && !KeyboardController.a && !KeyboardController.s && !KeyboardController.d && !KeyboardController.space ) {
    store.dispatch( keyPress(null) )
  } */

  return entities;
};

export default Move;