import './App.css';
import React, { useRef, useEffect } from 'react';
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

  return (
    <div className="App">
      <Nav/>
      <Landing/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>

      <canvas ref={canvasRef}></canvas>
    </div>
  );
}

export default App;
