import React from 'react'
import '../styles/About.css'
import '../App.css'

function About() {
  return (
    <div className='about'>
      <h3 className='subheading'>About</h3>
      <hr className='subheading-line'/>

      <div className='content'>
        <div className='about-paragraph'>
          <p>
            Hi, I’m Zoe! I am a fourth year student at the University of Guelph pursuing a degree in Computer Science with a minor in Mathematics. I am passionate about developing technology to solve complex problems and create positive, impactful solutions that benefit individuals and society. I blend analytical thinking from my math minor with creative problem solving in computer science. I am always looking for new challenges and opportunities!
          </p>
          <br/>
          <button className='purple-button'>Download Resume</button>
        </div>

        <div className='skills-paragraph'>
          <p><span className='purple-font'>Languages:</span><br/>C  |  Java  |  Python  |  SQL  |  HTML  |  CSS  |  JavaScript  |  R  |  Typescript</p>
          <p><span className='purple-font'>Technology:</span><br/>Microsoft Office  |  MySQL  |  React.js  |  jQuery  |  Docker  |  Jira  |  Slack</p>
          <p><span className='purple-font'>Operating Systems:</span><br/>Windows  |  Linux</p>
          <p><span className='purple-font'>Other Skills:</span><br/>Data Structures and Algorithms  |  Agile Methodologies  |  Object Oriented Programming</p>
        </div>
      </div>

    </div>
  )
}

export default About