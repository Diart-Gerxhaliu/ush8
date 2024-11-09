import './about.css'
import React from 'react'
import background from '../../assets/img/banner.jpg'
import Banner from '../../components/molecules/Banner'
import Eightteen from '../../components/templates/Eightteen'
import Threebox from '../../components/organisms/Threebox'

function About() {
  return (
    <div className='about'>
      <Banner
        back_img={background}
        h1={'About Us'}
      />

      <Eightteen code={
        <Threebox
        icon_src={}
        />
      }/>


    </div>
  )
}

export default About
