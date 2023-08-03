//import * as THREE from "three";
import Matter from 'matter-js';
import { all } from "../utils";

const g = Matter.Vector.create(0, -0.08);

const Gravity = entities => {
	const gravityEntities = all(entities, e => e.gravity && e.physics);

	gravityEntities.forEach(e => {
		e.physics.forces.add(e.gravity.isVector ? e.gravity : g);
	});

	return entities;
};

export default Gravity;