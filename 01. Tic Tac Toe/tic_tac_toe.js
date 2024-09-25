// Restart Game Button
var restart = document.querySelector("#restartButton");

// Grabs all the squares
var squares = document.querySelectorAll("td");

// Score variables
var xWins = 0;
var oWins = 0;

// Elements to display the scores
var xWinDisplay = document.getElementById("x-wins");
var oWinDisplay = document.getElementById("o-wins");

// Clear all the squares
function clearBoard() {
    for (var i = 0; i < squares.length; i++) {
        squares[i].textContent = "";
    }
}

// Check for winner
function checkWinner() {
    var winningCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (var i = 0; i < winningCombos.length; i++) {
        var [a, b, c] = winningCombos[i];
        if (squares[a].textContent !== "" && 
            squares[a].textContent === squares[b].textContent && 
            squares[a].textContent === squares[c].textContent) {
            return squares[a].textContent;
        }
    }
    return null;
}

// Function to handle game end
function gameEnd(winner) {
    if (winner === 'X') {
        xWins++;
        xWinDisplay.textContent = xWins;
        alert("X Wins!");
    } else if (winner === 'O') {
        oWins++;
        oWinDisplay.textContent = oWins;
        alert("O Wins!");
    }
    clearBoard();
}

// Check the square marker
function changeMarker() {
    if (this.textContent === '') {
        this.textContent = currentPlayer;
        var winner = checkWinner();
        if (winner) {
            gameEnd(winner);
        } else {
            currentPlayer = (currentPlayer === 'X') ? 'O' : 'X'; // Toggle player
        }
    }
}

// Add event listeners to all squares
for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", changeMarker);
}

// Restart button listener
restart.addEventListener("click", clearBoard);

// Set initial player to X
var currentPlayer = 'X';
