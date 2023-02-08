export class DomManager {
    constructor(Game) {
        this.Game       = Game;
        this.Cards      = Game.CardManager;
        this.Balls      = Game.BallManager;
        this.ExtraBalls = Game.ExtraBallManager;
        this.Better     = Game.BetManager;
        this.Pattern    = Game.PatternManager;

        this.$cards         = document.querySelector('#cards');
        this.$addCard       = document.querySelector('#add-card');
        this.$removeCard    = document.querySelector('#remove-card');
        this.$changeCards   = document.querySelector('#change-cards');
        this.$balls         = document.querySelector('#balls');
        this.$play          = document.querySelector('#play');
        this.$bet           = document.querySelector('#bet');
        this.$increasebet   = document.querySelector('#increase-bet');
        this.$decreaseBet   = document.querySelector('#decrease-bet');
        this.$totalBet      = document.querySelector('#total-bet');
    }

    init() {
        this.bindEventListener();
    }

    bindEventListener() {
        this.$addCard.addEventListener('click', this.handleAddCardClick.bind(this));
        this.$removeCard.addEventListener('click', this.handleRemoveCardClick.bind(this));
        this.$changeCards.addEventListener('click', this.handleChangeCardsClick.bind(this));
        this.$play.addEventListener('click', this.handlePlayClick.bind(this));
        this.$increasebet.addEventListener('click', this.handleIncreaseBetClick.bind(this));
        this.$decreaseBet.addEventListener('click', this.handleDecreaseBetClick.bind(this));
    }

    addCard(card) {
        if (!card) {
            card  = this.Cards.addCard();
        }

        if (card) {
            const $card = this.generateCard(card);
            this.$cards.appendChild($card);
        }
    }

    removeCard() {
        const cardRemoved = this.Cards.canRemove();
        console.log({cardRemoved});
        if (cardRemoved) {
            this.Cards.removeCard();
            this.$cards.removeChild(this.$cards.lastChild);
            this.decreaseBet();
        }
    }

    changeCards() {
        this.Cards.resetCards();
        const cards = this.Cards.cards;

        this.$cards.innerHTML = '';

        cards.forEach(this.addCard.bind(this));
    }

    generateCard(card) {
        const $table    = document.createElement('table');
                $table.classList.add('card');
        const cols = card.cells.slice();

        while (cols.length) {
            const $tr = document.createElement('tr');
                    $tr.classList.add('card__row');
            const rows = cols.shift().slice();
                    
            while (rows.length) {
                const $td = document.createElement('td');
                        $td.classList.add('card__cell', 'card-cell');

                const cardNumber = rows.shift();

                if (cardNumber.isMatched()) {
                    $td.classList.add('card-cell--matched');
                }
                        
                const $content = document.createTextNode(cardNumber.getNumber());
                        $td.appendChild($content);

                $tr.appendChild($td);
            }

            $table.appendChild($tr);
        }

        return $table;
    }

    increaseBet() {
        this.$bet.innerHTML = this.Better.Counter.increase();
        this.$totalBet.innerHTML = this.Better.getTotalBet(this.Cards.cards.length);
    }

    decreaseBet() {
        this.$bet.innerHTML = this.Better.Counter.decrease();
        this.$totalBet.innerHTML = this.Better.getTotalBet(this.Cards.cards.length);
    }

    // Balls
    drawBalls() {
        this.$balls.innerHTML = '';

        const balls = this.Balls.drawBalls().getBalls();

        balls.forEach((ball) => {
            const $ball = document.createElement('div');
            $ball.classList.add('ball');

            const $content = document.createTextNode(ball.getNumber());
            $ball.appendChild($content);
            
            this.$balls.appendChild($ball);
        });
    }

    checkMatches() {
        const cards = this.Cards.checkMatches(
            this.Balls.getBalls()
        );
        
        cards.forEach((card, cardIndex) => {
            const $card     = this.$cards.children[cardIndex];
            const $newCard  = this.generateCard(card);
            
            $card.replaceWith($newCard);
        });

        this.Pattern.init();
        this.ExtraBalls.init();
    }

    handleAddCardClick(e) {
        e.preventDefault();
        this.addCard();
        this.increaseBet();
    }

    handleRemoveCardClick(e) {
        e.preventDefault();
        this.removeCard();
    }

    handleChangeCardsClick(e) {
        e.preventDefault();
        this.changeCards();
    }

    handlePlayClick(e) {
        e.preventDefault();
        this.drawBalls();
        this.checkMatches();
    }

    handleIncreaseBetClick(e) {
        e.preventDefault();
        this.increaseBet();
    }

    handleDecreaseBetClick(e) {
        e.preventDefault();
        this.decreaseBet();
    }
}