import { createBoard } from "../../board";

export const createMainContainer = (): HTMLDivElement => {
  const mainContainer = document.createElement("div");
  mainContainer.classList.add("main-container");

  document.body.appendChild(mainContainer);

  return mainContainer;
};
