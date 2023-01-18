import { createContext } from "react";

import { TicTacToeStore } from "./tictactoeStore";

export const tictactoeContext = createContext({
  tictactoeStore: new TicTacToeStore(),
});
