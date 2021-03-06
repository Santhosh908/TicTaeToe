import React, { useState } from 'react';
import Board from './styles/components/Board';
import { calculateWinner } from './helpers';
import History from './styles/components/History';

import './styles/root.scss';

const App = () => {
  const [history, setHistory] = useState([
    { board: Array(9).fill(null), isXNext: true },
  ]);
  const [currentMove, setCurrentMove] = useState(0);

  const current = history[currentMove];
  
  console.log('history', history);

  const winner = calculateWinner(current.board);
  const message = winner
    ? `Winner is ${winner}`
    : `Next player is ${current.isXNext ? 'X' : 'O'}`;

  const hsc = position => {
    if (current.board[position] || winner) {
      return;
    }

    setHistory(prev => {
      const last = prev[prev.length - 1];

      const newBoard = last.board.map((square, pos) => {
        if (pos === position) {
          return last.isXNext ? 'X' : 'O';
        }

        return square;
      });

      return prev.concat({ board: newBoard, isXNext: !last.isXNext });
    });

    setCurrentMove(prev => prev + 1);
  };
  const moveTo=(move)=>{
    setCurrentMove(move);
  }
  return (
    <div className="app">
      <h1>TIC TAC TOE</h1>
      <h2>{message}</h2>
      <Board board={current.board} hsc={hsc} />
      <History history={history} moveTo={moveTo} currentMove={currentMove}/>
    </div>
  );
};

export default App;
