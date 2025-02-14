import store from '../store.js'
import { keyPress } from '../reducers.js';
import { onMoveBottom, onMoveLeft, onMoveRight, onMoveTop, onMoveUp } from '../utils/onMove.js';

const Move = (entities, { KeyboardController }) => {
  if ( KeyboardController.w ) {
    // face back
    onMoveTop()
  }
  if ( KeyboardController.a ) {
    // face & walk left
    onMoveLeft()
  }
  if ( KeyboardController.s  ) {
    // face bottom
    onMoveBottom()
  } 
  if ( KeyboardController.d ) {
    // face & walk right
    onMoveRight()
  } 
  if ( KeyboardController.space  && KeyboardController.previous.space !== KeyboardController.space ) {
    // jump
    onMoveUp()
  } 
  
  if ( !KeyboardController.w && !KeyboardController.a && !KeyboardController.s && !KeyboardController.d && !KeyboardController.space ) {
    store.dispatch( keyPress(null) )
  }

  return entities;
};

export default Move;