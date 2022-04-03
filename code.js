'use strict';

// Game initalization
const init = () => {
    console.log("Initializing Wordle");

    // Grab the BOARD element in the HTML
    const gameboard = document.querySelector("#board");

    // Build the board
    generateBoard(gameboard);
}

const generateBoard = (gameboard, rows = 6, columns = 5) => {
    for(let row = 0; row < rows; row++){
        const elmRow = document.createElement('ul');

        elmRow.setAttribute('data-row', row);

        for(let column = 0; column < columns; column++){
            const elmColumn = document.createElement('li');
            elmColumn.setAttribute('data-status', 'empty');
            elmColumn.setAttribute('data-animation', 'idle');
            elmColumn.textContent = '?';

            elmRow.appendChild(elmColumn);
        }

        gameboard.appendChild(elmRow);
    }
};




















// Once DOM loads, set up the game
document.addEventListener('DOMContentLoaded', init);

