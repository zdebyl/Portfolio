import React from 'react'
import '../styles/Projects.css'
import '../App.css'
import WaterwiseImage from '../assets/projects/waterwise.JPG';
import MoleculeImage from '../assets/projects/molecule.JPG';
import TictactoeImage from '../assets/projects/tictactoe.JPG';
import SingleProject from './SingleProject'

function Projects() {
  const waterwiseproject = {
    src: WaterwiseImage,
    title: "Waterwise Website",
    description: "A website that allows the user to discover how industrial activities affect our environment. Analyze the correlation between air emissions, wastewater discharge, and water quality in an interactive way.",
    tech: "Spring Boot | Typescript | CSS | React | SQL",
  };

  const moleculeproject = {
    src: MoleculeImage,
    title: "Molecule Generator",
    description: "A generator to provide a visual representation of a molecule based on its Structure-Data File (SDF). Upload an SDF file and a 2D model of the molecule will be generated, enabling users to explore its structure and composition.",
    tech: "C | Python | HTML | CSS | jQuery | SQL",
    git: "https://github.com/zdebyl/School-Projects/tree/main/CIS2750"
  };

  const tictactoeproject = {
    src: TictactoeImage,
    title: "Tic Tac Toe Game Center",
    description: "A game center that offers two interactive games: Tic Tac Toe and Numerical Tic Tac Toe. Users can enjoy the classic Tic Tac Toe game or challenge themselves with the numerical version, where numbers must be strategically placed to win.",
    tech: "Java",
    git: "https://github.com/zdebyl/School-Projects/tree/main/CIS2430/A3"
  };
  
  return (
    <div id='section-projects' className='projects'>
      <h3 className='projects-subheading'>Some projects I've built</h3>
      <hr className='projects-subheading-line'/>

      <div className='projects-content'>
        <SingleProject {...waterwiseproject}/>
        <SingleProject {...moleculeproject}/>
        <SingleProject {...tictactoeproject}/>
      </div>
    </div>
  )
}

export default Projects