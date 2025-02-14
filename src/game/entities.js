import React from 'react';
import Matter from 'matter-js';

import World from "./world.js";
import store from './store.js'
import { consume } from './reducers.js';
import GlobalPlayerBodyStore from './matter-body-store.js';
import Player from "./components/Player.jsx";
import Platform from "./components/Platform.jsx";
import { ForestBackground } from './components/Background.jsx';
import Floor from "./components/Floor.jsx";
import Item from './components/Item.jsx';

import floorTile from './assets/img/platforms/nature-paltformer-floor-tile.png';
import mdPlatform from './assets/img/platforms/nature-paltformer-tile-md.png';
import lgPlatform from './assets/img/platforms/nature-paltformer-tile-lg.png';
import sprite1 from './assets/img/trainers/trainer-sprite-1.png';
import pokeball from './assets/img/pokeball.svg';

import { getRandomInteger } from './utils/index.js';

let Engine = Matter.Engine;
let Bodies = Matter.Bodies;
let { initialize } = GlobalPlayerBodyStore

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
const consumabes = {
	pokeball: {
		src: pokeball,
		width: 16,
		height: 16,
	}
}

export default async (renderState) => {
	const {
		gameWindowWidth, 
		gameWindowHeight,
		debug = false
	  } = renderState

	const floor = Bodies.rectangle( 
		gameWindowWidth/2, 
		gameWindowHeight /* 15px padding 2 + 3px border x 2*/ -36  /* move the floor up on gameboy mode */  - (gameWindowHeight <= 457 ? 18 : 0),
		gameWindowWidth + 6,
		platforms.lg.height, 
		{ 
			isStatic: true,
			label: 'Floor'
		}
	);  
	const wallRight = Bodies.rectangle(
		gameWindowWidth - ( gameWindowWidth/4 ), // set right wall at quarter of game size to start scrolling there
		gameWindowHeight/2, 
		50, 
		gameWindowHeight, 
		{ 
			isStatic: true,
			label: 'Right Wall',
			friction: 0
		}
	);
	const wallLeft = Bodies.rectangle(
		-25, // set left wall at the very left so the object is in not in view at all
		gameWindowHeight/2, 
		50,  
		gameWindowHeight, 
		{ 
			isStatic: true,
			label: 'Left Wall',
			friction: 0
		}
	);
 	const ceiling = Bodies.rectangle(
		gameWindowWidth/2, 
		-15, // start - at half of width so the object is in not in view
		gameWindowWidth, 
		30, 
		{ 
			isStatic: true,
			label: 'Ceiling'
		}
	);
	const player = Bodies.rectangle(
		gameWindowWidth/2, // spawn in center
		gameWindowHeight * .1, /* spawn near top which is relatively safe from colliding on load  */
		16, 
		16,
		{ 
			label: 'Player',
			restitution: 0.3, /* bounce */ 
			inertia: Infinity /* prevents the body from rotation on collision */
		}
	); 
	
	/* 
	* Using a global store because player needed to be manipulated
	* outside of the game engine
	*/
	initialize(player)

	// Left boundary is the wall width with some padding
	// Height boundary is celing height and floor each with a little padding
	const p0_to_1000 = generateBodies(45, 1000, 40, gameWindowHeight-80)
	const p1000_to_2000 = generateBodies(1001, 2000, 40, gameWindowHeight-80)
	const p2000_to_3000 = generateBodies(2001, 3000, 40, gameWindowHeight-80)
	const p3000_to_4000 = generateBodies(3001, 4000, 40, gameWindowHeight-80)
	const p4000_to5000  = generateBodies(4001, 5000, 40, gameWindowHeight-80)
	const p5000_to_6000 = generateBodies(5001, 6000, 40, gameWindowHeight-80)
	const p6000_to_7000 = generateBodies(6001, 7000, 40, gameWindowHeight-80)
	const p7000_to_7900  = generateBodies(7001, 7900, 40, gameWindowHeight-80)

	let generatedPlatformBodies = [
		...Object.values(p0_to_1000.mediumPlatforms),
		...Object.values(p1000_to_2000.mediumPlatforms),
		...Object.values(p2000_to_3000.mediumPlatforms),
		...Object.values(p3000_to_4000.mediumPlatforms),
		...Object.values(p4000_to5000.mediumPlatforms),
		...Object.values(p5000_to_6000.mediumPlatforms),
		...Object.values(p6000_to_7000.mediumPlatforms),
		...Object.values(p7000_to_7900.mediumPlatforms),
	]

	let generatedPokeballBodies = [
		...Object.values(p0_to_1000.pokeballs),
		...Object.values(p1000_to_2000.pokeballs),
		...Object.values(p2000_to_3000.pokeballs),
		...Object.values(p3000_to_4000.pokeballs),
		...Object.values(p4000_to5000.pokeballs),
		...Object.values(p5000_to_6000.pokeballs),
		...Object.values(p6000_to_7000.pokeballs),
		...Object.values(p7000_to_7900.pokeballs),
	]

	
	let generatedPlatforms = { }
	generatedPlatformBodies.forEach(( body )=> {
		generatedPlatforms[body.label] = {
			body: body,
			...platforms.md,
			border: true,
			renderer: debug !== true ? <Platform /> : null,
		}
	})

	let generatedPokeballs = { }
	generatedPokeballBodies.forEach(( body )=> {
		generatedPokeballs[body.label] = {
			body: body, 
			...consumabes.pokeball,
			border: true,
			renderer: debug !== true ? <Item /> : null
		}
	})

	let engine = Engine.create({});

	// Add event callback anytime a collsion active.
	// Check if the collision is between player and consumable object. 
	Matter.Events.on(engine, 'collisionActive', function(event) {
		event.pairs.forEach(( collidedPair ) => {
			const bodyA = collidedPair.bodyA
			const bodyB = collidedPair.bodyB

			let consumable = null;
			if ( bodyB.label.includes('pokeball') ) {
				consumable = bodyB;
			} else if ( bodyA.label.includes('pokeball') ) {
				consumable = bodyA;
			} else {
				return;
			}

			Matter.Composite.remove(engine.world, consumable);
			store.dispatch( consume(consumable.label) )

		})
	})

	World({
		...renderState,
		engine: engine,
		width: gameWindowWidth,
		height: gameWindowHeight,
		entities: [ 
			floor,
			wallRight,
			wallLeft,
			ceiling,
			player,
			...generatedPlatformBodies,
			...generatedPokeballBodies
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
		...generatedPlatforms,
		...generatedPokeballs
	}

	return entities;
};

const generateBodies = (startXPosition, endXPosition, startYPosition, endYPosition) => {
	let generated = { 
		mediumPlatforms: { },
		pokeballs: { }
	}
	let numOfEntities = getRandomInteger(5,10)
	for ( let i = 0; i < numOfEntities; i ++ ) {
		const entityYPosition = getRandomInteger(startYPosition, endYPosition)
		const entityXPosition = getRandomInteger(startXPosition, endXPosition)
		
		generated['mediumPlatforms'][`medium-platform-${startXPosition}-${i}`] =
			Bodies.rectangle(
				entityXPosition, 
				entityYPosition,
				platforms.md.width, platforms.md.height, 
				{ 
					isStatic: true,
					label: `medium-platform-${startXPosition}-${i}`
				}
			);
		
		const itemEntityYPosition = entityYPosition - 16
		generated['pokeballs'][`pokeball-${startXPosition}-${i}`] = 
			Bodies.rectangle(
				entityXPosition + 8, 
				itemEntityYPosition,
				consumabes.pokeball.width, consumabes.pokeball.height, 
				{ 
					isStatic: true,
					label: `pokeball-${startXPosition}-${i}`
				}
			);

	}

	return generated;
}