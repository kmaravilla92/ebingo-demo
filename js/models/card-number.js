import { Helpers } from '../services/helpers.js';

export class CardNumber {
    number  = null;
    matched = false;

    init(column = 1) {
        this.number = Helpers.generateNumberByColumn(column);
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