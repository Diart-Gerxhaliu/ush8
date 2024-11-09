import React from 'react'
import Image from '../atoms/Image'
import Text from '../atoms/Text'
import Button from '../atoms/Button'

function ImageDesc({ 
    image_src, 
    image_alt, 
    lorem, 
    button_text
}) {
  return (
    <div className='imagedesc'>
        <Image image_src={image_src} image_alt={image_alt}/>
        <div className='column'>
            <Text text={lorem}/>
            <Button button_text={button_text}/>
        </div>
    </div>
  )
}

export default ImageDesc
