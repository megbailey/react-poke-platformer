import store from '../store.js'
import { keyPress } from '../reducers.js';
import { onMoveBottom, onMoveLeft, onMoveRight, onMoveTop, onMoveUp } from '../utils/onMove.js';

const Move = (entities, { KeyboardController }) => {
  if ( KeyboardController.w) {
    // face back
    onMoveTop()
  } else if ( KeyboardController.a ) {
    // face & walk left
    onMoveLeft()
  } else if ( KeyboardController.s  ) {
    // face bottom
    onMoveBottom()
  } else if ( KeyboardController.d ) {
    // face & walk right
    onMoveRight()
  } else if (KeyboardController.space  && KeyboardController.previous.space !== KeyboardController.space ) {
    // jump
    onMoveUp()
  } else {
    store.dispatch( keyPress(null) )
  }

  return entities;
};

export default Move;