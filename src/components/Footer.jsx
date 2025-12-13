import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import logo from '../assets/logo.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-col">
                    <img src={logo} alt="Ecodecor" className="footer-logo" />
                    <p className="footer-desc">
                        Transformamos espacios con revestimientos de alta calidad y diseño sostenible.
                    </p>
                </div>

                <div className="footer-col">
                    <h4>Enlaces Rápidos</h4>
                    <ul>
                        <li><Link to="/">Inicio</Link></li>
                        <li><Link to="/productos">Colores en Stock</Link></li>
                        <li><Link to="/nosotros">Sobre Nosotros</Link></li>
                        <li><Link to="/contacto">Contacto</Link></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h4>Contacto</h4>
                    <ul>
                        <li>Av. Ejemplo 123, Ciudad</li>
                        <li>+54 9 11 1234-5678</li>
                        <li>info@ecodecor.com</li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h4>Síguenos</h4>
                    <div className="social-links">
                        <a href="#" className="social-icon">IG</a>
                        <a href="#" className="social-icon">FB</a>
                        <a href="#" className="social-icon">LI</a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Ecodecor. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
};

export default Footer;
