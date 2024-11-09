import React from 'react'

function Button({button_text}) {
  return (
    <div className='button'>
      <button type='button'>{button_text}</button>
    </div>
  )
}

export default Button
