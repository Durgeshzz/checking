import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
  const [count, setCount] = useState(0);
  function setC(){
    setCount(count + 1)
  }
  function setC2(){
    setCount(count - 1)
  }
  return (
    
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <h1>{count}</h1>
      <button onClick = {setC}>click +</button>
      <button onClick = {setC2}>click -</button>
    </div>
  );
}

export default App;
