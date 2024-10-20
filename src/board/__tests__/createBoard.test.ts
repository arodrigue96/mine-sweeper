import { createBoard } from "../index";

const dimension = 5;

describe("Given the createBoard function", () => {
  describe("When it receives 5", () => {
    test("Then it should return a board with 5 rows and where the first row has 5 cells.", () => {
      const expectedRowsTotal = 5;
      const expectedCellsTotal = 5;

      const board = createBoard(dimension);

      expect(board.length).toBe(expectedRowsTotal);
      expect(board.at(0)?.length).toBe(expectedCellsTotal);
    });
  });

  describe("When it is called", () => {
    test("Then it should return a board where each of its cell has not mines around", () => {
      const expectedMinesAroundTotal = 0;

      const board = createBoard(dimension);
      const allCellsHaveZeroMines = board.every((row) =>
        row.every((cell) => cell.minesAroundTotal === expectedMinesAroundTotal)
      );

      expect(allCellsHaveZeroMines).toBeTruthy();
    });
  });
});
