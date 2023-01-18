import React, { useEffect, useRef } from 'react';
import './App.css';
import {Terminal} from './components/terminal'
import { sender } from "./WSClient"


function App() {

  useEffect(()=>{
    sender.connect()
  },[])

  return (
    <div className="App">
      <header className="App-header">
        <Terminal />
      </header>
    </div>
  );
}

export default App;
