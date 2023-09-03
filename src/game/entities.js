import React from 'react';
import Player from "./components/Player.jsx";
import Matter from 'matter-js';
import World from "./world.js";
import Floor from "./components/Floor.jsx";
import sprite1 from '../assets/img/trainer-sprite-1.png';
import { loadSVGSrc } from "./utils";

let Engine = Matter.Engine;
let Bodies = Matter.Bodies;
let Common = Matter.Common;
let Vertices = Matter.Vertices;
let Svg = Matter.Svg;


const select = function(root, selector) {
	return Array.prototype.slice.call(root.querySelectorAll(selector));
};


export default async ( state ) => {
	const floor = Bodies.rectangle(state.width/2, state.height, state.width, 30, {
		isStatic: true,
	});  
	const wallRight = Bodies.rectangle( state.width, state.height/2, 50, state.height, {
		isStatic: true,
	});
	const wallLeft = Bodies.rectangle(-25, state.height/2, 50,  state.height, {
		isStatic: true,
	});
 	const ceiling = Bodies.rectangle(0, 0, 50, 50, {
		isStatic: true,
	});
	const player = Bodies.rectangle(state.width/2, 0, 16, 16, {
		restitution: 0.8, // bounce
	}); 

	// provide concave decomposition support library
	//Common.setDecomp(require('poly-decomp'));
	
	//loadSVGSrc('../assets/svg/platform-1.svg')
	/* const bodies = [
		Matter.Bodies.rectangle(400, 210, 810, 60, {isStatic: true}),
		...[...document.querySelectorAll("SVG")].map(path => {
		  const body = Matter.Bodies.fromVertices(
			100, 80, Matter.Svg.pathToVertices(path), {}, true
		  );
		  Matter.Body.scale(body, 0.2, 0.2);
		  return body;
		})
	  ]; */

	let engine = Engine.create({});

	let world = World({
		engine: engine,
		entities: [ 
			floor,
			wallRight,
			wallLeft,
			ceiling,
			player,
			//...bodies
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
		wallLeft: { body: wallLeft },
		wallRight: { body: wallRight },
		ceiling: { body: ceiling },
		//text:{ /*  body: bodies, */ renderer: <SVG />  }


	}

	return entities;
};