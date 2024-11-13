import React from 'react'
import Image from '../atoms/Image'
import Text from '../atoms/Text'
import Button from '../atoms/Button'

function Imtxt({
    image_src,
    image_alt,
    lorem,
    button_text
}) {
  return (
    <div className='imtxt'>
        <Image 
            image_src={image_src}
            image_alt={image_alt}
        />
        <Text text={lorem}/>
        <Button button_text={button_text}/>
    </div>
  )
}

export default Imtxt
