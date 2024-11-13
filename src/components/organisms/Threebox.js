import React from 'react'
import Box from '../molecules/Box'

function Threebox({
    icon_src,
    icon_alt,
    h11,
    p11,
    h12,
    p12,
    h13,
    p13,
    button_text
}) {
  return (
    <div className='threebox'>
      <Box
        icon_src={icon_src}
        icon_alt={icon_alt}
        h1={h11}
        p={p11}
        button_text={button_text}
      />
      <Box
        icon_src={icon_src}
        icon_alt={icon_alt}
        h1={h12}
        p={p12}
        button_text={button_text}
      />
      <Box
        icon_src={icon_src}
        icon_alt={icon_alt}
        h1={h13}
        p={p13}
        button_text={button_text}
      />
    </div>
  )
}

export default Threebox