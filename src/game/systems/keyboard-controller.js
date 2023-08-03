const readKey = (input, keys, name) => input.find(x => x.name === name && keys.indexOf(x.payload.key) !== -1);

const createKeyReader = keys => {
  let down = false;

  return input => {
    if (readKey(input, keys, "onKeyDown"))
      down = true;
    
    if (readKey(input, keys, "onKeyUp"))
      down = false;

    return down;
  }
};

const w = createKeyReader(["w", "W", "ArrowUp"]);
const a = createKeyReader(["a", "A", "ArrowLeft"]);
const s = createKeyReader(["s", "S", "ArrowDown"]);
const d = createKeyReader(["d", "D", "ArrowRight"]);
const space = createKeyReader([" "]);

let previous = { };

const KeyboardController = (Wrapped = x => x) => (entities, args) => {

  if (!args.keyboardController) {
      const input = args.input;

      const current = {
        w: w(input),
        a: a(input),
        s: s(input),
        d: d(input),
        space: space(input),
      };

      args.keyboardController = Object.assign({}, current, { previous });

      previous = current;
  }

    const keyboardInput = args.keyboardController
    const player = entities['sprite']

    if ( keyboardInput.w && keyboardInput.previous.w !== keyboardInput.w) {
      player.state = 'FORWARD'
    } else if ( keyboardInput.a && keyboardInput.previous.a !== keyboardInput.a ) {
      player.state = 'LEFT'
    } else if ( keyboardInput.s && keyboardInput.previous.s !== keyboardInput.s ) {
      player.state = 'BACK'
    } else if ( keyboardInput.d && keyboardInput.previous.d !== keyboardInput.d ) {
      player.state = 'RIGHT'
    } 
  
  return Wrapped(entities, args);
};

export default KeyboardController;