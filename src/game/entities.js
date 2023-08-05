import Player from "./components/Player";
import Matter from 'matter-js';
import World from "./world";
import Floor from "./components/Floor"

let Engine = Matter.Engine;
let Runner = Matter.Runner;
let Render = Matter.Render;
let Bodies = Matter.Bodies;


//import MountainBackground from './components/Background';


export default async () => {

	const floor = Bodies.rectangle(0, 128, 1700, 20, {
		isStatic: true,
		render: {
		  fillStyle: 'blue'
		}
	  });
  
	  const player = Bodies.rectangle(400, 20, 20, 20, {
		restitution: 0.8, // bounce
		render: {
		  fillStyle: 'black'
		}
	  }); 

	let engine = Engine.create({});

	let world = World({
			engine: engine,
			width: 825,
			height: 1000,
			entities: [ 
				player,
				floor,
			]
		})
	
	/* const world = { 
		x: 0, y: 0, 
		width: 825, height: 1000, 
		entities: [ 
			player,
			floor,
		], 
		renderer: c 
	} */

	const entities = {
		physics: { engine: engine, world: world },
		floor: { body: floor,  renderer: <Floor /> },
		player: { body: player, renderer: <Player />},
		
	}

	return entities;
};