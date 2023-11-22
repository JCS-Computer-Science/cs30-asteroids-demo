const LASER_SIZE = 5;
const LASER_SPEED = 2;

class Laser extends Sprite {
	constructor(x, y, angle) {
		super(x, y, LASER_SIZE);
		this.xSpeed = -LASER_SPEED * sin(angle);
		this.ySpeed = -LASER_SPEED * cos(angle);
	}
}
