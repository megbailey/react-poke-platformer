import * as THREE from "three";

export default () => {
    // https://threejs.org/docs/#api/en/cameras/OrthographicCamera
	const camera = new THREE.OrthographicCamera(
        window.innerWidth  / - 2, window.innerWidth  / 2, window.innerHeight / 2, window.innerHeight / - 2, 1, 1000 
    )
    return camera
};