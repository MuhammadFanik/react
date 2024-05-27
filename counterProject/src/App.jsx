import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // let counter = 0;

  let [counter, setCounter] = useState(0)
  // counter : current State
  // setCounter : a function that updates the state

  function addValue(){
    if(counter <= 19){
      setCounter(prevCounter => prevCounter+1)
    } else{
      alert("Limit exceeded")
    }
  }

  function decreaseValue(){
    if(counter > 0){
      setCounter(prevCounter => prevCounter-1)
    } else{
      alert("Value too low")
    }
  }

  return (
    <>
      <h2>Hello {counter}</h2>
      <p>Counter Value: {counter}</p>
      <button onClick={addValue}>Increase</button>
      <button onClick={decreaseValue}>Decrease</button>
      <p>Footer: {counter}</p>
    </>
  )
}

export default App
