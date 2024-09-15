import Matter from 'matter-js';
import store from '../store.js'
import { scroll } from '../reducers.js';

const Scroll = (entities) => {
    const player = entities['player']
    const wallRight = entities['wallRight']
    const rightCollison = Matter.Collision.collides(player.body, wallRight.body)
    
    //const wallLeft = entities['wallLeft']
    //const leftCollison = Matter.Collision.collides(player.body, wallLeft.body)

    if ( rightCollison !== null && rightCollison.collided ) {
        store.dispatch(scroll('right'))
    } /* else if ( leftCollison !== null && leftCollison.collided ) {
        store.dispatch(scrollLeft())
    } */

  
  return entities;
};

export default Scroll;