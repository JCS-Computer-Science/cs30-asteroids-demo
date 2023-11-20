const SHIPSIZE = 25;
const ROTATE_SPEED = 0.1;
const ACCEL = 0.1;

class Ship extends Sprite {
	constructor(x, y) {
		super(x, y, SHIPSIZE);
		this.angle = 0;
	}
	control() {
		if (keyIsDown(LEFT_ARROW)) {
			this.angle += ROTATE_SPEED;
		}
		if (keyIsDown(RIGHT_ARROW)) {
			this.angle -= ROTATE_SPEED;
		}
		if (keyIsDown(UP_ARROW)) {
			let xAccel = -ACCEL * sin(this.angle);
			this.xSpeed += xAccel;
			let yAccel = -ACCEL * cos(this.angle);
			this.ySpeed += yAccel;
		}
	}
	draw() {
		stroke(255);
		noFill();

		push();

		translate(this.x, this.y);
		rotate(-this.angle);
		triangle(0, -20, 10, 10, -10, 10);

		pop();

		stroke(255, 0, 0);
		circle(this.x, this.y, this.size);
	}
}
