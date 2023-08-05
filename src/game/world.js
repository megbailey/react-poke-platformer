import Matter from 'matter-js';

const World = ( props ) => {
  const { engine, entities = [], width, height, options } = props

    let Render = Matter.Render;
    let Bodies = Matter.Bodies;

    // https://brm.io/matter-js/docs/classes/Render.html
    let render = Render.create({
      //element: boxRef.current,
      engine: engine,
      //canvas: canvasRef.current,
      options: {
        ...options,
        width: width, 
        height: height,
        background: 'transparent',
        wireframes: false
      }
    });

   
    // only add matter entities if given some
    if ( entities.length > 0 ){
      Matter.World.add( engine.world, entities );
    } 

    //Runner.run(engine);
    //Render.run(render);

  return {
    engine,
    render
  }

  // the canvas Matter.js renders on
  /* return (
    <div
      ref={boxRef}
    >
      <canvas ref={canvasRef} />
    </div>
  ); */
};

export default World