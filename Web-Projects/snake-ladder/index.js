const board = document.getElementById('board');
const rollDiceBtn = document.getElementById('rollDice');
const diceResultSpan = document.getElementById('diceResult');
const playerPositionSpan = document.getElementById('playerPosition');

let playerPosition = 1;

const snakes = {
    16: 6,
    47: 26,
    49: 11,
    56: 53,
    62: 19,
    64: 60,
    87: 24,
    93: 73,
    95: 75,
    98: 78
};

const ladders = {
    1: 38,
    4: 14,
    9: 31,
    21: 42,
    28: 84,
    36: 44,
    51: 67,
    71: 91,
    80: 100
};

function createBoard() {
    for (let i = 100; i >= 1; i--) {
        const cell = document.createElement('div');
        cell.textContent = i;
        board.appendChild(cell);
    }
}

function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

function movePlayer(dice) {
    playerPosition += dice;
    if (playerPosition > 100) {
        playerPosition = 100;
    }

    if (snakes[playerPosition]) {
        playerPosition = snakes[playerPosition];
    } else if (ladders[playerPosition]) {
        playerPosition = ladders[playerPosition];
    }

    diceResultSpan.textContent = dice;
    playerPositionSpan.textContent = playerPosition;

    if (playerPosition === 100) {
        alert('Congratulations! You won!');
        resetGame();
    }
}

function resetGame() {
    playerPosition = 1;
    playerPositionSpan.textContent = playerPosition;
    diceResultSpan.textContent = 0;
}

rollDiceBtn.addEventListener('click', () => {
    const dice = rollDice();
    movePlayer(dice);
});

createBoard();
