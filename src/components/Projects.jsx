import React from 'react'
import '../styles/Projects.css'
import '../App.css'
import WaterwiseImage from '../assets/waterwise.JPG';

function Projects() {
  return (
    <div id='section-projects' className='projects'>
      <h3 className='subheading'>Projects</h3>
      <hr className='subheading-line'/>

      <div className='projects-content'>
        <img className='waterwise-image' src={WaterwiseImage} alt="waterwise"/>
      </div>
    </div>
  )
}

export default Projects