class Asteroid extends Sprite {
	constructor(x, y, size) {
		super(x, y, size);
		this.xSpeed = random(-0.5, 0.5);
		this.ySpeed = random(-0.5, 0.5);
	}
	draw() {
		stroke(255);
		noFill();
		circle(this.x, this.y, this.size);
	}
}
