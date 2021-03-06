//gameBoard //module
//displayController //module
//gameFlow

//player //factory

const DisplayController = ((doc) => {
    const boardSquares = document.querySelectorAll(".board");
    const makeBoard = (selector, message) => {
        if(!!doc && "querySelector" in doc) {
            document.querySelector(selector).textContent = message;
        }
    };
    boardSquares.forEach((square) => 
        square.addEventListener("click", (e) => {
            console.log((e.target.dataset.index));
            GameBoard.board.splice(e.target.dataset.index, 1, "x");
            GameBoard.drawBoard();
            //GameBoard.updateBoard(e.target.dataset.index, "x");
        })
    );
    return { makeBoard };
})(document);

const GameBoard = (() => {
    const board = ['','','','','','','','',''];
    const drawBoard = () => {
        for (let i=0; i < board.length; i++) {
            DisplayController.makeBoard(`[data-index='${i}']`,`${board[i]}`);
        }
    };
    const updateBoard = (index, symbol) => {
        DisplayController.makeBoard(`[data-index='${index}`, symbol);
    }

    return { board, drawBoard, updateBoard };

})();

const Player = (name, symbol) => {
    return { name, symbol };
}

const Game = (() => {
    const player1 = Player("Iain", "X");
    const player2 = Player("Bob", "O");
    //GameBoard.drawBoard();
})();