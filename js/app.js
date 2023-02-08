import { Game } from './services/game.js';

const app = () => {
    const game = new Game
    game.run();
}

app();