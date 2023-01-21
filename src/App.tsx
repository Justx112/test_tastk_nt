import { useEffect } from 'react';
import './App.css';
import { SelfOrdersElemets } from './components/self_orders';
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
        <SelfOrdersElemets />
      </header>
    </div>
  );
}

export default App;
