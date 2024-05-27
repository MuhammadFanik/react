import React from 'react'

function Button({btnText, bgColor}) {
  return (
    <button className='text-white border-none p-3 text-2xl mx-1' style={{backgroundColor: bgColor}}>
        {btnText}
     </button>
  )
}

export default Button