import React from 'react'
import Heading from '../atoms/Heading'
import Li from '../atoms/Li'
import Icon from '../atoms/Icon'

function Office({
    h1,
    icon_src,
    icon_alt,
    li1,
    li2
}) {
  return (
    <div className='office'>
      <Heading text={h1}/>
      <div className='places'>
        <div className='row'>
        <Icon icon_src={icon_src} icon_alt={icon_alt}/>
        <Li element_text={li1}/>
        </div>
        <div className='row'>
        <Icon icon_src={icon_src} icon_alt={icon_alt}/>
        <Li element_text={li2}/>
        </div>
      </div>
    </div>
  )
}

export default Office
