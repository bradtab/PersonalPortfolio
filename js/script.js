document.addEventListener('DOMContentLoaded', (event) => {
    // Create the cursor elements
    const cursor = document.createElement('div');
    cursor.classList.add('custom-cursor');
    document.body.appendChild(cursor);

    const cursorFollower = document.createElement('div');
    cursorFollower.classList.add('custom-cursor-follower');
    document.body.appendChild(cursorFollower);

    // Function to update cursor position
    const updateCursorPosition = (e) => {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
        cursorFollower.style.left = `${e.clientX}px`;
        cursorFollower.style.top = `${e.clientY}px`;
    };

    // Add event listener for mouse movements
    document.addEventListener('mousemove', updateCursorPosition);

    // Add smooth scrolling for sidebar links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            // Remove active class from all links
            document.querySelectorAll('nav ul li a').forEach(link => {
                link.classList.remove('active');
            });

            // Add active class to the clicked link
            this.classList.add('active');

            // Smooth scroll to the target section
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Load the 3D model
    const container = document.getElementById('pc-setup-container');
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });

    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    const loader = new THREE.GLTFLoader();
    loader.load('assets/models/crt_computer_monitor.glb', (gltf) => {
        const pcSetup = gltf.scene;
        scene.add(pcSetup);
        pcSetup.scale.set(1, 1, 1); // Adjust scale if necessary
        pcSetup.position.set(0, 0, 0); // Adjust position if necessary

        // Create the text element
        const textElement = document.createElement('div');
        textElement.classList.add('monitor-text');
        textElement.innerText = "Hello! I'm Bradley Tabone, a computer science student with a passion for coding and problem-solving.";
        container.appendChild(textElement);

        // Position the text element on the monitor
        const monitorScreen = new THREE.Vector3();
        pcSetup.getObjectByName('MonitorScreen').getWorldPosition(monitorScreen);
        const monitorCoords = monitorScreen.project(camera);
        textElement.style.left = `${(monitorCoords.x + 1) * container.clientWidth / 2}px`;
        textElement.style.top = `${(-monitorCoords.y + 1) * container.clientHeight / 2}px`;
    }, undefined, (error) => {
        console.error(error);
    });

    camera.position.z = 5;

    const animate = () => {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
    };
    animate();
});
