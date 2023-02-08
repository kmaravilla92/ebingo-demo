import {
    MAX_CARD_COLUMNS,
    MAX_CARD_ROWS
} from '../config.js';

import { CardNumber } from './card-number.js';

export class Card {
    constructor() {
        this.cells = [];
    }

    init() {
        this.initCells();
        return this;
    }

    initCells() {
        const rows = [];

        while (rows.length < MAX_CARD_ROWS) {
            const cols = [];

            while (cols.length < MAX_CARD_COLUMNS) {
                const cardNumber = new CardNumber();
                cardNumber.init(cols.length);

                const numberExists = cols.find(card => {
                    card.getNumber() === cardNumber
                }) === undefined;

                if (numberExists) {
                    cols.push(cardNumber);
                }
            }

            rows.push(cols);
        }

        this.cells = rows;
        
        return this;
    }
}