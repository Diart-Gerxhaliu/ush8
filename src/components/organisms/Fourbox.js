import React from 'react'
import Box from '../molecules/Box'

function Fourbox(
    {
        h1,
        p,
        icon_src
    }
) {
  return (
    <div className='fourbox'>
      <Box 
        h1={h1}
        p={p}
        button_text={'Read More'}
        icon_src={icon_src}
        icon_alt={''}
      />
      <Box 
        h1={h1}
        p={p}
        button_text={'Read More'}
        icon_src={icon_src}
        icon_alt={''}
      />
      <Box 
        h1={h1}
        p={p}
        button_text={'Read More'}
        icon_src={icon_src}
        icon_alt={''}
      />
      <Box 
        h1={h1}
        p={p}
        button_text={'Read More'}
        icon_src={icon_src}
        icon_alt={''}
      />
    </div>
  )
}

export default Fourbox
