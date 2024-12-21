import './App.css';
import Nav from './components/Nav'
import Landing from './components/Landing';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Landing/>
      <About/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
