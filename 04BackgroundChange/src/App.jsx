import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [color, setColor] = useState("black")

  return (
      <div className='h-screen w-screen text-white text-4xl relative' style={{backgroundColor: color}}>
        <div className='fixed bottom-4 left-4 flex justify-center items-center bg-black rounded-lg p-4'>
          <button className='text-white border-none p-3 text-2xl mx-1 bg-red-600' onClick={() => setColor("red")}>
            Red
          </button>
          <button className='text-white border-none p-3 text-2xl mx-1 bg-blue-600' onClick={() => setColor("blue")}>
            Blue
          </button>
          <button className='text-white border-none p-3 text-2xl mx-1 bg-green-600' onClick={() => setColor("green")}>
            Green
          </button>
          <button className='text-white border-none p-3 text-2xl mx-1 bg-teal-600' onClick={() => setColor("teal")}>
            Teal
          </button>
          <button className='text-white border-none p-3 text-2xl mx-1 bg-orange-500' onClick={() => setColor("orange")}>
            Orange
          </button>
        </div>
      </div>
  )
}

export default App
