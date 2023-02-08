export const CARD_RESET_COUNT      = 2;
export const MAX_BALL_COUNT        = 30;
export const MIN_CARD_COUNT        = 1;
export const MAX_CARD_COUNT        = 20;
export const MAX_CARD_ROWS         = 3;
export const MAX_CARD_COLUMNS      = 5;
export const MAX_CARD_CELLS        = MAX_CARD_ROWS * MAX_CARD_COLUMNS;
export const MAX_CARD_NUMBER       = 90;
export const MIN_BET_MULTIPLIER    = 1;
export const MAX_BET_MULTIPLIER    = 10;
export const MAX_EXTRA_BALL_COUNT  = 10;
export const WINNING_PATTERNS = {
    'COVER_ALL': {
        baseWin: 1500,
        pattern: [
            [1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1],
        ],
    },
    'TOWER': {
        baseWin: 750,
        pattern:[
            [1, 1, 1, 1, 1],
            [0, 1, 1, 1, 0],
            [1, 1, 1, 1, 1],
        ],
    },
    'PERIMETER': {
        baseWin: 500,
        pattern: [
            [1, 1, 1, 1, 1],
            [1, 0, 0, 0, 1],
            [1, 1, 1, 1, 1],
        ],
    },
    'GARDEN': {
        baseWin: 400,
        pattern: [
            [0, 1, 1, 1, 0],
            [1, 1, 1, 1, 1],
            [0, 1, 1, 1, 0],
        ],
    },
    'AIRPLANE': {
        baseWin: 200,
        pattern: [
            [1, 1, 1, 1, 1],
            [0, 0, 1, 0, 0],
            [1, 1, 1, 1, 1],
        ],
    },
    'DOUBLE_LINE_TOP': {
        baseWin: 100,
        pattern: [
            [1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1],
            [0, 0, 0, 0, 0],
        ],
    },
    'DOUBLE_LINE_BOTTOM': {
        baseWin: 100,
        pattern: [
            [0, 0, 0, 0, 0],
            [1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1],
        ],
    },
    'PYRAMID': {
        baseWin: 80,
        pattern: [
            [0, 0, 1, 0, 0],
            [0, 1, 1, 1, 0],
            [1, 1, 1, 1, 1],
        ],
    },
    'BOX': {
        baseWin: 40,
        pattern: [
            [0, 1, 1, 1, 0],
            [0, 1, 0, 1, 0],
            [0, 1, 1, 1, 0],
        ],
    },
    'CROSS': {
        baseWin: 40,
        pattern: [
            [0, 0, 1, 0, 0],
            [1, 1, 1, 1, 1],
            [0, 0, 1, 0, 0],
        ],
    },
    'TEE': {
        baseWin: 20,
        pattern: [
            [1, 1, 1, 1, 1],
            [0, 0, 1, 0, 0],
            [0, 0, 1, 0, 0],
        ],  
    },
    'VEE_UP': {
        baseWin: 10,
        pattern: [
            [1, 0, 0, 0, 1],
            [0, 1, 0, 1, 0],
            [0, 0, 1, 0, 0],
        ],
    },
    'VEE_DOWN': {
        baseWin: 10,
        pattern: [
            [1, 0, 0, 0, 1],
            [0, 1, 0, 1, 0],
            [0, 0, 1, 0, 0],
        ],
    },
    'ONE_LINE_TOP': {
        baseWin: 3,
        pattern: [
            [1, 1, 1, 1, 1],
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
        ],
    },
    'ONE_LINE_MID': {
        baseWin: 3,
        pattern: [
            [0, 0, 0, 0, 0],
            [1, 1, 1, 1, 1],
            [0, 0, 0, 0, 0],
        ],
    },
    'ONE_LINE_BOTTOM': {
        baseWin: 3,
        pattern: [
            [0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0],
            [1, 1, 1, 1, 1],
        ],
    },
}

export const WINNING_PATTERNS_KEYS = Object.keys(WINNING_PATTERNS);