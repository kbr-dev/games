import "./App.css";
import TicTacToe from "./tic-tac-toe";

const App = () => {
  return (
    <div className="games-app">
      <div className="title">
        <h1>Tic tac toe</h1>
        <TicTacToe />
      </div>
    </div>
  );
};

export default App;
