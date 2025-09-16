/**
 * Tic Tac Toe Showdown
 * A simple 3x3 Tic Tac Toe game (human vs. random computer).
 * X = crossed swords (x.png), O = shield (o.png).
 * Canvas draws the animated winning line. Sound effects play for actions.
 */

let activePlayer = 'X';       // Track whose turn it is
let selectedSquares = [];     // Stores played moves (e.g. "0X", "1O")
let gameOver = false;         // Prevents moves after win
const body = document.getElementById('body');

/**
 * Place the current player's symbol (X or O) on the clicked square.
 */
function placeXOrO(squareNumber) {
    if (gameOver) return false; // Block moves after game end
    if (!selectedSquares.some(el => el.includes(squareNumber))) {
        const select = document.getElementById(squareNumber);

        // Set symbol image depending on player
        if (activePlayer === 'X') {
            select.style.backgroundImage = 'url("images/x.png")';
        } else {
            select.style.backgroundImage = 'url("images/o.png")';
        }

        // Enforce image sizing (safety)
        select.style.backgroundSize = 'contain';
        select.style.backgroundPosition = 'center';
        select.style.backgroundRepeat  = 'no-repeat';

        selectedSquares.push(squareNumber + activePlayer);
        checkWinConditions();

        // Switch player
        activePlayer = (activePlayer === 'X') ? 'O' : 'X';

        // Play sound
        audio('./media/place.wav');

        // Computer's turn if O
        if (activePlayer === 'O') {
            disableClick();
            setTimeout(function () { computersTurn(); }, 1000);
        }
        return true;
    }
    return false;
}

/**
 * Computer picks a random empty square and plays.
 */
function computersTurn() {
    let success = false;
    let pickASquare;
    while (!success) {
        pickASquare = String(Math.floor(Math.random() * 9));
        if (placeXOrO(pickASquare)) {
            success = true;
        }
    }
}

/**
 * Check for win/tie conditions after each move.
 */
function checkWinConditions() {
    if (arrayIncludes('0X', '1X', '2X')) { drawWinLine(50, 100, 558, 100); }
    else if (arrayIncludes('3X', '4X', '5X')) { drawWinLine(50, 304, 558, 304); }
    else if (arrayIncludes('6X', '7X', '8X')) { drawWinLine(50, 508, 558, 508); }
    else if (arrayIncludes('0X', '3X', '6X')) { drawWinLine(100, 50, 100, 558); }
    else if (arrayIncludes('1X', '4X', '7X')) { drawWinLine(304, 50, 304, 558); }
    else if (arrayIncludes('2X', '5X', '8X')) { drawWinLine(508, 50, 508, 558); }
    else if (arrayIncludes('0X', '4X', '8X')) { drawWinLine(100, 100, 520, 520); }
    else if (arrayIncludes('2X', '4X', '6X')) { drawWinLine(100, 520, 520, 100); }

    else if (arrayIncludes('0O', '1O', '2O')) { drawWinLine(50, 100, 558, 100); }
    else if (arrayIncludes('3O', '4O', '5O')) { drawWinLine(50, 304, 558, 304); }
    else if (arrayIncludes('6O', '7O', '8O')) { drawWinLine(50, 508, 558, 508); }
    else if (arrayIncludes('0O', '3O', '6O')) { drawWinLine(100, 50, 100, 558); }
    else if (arrayIncludes('1O', '4O', '7O')) { drawWinLine(304, 50, 304, 558); }
    else if (arrayIncludes('2O', '5O', '8O')) { drawWinLine(508, 50, 508, 558); }
    else if (arrayIncludes('0O', '4O', '8O')) { drawWinLine(100, 100, 520, 520); }
    else if (arrayIncludes('2O', '4O', '6O')) { drawWinLine(100, 520, 520, 100); }

    else if (selectedSquares.length >= 9) {
        audio('./media/tie.wav');
        setTimeout(resetGame, 500);
    }
}

/**
 * Utility: check if 3 values exist in selectedSquares.
 */
function arrayIncludes(squareA, squareB, squareC) {
    const a = selectedSquares.includes(squareA);
    const b = selectedSquares.includes(squareB);
    const c = selectedSquares.includes(squareC);
    return a && b && c;
}

/** Temporarily disable user clicks. */
function disableClick() {
    body.style.pointerEvents = 'none';
    setTimeout(() => { body.style.pointerEvents = 'auto'; }, 1000);
}

/** Play audio by path. */
function audio(audioURL) {
    let audio = new Audio(audioURL);
    audio.play();
}

/**
 * Draw animated win line using canvas.
 */
function drawWinLine(coordX1, coordY1, coordX2, coordY2) {
    const canvas = document.getElementById('win-lines');
    const c = canvas.getContext('2d');
    let x1 = coordX1, y1 = coordY1, x2 = coordX2, y2 = coordY2, x = x1, y = y1;
    gameOver = true; // prevent more moves

    function animateLineDrawing() {
        const animationLoop = requestAnimationFrame(animateLineDrawing);
        c.clearRect(0, 0, 608, 608);
        c.beginPath();
        c.moveTo(x1, y1);
        c.lineTo(x, y);
        c.lineWidth = 10;
        c.strokeStyle = 'rgba(191, 0, 255, 0.8)';
        c.stroke();
        if (x1 <= x2 && y1 <= y2) {
            if (x < x2) { x += 10; }
            if (y < y2) { y += 10; }
            if (x >= x2 && y >= y2) { cancelAnimationFrame(animationLoop); }
        }
        if (x1 <= x2 && y1 >= y2) {
            if (x < x2) { x += 10; }
            if (y > y2) { y -= 10; }
            if (x >= x2 && y <= y2) { cancelAnimationFrame(animationLoop); }
        }
    }

    function clear() {
        const animationLoop = requestAnimationFrame(clear);
        c.clearRect(0, 0, 608, 608);
        cancelAnimationFrame(animationLoop);
    }

    disableClick();
    audio('./media/winGame.wav');
    animateLineDrawing();
    setTimeout(() => { clear(); resetGame(); }, 1000);
}

/** Reset the board and start a new round. */
function resetGame() {
    for (let i = 0; i < 9; i++) {
        let square = document.getElementById(String(i));
        square.style.backgroundImage = '';
    }
    selectedSquares = [];
    activePlayer = 'X';
    gameOver = false;
}

