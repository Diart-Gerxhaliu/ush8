import React from 'react'
import Box from '../molecules/Box'
import Image from '../atoms/Image'

function Container({
    image_src,
    image_alt,
    reverse,
    icon_src,
    icon_alt,
    h1,
    p,
    button_text
}) {
  return (
    <div className={`container ${reverse}`}>
        <Image image_src={image_src} image_alt={image_alt}/>
        <Box  
            icon_src={icon_src}
            icon_alt={icon_alt}
            h1={h1}
            p={p}
            button_text={button_text}
        />
    </div>
  )
}

export default Container
