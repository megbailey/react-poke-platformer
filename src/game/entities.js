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
import { getRandomInteger } from './utils.js';

let Engine = Matter.Engine;
let Bodies = Matter.Bodies;
//let Common = Matter.Common;
//let Vertices = Matter.Vertices;

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

export default async (renderState) => {
	const {
		gameWidth, 
		gameHeight,
		debug = false
	  } = renderState

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
	
	let generatedBodies = [
		// Width boundary is wall width (25) with some padding
		// Height boundary is celing (10) and floor (48) each with a little padding
		...generatePlatforms(40, 1000, 30, gameHeight-60),
		...generatePlatforms(1001, 2000, 30, gameHeight-60),
		...generatePlatforms(2001, 3000, 30, gameHeight-60),
		...generatePlatforms(3001, 4000, 30, gameHeight-60),
		...generatePlatforms(4001, 5000, 30, gameHeight-60),
		...generatePlatforms(5001, 6000, 30, gameHeight-60),
		...generatePlatforms(6001, 7000, 30, gameHeight-60),
		...generatePlatforms(7001, 7900, 30, gameHeight-60),
	]
	
	let generatedPlatforms = { }
	generatedBodies.forEach(( body, index )=> {
		generatedPlatforms[`platform-${index}`] = {
			...platforms.md,
			renderer: debug !== true ? <Platform /> : null,
			body: body
		}
	})

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
			...generatedBodies
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
		player: { 
			body: player, 
			src: sprite1, 
			renderer: debug !== true ? <Player /> : null
		},
		wallLeft: { body: wallLeft },
		wallRight: { body: wallRight },
		ceiling: { body: ceiling },
		...generatedPlatforms
		
	}

	return entities;
};

const generatePlatforms = (startXPosition, endXPosition, startYPosition, endYPosition) => {
	let generatedBodies = [ ]
	let numOfEntities = getRandomInteger(5,10)
	for ( let i = 0; i < numOfEntities; i ++ ) {
		// only left boundary is needed and its wall width (25) with some padding
		const entityXPosition = getRandomInteger(startXPosition, endXPosition)
		// boundary is celing (10) and floor (48) each with a little padding
		const entityYPosition = getRandomInteger(startYPosition, endYPosition)
		generatedBodies.push( Bodies.rectangle(
			entityXPosition, 
			entityYPosition,
			platforms.md.width, platforms.md.height, 
			{ isStatic: true }
		))
	}

	return generatedBodies;
}