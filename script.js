const gameBoardElement = document.getElementById('game-board');
const rollDiceButton = document.getElementById('roll-dice');
const resetGameButton = document.getElementById('reset-game');

let gameBoard = [];
let currentPlayerPosition = 0;
let diceRollResult = 0;

rollDiceButton.addEventListener('click', rollDice);
resetGameButton.addEventListener('click', resetGame);

function rollDice() {
    diceRollResult = Math.floor(Math.random() * 6) + 1;
    movePlayer(diceRollResult);
}

function movePlayer(steps) {
    currentPlayerPosition += steps;
    updateGameBoard();
}

function updateGameBoard() {
    // Update game board HTML
    gameBoardElement.innerHTML = '';
    for (let i = 0; i < 100; i++) {
        const cellElement = document.createElement('div');
        cellElement.className = 'game-cell';
        if (i === currentPlayerPosition) {
            cellElement.innerHTML = 'Player';
        }
        gameBoardElement.appendChild(cellElement);
    }
}

function resetGame() {
    currentPlayerPosition = 0;
    updateGameBoard();
}

// Initialize game board
for (let i = 0; i < 100; i++) {
    gameBoard.push(i);
}
updateGameBoard();