const planets = document.querySelectorAll('.orbiting-circle');

const orbitRadius = [50, 65, 80, 95, 120, 145, 170, 190];

const speed = [0.01, 0.0075, 0.00625, 0.005, 0.00375, 0.0025, 0.002, 0.0015];

const center = { x: 200, y: 200 };

function animate() {

  planets.forEach((planet, index) => {
    const angle = speed[index] * Date.now() / 100;
    const x = center.x + orbitRadius[index] * Math.cos(angle) - planet.offsetWidth / 2;
    const y = center.y + orbitRadius[index] * Math.sin(angle) - planet.offsetHeight / 2;
    planet.style.transform = `translate(${x}px, ${y}px)`;
  });

  requestAnimationFrame(animate);

}

animate();






btn_learn_more.addEventListener('click', function () {

})