import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../../components/SEO';
import WhatsAppButton from '../../components/WhatsAppButton';
import './ProductDetail.css';

// Import images
import heroImage from '../../assets/optimized/Ecopaper-Diseno-4.webp';
import img1 from '../../assets/optimized/Ecopaper-Diseno-10.webp';
import img2 from '../../assets/optimized/Ecopaper-Diseno-12.webp';

const features = [
    {
        icon: '🧵',
        title: 'Acabado Textil',
        description: 'textura que replica la sofisticación de la seda el algodón en tu paredes.'
    },
    {
        icon: '🛡️',
        title: '100% Reparable',
        description: 'Revestimiento 100% reparable.'
    },
    {
        icon: '👑',
        title: 'Look Premium',
        description: 'Aspecto lujoso que eleva cualquier ambiente a un nivel superior de elegancia.'
    },
    {
        icon: '🔇',
        title: 'Aislación Acústica',
        description: 'Contribuye a reducir el ruido ambiente, creando espacios más tranquilos.'
    },

    {
        icon: '🌡️',
        title: 'Confort Térmico',
        description: 'Ayuda a mantener la temperatura ambiente de forma natural.'
    },
    {
        icon: '♾️',
        title: 'Durabilidad',
        description: 'Materiales de alta calidad que mantienen su aspecto por muchos años.'
    }
];

const applications = [
    { name: 'Suites de lujo', icon: '🏨' },
    { name: 'Salas de reuniones', icon: '👔' },
    { name: 'Home theaters', icon: '🎬' },
    { name: 'Vestidores', icon: '👗' },
    { name: 'Spas', icon: '🧘' },
    { name: 'Lobbies', icon: '🏛️' }
];

const SedaTextiles = () => {
    return (
        <>
            <SEO
                title="Revestimiento Seda Textiles | Lujo y Sofisticación"
                description="Revestimiento con acabado textil premium. Aporta profundidad y sofisticación. Aislación acústica y anti manchas. Cotizá gratis en EcoDecor."
                keywords="seda textiles, revestimiento textil, acabado tela, revestimiento premium, decoración lujo, paredes textiles"
                url="/productos/seda-textiles"
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
                        <span className="product-badge">LUJO Y SOFISTICACIÓN</span>
                        <h1>Seda Textiles</h1>
                        <p className="product-tagline">
                            La Elegancia de las Telas en tus Paredes
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
                            <h2>El Lujo Hecho Revestimiento</h2>
                            <p>
                                <strong>Seda Textiles</strong> representa lo más exclusivo de nuestra
                                línea. Con acabados que emulan las telas más finas del mundo,
                                transforma cualquier espacio en un ambiente de alta gama.
                            </p>
                            <p>
                                Más que decoración, es una <strong>experiencia sensorial</strong>.
                                Su textura invita al tacto mientras su apariencia sofisticada
                                cautiva la vista. Ideal para quienes no aceptan menos que lo mejor.
                            </p>
                            <div className="intro-stats">
                                <div className="stat">
                                    <span className="stat-number">★★★</span>
                                    <span className="stat-label">Línea Premium</span>
                                </div>
                                <div className="stat">
                                    <span className="stat-number">-30%</span>
                                    <span className="stat-label">Reducción ruido</span>
                                </div>
                                <div className="stat">
                                    <span className="stat-number">15</span>
                                    <span className="stat-label">Años garantía</span>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="intro-images"
                        >
                            <img src={img1} alt="Seda Textiles textura" className="intro-img-main" loading="lazy" />
                            <img src={img2} alt="Seda Textiles aplicación" className="intro-img-secondary" loading="lazy" />
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
                        <p>Lo que hace especial a Seda Textiles</p>
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
                        <p>Espacios ideales para Seda Textiles</p>
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
                        <h2>¿Te interesa Seda Textiles?</h2>
                        <p>
                            Solicitá tu presupuesto personalizado sin compromiso.
                            Nuestros asesores te ayudan a crear espacios de lujo.
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

export default SedaTextiles;
