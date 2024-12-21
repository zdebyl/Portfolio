import './App.css';
import Nav from './components/Nav'
import Landing from './components/Landing';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Nav/>
      <Landing/>
      <About/>
      <Contact/>
    </div>
  );
}

export default App;
