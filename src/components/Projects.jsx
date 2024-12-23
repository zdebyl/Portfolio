import React from 'react'
import '../styles/Projects.css'
import '../App.css'
import WaterwiseImage from '../assets/projects/waterwise.JPG';
import MoleculeImage from '../assets/projects/molecule.JPG';
import TictactoeImage from '../assets/projects/tictactoe.JPG';
import SingleProject from './SingleProject'

function Projects() {
  return (
    <div id='section-projects' className='projects'>
      <h3 className='subheading'>Projects</h3>
      <hr className='subheading-line'/>

      <div className='projects-content'>
        <SingleProject src={WaterwiseImage} />
        <SingleProject src={MoleculeImage} />
        <SingleProject src={TictactoeImage} />
      </div>
    </div>
  )
}

export default Projects