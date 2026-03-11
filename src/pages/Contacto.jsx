import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import WhatsAppButton from '../components/WhatsAppButton';
import { trackWhatsAppClick } from '../utils/analytics';
import './Contacto.css';

const Contacto = () => {
    return (
        <>
            <SEO
                title="Contacto | EcoDecor Revestimientos"
                description="Contactanos para asesoramiento sobre revestimientos. Whatsapp, teléfono, email o visitanos en Pilar, Buenos Aires. Respuesta en 24hs. EcoDecor Argentina."
                keywords="contacto ecodecor, whatsapp revestimientos, teléfono ecodecor, ubicación pilar, del viso, consultas"
                url="/contacto"
            />

            {/* Hero Section */}
            <section className="contacto-hero">
                <div className="contacto-hero-overlay"></div>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="contacto-hero-content"
                    >
                        <h1>Contactanos</h1>
                        <p>Estamos para ayudarte con tu proyecto</p>
                    </motion.div>
                </div>
            </section>

            {/* Contact Section */}
            <section className="contacto-section">
                <div className="container">
                    <div className="contacto-grid">
                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="contacto-info"
                        >
                            <h2>Información de Contacto</h2>
                            <p className="contacto-intro">
                                Elegí el canal que prefieras. Respondemos todas las consultas
                                en menos de 24 horas hábiles.
                            </p>

                            <div className="contact-methods">
                                <a
                                    href="https://wa.me/541123500092"
                                    className="contact-method"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={trackWhatsAppClick}
                                >
                                    <div className="method-icon whatsapp">📱</div>
                                    <div className="method-info">
                                        <strong>WhatsApp</strong>
                                        <span>+54 11 2350-0092</span>
                                        <small>Respuesta inmediata</small>
                                    </div>
                                </a>

                                <a href="tel:+541123500092" className="contact-method">
                                    <div className="method-icon phone">📞</div>
                                    <div className="method-info">
                                        <strong>Teléfono</strong>
                                        <span>+54 11 2350-0092</span>
                                        <small>Lun a Vie 9 a 13hs y 14 a 18hs</small>
                                    </div>
                                </a>

                                <a href="mailto:ecodecorargentina@gmail.com" className="contact-method">
                                    <div className="method-icon email">✉️</div>
                                    <div className="method-info">
                                        <strong>Email</strong>
                                        <span>ecodecorargentina@gmail.com</span>
                                        <small>Para consultas detalladas</small>
                                    </div>
                                </a>

                                <div className="contact-method">
                                    <div className="method-icon location">📍</div>
                                    <div className="method-info">
                                        <strong>Ubicación</strong>
                                        <span>Del Viso, Pilar</span>
                                        <small>Envíos a todo el país</small>
                                    </div>
                                </div>
                            </div>

                            <div className="contacto-social-links">
                                <h3>Seguinos en redes</h3>
                                <div className="contacto-social-icons">
                                    <a href="https://www.instagram.com/ecodecor_argentina/" target="_blank" rel="noopener noreferrer" className="contacto-social-icon instagram">
                                        Instagram
                                    </a>
                                    <a href="https://facebook.com/profile.php?id=61556778683349&locale=es_LA" target="_blank" rel="noopener noreferrer" className="contacto-social-icon facebook">
                                        Facebook
                                    </a>
                                </div>
                            </div>
                        </motion.div>

                        {/* Map / CTA */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="contacto-map"
                        >
                            <div className="map-placeholder">
                                <span>🗺️</span>
                                <h3>Del Viso, Pilar</h3>
                                <p>Realizamos envíos a todo el país</p>
                            </div>

                            <div className="quick-cta">
                                <h3>¿Necesitás un presupuesto?</h3>
                                <p>Completá nuestro formulario y recibí tu cotización personalizada.</p>
                                <a href="/cotizar" className="btn-cotizar">
                                    Ir a Cotizar →
                                </a>
                            </div>

                            <div className="horarios">
                                <h3>Horarios de Atención</h3>
                                <ul>
                                    <li>
                                        <strong>Lunes a Viernes</strong>
                                        <span>9:00 - 13:00 y 14:00 - 18:00</span>
                                    </li>
                                    <li>
                                        <strong>Sábados</strong>
                                        <span>9:00 - 13:00</span>
                                    </li>
                                    <li>
                                        <strong>Domingos</strong>
                                        <span>Cerrado</span>
                                    </li>
                                </ul>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <WhatsAppButton />
        </>
    );
};

export default Contacto;
