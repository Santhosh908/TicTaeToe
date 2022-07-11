import React from 'react';
import Board from './styles/components/Board';

import './styles/root.scss';

const App = () => {
  return (
    <div className="app">
      <h1>TIC TAC TOE</h1>
      <p>Have fun:)</p>
      <Board/>
    </div>
  );
};

export default App;
