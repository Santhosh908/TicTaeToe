import React,{useState} from 'react';
import { calculateWinner } from './helpers';
import Board from './styles/components/Board';
import './styles/root.scss';


const App = () => {
  const [board,setBoard]=useState(Array(9).fill(null));
  const [isxnext,setx]=useState(false);
  const winner=calculateWinner(board);
  const message=winner?`Winner is ${winner}`:`Next player is ${isxnext ?'X' :'O'}`;
  const hsc = (pos)=>{
    if(board[pos] ||winner){
      return;
    }
    
    setBoard(prev=> {
      return prev.map((square,p)=>{
        if(p===pos){
          return isxnext?'X':'O';
        }
        return square;
      });
    });
  setx((prev)=>!prev);
};
  return (
    <div className="app">
      <h1>TIC TAC TOE</h1>
      <p>Have fun:)</p>
      <h2>{message}</h2>
      <Board board={board} hsc={hsc}/>
    </div>
  );
};

export default App;
