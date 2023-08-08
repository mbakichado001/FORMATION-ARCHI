import logo from './logo.svg';
import './App.css';
import Navbar from './Pages/Home';
import { Audrey } from './Pages/Home';
import { Albert } from './Pages/Home';
import { Tegra } from './Pages/Home';
import { Kanza } from './Pages/Home';

function App() {
  return (
    <>
    <Navbar/>
    <ul>
      <il>
        <Audrey/>
      </il>
      <il>
        <Albert/>
      </il>
      <il>
        <Tegra/>
      </il>
      <il>
        <Kanza/>
      </il>
    </ul>

    </>
    
      
  );
}

export default App;
