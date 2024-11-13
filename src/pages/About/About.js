import './about.css'
import React from 'react'
import background from '../../assets/img/banner.jpg'
import Banner from '../../components/molecules/Banner'
import Eightteen from '../../components/templates/Eightteen'
import Threebox from '../../components/organisms/Threebox'
import Life from '../../assets/img/whylive.jpg'
import Something from '../../components/organisms/Something'
import Fourbox from '../../components/organisms/Fourbox'
import pfp from '../../assets/img/pfp.jpg'
import Heading from '../../components/atoms/Heading'
import Footer from '../../components/organisms/Footer'

function About() {
  return (
    <div className='about'>
      <Banner
        back_img={background}
        h1={'About Us'}
      />

      <Eightteen code={
        <div className='galery'><Threebox
        icon_src={Life}
        icon_alt={''}
        h11={'Diqka'}
        p11={'Lorem'}
        h12={'Diqka tjt'}
        p12={'Lorem'}
        h13={'Qajo tjt'}
        p13={'Lorem'}
        button_text={'Read More'}
        />
        </div>
      }/>
      <div className='gray'>
        <Eightteen code={
          <div className='provide'>
            <Something
              image_src={Life}
              image_alt={''}
              h1={'Something'}
              lorem={'lorem'}
              button_text={'Read More'}
            />
          </div>
        }/>
      </div>
      <Eightteen code={
        <div className='team'>
          
          <Heading text={'Our Team'}/>
          <Fourbox
        icon_src={pfp}
        h1={'Filan Fisteku'}
        p={'abc@gmail.com'}
        />
        </div>
      }/>
      <div className='gray'>
        <Eightteen
          code={
            <div className='articles'>
              <Heading text={'Over latest News'}/>
              <Fourbox
                icon_src={Life}
                h1={'Titull i artikullit'}
                p={'Diqka per artikull'}
              />
            </div>
          }
        />
      </div>
      
      <div className='black'>
          <Eightteen code={
            <Footer/>
          }/>
        </div>



    </div>
  )
}

export default About
