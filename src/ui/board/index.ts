import { createBoard } from "../../board/index.js";

export const createMainContainer = (): HTMLDivElement => {
  const mainContainer = document.createElement("div");
  mainContainer.classList.add("main-container");

  mainContainer.appendChild(createBoardContainer());

  return mainContainer;
};

export const createBoardContainer = (): HTMLDivElement => {
  const board = createBoard(5);
  const cells: HTMLDivElement[] = [];

  const boardContainer = document.createElement("div");
  boardContainer.classList.add("board");

  for (let rowPosition = 0; rowPosition < board.length; rowPosition++) {
    const row = document.createElement("div");
    row.classList.add("cell");

    for (
      let columnPosition = 0;
      columnPosition < board.length;
      columnPosition++
    ) {
      const column = document.createElement("div");
      column.classList.add("cell");

      cells.push(column);
      row.appendChild(column);

      boardContainer.appendChild(row);
    }
  }

  return boardContainer;
};
