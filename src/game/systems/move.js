
const Move = (entities, { KeyboardController }) => {
  const player = entities['player']

   if ( KeyboardController.w && KeyboardController.previous.w !== KeyboardController.w) {
    player.state = 'FORWARD'
  } else if ( KeyboardController.a && KeyboardController.previous.a !== KeyboardController.a ) {
    player.state = 'LEFT'
  } else if ( KeyboardController.s && KeyboardController.previous.s !== KeyboardController.s ) {
    player.state = 'BACK'
  } else if ( KeyboardController.d && KeyboardController.previous.d !== KeyboardController.d ) {
    player.state = 'RIGHT'
  }  
 
  return entities;
};

export default Move;