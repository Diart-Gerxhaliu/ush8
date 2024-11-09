import React from 'react'
import Heading from '../atoms/Heading'
import Li from '../atoms/Li'

function Links({
    h1,
    li
}) {
  return (
    <div className='links'>
      <Heading text={h1}/>
      <Li element_text={li}/>
      <Li element_text={li}/>
      <Li element_text={li}/>
      <Li element_text={li}/>
      <Li element_text={li}/>
      <Li element_text={li}/>

    </div>
  )
}

export default Links
