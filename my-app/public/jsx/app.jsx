// import "./App.css";
import React from "react";
import Rchild from './Rchild';

function App() {
  return (
    <React.Fragment>
      <Rchild key='1' id='testid' content='hello world' />
      <Rchild key='2' id='testid2' content='hello world2' />
    </React.Fragment>
  );
}

export default App;
