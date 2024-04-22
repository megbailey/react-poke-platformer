import Matter from 'matter-js';
import store from '../store.js'
import { direction } from '../reducers.js';

const Move = (entities, { KeyboardController }) => {
  const player = entities['player']

  // walking
  if ( KeyboardController.w) {
    store.dispatch(
      direction('BACK'),
    );
  } else if ( KeyboardController.a ) {
    store.dispatch(
      direction('LEFT'),
    );
    Matter.Body.translate( player.body, { 
      x: -2,
      y: 0
    })
  } else if ( KeyboardController.s  ) {
    store.dispatch(
      direction('FRONT'),
    );
  } else if ( KeyboardController.d ) {
    store.dispatch(
      direction('RIGHT'),
    );
    Matter.Body.translate( player.body, { 
      x: 2,
      y: 0
    }) 
  }  
 
  // jumping
  if (KeyboardController.space  && KeyboardController.previous.space !== KeyboardController.space ) {
    Matter.Body.setVelocity( player.body, {
      x: player.body.velocity.x,
      y: -16
    });
  }



  
  return entities;
};

export default Move;