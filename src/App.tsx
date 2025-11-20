import { useEffect, useState } from "react";
import Cell from "./cell";

const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function App() {
  const [currentPlayer, setCurrentPlayer] = useState<"X" | "O">("X");
  const [board, setBoard] = useState(Array(9).fill(""));
  const [winner, setWinner] = useState(null);

  const checkWinner = () => {
    for (const combination of winningCombinations) {
      const [a, b, c] = combination;
      if (board[a] === board[b] && board[a] === board[c]) {
        setWinner(board[a]);
        return;
      }
    }
  };

  useEffect(() => {
    checkWinner();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [board])

  return (
    <main className="container mx-auto flex flex-col gap-10 items-center justify-center h-screen max-h-screen p-10">
      <div className="text-center space-y-1">
        <h1 className="text-4xl font-bold text-center">Tic Tac Toe</h1>
        {winner ? (
          <p className="text-lg">Winner: {winner}</p>
        ) : (
          <p className="text-lg">Current Player: {currentPlayer}</p>
        )}
      </div>

      {/* board */}
      <div className="grid grid-cols-3 gap-6 bg-accent p-6 rounded-2xl w-full max-w-xl">
        {board.map((cell, index) => (
          <Cell
            over={!!winner}
            key={index}
            state={cell}
            onClick={() => {
              const newBoard = [...board];
              newBoard[index] = currentPlayer;
              setBoard(newBoard);
              setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
            }}
          />
        ))}
      </div>

      <button
        className="w-full max-w-xs py-3 bg-primary transition cursor-pointer rounded-xl text-2xl font-bold hover:bg-secondary"
        onClick={() => {
          setBoard(Array(9).fill(""));
          setWinner(null);
        }}
      >
        Reset
      </button>
    </main>
  );
}

export default App;
