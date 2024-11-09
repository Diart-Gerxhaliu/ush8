import React from 'react'
import Text from '../atoms/Text'
import Heading from '../atoms/Heading'
import Button from '../atoms/Button'


function Banner({
    back_img, 
    text, 
    h1, 
    button_text}) {
  return (
    <div className='banner' style={{backgroundImage: `url(${back_img})`}}>
        <div className='dark'>
            <Text text={text}/>
            <Heading text={h1}/>
            <Button button_text={button_text}/>
        </div>
    </div>
  )
}

export default Banner
