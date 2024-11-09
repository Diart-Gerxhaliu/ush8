import './home.css'
import aboutimg from '../../assets/img/office.jpg'
import Alarm from '../../assets/icons/alarm.svg'
import Banner from '../../components/molecules/Banner'
import background from '../../assets/img/banner.jpg'
import Container from '../../components/organisms/Container'
import Eightteen from '../../components/templates/Eightteen'
import ImageDesc from '../../components/molecules/ImageDesc'
import Image from '../../components/atoms/Image'
import Life from '../../assets/img/whylive.jpg'
import Profile from '../../components/organisms/Profile'
import pfp from '../../assets/img/pfp.jpg'
import React from 'react'
import StatBox from '../../components/organisms/StatBox'
import Statistics from '../../components/organisms/Statistics'
import Heading from '../../components/atoms/Heading'
import Text from '../../components/atoms/Text'
import Threebox from '../../components/organisms/Threebox'
import Footer from '../../components/organisms/Footer'

function Home() {
  return (
    <div className='home'>
      
      <Banner 
        back_img={background} 
        text={"welcome"}
        h1={"Best Agency"}
        button_text={'Read more'}
      />
      <Eightteen 
        code={
        <div className='aboutus'>
          <Heading text={"We're delivering stuff"}/>
          <ImageDesc 
            image_src={aboutimg}
            image_alt={'image'}
            lorem={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id bibendum purus. Sed sit amet odio tristique, bibendum eros et, faucibus felis. Suspendisse tincidunt leo eget ipsum commodo mollis. Etiam efficitur tempus sodales. Suspendisse sed euismod tortor, vitae aliquet dolor. In rhoncus ante ac convallis elementum. '} 
            button_text={'Read More'}
          />
          <StatBox 
            what1={'People'}
            numb1={'256+'}
            text1={'Nullam auctor sagittis tempor.'}
            what2={'World Officers'}
            numb2={'12'}
            text2={'Phasellus mollis diam at.'}            
          />
        </div>}/>


        <div className='gray'>
          <Eightteen code={
            <div className='whyus'>
              <Image image_src={Life} image_alt={'life'}/>
              <Statistics 
                heading={'Benefits of choosing us'}
                lorem={'In sit amet ante euismod, vestibulum dolor in, rutrum quam. Etiam magna libero, venenatis sit amet laoreet quis, fermentum id enim. Nam fringilla consectetur ante, sit amet feugiat massa interdum vel. Curabitur lobortis eu augue sit amet euismod. Quisque auctor.'}
                what1={'Locally'}
                number1={80}
                what2={'Sucessfull Projects'}
                number2={90}
              />
            </div>
          }/>
        </div>

        <Eightteen code={
          <div className='company'>
            <Container 
              reverse={'reverse'}
              image_src={Life} 
              image_alt={'something'} 
              icon_src={''}
              icon_alt={''}
              h1={'Your sucies is our miss ion'} 
              p={'In sit amet ante euismod, vestibulum dolor in, rutrum quam. Etiam magna libero, venenatis sit amet laoreet quis, fermentum id enim. Nam fringilla consectetur ante, sit amet feugiat massa interdum vel. Curabitur lobortis eu augue sit amet euismod. Quisque auctor.'}
              button_text={'Read More'}
            />
          </div>
        }/>

        <div className='gray'>
          <Eightteen code={
            <div className='whatwedo'>
              <Heading text={'We provide stuff'}/>
              <Container
                reverse={'reverse'}
                image_src={Life}
                image_alt={''}
                icon_src={Alarm}
                icon_alt={''}
                h1={'Something marketing'}
                p={'In sit amet ante euismod, vestibulum dolor in, rutrum quam. Etiam magna libero, venenatis sit amet laoreet quis, fermentum id enim. Nam fringilla consectetur ante, sit amet feugiat massa interdum vel. Curabitur lobortis eu augue sit amet euismod. Quisque auctor.'}
                button_text={'Read More'}
              />
              <Container
                reverse={''}
                image_src={Life}
                image_alt={''}
                icon_src={Alarm}
                icon_alt={''}
                h1={'Menagment'}
                p={'In sit amet ante euismod, vestibulum dolor in, rutrum quam. Etiam magna libero, venenatis sit amet laoreet quis, fermentum id enim. Nam fringilla consectetur ante, sit amet feugiat massa interdum vel. Curabitur lobortis eu augue sit amet euismod. Quisque auctor.'}
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
        
        <div className='gray'>
          <Eightteen code={
            <div className='weAre'>
              <Heading text={'We really are something'}/>
              <Text text={'Praesent velit ex, viverra ac lectus a, euismod hendrerit urna. Suspendisse sem nibh, fringilla eget sagittis vitae, fringilla sed nibh. Praesent sed ante convallis lectus convallis euismod. Mauris dui mi, interdum et tortor ut, vehicula pulvinar enim. Integer sollicitudin tincidunt.'}/>
              <Threebox
                icon_src={Alarm}
                icon_alt={'alarm'}
                h11={'Diqka'}
                p11={'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...'}
                h12={'Diqka tjt'}
                p12={'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...'}
                h13={'Tjeterqka'}
                p13={'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...'}

              />

            </div>
          }/>
        </div>

        <div className='black'>
          <Eightteen code={
            <Footer/>
          }/>
        </div>
    </div>
  )
}

export default Home
