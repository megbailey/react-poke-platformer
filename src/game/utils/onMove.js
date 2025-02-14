import Matter from 'matter-js';
import store from '../store.js'
import { direction, keyPress } from '../reducers.js';

export const onMoveRight =  ( ) => {
    console.log('right')
    store.dispatch( direction('RIGHT') );
    store.dispatch( keyPress('DPAD-RIGHT') );
    Matter.Body.translate( window.playerBody, { 
        x: 2,
        y: 0
    })
}

export const onMoveLeft =  ( ) => {
    console.log('left')
    store.dispatch( direction('LEFT') );
    store.dispatch( keyPress('DPAD-LEFT') );
    Matter.Body.translate( window.playerBody, { 
        x: -2,
        y: 0
    })
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
    Matter.Body.setVelocity( window.playerBody, {
        x: window.playerBody.velocity.x,
        y: -16
    });
}