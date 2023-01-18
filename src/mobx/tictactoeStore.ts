import { action, computed, makeObservable, observable } from "mobx";

export class TicTacToeStore {
  public winningState: boolean = false;
  public player1: string = "X";
  public player2: string = "O";
  public currentPlayer: string = this.player1;
  public boardState: Array<string> = Array(9).fill("");
  constructor() {
    makeObservable(this, {
      winningState: observable,
      currentPlayer: observable,
      boardState: observable,
      winner: computed,
      updateBoardState: action,
    });
  }

  public updateBoardState(index: number) {
    if (!this.winningState && this.boardState[index] === "") {
      let modifiedBoardState = [...this.boardState];
      modifiedBoardState[index] = this.currentPlayer;
      this.boardState = modifiedBoardState;
      this.currentPlayer =
        this.currentPlayer === this.player1 ? this.player2 : this.player1;
    }
  }

  get winner() {
    const winningScenarios = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < winningScenarios.length; i++) {
      const [a, b, c] = winningScenarios[i];
      if (
        this.boardState[a] !== "" &&
        this.boardState[a] === this.boardState[b] &&
        this.boardState[a] === this.boardState[c]
      ) {
        this.winningState = true;
        return this.boardState[a];
      }
    }
    for(let index = 0; index < this.boardState.length; index++){
      if(this.boardState[index] === "") return null;
    }
    return "Draw";
  }
}
