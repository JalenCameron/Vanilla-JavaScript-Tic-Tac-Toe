// Storing the game status in a variable
const displayStatus = document.querySelector('.game-status');

// Creating a variable to be used to check if the game is over
let gameActive = true;

// Creating a variable to store the current player (who will use X)
let currentPlayer = "X";

// Starting with an empty game state in order to track which cells are empty and which will be taken
let gameState = ["", "", "", "", "", "", "", "", ""];

// Creating variables to hold dynamic messages related to the game
const winningMessage = () => `Congratulations, Player {currentPlayer} has won!`;
const tieMessage = () => `Unfortunately the game has ended in a draw`;
const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;

// Setting the initial message to let the players know who's turn it is
displayStatus.innerHTML = currentPlayerTurn();
function handleCellPlayed() {

};

function handlePlayerChange() {

};

function handleResults() {

};

function handleCellClick(clickedCellEvent) {
  // Creating a variable so I don't have to type clickedCellEvent every time
  const clickedCell = clickedCellEvent.target;

  /* Grabbing the 'data-cell-index' to identify which cell was clicked on the grid. Then returning that value as an integer using parseint (because it's being returned as a string value currently) */
  const clickedCellIndex = parseInt(clickedCell.getAttribute('data-cell-index'));

  // Now creating an if statement to check if the game has already been played or if it's been paused
  if (gameState[clickedCellIndex] !== "" || !gameActive ) {
    return;
  }

  // As long as those conditions aren't met the gameplay can continue
  handleCellPlayed(clickedCell, clickedCellIndex);
  handleResults();
};

function handleRestartGame() {

};

// Adding event listeners to the cells and restart button for functionality
document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', handleCellClick));
document.querySelector('.game-restart').addEventListener('click', handleRestartGame);