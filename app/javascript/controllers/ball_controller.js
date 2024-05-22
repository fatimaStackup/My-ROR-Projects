import { Controller } from "@hotwired/stimulus";
import * as THREE from 'three';

export default class extends Controller {
    connect() {
        // Extracting data attributes from the element
        const x = parseFloat(this.element.dataset.ballX);
        const y = parseFloat(this.element.dataset.ballY);
        const z = parseFloat(this.element.dataset.ballZ);

        console.log(`Ball position: x=${x}, y=${y}, z=${z}`);

        // Setting up the Three.js scene
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(
            75,
            window.innerWidth / window.innerHeight,
            0.1,
            1000
        );

        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(this.renderer.domElement);

        this.geometry = new THREE.SphereGeometry();
        // this.geometry = new THREE.BoxGeometry(); 
        this.material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });

        this.ball = new THREE.Mesh(this.geometry, this.material);
        this.ball.position.set(x, y, z);
        this.scene.add(this.ball);

        this.camera.position.z = 5;
        this.animate();
    }

    animate() {
        requestAnimationFrame(this.animate.bind(this));

        this.ball.rotation.x += 0.01;
        this.ball.rotation.y += 0.01;
        this.ball.rotation.z += 0.01;

        this.renderer.render(this.scene, this.camera);
    }
}
