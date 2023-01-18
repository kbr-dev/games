import { useContext } from "react";
import {tictactoeContext} from "../mobx";

export const useTictactoeStore = () => useContext(tictactoeContext);