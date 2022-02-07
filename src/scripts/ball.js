
// la source de l'image à utiliser pour la balle
import ballImgSrc from './assets/images/ball.png';

/* TYPE Ball */
export default class Ball {

    static BALL_WIDTH = 48;

    constructor(x, y, deltaX, deltaY) {
        this.x = x;
        this.y = y;
        this.deltaX = deltaX;
        this.deltaY = deltaY;
        this.image = this.createImage()
    }

    draw(context) {
        context.drawImage (this.image, this.x, this.y);
    }

    move(canvas) {
        let xP = this.x + this.deltaX;
        let yP = this.y + this.deltaY;

        let cy = canvas.height;
        let cx = canvas.width;

        if (cx < xP || xP < 0) {
            this.deltaX = -this.deltaX;
        }
        if (cy < yP || yP < 0) {
            this.deltaY = -this.deltaY;
        }

        this.x = this.x + this.deltaX;
        this.y = this.y + this.deltaY;
    }

    /* crée l'objet Image à utiliser pour dessiner cette balle */
    createImage() {
        const ballImg = new Image();
        ballImg.width = Ball.BALL_WIDTH;
        ballImg.src = ballImgSrc;
        return ballImg;
    }

    collisionWith (obstacle) {
        let x_a1 = this.x;
        let y_a1 = this.y;

        let x_a1Prime = obstacle.x;
        let y_a1Prime = obstacle.y;

        const x_p1 = Math.max(x_a1, x_a1Prime);
        const y_p1 = Math.max(y_a1, y_a1Prime);

        let x_a2 = x_a1 + Ball.BALL_WIDTH;
        let y_a2 = y_a1 + Ball.BALL_WIDTH;

        let x_a2Prime = x_a1Prime + obstacle.widht;
        let y_a2Prime = y_a1Prime + obstacle.height;

        const x_p2 = Math.min(x_a2, x_a2Prime);
        const y_p2 = Math.min(y_a2, y_a2Prime);

        return (x_p1 < x_p2) && (y_p1 < y_p2);
    }

}
