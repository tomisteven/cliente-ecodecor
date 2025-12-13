import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import './Navbar.css';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();
    const isHome = location.pathname === '/';

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

                <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
                    <li><NavLink to="/" onClick={() => setIsMobileMenuOpen(false)}>Inicio</NavLink></li>
                    <li><NavLink to="/galeria" onClick={() => setIsMobileMenuOpen(false)}>Galería</NavLink></li>
                    {/* <li><NavLink to="/nosotros" onClick={() => setIsMobileMenuOpen(false)}>Nosotros</NavLink></li> */}
                    <li><NavLink to="/productos" onClick={() => setIsMobileMenuOpen(false)}>Productos</NavLink></li>
                    <li><NavLink to="/contacto" onClick={() => setIsMobileMenuOpen(false)}>Contacto</NavLink></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;

