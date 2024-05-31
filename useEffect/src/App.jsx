import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react';

function App() {
  
  const [count, setCount] = useState(0)
  const [calc, setCalc] = useState(0)

  function increase(){
    setCount((prevCount) => prevCount + 1)
  }

  useEffect( () => {
    setCalc(function(){
      return count * 2
    })
  }, [count])


  // useEffect( () => {
  //   // the code that will run
  //   console.log("The count is: ", count);

  //   // optional return function
  // }, [count]) // the dependency array


  // function add(){
  //   setCount(count + 1)
  // }

  // function minus(){
  //   setCount(count - 1)
  // }

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={increase}>Add</button>
      <p>Result: {calc}</p>

      {/* <h1>Count Value : {count}</h1>   
      <button onClick={add}>Increase</button>
      <button onClick={minus}>Decrease</button>
      <p>Footer: {count}</p> */}
    </>
  )
}

export default App
