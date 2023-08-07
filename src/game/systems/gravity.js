import Matter from 'matter-js';

const g = Matter.Vector.create(0, 0.001);

const Gravity = (entities, { time }) => {
	let engine = entities.physics.engine
	let player = entities.player.body

	Matter.Body.applyForce( player, player.position, g)
	Matter.Engine.update(engine, time.delta)
	
	return entities;
};

export default Gravity;