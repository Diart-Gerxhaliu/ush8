import React from 'react'
import Heading from '../atoms/Heading'
import Image from '../atoms/Image'

function Offering({
    h1,
    image_src,
    image_alt
}) {
  return (
    <div className='offer'>
      <Heading text={h1}/>
      <Image 
        image_src={image_src}
        image_alt={image_alt}
      />

    </div>
  )
}

export default Offering
