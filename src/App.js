import './App.css';
import Navbar from './components/navbar/navbar';
import Home from './components/home/home';
import Experences from './components/experience/experience';
import Skills from './components/skills/skills';
import Projects from './components/projects/projects';
import Contact from './components/contact/contact';
function App() {
  return (
    <div className="container ">
      <Navbar/>
      <Home/>
      <Experences/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
