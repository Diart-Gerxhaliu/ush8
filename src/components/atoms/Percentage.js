import React from 'react'

function Percentage({number}) {
  return (
    <div className='percentage' style={{width:`${number}%`}}>
        <p>{number} %</p>
    </div>
  )
}

export default Percentage
