import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/logo.png';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const isHome = location.pathname === '/';

    const handleColoresClick = (e) => {
        e.preventDefault();
        setIsMobileMenuOpen(false);

        if (isHome) {
            // Si ya estamos en Home, hacer scroll directamente
            const catalogoSection = document.getElementById('catalogo');
            if (catalogoSection) {
                catalogoSection.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            // Si estamos en otra página, navegar a Home y luego hacer scroll
            navigate('/');
            // Esperar a que la página cargue y luego hacer scroll
            setTimeout(() => {
                const catalogoSection = document.getElementById('catalogo');
                if (catalogoSection) {
                    catalogoSection.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const offset = window.scrollY;
            if (offset > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${!isHome ? 'dark-nav' : ''}`}>
            <div className="container nav-container">
                <Link to="/" className="logo-container">
                    <img src={logo} alt="Ecodecor" className="logo-img" />
                </Link>

                <div className="menu-icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                    <div className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></div>
                    <div className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></div>
                    <div className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></div>
                </div>

                <AnimatePresence>
                    {(isMobileMenuOpen || window.innerWidth > 768) && (
                        <motion.ul
                            className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}
                            initial={window.innerWidth <= 768 ? { x: '100%' } : false}
                            animate={window.innerWidth <= 768 ? { x: 0 } : false}
                            exit={window.innerWidth <= 768 ? { x: '100%' } : false}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        >
                            <li className="mobile-only-header">
                                <img src={logo} alt="Menu Logo" className="logo-mobile-menu" />
                            </li>
                            <li><NavLink to="/" onClick={() => setIsMobileMenuOpen(false)}>Inicio</NavLink></li>
                            <li><a href="#catalogo" onClick={handleColoresClick}>Colores</a></li>
                            <li><NavLink to="/productos" onClick={() => setIsMobileMenuOpen(false)}>Productos</NavLink></li>
                            <li><NavLink to="/galeria" onClick={() => setIsMobileMenuOpen(false)}>Galería</NavLink></li>
                            <li><NavLink to="/nosotros" onClick={() => setIsMobileMenuOpen(false)}>Nosotros</NavLink></li>
                            <li><NavLink to="/cotizar" onClick={() => setIsMobileMenuOpen(false)} className="nav-cta">Cotizar</NavLink></li>
                            <li className="mobile-close-btn" onClick={() => setIsMobileMenuOpen(false)}>Cerrar</li>
                        </motion.ul>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
};

export default Navbar;

