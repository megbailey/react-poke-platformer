import Matter from 'matter-js';

const Move = (entities, { KeyboardController }) => {
  const player = entities['player']

  // walking
  if ( KeyboardController.w) {
    player.state = 'BACK'
  } else if ( KeyboardController.a ) {
    player.state = 'LEFT'
    Matter.Body.translate( player.body, { 
      x: -2,
      y: 0
    })
  } else if ( KeyboardController.s  ) {
    player.state = 'FORWARD'
  } else if ( KeyboardController.d ) {
    player.state = 'RIGHT'
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