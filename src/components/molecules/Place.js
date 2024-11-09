import React from 'react'
import Heading from '../atoms/Heading'
import Text from '../atoms/Text'

function Place({
    consumator,
    place
}) {
  return (
    <div className='place'>
        <Heading text={consumator}/>
        <Text text={place}/>
    </div>
  )
}

export default Place
