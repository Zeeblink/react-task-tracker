import React from 'react'
import Button from './Button'

const Header = ({title, toggleForm}) => {
  

  return (
    <header className='header'>
        <h1>{title}</h1>
        <Button text="Add" color="steelblue" onClick={toggleForm}/>
    </header>
  )
}




export default Header