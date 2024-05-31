import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [showBtn, setShowBtn] = useState(true)
  const cars = ["BMW", "Toyota"]
  let carLength = cars.length

  return (
    <>
      {/* {showBtn?<button>I will be displayed when the value is true</button>: "Button cant be displayed"} */}
      {showBtn && <button>I will be displayed when the value is true</button>}
      <h2>Garage</h2>
      {carLength>3?<h1>We have {carLength} cars in our garage</h1>: <h3>No cars available</h3>}
    </>
  )
}

export default App
