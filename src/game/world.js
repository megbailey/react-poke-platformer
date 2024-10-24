import React from 'react';
import Matter from 'matter-js';
import { useEffect } from 'react';

const World = ({ 
  width,
  height,
  engine, 
  entities = [], 
  debug = false 
}) => {

  // only add matter entities if given some
  if ( entities.length > 0 ){
    Matter.World.add( engine.world, entities );
  } 

  useEffect(() => {
    // only render on canvas when debug == true
    const debugCanvas = document.getElementById('debug-matter-canvas')
    if ( debug === true && debugCanvas) {
      var render = Matter.Render.create({
        canvas: debugCanvas,
        engine: engine,
        options: {
          width: width,
          height: height,
          //showIds: true
        }
      });
  
      Matter.Render.run(render);
    }
  }, [])
};

export default World;