import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from "./components/Card"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      <h1 className='bg-red-500 rounded-md p-4 text-black'>Tailwind Test</h1>
      <h1 className='bg-slate-400 rounded-md p-4 mt-2'>Tailwind Test</h1>
      <Card personName="Sarah" desc="ABC" btnText='See Profile'/>
      <Card personName="Alyssa" desc="XYZ" btnText="Visit Profile"/>


    </>
  )
}

export default App
