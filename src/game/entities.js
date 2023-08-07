import Player from "./components/Player";
import Matter from 'matter-js';
import World from "./world";
import Floor from "./components/Floor"
import sprite1 from '../assets/img/trainer-sprite-1.png'


let Engine = Matter.Engine;
let Bodies = Matter.Bodies;


export default async () => {

	 const floor = Bodies.rectangle(0, 200, 825, 20, {
		isStatic: true, // does not update
	  }); 
  
	  const player = Bodies.rectangle(400, 0, 16, 16, {
		restitution: 0.8, // bounce
	  }); 

	let engine = Engine.create({});

	let world = World({
			engine: engine,
			entities: [ 
				floor,
				player,
			]
		})
	

	const entities = {
		physics: { engine: engine, world: world },
		floor: { body: floor,  renderer: <Floor /> },
		player: { body: player, src: sprite1, renderer: <Player /> },
		
	}

	return entities;
};