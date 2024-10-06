import Matter from 'matter-js';
import React, { useEffect } from 'react';

const World = ({ 
  engine, 
  entities = [], 
  gameWidth: width, 
  gameHeight: height, 
  debug = false 
}) => {

  // only add matter entities if given some
  if ( entities.length > 0 ){
    Matter.World.add( engine.world, entities );
  } 
  useEffect(() => {
    // render canvas only when debugging
    const debugCanvas = document.getElementById('debug-matter-canvas')
    if ( debug === true && debugCanvas) {
      var render = Matter.Render.create({
        canvas: debugCanvas,
        engine: engine,
        options: { 
          width: width, 
          height: height,
        }
      });
  
      Matter.Render.run(render);
    }
  }, [])
};

export default World;