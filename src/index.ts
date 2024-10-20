import { createBoard } from "./board/index.js";
import calculateAdjacentMinesTotal from "./board/calculateAdjacentMinesTotal.js";

const boardDimension = 3;
createBoard(boardDimension);
console.log(calculateAdjacentMinesTotal(createBoard(boardDimension), 0, 1));
