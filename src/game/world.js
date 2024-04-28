import Matter from 'matter-js';
import React, { useEffect, useRef } from 'react';

const World = ( props ) => {
  const { engine, entities = [], width, height, debug = false } = props
  const canvasRef = useRef(null)
    
  // only add matter entities if given some
  if ( entities.length > 0 ){
    Matter.World.add( engine.world, entities );
  } 
    
    console.log(width, height)

    useEffect(() => {
      if ( debug === true ){
        var render = Matter.Render.create({
          element: document.body,
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

export default World