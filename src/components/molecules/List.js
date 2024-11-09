import React from 'react'
import Li from '../atoms/Li'
import { Link } from 'react-router-dom'
function List() {
  return (
    <div className='list'>
        <Link to='/'><Li element_text={'Home'}/></Link>
        <Link to='/about'><Li element_text={'About'}/></Link>
        <Link to='/services'><Li element_text={'Services'}/></Link>
        
    </div>
  )
}

export default List
