import React, { useEffect } from 'react'

function Navbar({color}) {

    // Case 1
    useEffect(function(){
        alert("I will run on every render")
    })

    // Case 2
    useEffect(function(){
        alert("I will run on the first render")
    }, [])

    // Case 3
    useEffect( function(){
        alert("alert shown because color was changed")
    }, [color] )

  return (
    <div>
      <h1>I am a navbar of color {color}</h1>
    </div>
  )
}

export default Navbar