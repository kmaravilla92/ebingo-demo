import { MAX_EXTRA_BALL_COUNT } from '../config.js';
import { Ball } from '../models/ball.js';

export class ExtraBallManager {
    constructor(Game) {
        this.Game = Game;

        this.mainBalls  = [];
        this.balls      = [];
    }

    init(mainBalls) {
        this.mainBalls = this.Game.BallManager.getBalls();

        this.drawExtraBalls();
        this.checkMatches();
    }

    drawExtraBalls() {
        this.balls = [];

        while (this.balls.length < MAX_EXTRA_BALL_COUNT) {
            const ball = (new Ball).init();
            this.balls.push(ball);
        }

        return this.balls;
    }

    checkMatches() {
        this.balls = this.balls.map(ball => {
            const ballMatches = this.mainBalls.find(
                mainBall => mainBall.getNumber() === ball.getNumber()
            ) !== undefined;

            ball.setMatched(ballMatches);
            return ball;
        });

        console.log(this.balls);
    }
}