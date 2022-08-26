import React from 'react'
import './navbar.style.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <Link to='/' >The Movies</Link>
    </nav>
  )
}

export default Navbar
