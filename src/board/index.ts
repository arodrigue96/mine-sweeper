import { Board } from "./types.js";

export const hasMine = (): boolean => {
  const probability = 0.4;

  return Math.random() < probability;
};

export const createBoard = (dimension: number): Board => {
  const board: Board = [];

  for (let rowPosition = 0; rowPosition < dimension; rowPosition++) {
    board.push([]);

    for (let cellPosition = 0; cellPosition < dimension; cellPosition++) {
      board[rowPosition].push({
        hasMine: hasMine(),
        minesAroundTotal: 0,
      });
    }
  }

  return board;
};
