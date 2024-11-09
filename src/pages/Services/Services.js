import './services.css'
import React from 'react'
import background from '../../assets/img/banner.jpg'
import Banner from '../../components/molecules/Banner'
import Container from '../../components/organisms/Container'
import Life from '../../assets/img/whylive.jpg'
import Alarm from '../../assets/icons/alarm.svg'
import Eightteen from '../../components/templates/Eightteen'
import Heading from '../../components/atoms/Heading'
import Footer from '../../components/organisms/Footer'
import Profile from '../../components/organisms/Profile'
import pfp from '../../assets/img/pfp.jpg'

function Services() {
  return (
    <div className='services'>
      <Banner 
        back_img={background}
        text={''}
        h1={'Servises'}
        button_text={''}
      />
      <div className='gray'>
        <Eightteen code={
            <div className='whatWeDo'>
                <Heading text={'What We Do'}/>
                <Container
            image_src={Life}
            image_alt={'life'}
            reverse={'reverse'}
            icon_src={Alarm}
            icon_alt={'alarm'}
            h1={'Marketim'}
            p={'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...'}
            button_text={'Read More'}
        />
        <Container
            image_src={Life}
            image_alt={'life'}
            reverse={''}
            icon_src={Alarm}
            icon_alt={'alarm'}
            h1={'Marketim'}
            p={'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...'}
            button_text={'Read More'}
        />
        <Container
            image_src={Life}
            image_alt={'life'}
            reverse={'reverse'}
            icon_src={Alarm}
            icon_alt={'alarm'}
            h1={'Marketim'}
            p={'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...'}
            button_text={'Read More'}
        />
        <Container
            image_src={Life}
            image_alt={'life'}
            reverse={''}
            icon_src={Alarm}
            icon_alt={'alarm'}
            h1={'Marketim'}
            p={'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...'}
            button_text={'Read More'}
        />
            </div>
        }/>
      </div>
      <Eightteen code={
          
          <Profile 
            h1={'Consumators say stuff'}
            image_src={pfp}
            image_alt={'profile image'}
            p={'Ju lutem mos me boni google, Jo per naj qka veq kshtu'}
            consumator={'Emri Mbiemri'}
            place={'Egziston'}
          />
        }/>
      <div className='black'>
          <Eightteen code={
            <Footer/>
          }/>
        </div>

    </div>
  )
}

export default Services
