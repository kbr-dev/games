import "./tictactoe.css";
import { useTictactoeStore } from "../mobx/stores";
import { observer } from "mobx-react";

type TileProps = {
  value: string;
  onSquareClick: any;
};

const Tile = (props: TileProps) => {
  let tileClassName = `tile ${props.value}`;
  return <div className={tileClassName} onClick={props.onSquareClick}></div>;
};
type BoardProps = {
  store: any;
};
const getPlayer = (player: string) =>{
  if(player === "X") return "Blue";
  if(player === "O") return "Pink";
}
const Board = observer((props: BoardProps) => {
  function handleClick(tileNumber: number) {
    props.store.updateBoardState(tileNumber);
  }
  let winner = props.store.winner;
  let className = "info-text"
  if (winner === "X") {
    className += " blue";
  } else if (winner === "O") {
    className += " pink";
  }
  let infoText = winner?.length
    ? winner !== "Draw"
      ? `Winner is ${getPlayer(winner)}`
      : `The match is draw`
    : `${getPlayer(props.store.currentPlayer)}'s move`;

  let tiles = [];
  for (let i = 0; i < 9; i++) {
    tiles.push(
      <Tile
        value={props.store.boardState[i]}
        onSquareClick={() => handleClick(i)}
      />
    );
  }
  return (
    <>
      <div className={className}>{infoText}</div>
      <div className="tiles-container">{tiles}</div>
    </>
  );
});

const TicTacToe = () => {
  const { tictactoeStore } = useTictactoeStore();

  return (
    <div className="tic-tac-toe-game">
      <div className="ttt-game-board">
        <Board store={tictactoeStore} />
      </div>
    </div>
  );
};

export default observer(TicTacToe);
