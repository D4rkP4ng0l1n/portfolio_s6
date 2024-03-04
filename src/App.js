import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Informations from './pages/Informations';
import Projects from './pages/Projects';
import Realiser from './pages/Realiser';
import Skills from './pages/Skills';

function App() {
  return (
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/informations' element={<Informations />} />
        <Route path='/competences' element={<Skills />} />
        <Route path='/projets' element={<Projects />} />
        <Route path='/projets/realiser' element={<Realiser />} />
      </Routes>
  );
}

export default App;
