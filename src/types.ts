type Cell = {
  hasMine: boolean;
  minesAroundTotal: number;
};

type Board = {
  cells: Cell[][];
};
