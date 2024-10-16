import generateMine from "./generateMine.js";

const createBoard = (numberOfCellsAndRows: number): Board => {
  const board: Board = { cells: [] };

  for (let row = 0; row < numberOfCellsAndRows; row++) {
    board.cells.push([]);
    for (let column = 0; column < numberOfCellsAndRows; column++) {
      board.cells[row].push({
        hasMine: generateMine(),
        minesAround: 0,
      });
    }
  }

  return board;
};
