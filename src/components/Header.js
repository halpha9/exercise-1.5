import React from 'react'
import Headerimg from '../img/header_img.jpg'
import './Header.scss'

function Header() {
  return (
    <div className='header'>
      <div className='header__title'>
        <h4>APPS Unveils new Studio</h4>
        <h2>Lagom</h2>
      </div>
        <img className='header__logo' alt = 'logo' src = {Headerimg} />
    </div>
  )
}

export default Header