import React from 'react';
import Matter from 'matter-js';
import World from "./world.js";

import Player from "./components/Player.jsx";
import Floor from "./components/Floor.jsx";
import Platform from "./components/Platform.jsx";

//import mdPlatform from '../assets/img/tileset_desert_md.png';
//import lgPlatform from '../assets/img/tileset_desert_lg.png';
import floorTile from '../assets/img/nature-paltformer-floor-tile.png';
import mdPlatform from '../assets/img/nature-paltformer-tile-md.png';
import lgPlatform from '../assets/img/nature-paltformer-tile-lg.png';
import sprite1 from '../assets/img/trainer-sprite-1.png';

let Engine = Matter.Engine;
let Bodies = Matter.Bodies;
let Composite = Matter.Composite;
//let Common = Matter.Common;
//let Vertices = Matter.Vertices;


export default async ( state ) => {

	const floorHeight = 48;

	const floor = Bodies.rectangle(state.width/2, state.height, state.width, floorHeight, {
		isStatic: true,
	});  
	const wallRight = Bodies.rectangle( state.width, state.height/2, 50, state.height, {
		isStatic: true,
	});
	const wallLeft = Bodies.rectangle(-25, state.height/2, 50,  state.height, {
		isStatic: true,
	});
 	const ceiling = Bodies.rectangle(state.width/2, -10, state.width, 5, {
		isStatic: true,
	});
	const player = Bodies.rectangle(state.width/2, 0, 16, 16, {
		restitution: 0.3, // bounce
	}); 

	const platforms = {
		md: {
			src: mdPlatform,
			width: 48,
			height: 16
		},
		lg: {
			src: lgPlatform,
			width: 48,
			height: 48,
		}
		
	}
		
	const md_platform_1_body = Bodies.rectangle(
		state.width * 0.1, 
		state.height * .55 + floorHeight, 
		platforms.md.width, platforms.md.height, {
		isStatic: true,
	});
	const md_platform_2_body = Bodies.rectangle(
		state.width * 0.2, 
		state.height * 0.2 + floorHeight, 
		platforms.md.width, platforms.md.height, {
		isStatic: true,
	});

	/* const lg_platform_1_body = Bodies.rectangle(
		state.width * 0.6 - platforms.lg.width/2, 
		state.height * 0.55 + floorHeight - platforms.lg.height/2, 
		platforms.lg.width, platforms.lg.height, {
		isStatic: true,
	}); */


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
			md_platform_2_body,
			//lg_platform_1_body
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
			src: floorTile,
			renderer: <Floor /> 
		},
		md_platform_1:{ 
			body: md_platform_1_body, 
			...platforms.md,
			//border: true,
			renderer: <Platform />
		},
		md_platform_2:{ 
			body: md_platform_2_body,
			...platforms.md,
			//border: true,
			renderer: <Platform />
		},
		/* lg_platform_1:{ 
			body: lg_platform_1_body, 
			...platforms.lg,
			//border: true,
			renderer: <Platform />
		}, */
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