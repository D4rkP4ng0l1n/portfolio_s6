import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Informations from './pages/Informations';
import Skills from './pages/Skills';

function App() {
  return (
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/informations' element={<Informations />} />
        <Route path='/competences' element={<Skills />} />
      </Routes>
  );
}

export default App;
