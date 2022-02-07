import Obstacle from './obstacle';
import AnimationWithObstacle from './animationWithObstacle';

import './assets/style/style-balles.css';


/* setup */
const init = () => {
    const canvas = document.getElementById("terrain");
    const obstacle = new Obstacle(100, 100, 100, 100);
    /* commenter les 2 lignes suivantes après la Ex1 Q2
    const ball = new Ball(50,50);
    document.getElementById("stopStartBall").addEventListener("click", () => ball.draw(canvas.getContext('2d'))  );*/

    /* décommenter les deux lignes suivantes à partir la question Ex1 Q4*/
    const animation = new AnimationWithObstacle(canvas, obstacle);
    document.getElementById("addBall").addEventListener("click", () => animation.addBall()  );
    document.getElementById("stopStartBall").addEventListener("click", () => animation.startAndStop()  );
    window.addEventListener('keydown', animation.keyDownActionHandler.bind(animation));
}

window.addEventListener("DOMContentLoaded",init);

//
console.log('le bundle a été généré');
