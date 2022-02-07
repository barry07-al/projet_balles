import Animation from "./animation";
import Obstacle from "./obstacle";

export default class AnimationWithObstacle extends Animation {

    constructor (canvas, obstacle) {
        super(canvas);
        this.obstacle = obstacle;
    }

    moveAndDraw() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.obstacle.move(this.canvas);
        this.obstacle.draw(this.context);
        this.ball.map((elt) => elt.move(this.canvas));
        this.ball = this.ball.filter(elt => !elt.collisionWith(this.obstacle));
        this.ball.map(elt => elt.draw(this.context));
        this.requete = window.requestAnimationFrame(this.moveAndDraw);
    }

    keyDownActionHandler(event) {
        switch (event.key) {
            case "ArrowLeft":
            case "Left":
                this.obstacle.moveLeft();
                break;
            case "ArrowRight":
            case "Right":
                this.obstacle.moveRight();
                break;
            case "ArrowUp":
            case "Up":
                this.obstacle.moveUp();
                break;
            case "ArrowDown":
            case "Down":
                this.obstacle.moveDown();
                break
            case "ArrowLeft":
            case "Left":
            case "ArrowRight":
            case "Right":
            case "ArrowDown":
            case "Down":
            case "ArrowUp":
            case "Up":
                this.obstacle.stopMoving();
                break;
            default: return;
        }
        event.preventDefault();
    }
}
