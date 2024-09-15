
import KeyboardController from "./keyboard-controller.js";
import Gravity from "./gravity.js";
import Move from "./move.js";
import Scroll from "./scroll.js";

const Systems =  [
	KeyboardController(),
    Gravity,
    Move,
    Scroll
];

export default Systems