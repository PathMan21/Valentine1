import './App.css';

import { Routes, Route } from 'react-router-dom';
import Accueil from './pages/accueil';
import Oui from "./pages/oui.js";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Accueil />} />
      <Route path="/oui" element={<Oui />} />
    </Routes>
  );
}

export default App;
