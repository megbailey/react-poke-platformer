import Matter from 'matter-js';

const Move = (entities, { KeyboardController }) => {
  const player = entities['player']

  //console.log(player.body.position)


  if ( KeyboardController.w && KeyboardController.previous.w !== KeyboardController.w) {
    player.state = 'BACK'
  } else if ( KeyboardController.a && KeyboardController.previous.a !== KeyboardController.a ) {
    player.state = 'LEFT'
  } else if ( KeyboardController.s && KeyboardController.previous.s !== KeyboardController.s ) {
    player.state = 'FORWARD'
  } else if ( KeyboardController.d && KeyboardController.previous.d !== KeyboardController.d ) {
    player.state = 'RIGHT'
  }  
 
  if (KeyboardController.space  && KeyboardController.previous.space !== KeyboardController.space ) {
    Matter.Body.setVelocity( player.body, {
      x: player.body.velocity.x,
      y: -12
    });
  }
  if (player.state === 'RIGHT') {
    Matter.Body.translate( player.body, { 
        x: 2,
        y: 0
      }) 
  } else if (player.state === 'LEFT') {
    Matter.Body.translate( player.body, { 
      x: -2,
      y: 0
    }) 
  } 
  
  return entities;
};

export default Move;