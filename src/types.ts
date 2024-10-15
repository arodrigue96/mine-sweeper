type Cell = {
  hasMine: boolean;
  minesAround: number;
};

type Board = {
  cells: Cell[][];
};
