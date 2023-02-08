import {
    WINNING_PATTERNS,
    WINNING_PATTERNS_KEYS
} from '../config.js';
import { CardNumber } from '../models/card-number.js';
import { Card } from '../models/card.js';

// class CoverAllPattern {
//     constructor() {
//         this.patternConfig = WINNING_PATTERNS.COVER_ALL
//     }
// }

export class PatternManager {
    constructor(Game) {
        this.Game   = Game;
        this.Better = Game.Better;
        this.cards  = Game.CardManager.cards.slice();
    }

    init() {
        // const winnings  = this.getTotalWinnings(this.cards);
        // console.log(winnings);
    }

    calculatePatternWinnings() {
        
    }

    getTotalWinnings(cards) {

        const cardPattern = cells
            .slice()
            .flat()
            .map(cardNumber => cardNumber.isMatched() ? 1 : 0)
            .toString();

        for (let pattern of Object.entries(WINNING_PATTERNS)) {
            const winningPattern = pattern
                .slice()
                .flat()
                .toString();

            if (cardPattern === winningPattern) {
                match = true;
            }
        }

        const winnings = 0;

        cards.forEach(card => {
            
        });

        return { winningCards };
    }

    getTestCard() {
        const card = new Card();
        card.init();
        card.cells = card.cells.map(cols => {
            return cols.map(cardNumber => {
                cardNumber.setMatched(true);
                return cardNumber;
            });
        });

        return card;
    }
}