let asteroids = [];
let player;

console.log(asteroids);

function setup() {
	createCanvas(600, 400);
	player = new Ship(width / 2, height / 2);
	for (let i = 0; i < 10; i++) {
		let randX = random(width);
		let randY = random(height);
		let randSize = random(15, 80);
		asteroids.push(new Asteroid(randX, randY, randSize));
	}
}

function draw() {
	background(0);
	player.control();
	player.update();
	player.draw();
	for (let i = 0; i < asteroids.length; i++) {
		asteroids[i].draw();
		asteroids[i].update();
		for (let j = i + 1; j < asteroids.length; j++) {
			if (asteroids[i].checkCollision(asteroids[j])) {
				asteroids[i].xSpeed *= -1;
				asteroids[i].ySpeed *= -1;
				asteroids[j].xSpeed *= -1;
				asteroids[j].ySpeed *= -1;
			}
		}
	}
}
