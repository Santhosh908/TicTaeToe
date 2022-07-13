import React , {useState} from 'react';
import Square from './Square'

const Board = () => {
  const [board,setBoard]=useState(Array(9).fill(null));
  const [isxnext,setx]=useState(false);
  const hsc = (pos)=>{
    if(board[pos]){
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
const rs=(pos)=>{
  return <Square value={board[pos]} onClick={()=>{
    hsc(pos)
}}/>
}
  return (
    <div className='board'>
        <div className='board-row'>
            {rs(0)}
            {rs(1)}
            {rs(2)}
        </div>
        <div className='board-row'>
          {rs(3)}
          {rs(4)}
          {rs(5)}
        </div>
        <div className='board-row'>
            {rs(6)}
            {rs(7)}
            {rs(8)}
          </div>
    </div>
  );
}

export default Board