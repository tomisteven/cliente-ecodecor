import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SplashScreen from '../components/SplashScreen';

const Layout = () => {
    const [isLoading, setIsLoading] = useState(true);
    const location = useLocation();

    // Solo mostrar Splash en la ruta raíz (Inicio) la primera vez o siempre que se cargue la app?
    // User request: "al iniciar la web". 
    // Usualmente es solo una vez al cargar ('mount').
    // Si queremos que sea solo en Home, podemos chequear location.pathname === '/'

    return (
        <>
            {isLoading && (
                <SplashScreen finishLoading={() => setIsLoading(false)} />
            )}

            <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
                <Navbar />
                <main style={{ flex: 1 }}>
                    <Outlet />
                </main>
                <Footer />
            </div>
        </>
    );
};

export default Layout;
