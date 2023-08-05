import Matter from 'matter-js';
import { all } from "../utils";

const g = Matter.Vector.create(0, -0.08);
let Render = Matter.Render;

const Gravity = (entities, args) => {
	let engine = entities.physics.engine
	let world = entities.physics.world
	//console.log(entities, args)
    Render.run(	world.render )

	/* const gravityEntities = all(entities, e => e.gravity && e.physics);

	gravityEntities.forEach(e => {
		e.physics.forces.add(e.gravity.isVector ? e.gravity : g);
	}); */

	return entities;
};

export default Gravity;