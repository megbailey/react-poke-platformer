import Matter from 'matter-js';

const World = ( props ) => {
  const { engine, entities = [] } = props
   
    // only add matter entities if given some
    if ( entities.length > 0 ){
      Matter.World.add( engine.world, entities );
    } 

  return engine
};

export default World