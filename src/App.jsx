import React,{useState} from 'react';
import { calculateWinner } from './helpers';
import Board from './styles/components/Board';
import './styles/root.scss';


const App = () => {
  const [history,sethistory]=useState([{ board:Array(9).fill(null),isxnext: true},]);
  const [currentMove,setcurrentMove] = useState(0);

  const current = history[currentMove];
  
  // const [isxnext,setx]=useState(false);
  const winner=calculateWinner(current.board);
  const message=winner?`Winner is ${winner}`:`Next player is ${(current.isxnext) ?'X' :'O'}`;
  const hsc = pos=>{
    if(current.board[pos] ||winner){
      return;
    }
    
    sethistory(prev=> {
      const last= prev[prev.length-1];

      const newBoard=last.map((square,p)=>{
        if(p===pos){
          return last.isxnext?'X':'O';
        }
        return square;
      });
      return prev.concat({board: newBoard, isxnext: !last.isxnext});
    });
  setcurrentMove(prev=>prev+1);
};
  return (
    <div className="app">
      <h1>TIC TAC TOE</h1>
      <p>Have fun:)</p>
      <h2>{message}</h2>
      <Board board={current.board} hsc={hsc}/>
    </div>
  );
};

export default App;
