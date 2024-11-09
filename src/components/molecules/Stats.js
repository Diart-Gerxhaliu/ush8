import React from 'react'
import Text from '../atoms/Text'
import Heading from '../atoms/Heading'

function Stats({
  what, 
  numb, 
  text
}) {
  return (
    <div className='stats'>
      <Text text={what}/>
      <Heading text={numb}/>
      <Text text={text}/>
    </div>
  )
}

export default Stats
