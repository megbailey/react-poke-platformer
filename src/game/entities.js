import React from 'react';
import Matter from 'matter-js';
import World from "./world.js";

import Player from "./components/Player.jsx";
import Floor from "./components/Floor.jsx";
import Platform from "./components/Platform.jsx";

import mdPlatform from '../assets/img/tileset_desert_md.png';
import lgPlatform from '../assets/img/tileset_desert_lg.png';
import sprite1 from '../assets/img/trainer-sprite-1.png';

let Engine = Matter.Engine;
let Bodies = Matter.Bodies;
//let Common = Matter.Common;
//let Vertices = Matter.Vertices;


export default async ( state ) => {

	const floorHeight = 30;


	const floor = Bodies.rectangle(state.width/2, state.height, state.width, floorHeight, {
		isStatic: true,
	});  
	const wallRight = Bodies.rectangle( state.width, state.height/2, 50, state.height, {
		isStatic: true,
	});
	const wallLeft = Bodies.rectangle(-25, state.height/2, 50,  state.height, {
		isStatic: true,
	});
 	const ceiling = Bodies.rectangle(state.width/2, 0, state.width, 5, {
		isStatic: true,
	});
	const player = Bodies.rectangle(state.width/2, 0, 16, 16, {
		restitution: 0.3, // bounce
	}); 


	const platformProps = {
		md_platform_1 : {
			src: mdPlatform,
			left: .1, 
			top: .55
		},
		md_platform_2 : {
			src: mdPlatform,
			left: .2, 
			top: .2
		}
	}
		
	const md_platform_1_body = Bodies.rectangle(
		state.width * platformProps.md_platform_1.left, 
		state.height * platformProps.md_platform_1.top + floorHeight, 50, 15, {
		isStatic: true,
	});
	const md_platform_2_body = Bodies.rectangle(
		state.width * platformProps.md_platform_2.left, 
		state.height * platformProps.md_platform_2.top + floorHeight, 50, 17, {
		fillStyle: '#FFFF',
		isStatic: true,
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
			md_platform_1_body,
			md_platform_2_body
		]
	})


	//-- Notice that each entity has a unique id (required)
	//-- and a renderer property (optional). If no renderer
	//-- is supplied with the entity - it won't get displayed.
	//sprite: { x: 200,  y: 200, renderer: <Player />}
	const entities = {
		physics: { 
			engine: engine, 
			world: world 
		},
		floor: { 
			body: floor, 
			color: '#FF7300',
			renderer: <Floor /> 
		},
		 md_platform_1:{ 
			body: md_platform_1_body, 
			src: mdPlatform, 
			border: true,
			renderer: <Platform />
		},
		md_platform_2:{ 
			body: md_platform_2_body,
			src: mdPlatform, 
			border: true,
			renderer: <Platform />
		},
		/*lg_platform_1:{ 
			  body: bodies, 
			src: lgPlatform, 
			border: true,
			style: {
				top: '45%',
				left: '50%', 
			},
			renderer: <Platform />
		},*/ 
		player: { 
			body: player, 
			src: sprite1, 
			renderer: <Player /> 
		},
		wallLeft: { body: wallLeft },
		wallRight: { body: wallRight },
		ceiling: { body: ceiling },
		
	}

	return entities;
};