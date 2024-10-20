import { Board } from "./types";

const calculateAdjacentMinesTotal = (
  board: Board,
  currentRow: number,
  currentColumn: number
): number => {
  let adjacentMinesCount = 0;

  for (
    let adjacentRow = currentRow - 1;
    adjacentRow <= currentRow + 1;
    adjacentRow++
  ) {
    if (adjacentRow < 0 || adjacentRow >= board.length) {
      continue;
    }

    for (
      let adjacentColumn = currentColumn - 1;
      adjacentColumn <= currentColumn + 1;
      adjacentColumn++
    ) {
      if (adjacentColumn < 0 || adjacentColumn >= board.length) {
        continue;
      }
      if (currentRow === adjacentRow && currentColumn === adjacentColumn) {
        continue;
      }

      if (board[adjacentRow][adjacentColumn].hasMine) {
        adjacentMinesCount++;
      }
    }
  }

  return adjacentMinesCount;
};

export default calculateAdjacentMinesTotal;
