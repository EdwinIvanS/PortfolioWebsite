import './App.css';
import NavBarC from './components/app/NavBarC';
import Banner from './components/app/Banner';
import Skills from './components/app/Skills';
import Proyects from './components/app/Proyects'; 
import Contact from './components/app/Contact';
import Foother from './components/app/Foother';

function App() {
  return (
    <div className="App">
      <NavBarC/>
      <Banner/>
      <Skills/>
      <Proyects/>
      <Contact/>
      <Foother/>
    </div>
  );
}

export default App;
