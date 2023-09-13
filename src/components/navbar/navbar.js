import React from 'react'
import './navbar.css'
import Logo from '../../assets/logo.png'
import contactImg from '../../assets/contact.png'
import {Link} from 'react-scroll'

const navbar = () => {
  return (
        <nav className='navbar'>
            <img src={Logo} alt='Logo' className='logo'/>
            <div className='desktopMenu'> 
                <Link className="desktopMenuListItem">Home</Link>
                <Link className="desktopMenuListItem">About</Link>
                <Link className="desktopMenuListItem">Portfolio</Link>
                <Link className="desktopMenuListItem">Client</Link>
            </div>
            <button className="desktopMenuBtn">
                <img src={contactImg} alt="" className="desktopMenuImg" />Contact Me
            </button>
        </nav>

  )
}

export default navbar