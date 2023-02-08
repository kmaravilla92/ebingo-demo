import { MAX_CARD_NUMBER } from '../config.js';
import { Helpers } from '../services/helpers.js';

export class Ball {
    number  = null;
    matched = false;

    init() {
        this.number = Helpers.getRandomIntInclusive(1, MAX_CARD_NUMBER);
        return this;
    }

    setNumber(number) {
        this.number = number;
        return this;
    }

    getNumber() {
        return Number(this.number);
    }

    setMatched(matched) {
        this.matched = matched;
        return this;
    }

    isMatched() {
        return this.matched;
    }
}