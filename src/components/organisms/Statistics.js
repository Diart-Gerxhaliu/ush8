import React from 'react'
import Heading from '../atoms/Heading'
import Text from '../atoms/Text'
import PercentOf from '../molecules/PercentOf'

function Statistics({
    heading,
    lorem,
    what1,
    number1,
    what2,
    number2
}) {
  return (
    <div className='statistics'>
        <Heading text={heading}/>
        <Text text={lorem}/>
        <PercentOf text={what1} number={number1}/>
        <PercentOf text={what2} number={number2}/>
    </div>
  )
}

export default Statistics
