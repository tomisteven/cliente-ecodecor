import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SplashScreen from '../components/SplashScreen';

const Layout = () => {
    const [isLoading, setIsLoading] = useState(true);
    const location = useLocation();



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
