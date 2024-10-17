import { createBoard } from "../board";

const dimension = 5;
const board = createBoard(dimension);

describe("Given the createBoard function", () => {
  describe("When it receives 5", () => {
    test("Then it should return a board with 5 rows", () => {
      const expectedRows = 5;
      const rows = board.length;

      expect(rows).toBe(expectedRows);
    });
  });

  describe("When it receives 5", () => {
    test("Then it should return a board where the first row has 5 cells.", () => {
      const expectedCells = 5;

      expect(board.at(0)?.length).toBe(expectedCells);
    });
  });

  describe("When it is called", () => {
    test("Then it should return a board where each of its cell has not mines around", () => {
      const expectedMinesAroundTotal = 0;

      const allCellsHaveZeroMines = board.every((row) =>
        row.every((cell) => cell.minesAroundTotal === expectedMinesAroundTotal)
      );

      expect(allCellsHaveZeroMines).toBeTruthy();
    });
  });
});
