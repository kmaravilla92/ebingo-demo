import { MAX_BALL_COUNT } from '../config.js';
import { Ball } from '../models/ball.js';

export class BallManager {
    Game;
    
    balls = [];

    constructor(Game) {
        this.Game = Game;
    }

    getBalls() {
        return this.balls;
    }

    drawBalls() {
        this.balls = [];

        while (this.balls.length < MAX_BALL_COUNT) {
            const ball          = (new Ball).init();
            const ballNumber    = ball.getNumber();
            const ballNotExists    = this.balls.find(
                currentBall => currentBall.getNumber() === ballNumber
            ) === undefined;

            if (ballNotExists) {
                this.balls.push(ball);
            }
        }

        return this;
    }
}