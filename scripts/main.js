//gameBoard //module
//displayController //module
//gameFlow

//player //factory

const DisplayController = ((doc) => {
    const makeBoard = (selector, message) => {
        if(!!doc && "querySelector" in doc) {
            document.querySelector(selector).textContent = message;
        }
    };
    return { makeBoard };
})(document);

const GameBoard = (() => {
    const board = ['x','o','x','o','x','o','x','o','x'];
    const drawBoard = () => {
        for (let i=0; i < board.length; i++) {
            DisplayController.makeBoard(`[data-index='${i}']`,`${board[i]}`);
        }
    };
    return { board, drawBoard };
})();

const Player = (name, symbol) => {
    return { name, symbol };
}

const Game = (() => {
    const player1 = Player("Iain", "X");
    const player2 = Player("Bob", "O");
    GameBoard.drawBoard();
})();