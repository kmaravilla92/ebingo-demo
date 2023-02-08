import {
    MIN_CARD_COUNT,
    MAX_CARD_COUNT,
    CARD_RESET_COUNT
} from '../config.js';
import { Counter } from './counter.js';
import { Card } from '../models/card.js';

export class CardManager {
    constructor() {
        this.cards      = [];
        this.Counter    = new Counter(MIN_CARD_COUNT, MAX_CARD_COUNT);
    }

    generateCard(count = 1) {
        const card = new Card();
        card.init();
        return card;
    }

    addCard() {
        if (!this.canAdd()) {
            return false;
        }

        const card = this.generateCard();
        this.cards.push(card);
        
        return card;
    }

    removeCard() {
        if (!this.canRemove()) {
            return false;
        }

        this.cards.pop();
        
        return this.cards;
    }

    resetCards(count = CARD_RESET_COUNT) {
        const currentCardCount = this.cards.length;

        for (let j = 0; j < count; j++) {
            this.cards = [];

            for (let i = 0; i < currentCardCount; i++) {
                this.addCard();
            }
        }

        return this.cards;
    }

    canRemove() {
        return this.cards.length > MIN_CARD_COUNT;
    }

    canAdd() {
        return this.cards.length < MAX_CARD_COUNT;
    }

    checkMatches(balls) {
        const ballsNumbers = balls.map(ball => ball.getNumber());
        
        this.cards = this.cards.map((card, cardIndex) => {

            card.cells.map(col => {
                return col.map(cardNumber => {
                    const number    = cardNumber.getNumber();
                    const isMatched = ballsNumbers.find(ballNumber => ballNumber === number) !== undefined;

                    cardNumber.setMatched(isMatched);

                    return cardNumber;
                });
            });
            
            return card;
        });

        return this.cards;
    }
}