import React from "react";
import "../styles/About.css";
import "../App.css";
import CIcon from "../assets/icons/c.png";
import CssIcon from "../assets/icons/css.png";
import HtmlIcon from "../assets/icons/html.png";
import JavaIcon from "../assets/icons/java.png";
import JavascriptIcon from "../assets/icons/javascript.png";
import JqueryIcon from "../assets/icons/jquery.png";
import MysqlIcon from "../assets/icons/mysql.png";
import PythonIcon from "../assets/icons/python.png";
import RIcon from "../assets/icons/r.png";
import ReactIcon from "../assets/icons/react.png";
import SqlIcon from "../assets/icons/sql.png";
import TypescriptIcon from "../assets/icons/typescript.png";

function About({ darkMode, setDarkMode }) {
  const handleOpenResume = () => {
    window.open(
      "https://drive.google.com/file/d/1w8RI2ZDLnaDjMNOrAKKWGPIP50WRt7t3/view?usp=sharing"
    );
  };

  return (
    <div id="section-about" className="about">
      <h3
        className={`about-subheading ${
          darkMode ? "" : "about-subheading--light"
        }`}
      >
        About me
      </h3>
      <hr
        className={`about-subheading-line ${
          darkMode ? "" : "about-subheading-line--light"
        }`}
      />

      <div className="about-content">
        <div className="about-paragraph">
          <p>
            Hi, I’m Zoe! I am a fourth year student at the University of Guelph
            pursuing a degree in Computer Science with a minor in Mathematics. I
            am passionate about developing technology to solve complex problems
            and create positive, impactful solutions that benefit individuals
            and society. I blend analytical thinking from my math minor with
            creative problem solving in computer science. I am always looking
            for new challenges and opportunities!
          </p>
          <br />
          <button className="purple-button" onClick={handleOpenResume}>
            View Resume
          </button>
        </div>

        <div className="icon-group">
          <div className="icon-row-odd">
            <img className="programming-icon" src={HtmlIcon} alt="html" />
            <img className="programming-icon" src={CssIcon} alt="css" />
            <img
              className="programming-icon"
              src={JavascriptIcon}
              alt="javascript"
            />
          </div>

          <div className="icon-row-even">
            <img className="programming-icon" src={CIcon} alt="c" />
            <img className="programming-icon" src={PythonIcon} alt="python" />
            <img className="programming-icon" src={JavaIcon} alt="java" />
          </div>

          <div className="icon-row-odd">
            <img className="programming-icon" src={JqueryIcon} alt="jquery" />
            <img className="programming-icon" src={ReactIcon} alt="react" />
            <img
              className="programming-icon"
              src={TypescriptIcon}
              alt="typescript"
            />
          </div>

          <div className="icon-row-even">
            <img className="programming-icon" src={MysqlIcon} alt="mysql" />
            <img className="programming-icon" src={RIcon} alt="r" />
            <img className="programming-icon" src={SqlIcon} alt="sql" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
