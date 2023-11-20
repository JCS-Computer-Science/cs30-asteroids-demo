class Asteroid {
	constructor(x, y, size) {
		this.x = x;
		this.y = y;
		this.size = size;
		this.xSpeed = random(-0.5, 0.5);
		this.ySpeed = random(-0.5, 0.5);
	}
	draw() {
		stroke(255);
		noFill();
		circle(this.x, this.y, this.size);
	}
	update() {
		this.x += this.xSpeed;
		this.y += this.ySpeed;
		if (this.x < 0) {
			this.x = width;
		}
		if (this.x > width) {
			this.x = 0;
		}
		if (this.y < 0) {
			this.y = height;
		}
		if (this.y > height) {
			this.y = 0;
		}
	}
	checkCollision(other) {
		let deltaX = this.x - other.x;
		let deltaY = this.y - other.y;
		let dist = sqrt(sq(deltaX) + sq(deltaY));

		if (dist < this.size / 2 + other.size / 2) {
			return true;
		} else {
			return false;
		}
	}
}
