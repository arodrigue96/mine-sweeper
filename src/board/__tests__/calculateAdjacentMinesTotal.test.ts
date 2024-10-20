import calculateAdjacentMinesTotal from "../calculateAdjacentMinesTotal";

describe("Given the calculateAdjacentMinesTotal function", () => {
  describe("When it receives a 2x2 board and there are no mines", () => {
    test("Then it should return 0 adjacent mines for the cell at (1,1)", () => {
      const board = [
        [
          { hasMine: false, minesAroundTotal: 0 },
          { hasMine: false, minesAroundTotal: 0 },
        ],
        [
          { hasMine: false, minesAroundTotal: 0 },
          { hasMine: false, minesAroundTotal: 0 },
        ],
      ];
      const expectedAdjacentMinesTotal = 0;

      const adjacentMinesTotal = calculateAdjacentMinesTotal(board, 1, 1);

      expect(adjacentMinesTotal).toBe(expectedAdjacentMinesTotal);
    });
  });

  describe("When it receives a 2x2 board and calculates the number of adjacent mines for the position (0,0)", () => {
    test("Then it should return 2 adjacent mines", () => {
      const board = [
        [
          { hasMine: false, minesAroundTotal: 0 },
          { hasMine: true, minesAroundTotal: 0 },
        ],
        [
          { hasMine: true, minesAroundTotal: 0 },
          { hasMine: false, minesAroundTotal: 0 },
        ],
      ];
      const expectedAdjacentMinesTotal = 2;

      const adjacentMinesTotal = calculateAdjacentMinesTotal(board, 0, 0);

      expect(adjacentMinesTotal).toBe(expectedAdjacentMinesTotal);
    });
  });
});
