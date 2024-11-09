import React from 'react'
import Heading from '../atoms/Heading'
import Icon from '../atoms/Icon'
import Facebook from '../../assets/icons/facebook.svg'
import Instagram from '../../assets/icons/instagram.svg'
import YouTube from '../../assets/icons/Youtube.svg'
import Whatsup from '../../assets/icons/whatsup.svg'

function Medias({
    h1
}) {
  return (
    <div className='medias'>
      <Heading text={h1}/>
      <div className='icons'>
      <Icon icon_src={Facebook}/>
      <Icon icon_src={Instagram}/>
      <Icon icon_src={YouTube}/>
      <Icon icon_src={Whatsup}/>
      
      </div>
      
    </div>
  )
}

export default Medias
