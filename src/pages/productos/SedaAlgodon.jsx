import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../../components/SEO';
import WhatsAppButton from '../../components/WhatsAppButton';
import './ProductDetail.css';

// Import images
import heroImage from '../../assets/Ecopaper-Diseno-1.jpg';
import img1 from '../../assets/Ecopaper-Diseno-6.jpg';
import img2 from '../../assets/Ecopaper-Diseno-7.jpg';

const features = [
    {
        icon: '🌿',
        title: 'Textura Natural',
        description: 'Acabado suave y orgánico que replica la calidez del algodón natural en tus paredes.'
    },
    {
        icon: '✨',
        title: 'Elegancia Atemporal',
        description: 'Diseño clásico que nunca pasa de moda. Combina con cualquier estilo decorativo.'
    },
    {
        icon: '🛡️',
        title: 'Alta Durabilidad',
        description: 'Material resistente al desgaste y paso del tiempo. Mantiene su aspecto por años.'
    },
    {
        icon: '🔧',
        title: 'Fácil Aplicación',
        description: 'Sistema de instalación sencillo. Resultados profesionales sin complicaciones.'
    },
    {
        icon: '🎨',
        title: 'Variedad de Tonos',
        description: 'Amplia gama de colores naturales para adaptarse a tu proyecto.'
    },
    {
        icon: '🏠',
        title: 'Versátil',
        description: 'Ideal para livings, dormitorios, oficinas y cualquier espacio interior.'
    }
];

const applications = [
    { name: 'Living y comedor', icon: '🛋️' },
    { name: 'Dormitorios', icon: '🛏️' },
    { name: 'Oficinas', icon: '💼' },
    { name: 'Hoteles', icon: '🏨' },
    { name: 'Consultorios', icon: '🏥' },
    { name: 'Espacios comerciales', icon: '🏪' }
];

const SedaAlgodon = () => {
    return (
        <>
            <SEO
                title="Revestimiento Seda Algodón | Textura Natural Premium"
                description="Revestimiento con acabado suave y natural de algodón. Aporta calidez y elegancia a cualquier ambiente. Fácil aplicación. Cotizá gratis en EcoDecor."
                keywords="seda algodón, revestimiento algodón, textura natural, revestimiento paredes, decoración natural, acabado suave"
                url="/productos/seda-algodon"
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
                        <span className="product-badge">TEXTURA NATURAL</span>
                        <h1>Seda Algodón</h1>
                        <p className="product-tagline">
                            Calidez y Elegancia Natural para tus Espacios
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
                            <h2>La Suavidad del Algodón en tus Paredes</h2>
                            <p>
                                El revestimiento <strong>Seda Algodón</strong> trae la textura cálida
                                y natural del algodón a tus espacios. Su acabado suave y orgánico
                                crea ambientes acogedores que invitan al confort.
                            </p>
                            <p>
                                Ideal para quienes buscan una estética <strong>natural y elegante</strong>,
                                este revestimiento combina la belleza de los materiales orgánicos con
                                la durabilidad de los acabados modernos.
                            </p>
                            <div className="intro-stats">
                                <div className="stat">
                                    <span className="stat-number">15+</span>
                                    <span className="stat-label">Tonos disponibles</span>
                                </div>
                                <div className="stat">
                                    <span className="stat-number">10</span>
                                    <span className="stat-label">Años de garantía</span>
                                </div>
                                <div className="stat">
                                    <span className="stat-number">100%</span>
                                    <span className="stat-label">Satisfacción</span>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="intro-images"
                        >
                            <img src={img1} alt="Seda Algodón textura" className="intro-img-main" />
                            <img src={img2} alt="Seda Algodón aplicación" className="intro-img-secondary" />
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
                        <p>Lo que hace especial a Seda Algodón</p>
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
                        <p>Espacios ideales para Seda Algodón</p>
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
                        <h2>¿Te interesa Seda Algodón?</h2>
                        <p>
                            Solicitá tu presupuesto personalizado sin compromiso.
                            Nuestros asesores te ayudan a elegir el tono ideal.
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

export default SedaAlgodon;
