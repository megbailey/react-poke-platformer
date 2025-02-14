import store from '../store.js'
import { direction, keyPress } from '../reducers.js';
import GlobalPlayerBodyStore from '../matter-body-store.js';

let {
    translate,
    setVerticalVelocity
} = GlobalPlayerBodyStore

export const onMoveRight =  ( ) => {
    console.log('right')
    store.dispatch( direction('RIGHT') );
    store.dispatch( keyPress('DPAD-RIGHT') );
    translate(2, 0)
}

export const onMoveLeft =  ( ) => {
    console.log('left')
    store.dispatch( direction('LEFT') );
    store.dispatch( keyPress('DPAD-LEFT') );
    translate(-2, 0)
}

export const onMoveTop =  ( ) => {
    //console.log('back')
    store.dispatch( direction('BACK') );
    store.dispatch( keyPress('DPAD-UP') );
}

export const onMoveBottom =  ( ) => {
    //console.log('front')
    store.dispatch( direction('FRONT') );
    store.dispatch( keyPress('DPAD-DOWN') );
}

export const onMoveUp = ( ) => {
    store.dispatch( keyPress('ACTION-X') );
    setVerticalVelocity(16)
}