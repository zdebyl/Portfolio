import React from 'react'
import '../styles/Landing.css'
import '../App.css'
import CoverImage from '../assets/coverimage.png';

function Landing() {
  return (
    <div className = "landing">
        <div className = "text">
            <h1 className = "title">Hi,<br />I'm <span className = "landing-purple-font">Zoe Debyl</span><br />a <span className = "landing-purple-font">Software Developer</span></h1>
            <button className = "purple-button">Contact</button>
        </div>
        <div className = "image">
            <img className = "cover-image" src={CoverImage} alt="cover"/>
        </div>
    </div>
  )
}

export default Landing