import {
    MIN_BET_MULTIPLIER,
    MAX_BET_MULTIPLIER
} from '../config.js';

import { Counter } from './counter.js';

export class BetManager {
    constructor(Game) {
        this.Game = Game;
        this.Counter = new Counter(MIN_BET_MULTIPLIER, MAX_BET_MULTIPLIER);
    }

    getCurrentBetMultiplier() {
        return this.Counter.counter;
    }

    getTotalBet(multipler) {
        return multipler * this.Counter.counter;
    }
}