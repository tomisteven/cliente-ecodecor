import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../../components/SEO';
import WhatsAppButton from '../../components/WhatsAppButton';
import './ProductDetail.css';

// Import images
import heroImage from '../../assets/optimized/Ecopaper-Diseno-3.webp';
import img1 from '../../assets/optimized/Ecopaper-Diseno-8-1.webp';
import img2 from '../../assets/optimized/Ecopaper-Diseno-9.webp';

const features = [
    {
        icon: '📜',
        title: 'Aspecto Artesanal',
        description: 'Acabado que evoca la belleza del papel hecho a mano con texturas únicas e irrepetibles.'
    },
    {
        icon: '🎨',
        title: 'Múltiples Diseños',
        description: 'Gran variedad de patrones y colores para adaptarse a cualquier estilo decorativo.'
    },
    {
        icon: '💪',
        title: 'Resistente',
        description: 'A pesar de su delicada apariencia, ofrece excelente durabilidad y resistencia.'
    },
    {
        icon: '🔄',
        title: 'Versátil',
        description: 'Combina perfectamente con otros materiales y estilos de decoración.'
    },
    {
        icon: '✋',
        title: 'Textura Táctil',
        description: 'Superficie con relieve que invita al tacto y añade dimensión a las paredes.'
    },
    {
        icon: '💡',
        title: 'Juego de Luces',
        description: 'Su textura crea efectos de luz y sombra que cambian durante el día.'
    }
];

const applications = [
    { name: 'Paredes de acento', icon: '🎯' },
    { name: 'Cabeceras', icon: '🛏️' },
    { name: 'Estudios', icon: '📚' },
    { name: 'Galerías', icon: '🖼️' },
    { name: 'Restaurantes', icon: '🍽️' },
    { name: 'Boutiques', icon: '👗' }
];

const SedaPapel = () => {
    return (
        <>
            <SEO
                title="Revestimiento Seda Papel | Elegancia Artesanal"
                description="Revestimiento con textura de papel artesanal. Combina delicadeza con resistencia. Múltiples diseños disponibles. Cotizá gratis en EcoDecor."
                keywords="seda papel, revestimiento papel, textura artesanal, papel decorativo, revestimiento paredes, acabado papel"
                url="/productos/seda-papel"
            />

            {/* Hero Section */}
            <section className="product-hero" style={{ backgroundImage: `url(${heroImage})` }}>
                <div className="product-hero-overlay"></div>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="product-hero-content"
                    >
                        <span className="product-badge">ELEGANCIA ARTESANAL</span>
                        <h1>Seda Papel</h1>
                        <p className="product-tagline">
                            La Delicadeza del Papel con Durabilidad Moderna
                        </p>
                        <div className="product-hero-actions">
                            <Link to="/cotizar" className="btn-hero-primary">
                                Cotizar Ahora
                            </Link>
                            <a href="#caracteristicas" className="btn-hero-secondary">
                                Ver Características
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Intro Section */}
            <section className="product-intro">
                <div className="container">
                    <div className="intro-grid">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="intro-content"
                        >
                            <h2>Arte en tus Paredes</h2>
                            <p>
                                El revestimiento <strong>Seda Papel</strong> captura la esencia del
                                papel artesanal tradicional. Cada panel cuenta una historia a través
                                de sus texturas únicas y patrones orgánicos.
                            </p>
                            <p>
                                Perfecto para crear <strong>puntos focales</strong> en cualquier espacio,
                                este revestimiento transforma paredes ordinarias en obras de arte
                                táctiles que despiertan los sentidos.
                            </p>
                            <div className="intro-stats">
                                <div className="stat">
                                    <span className="stat-number">20+</span>
                                    <span className="stat-label">Diseños únicos</span>
                                </div>
                                <div className="stat">
                                    <span className="stat-number">DIY</span>
                                    <span className="stat-label">Fácil instalación</span>
                                </div>
                                <div className="stat">
                                    <span className="stat-number">∞</span>
                                    <span className="stat-label">Creatividad</span>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="intro-images"
                        >
                            <img src={img1} alt="Seda Papel textura" className="intro-img-main" loading="lazy" />
                            <img src={img2} alt="Seda Papel aplicación" className="intro-img-secondary" loading="lazy" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="caracteristicas" className="product-features">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="section-header"
                    >
                        <h2>Características</h2>
                        <p>Lo que hace especial a Seda Papel</p>
                    </motion.div>

                    <div className="features-grid">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                className="feature-card"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <span className="feature-icon">{feature.icon}</span>
                                <h3>{feature.title}</h3>
                                <p>{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Applications Section */}
            <section className="product-applications">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="section-header"
                    >
                        <h2>Aplicaciones</h2>
                        <p>Espacios ideales para Seda Papel</p>
                    </motion.div>

                    <div className="applications-grid">
                        {applications.map((app, index) => (
                            <motion.div
                                key={index}
                                className="application-item"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <span className="app-icon">{app.icon}</span>
                                <span className="app-name">{app.name}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="product-cta">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="cta-box"
                    >
                        <h2>¿Te interesa Seda Papel?</h2>
                        <p>
                            Solicitá tu presupuesto personalizado sin compromiso.
                            Nuestros asesores te ayudan a elegir el diseño perfecto.
                        </p>
                        <div className="cta-actions">
                            <Link to="/cotizar" className="btn-cta-primary">
                                Solicitar Cotización
                            </Link>
                            <Link to="/galeria" className="btn-cta-secondary">
                                Ver Proyectos
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            <WhatsAppButton />
        </>
    );
};

export default SedaPapel;
