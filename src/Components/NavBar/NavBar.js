import React from 'react'
import './NavBar.css'



function NavBar() {
  return (
    <div className='navbar'>
        <img src={require('../../Assets/images/logo.png')} alt="netflix logo" className='logo' />
        <img className='avater' src={require('../../Assets/images/avatar.png')} alt="avatar" />
    </div>
  )
}

export default NavBar
