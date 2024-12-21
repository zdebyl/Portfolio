import React from 'react'
import '../styles/Nav.css'
import '../App.css'
import Sun from '../assets/lightmode.png'

function Nav() {
  return (
    <nav className='navigation-bar'>
      <div>
        <h6 className='icon'>&lt;ZD/&gt;</h6>
      </div>

      <div className='options'>
        <ul className='page-sections'>
          <li className='section'>Home</li>
          <li className='section'>About</li>
          <li className='section'>Projects</li>
          <li className='section'>Contact</li>
        </ul>
        <img className='sun' src={Sun} alt="light mode"/>
      </div>
    </nav>
  )
}

export default Nav