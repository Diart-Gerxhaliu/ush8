import React from 'react'
import Offering from '../molecules/Offering'
import Imtxt from '../molecules/Imtxt'

function Something({
    h1,
    image_src,
    image_alt,
    lorem,
    button_text
}) {
  return (
    <div className='something'>
      <Offering
        h1={h1}
        image_src={image_src}
        image_alt={image_alt}
      />
      <Imtxt
        image_src={image_src}
        image_alt={image_alt}
        lorem={lorem}
        button_text={button_text}
      />
    </div>
  )
}

export default Something
