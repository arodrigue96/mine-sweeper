import { createBoard } from "../board";

describe("Given the createBoard function", () => {
  describe("When it receives 5", () => {
    test("Then it should return a board with 5 rows and 5 columns", () => {
      const dimension = 5;
      const expectedBoardDimension = 5;

      const board = createBoard(dimension);
      const boardDimension = board.length;

      expect(boardDimension).toBe(expectedBoardDimension);
    });
  });

  describe("When it receives 5", () => {
    test("Then it should return the first row has 5 cells.", () => {
      const dimension = 5;
      const expectedBoardRows = 5;

      const rows = createBoard(dimension);
      expect(rows.at(0)?.length).toBe(expectedBoardRows);
    });
  });

  describe("When createBoard function is called", () => {
    test("Then it should return a board where each of its cell has not mines around", () => {
      const dimension = 5;
      const expectedMinesAroundTotal = 0;

      const board = createBoard(dimension);
      const allCellsHaveZeroMines = board.every((row) =>
        row.every((cell) => cell.minesAroundTotal === expectedMinesAroundTotal)
      );

      expect(allCellsHaveZeroMines).toBeTruthy;
    });
  });
});
