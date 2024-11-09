import React from 'react'
import Image from '../atoms/Image'
import Heading from '../atoms/Heading'
import Text from '../atoms/Text'
import Place from '../molecules/Place'

function Profile({
    h1,
    image_src,
    image_alt,
    p,
    consumator,
    place
}) {
  return (
    <div className='profile'>
        <Heading text={h1}/>
        <Image image_src={image_src} image_alt={image_alt}/>
        <Text text={p}/>
        <Place consumator={consumator} place={place}/>
        
    </div>
  )
}

export default Profile
