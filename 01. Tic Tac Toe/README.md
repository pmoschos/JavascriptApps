
# 🎮 Tic Tac Toe Game with HTML, CSS, and JavaScript 🕹️

Welcome to your **Tic Tac Toe** game! This guide will walk you through the basics of the game structure, styling, and JavaScript logic, providing a fun way to get familiar with front-end development.

## 🖼️ Screenshot

![image](https://github.com/user-attachments/assets/236d30da-999f-4068-9f47-6221db82462d)

## 🚀 Getting Started

This Tic Tac Toe game is built using basic **HTML**, **CSS**, and **JavaScript**. It’s a great beginner project to understand DOM manipulation, event handling, and dynamic styling.

### 1. 🌐 **HTML Structure**

The game layout is created using a simple HTML table inside a Bootstrap-styled jumbotron. Each cell of the table represents a game square.

```html
<table class="centered-table">
    <tr>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td></td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td></td>
    </tr>
</table>
```

### 2. 🎨 **CSS for Styling**

The game styling is controlled via **CSS** to create a clean, fun interface. The grid uses a responsive design, with hover effects on game squares and visually appealing buttons.

```css
td {
    height: 150px;
    width: 150px;
    text-align: center;
    border: 5px solid #344771;
    font-size: 100px;
    cursor: pointer;
    background-color: #cef3c4;
}
td:hover {
    background-color: #88d4ca;
}
```

The CSS file (`tic_tac_toe.css`) controls the layout, colors, and hover effects. You can easily tweak it to fit your design preferences!

### 3. ⚡ **JavaScript Logic**

The game logic is handled in the **JavaScript** file (`tic_tac_toe.js`). It controls player turns, updates the game board, checks for a winner, and handles restarting the game.

Here’s how a simple function to check the winner looks:

```javascript
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
```

### 4. 🎮 **Playing the Game**

Each player clicks on a square to mark it with an "X" or "O". The game checks for a winner after each move. If a player wins, the score is updated, and the board resets.

You can restart the game at any time by clicking the **Restart!** button.

## Complete Code Example

### HTML (`tic_tac_toe.html`)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tic Tac Toe</title>
    <link rel="stylesheet" href="tic_tac_toe.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
</head>
<body>
    <div class="container">
        <div class="jumbotron">
            <h1>Welcome to Tic Tac Toe</h1>
            <p>Let's have some fun!</p>
            <button id="restartButton" type="button" class="btn btn-primary btn-lg">Restart!</button>
        </div>

        <div class="scoreboard">
            <p><strong>X Wins:</strong> <span id="x-wins">0</span></p>
            <p><strong>O Wins:</strong> <span id="o-wins">0</span></p>
        </div>

        <table class="centered-table">
            <tr><td></td><td></td><td></td></tr>
            <tr><td></td><td></td><td></td></tr>
            <tr><td></td><td></td><td></td></tr>
        </table>
    </div>

    <script src="tic_tac_toe.js"></script>
</body>
</html>
```

### CSS (`tic_tac_toe.css`)

```css
body {
    background-color: #cef3c4;
    font-family: Arial, sans-serif;
}

.jumbotron {
    background-color: #88d4ca;
    color: #4c3642;
    text-align: center;
}

.centered-table {
    margin-left: auto;
    margin-right: auto;
    border-collapse: collapse;
}

td {
    height: 150px;
    width: 150px;
    text-align: center;
    border: 5px solid #344771;
    font-size: 100px;
    cursor: pointer;
    color: #344771;
    background-color: #cef3c4;
}

td:hover {
    background-color: #88d4ca;
}

button {
    background-color: #344771;
    border-color: #59709c;
}

button:hover {
    background-color: #59709c;
    border-color: #344771;
}

.scoreboard {
    text-align: center;
    margin-bottom: 20px;
}

.scoreboard p {
    font-size: 24px;
    color: #4c3642;
}
```

### JavaScript (`tic_tac_toe.js`)

```javascript
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
```

---

## 📢 Stay Updated

Be sure to ⭐ this repository to stay updated with new examples and enhancements!

## 📄 License

🔐 This project is protected under the [MIT License](https://mit-license.org/).

## Contact 📧

Panagiotis Moschos - pan.moschos86@gmail.com

---

<h1 align=center>Happy Coding 👨‍💻</h1>

<p align="center">
  Made with ❤️ by Panagiotis Moschos (https://github.com/pmoschos)
</p>
