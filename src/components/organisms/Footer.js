import React from 'react'
import Heading from '../atoms/Heading'
import Alarmim from '../../assets/icons/alarmim.svg'
import Office from '../molecules/Office'
import Links from '../molecules/Links'
import Medias from '../molecules/Medias'

function Footer() {
  return (
    <div className='footer'>
        <Heading text={'logo'}/>
        <Office 
            h1={'Main Office'}
            icon_src={Alarmim}
            icon_alt={'alarm'}
            li1={'1234 rruga e deshmoreve'}
            li2={'10012304302'}
        />
        <Links h1={'Stuff'} li={'Link'}/>
        <Medias h1={'Socials'}/>
    </div>
  )
}

export default Footer
