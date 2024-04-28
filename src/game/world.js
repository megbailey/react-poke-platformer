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

export default World