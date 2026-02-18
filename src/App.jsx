import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import ScrollToTop from './components/ScrollToTop';
import Analytics from './components/Analytics';

// Componente de loading para Suspense
const PageLoader = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '60vh',
    fontSize: '1.2rem',
    color: '#666'
  }}>
    <div style={{
      width: '40px',
      height: '40px',
      border: '3px solid #f3f3f3',
      borderTop: '3px solid #8B6914',
      borderRadius: '50%',
      animation: 'spin 1s linear infinite'
    }} />
    <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
  </div>
);

// Lazy loading de páginas principales (reducir bundle inicial)
const Home = lazy(() => import('./pages/Home'));
const Gallery = lazy(() => import('./pages/Gallery'));
const Productos = lazy(() => import('./pages/Productos'));
const Nosotros = lazy(() => import('./pages/Nosotros'));
const Contacto = lazy(() => import('./pages/Contacto'));
const Cotizar = lazy(() => import('./pages/Cotizar'));
const Provincias = lazy(() => import('./pages/Provincias'));

// Lazy loading de páginas de productos
const SedaAlgodon = lazy(() => import('./pages/productos/SedaAlgodon'));
const SedaPapel = lazy(() => import('./pages/productos/SedaPapel'));
const SedaTextiles = lazy(() => import('./pages/productos/SedaTextiles'));
const EcoPaper = lazy(() => import('./pages/productos/EcoPaper'));

function App() {
  return (
    <>
      <ScrollToTop />
      <Analytics />
      <Suspense fallback={<PageLoader />}>
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
      </Suspense>
    </>
  );
}

export default App;
