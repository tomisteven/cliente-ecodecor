import { Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';

// Main Pages
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import Productos from './pages/Productos';
import Nosotros from './pages/Nosotros';
import Contacto from './pages/Contacto';
import Cotizar from './pages/Cotizar';
import Provincias from './pages/Provincias';
import ScrollToTop from './components/ScrollToTop';

// Product Pages
import SedaAlgodon from './pages/productos/SedaAlgodon';
import SedaPapel from './pages/productos/SedaPapel';
import SedaTextiles from './pages/productos/SedaTextiles';
import EcoPaper from './pages/productos/EcoPaper';

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Main Pages */}
          <Route index element={<Home />} />
          <Route path="galeria" element={<Gallery />} />
          <Route path="nosotros" element={<Nosotros />} />
          <Route path="contacto" element={<Contacto />} />
          <Route path="cotizar" element={<Cotizar />} />
          <Route path="provincias" element={<Provincias />} />

          {/* Products Hub */}
          <Route path="productos" element={<Productos />} />

          {/* Individual Product Pages */}
          <Route path="productos/seda-algodon" element={<SedaAlgodon />} />
          <Route path="productos/seda-papel" element={<SedaPapel />} />
          <Route path="productos/seda-textiles" element={<SedaTextiles />} />
          <Route path="productos/ecopaper" element={<EcoPaper />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
