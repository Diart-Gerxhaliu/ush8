import React from 'react'
import Text from '../atoms/Text'
import Percentage from '../atoms/Percentage'

function PercentOf({text, number}) {
  return (
    <div className='percentof'>
      <Text text={text}/>
      <div className='fullpercentage'>
        <Percentage number={number}/>
      </div>
    </div>
  )
}

export default PercentOf
