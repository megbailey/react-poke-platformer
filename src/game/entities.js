import * as THREE from 'three';
import Camera from "./components/camera";
import Player from "./components/Player";

//import { clear } from "./utils/three";
import * as OIMO from "oimo";
//import MountainBackground from './components/Background';


const scene = new THREE.Scene();
const camera = Camera();
const world = new OIMO.World({ 
    timestep: 1 / 60, 
    iterations: 8, 
    broadphase: 2,
    worldscale: 1,
    random: true,
    info: false,
    gravity: [0, -9.8 ,0] 
});

export default async () => {
	//clear(scene);
	world.clear();
	// Create your main camera
	var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

	
	const ambient = new THREE.AmbientLight(0xffffff, 1);
	const sunlight = new THREE.DirectionalLight(0xffffff, 0.95);
    sunlight.position.set(50, 50, 50);
	scene.add(ambient);
    scene.add(sunlight);

	//const background =  { x: 0,  y: 0, renderer: <MountainBackground /> }

   

	//Load background texture
	//const loader = new THREE.TextureLoader();
	
	const sprite = { x: 200,  y: 200, renderer: <Player /> }

	

	const entities = {
		scene,
		//mountainA,
		camera,
		world,
		sprite,
	}

	return entities;
};