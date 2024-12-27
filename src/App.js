import './App.css';
import React, { useRef, useEffect, useState } from 'react';
import { setupCanvas } from './MouseMovement';
import Nav from './components/Nav'
import Landing from './components/Landing';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const cleanup = setupCanvas(canvasRef);

    // Cleanup event listener on unmount
    return () => cleanup();
  }, []);

  const[darkMode, setDarkMode] = useState(true);

  return (
    <div className={`app ${darkMode ? "" : "app--light"}`}>
      <Nav darkMode={darkMode} setDarkMode={setDarkMode}/>
      <Landing darkMode={darkMode} setDarkMode={setDarkMode}/>
      <About darkMode={darkMode} setDarkMode={setDarkMode}/>
      <Projects darkMode={darkMode} setDarkMode={setDarkMode}/>
      <Contact darkMode={darkMode} setDarkMode={setDarkMode}/>
      <Footer darkMode={darkMode} setDarkMode={setDarkMode}/>

      <canvas ref={canvasRef}></canvas>
    </div>
  );
}

export default App;
