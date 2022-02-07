import MoveState from "./enumeration";

/* TYPE Obstacle */
export default class Obstacle {


    constructor (x, y, widht, height) {
        this.x = x;
        this.y = y;
        this.widht = widht;
        this.height = height;
        this.moving = null;
    }

    draw(context) {
        context.fillStyle = "rgb(0, 0, 0)";
        context.fillRect(this.x, this.y, this.widht, this.height);
    }

    moveLeft() {
        this.shiftX = -10;
        this.moving = MoveState.LEFT;
    }

    moveRight() {
        this.shiftX = +10;
        this.moving = MoveState.RIGHT;
    }

    moveUp() {
        this.shiftY = -10;
        this.moving = MoveState.UP;
    }

    moveDown() {
        this.shiftY = +10;
        this.moving = MoveState.DOWN;
    }

    move(box) {              // déplace sans sortir des limites de *box*
        if (this.moving === MoveState.LEFT) {
            this.x = Math.max(0, this.x + this.shiftX);
        }
        if (this.moving === MoveState.RIGHT) {
            this.x = Math.min(box.width - this.widht, this.x + this.shiftX);
        }
        if (this.moving === MoveState.UP) {
            this.y = Math.max(0, this.y + this.shiftY);
        }
        if (this.moving === MoveState.DOWN) {
            this.y = Math.min(box.height - this.height, this.y + this.shiftY);
        }
    }

    stopMoving() {
        this.moving = MoveState.NONE;
    }
}