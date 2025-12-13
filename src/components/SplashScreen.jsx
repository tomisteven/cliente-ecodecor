import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png';

const SplashScreen = ({ finishLoading }) => {
    const [isMounted, setIsMounted] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsMounted(false);
            setTimeout(() => finishLoading(), 500); // Coincide con duración exit
        }, 1800); // Tiempo total reducido un poco

        return () => clearTimeout(timer);
    }, [finishLoading]);

    return (
        <AnimatePresence>
            {isMounted && (
                <motion.div
                    className="splash-screen"
                    initial={{ y: 0 }}
                    exit={{
                        y: "-100%", // Efecto Cortina hacia arriba
                        transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] } // Más rápido (0.5s)
                    }}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100vh',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        zIndex: 9999,
                        backgroundColor: "#ffffffff", // Verde inicial (o el que definas)
                    }}
                >
                    {/* Animación secuencial de color de fondo interna si se desea, 
                o simplemente mantenemos el verde sólido que se va hacia arriba.
                Para 'sorprender', haremos que el logo haga un pequeño 'pop' antes de irse.
            */}

                    <motion.div
                        initial={{ backgroundColor: "#ffffff" }}
                        animate={{ backgroundColor: ["#ffffff", "#ffffff", "#00000038"] }}
                        transition={{ duration: 1.5, times: [0, 0.5, 1] }}
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            zIndex: -1
                        }}
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, y: -100, transition: { duration: 0.4 } }}
                        transition={{ duration: 0.5, type: "spring" }}
                        style={{ zIndex: 2 }}
                    >
                        <img src={logo} alt="Ecodecor" style={{ width: '350px', height: 'auto' }} />
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default SplashScreen;
