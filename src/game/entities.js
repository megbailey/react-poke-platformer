import Player from "./components/Player";
import Matter from 'matter-js';
import World from "./World";

let Bodies = Matter.Bodies;

//import MountainBackground from './components/Background';


export default async () => {
	//world.clear();
	//const sprite = { x: 0,  y: 0, renderer: <Player /> }
	//const world = { x: 0, y: 0, renderer: <World/> }
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

	const entities = {
		//sprite: { x: 0,  y: 0, renderer: <Player /> },
		world: { 
			x: 0, y: 0, width: 825, height: 1000, 
			entities: [ 
				floor,
				player
			],
			renderer: <World /> 
		},
		
	}

	return entities;
};