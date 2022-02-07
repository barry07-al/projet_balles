import Ball from './ball';

/* TYPE Animation */
export default class Animation {


  constructor(canvas) {
    this.canvas = canvas;
    this.context = canvas.getContext("2d");
    this.ball = [];
    this.requete = null;
    this.moveAndDraw = this.moveAndDraw.bind(this);
  }

  alea = (a, b) => {
    const inter = b - a;
    const x = Math.floor(inter * Math.random());
    return a + x;
  }


  addBall() {
    let dx = this.alea(-5, 5);
    let dy = this.alea(-5, 5);
    let x = this.alea(0, this.canvas.width);
    let y = this.alea(0, this.canvas.height);
    if (dx !== 0 && dy !== 0) {
      this.ball.push(new Ball(x, y, dx, dy));
    } else {
      this.addBall() ;
    }
  }

  moveAndDraw() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ball.map(elt => elt.move(this.canvas));
    this.ball.map(elt => elt.draw(this.context));
    this.requete = window.requestAnimationFrame(this.moveAndDraw);
  } 


  /* start the animation or stop it if previously running */
  startAndStop() {
    if (this.requete === null) {
      this.moveAndDraw();
    } 
    else {
      window.cancelAnimationFrame(this.requete);
      this.requete = null;
    }
  }
}
