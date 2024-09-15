import React from 'react';
import Matter from 'matter-js';
import World from "./world.js";

import Player from "./components/Player.jsx";
import Platform from "./components/Platform.jsx";
import { ForestBackground } from './components/Background.jsx';
import Floor from "./components/Floor.jsx";

//import mdPlatform from '../assets/img/tileset_desert_md.png';
//import lgPlatform from '../assets/img/tileset_desert_lg.png';
import floorTile from './assets/img/nature-paltformer-floor-tile.png';
import mdPlatform from './assets/img/nature-paltformer-tile-md.png';
import lgPlatform from './assets/img/nature-paltformer-tile-lg.png';
import sprite1 from './assets/img/trainer-sprite-1.png';

let Engine = Matter.Engine;
let Bodies = Matter.Bodies;
let Composite = Matter.Composite;
//let Common = Matter.Common;
//let Vertices = Matter.Vertices;


export default async (renderState) => {
	const {
		gameWidth, 
		gameHeight,
		debug = false
	  } = renderState

	  //console.log(renderState)
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

	//console.log(`floor render w${gameWidth/2} h${gameHeight-platforms.lg.height/2}`)
	const floor = Bodies.rectangle( 
		gameWidth/2, 
		gameHeight-38,
		gameWidth,
		platforms.lg.height, 
		{ isStatic: true }
	);  
	const wallRight = Bodies.rectangle(
		gameWidth - 25, // subtract half of object width to increase volume of object in bounds
		gameHeight/2, 
		50, 
		gameHeight, 
		{ isStatic: true }
	);
	const wallLeft = Bodies.rectangle(
		25, // start at least half of object width to to increase volume of object in bounds
		gameHeight/2, 
		50,  
		gameHeight, 
		{ isStatic: true }
	);
 	const ceiling = Bodies.rectangle(
		gameWidth/2, 
		5, // start at half of width so all of the object is in bounds
		gameWidth, 
		10, 
		{ isStatic: true }
	);
	const player = Bodies.rectangle(
		gameWidth/2, // spawn in center
		gameHeight/4, // spawn near top
		16, 
		16,
		{ restitution: 0.3, /* bounce */ }
	); 

		
	const md_platform_1_body = Bodies.rectangle(
		gameWidth * 0.2, 
		gameHeight * 0.6,
		platforms.md.width, platforms.md.height, 
		{ isStatic: true }
	);
	const md_platform_2_body = Bodies.rectangle(
		gameWidth * 0.3, 
		gameHeight * 0.5,
		platforms.md.width, platforms.md.height, 
		{ isStatic: true }
	);

	const md_platform_3_body = Bodies.rectangle(
		gameWidth * 0.6, 
		gameHeight * 0.5, 
		platforms.md.width, platforms.md.height, 
		{ isStatic: true }
	);

	const md_platform_4_body = Bodies.rectangle(
		gameWidth * 0.7, 
		gameHeight * 0.6, 
		platforms.md.width, platforms.md.height, 
		{ isStatic: true }
	);

	/* const lg_platform_1_body = Bodies.rectangle(
		gameWidth * 0.6 - platforms.lg.width/2, 
		gameHeight * 0.55 + floorHeight - platforms.lg.height/2, 
		platforms.lg.width, platforms.lg.height, {
		isStatic: true,
	}); */


	let engine = Engine.create({});
	World({
		...renderState,
		engine: engine,
		entities: [ 
			floor,
			wallRight,
			wallLeft,
			ceiling,
			player,
			md_platform_1_body,
			md_platform_2_body,
			md_platform_3_body,
			md_platform_4_body
		]
	})

	//-- Notice that each entity has a unique id (required)
	//-- and a renderer property (optional). If no renderer
	//-- is supplied with the entity - it won't get displayed.
	//sprite: { x: 200,  y: 200, renderer: <Player />}
	const entities = {
		world: { 
			...renderState,
			engine: engine, 
			renderer: debug !== true ? <ForestBackground /> : null
		},
		floor: { 
			body: floor, 
			src: floorTile,
			border: true,
			renderer: debug !== true ? <Floor /> : null
		},
		md_platform_1:{ 
			body: md_platform_1_body,
			...platforms.md,
			//border: true,
			renderer: debug !== true ? <Platform /> : null
		},
		md_platform_2:{ 
			body: md_platform_2_body,
			...platforms.md,
			//border: true,
			renderer: debug !== true ? <Platform /> : null
		},
		md_platform_3:{ 
			body: md_platform_3_body,
			...platforms.md,
			//border: true,
			renderer: debug !== true ? <Platform /> : null
		},
		md_platform_4:{ 
			body: md_platform_4_body,
			...platforms.md,
			//border: true,
			renderer: debug !== true ? <Platform /> : null
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
			renderer: debug !== true ? <Player /> : null
		},
		wallLeft: { body: wallLeft },
		wallRight: { body: wallRight },
		ceiling: { body: ceiling },
		
	}

	return entities;
};