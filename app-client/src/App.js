import './App.css';
import NavBarC from './components/app/NavBarC';
import Banner from './components/app/Banner';
import Skills from './components/app/Skills';
import Proyects from './components/app/Proyects'; 

function App() {
  return (
    <div className="App">
      <NavBarC/>
      <Banner/>
      <Skills/>
      <Proyects/>
    </div>
  );
}

export default App;
