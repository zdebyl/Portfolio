import React from 'react'
import '../styles/About.css'
import '../App.css'
import CIcon from '../assets/icons/c.png';
import CssIcon from '../assets/icons/css.png';
import HtmlIcon from '../assets/icons/html.png';
import JavaIcon from '../assets/icons/java.png';
import JavascriptIcon from '../assets/icons/javascript.png';
import JqueryIcon from '../assets/icons/jquery.png';
import MysqlIcon from '../assets/icons/mysql.png';
import PythonIcon from '../assets/icons/python.png';
import RIcon from '../assets/icons/r.png';
import ReactIcon from '../assets/icons/react.png';
import SqlIcon from '../assets/icons/sql.png';
import TypescriptIcon from '../assets/icons/typescript.png';

function About() {
  const handleOpenResume = () => {
    window.open('https://drive.google.com/file/d/1XS8NPqbur6KEcGK8ih2g3PrnRZkUbuWD/view?usp=sharing', '_blank');
  };

  return (
    <div id='section-about' className='about'>
      <h3 className='subheading'>About</h3>
      <hr className='subheading-line'/>

      <div className='about-content'>
        <div className='about-paragraph'>
          <p>
            Hi, I’m Zoe! I am a fourth year student at the University of Guelph pursuing a degree in Computer Science with a minor in Mathematics. I am passionate about developing technology to solve complex problems and create positive, impactful solutions that benefit individuals and society. I blend analytical thinking from my math minor with creative problem solving in computer science. I am always looking for new challenges and opportunities!
          </p>
          <br/>
          <button className='purple-button' onClick={handleOpenResume}>View Resume</button>
        </div>

        <div className='icon-group'>
          <div className='icon-row-odd'>
            <img className='icon' src={HtmlIcon} alt="html"/>
            <img className='icon' src={CssIcon} alt="css"/>
            <img className='icon' src={JavascriptIcon} alt="javascript"/>
          </div>

          <div className='icon-row-even'>
            <img className='icon' src={CIcon} alt="c"/>
            <img className='icon' src={PythonIcon} alt="python"/>
            <img className='icon' src={JavaIcon} alt="java"/>
          </div>

          <div className='icon-row-odd'>
            <img className='icon' src={JqueryIcon} alt="jquery"/>
            <img className='icon' src={ReactIcon} alt="react"/>
            <img className='icon' src={TypescriptIcon} alt="typescript"/>
          </div>

          <div className='icon-row-even'>
            <img className='icon' src={MysqlIcon} alt="mysql"/>
            <img className='icon' src={RIcon} alt="r"/>
            <img className='icon' src={SqlIcon} alt="sql"/>
          </div>
        </div>
      </div>

    </div>
  )
}

export default About