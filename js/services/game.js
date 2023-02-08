import { CardManager } from './card.js';
import { BetManager } from './bet.js';
import { BallManager } from './ball.js';
import { ExtraBallManager } from './extra-ball.js';
import { DomManager } from './dom.js';
import { PatternManager } from './pattern.js';

export class Game {
    constructor() {
        this.BetManager         = new BetManager(this);
        this.CardManager        = new CardManager(this);
        this.BallManager        = new BallManager(this);
        this.ExtraBallManager   = new ExtraBallManager(this);
        this.PatternManager     = new PatternManager(this);
        this.DomManager         = new DomManager(this);
    }

    run() {
        this.DomManager.init();
        this.DomManager.addCard();
    }
}