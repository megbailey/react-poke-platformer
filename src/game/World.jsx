import React, { useEffect, useRef } from 'react';
import Matter from 'matter-js';

const World = ( props ) => {
  const boxRef = useRef(null);
  const canvasRef = useRef(null);
  const { width, height, entities, options } = props

  useEffect(() => {
    let Engine = Matter.Engine;
    let Runner = Matter.Runner;
    let Render = Matter.Render;
    let Bodies = Matter.Bodies;

    let engine = Engine.create({});

    // https://brm.io/matter-js/docs/classes/Render.html
    let render = Render.create({
      element: boxRef.current,
      engine: engine,
      canvas: canvasRef.current,
      options: {
        ...options,
        width: width, 
        height: height,
        background: 'transparent',
        wireframes: false
      }
    });

   
    Matter.World.add(engine.world, entities );

    Runner.run(engine);
    Render.run(render);
  }, []);

  // the canvas Matter.js renders on
  return (
    <div
      ref={boxRef}
    >
      <canvas ref={canvasRef} />
    </div>
  );
};

export default World