import React from 'react'
import Stats from '../molecules/Stats'

function StatBox({
  what1,
  what2,
  numb1,
  numb2,
  text1,
  text2
}) {
  return (
    <div className='statbox'>
      <Stats what={what1} numb={numb1} text={text1}/>
      <Stats what={what2} numb={numb2} text={text2}/>
    </div>
  )
}

export default StatBox
