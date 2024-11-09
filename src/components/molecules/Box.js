import React from 'react'
import Heading from '../atoms/Heading'
import Text from '../atoms/Text'
import Button from '../atoms/Button'
import Icon from '../atoms/Icon'

function Box({
    h1, 
    p, 
    button_text,
    icon_src,
    icon_alt,
}) {
  return (
    <div className='box'>
        <Icon icon_src={icon_src} icon_alt={icon_alt}/>
        <Heading text={h1}/>
        <Text text={p}/>
        <Button button_text={button_text}/>
    </div>
  )
}

export default Box
