import { Route, Routes } from 'react-router-dom';
import Administrer from './pages/Administrer';
import Collaborer from './pages/Collaborer';
import Conduire from './pages/Conduire';
import Gerer from './pages/Gerer';
import Home from './pages/Home';
import Informations from './pages/Informations';
import Optimiser from './pages/Optimiser';
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
        <Route path='/projets/optimiser' element={<Optimiser />} />
        <Route path='/projets/administrer' element={<Administrer />} />
        <Route path='/projets/gerer' element={<Gerer />} />
        <Route path='/projets/conduire' element={<Conduire />} />
        <Route path='/projets/collaborer' element={<Collaborer />} />
      </Routes>
  );
}

export default App;
