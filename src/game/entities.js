import Player from "./components/Player";
import Matter from 'matter-js';
import World from "./world";
import Floor from "./components/Floor"
import sprite1 from '../assets/img/trainer-sprite-1.png'
import { MAX_HEIGHT, MAX_WIDTH } from "./constants";


let Engine = Matter.Engine;
let Bodies = Matter.Bodies;


export default async () => {

	const floor = Bodies.rectangle(MAX_WIDTH/2, MAX_HEIGHT, MAX_WIDTH, 30 , { 
		isStatic: true 
	});  
	const wallRight = Bodies.rectangle(MAX_WIDTH, MAX_HEIGHT/2, 50, MAX_HEIGHT, { 
		isStatic: true,
	});
	const wallLeft = Bodies.rectangle(-25, MAX_HEIGHT/2, 50,  MAX_HEIGHT, {
		isStatic: true,
	});
 	const ceiling = Bodies.rectangle(0, 0, 50, 50, {
		isStatic: true,
	});
	const player = Bodies.rectangle(400, 0, 16, 16, {
		restitution: 0.8, // bounce
	}); 

	let engine = Engine.create({});

	let world = World({
		engine: engine,
		entities: [ 
			floor,
			wallRight,
			wallLeft,
			ceiling,
			player,
		]
	})


	//-- Notice that each entity has a unique id (required)
	//-- and a renderer property (optional). If no renderer
	//-- is supplied with the entity - it won't get displayed.
	//sprite: { x: 200,  y: 200, renderer: <Player />}
	const entities = {
		physics: { engine: engine, world: world },
		floor: { body: floor,  color: '#FF7300', renderer: <Floor /> },
		player: { body: player, src: sprite1, renderer: <Player /> },
		wallLeft: { body: wallLeft,  /* color: 'blue' */ },
		wallRight: { body: wallRight,  /* color: 'blue' */ },
		ceiling: { body: ceiling }


	}

	return entities;
};