import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const IPL = ["MI", "CSK", "RCB", "DC", "KKR"]

  const people = [{
      id: 0,
      name: 'Creola Katherine Johnson',
      profession: 'mathematician',
    }, 
    {
      id: 1,
      name: 'Mario José Molina-Pasquel Henríquez',
      profession: 'chemist',
    }, 
    {
      id: 2,
      name: 'Mohammad Abdus Salam',
      profession: 'physicist',
    }, 
    {
      id: 3,
      name: 'Percy Lavon Julian',
      profession: 'chemist',  
    }, 
    {
      id: 4,
      name: 'Subrahmanyan Chandrasekhar',
      profession: 'astrophysicist',
    }];

    const chemists = people.filter( function(person){
      person.profession === "chemist"
    } )

  return (
    <>
      <h2>Hello</h2>
      <b>{people[0].name}</b>


      {/* {IPL.map((team, index) => (
        <p key={index}>{team}</p>
      ))} */}
    </>
  )
}

export default App
