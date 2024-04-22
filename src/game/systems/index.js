
import KeyboardController from "./keyboard-controller.js";
import Gravity from "./gravity.js";
import Move from "./move.js";

const Systems =  [
	KeyboardController(),
    Gravity,
    Move
];

export default Systems