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
const space = createKeyReader([" ", "j", "J"]);

let previous = { };

const KeyboardController = (Wrapper = x => x) => (entities, args) => {

  if (!args.keyboardController) {
      const input = args.input;

      const current = {
        w: w(input),
        a: a(input),
        s: s(input),
        d: d(input),
        space: space(input),
      };

      args.KeyboardController = Object.assign({}, current, { previous });

      previous = current;
  }
  
  return Wrapper(entities, args);
};

export default KeyboardController;