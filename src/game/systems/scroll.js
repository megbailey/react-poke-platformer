import Matter from 'matter-js';
import store from '../store.js'
import { scroll } from '../reducers.js';

const Scroll = (entities) => {
    const {
        player,
        wallRight,
        wallLeft,
        ceiling,
        floor,
        world,
        ...scrollableEntities
    } = entities
    const rightCollison = Matter.Collision.collides(player.body, wallRight.body)
    
    if ( rightCollison !== null && rightCollison.collided ) {
        store.dispatch(scroll('right'))

        // Translate scrollable entities anytime scroll occurs
        Object.keys( scrollableEntities ).forEach(( entityKey )=> {
            Matter.Body.translate( scrollableEntities[entityKey].body, { 
                x: -2,
                y: 0
            })
        })
       
    } 
   
  return entities;
};

export default Scroll;