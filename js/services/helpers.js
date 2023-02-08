import {
    MAX_CARD_NUMBER,
    MAX_CARD_COLUMNS
} from '../config.js';

export class Helpers {
    static getRandomIntInclusive(min = 0, max = 0) {
        min = Math.ceil(min);
        max = Math.floor(max);
        
        return Math.floor(
            Math.random() * (max - min + 1) + min
        );
    }

    static generateNumberByColumn(column = 1) {
        column++;

        let maxCardMultiplier = MAX_CARD_NUMBER / MAX_CARD_COLUMNS;
            maxCardMultiplier = Math.floor(maxCardMultiplier);

        const maxNum = (column * maxCardMultiplier);
        const minNum = (maxNum - maxCardMultiplier) + 1;

        return Helpers.getRandomIntInclusive(minNum, maxNum);
    }
}