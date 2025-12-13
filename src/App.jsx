import { Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/Home';
import Inicio from './pages/Inicio';
import Gallery from './pages/Gallery';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="inicio" element={<Inicio />} />
        <Route path="galeria" element={<Gallery />} />
        {/* <Route path="nosotros" element={<Nosotros />} /> */}
        {/* <Route path="productos" element={<Productos />} /> */}
        {/* <Route path="contacto" element={<Contacto />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
