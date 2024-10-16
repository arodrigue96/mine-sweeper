import generateMine from "../Cell/generateMine.js";

const createBoard = (dimension: number): Board => {
  const board: Board = { cells: [] };

  for (let row = 0; row < dimension; row++) {
    board.cells.push([]);
    for (let column = 0; column < dimension; column++) {
      board.cells[row].push({
        hasMine: generateMine(),
        minesAroundTotal: 0,
      });
    }
  }

  return board;
};
