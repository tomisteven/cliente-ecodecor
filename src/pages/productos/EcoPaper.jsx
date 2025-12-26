import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../../components/SEO';
import WhatsAppButton from '../../components/WhatsAppButton';
import './ProductDetail.css';

// Import images
import heroImage from '../../assets/Ecopaper-Diseno-5.jpg';
import img1 from '../../assets/Ecopaper-Diseno-13.jpg';
import img2 from '../../assets/Ecopaper-Diseno-14.jpg';

const features = [
    {
        icon: '🌍',
        title: '100% Ecológico',
        description: 'Fabricado con materiales reciclados y naturales. Contribuye a un planeta más sustentable.'
    },
    {
        icon: '🎨',
        title: 'Texturas Únicas',
        description: 'Acabados artesanales con texturas orgánicas imposibles de replicar con otros materiales.'
    },
    {
        icon: '✨',
        title: 'Fácil Aplicación',
        description: 'Sistema adhesivo de alta calidad. Aplicación simple sin herramientas especiales.'
    },
    {
        icon: '💵',
        title: 'Económico',
        description: 'La opción más accesible para crear acentos decorativos de alto impacto visual.'
    },
    {
        icon: '🔄',
        title: 'Renovable',
        description: 'Fácil de remover y reemplazar. Ideal para quienes les gusta renovar frecuentemente.'
    },
    {
        icon: '🎯',
        title: 'Acentos Decorativos',
        description: 'Perfecto para paredes de acento, cabeceras y espacios que necesitan un toque especial.'
    }
];

const styles = [
    { name: 'Kraft Natural', icon: '📜' },
    { name: 'Textura Lino', icon: '🧵' },
    { name: 'Fibra Orgánica', icon: '🌿' },
    { name: 'Patrón Geométrico', icon: '🔷' },
    { name: 'Efecto Tejido', icon: '🪢' },
    { name: 'Minimalista', icon: '⬜' }
];

const EcoPaper = () => {
    return (
        <>
            <SEO
                title="EcoPaper | Revestimiento Ecológico Decorativo"
                description="Papel decorativo ecológico con texturas únicas. Ideal para acentos decorativos sustentables. Fácil aplicación, económico y renovable. Cotizá en EcoDecor."
                keywords="ecopaper, papel decorativo, revestimiento ecológico, decoración sustentable, papel pared, acento decorativo, textura natural"
                url="/productos/ecopaper"
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
                        <span className="product-badge">SUSTENTABLE</span>
                        <h1>EcoPaper</h1>
                        <p className="product-tagline">
                            Decoración Ecológica con Texturas Únicas
                        </p>
                        <div className="product-hero-actions">
                            <Link to="/cotizar" className="btn-hero-primary">
                                Cotizar Ahora
                            </Link>
                            <a href="#caracteristicas" className="btn-hero-secondary">
                                Conocer Más
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
                            <h2>Decoración Consciente</h2>
                            <p>
                                <strong>EcoPaper</strong> es nuestra línea de revestimientos fabricados
                                con materiales reciclados y fibras naturales. Cada pieza es única,
                                con texturas orgánicas que aportan calidez y originalidad a cualquier espacio.
                            </p>
                            <p>
                                Ideal para quienes buscan un toque distintivo sin comprometer el
                                medio ambiente. Perfectos para <strong>paredes de interiores</strong>,
                                cabeceras de cama, espacios comerciales, habitaciones, salas de estar,
                                con identidad eco-friendly y proyectos de diseño sustentable.
                            </p>
                            <div className="intro-stats">
                                <div className="stat">
                                    <span className="stat-number">♻️</span>
                                    <span className="stat-label">Material reciclado</span>
                                </div>
                                <div className="stat">
                                    <span className="stat-number">DIY</span>
                                    <span className="stat-label">Fácil instalación</span>
                                </div>
                                <div className="stat">
                                    <span className="stat-number">$</span>
                                    <span className="stat-label">Económico</span>
                                </div>
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="intro-images"
                        >
                            <img src={img1} alt="EcoPaper textura natural" className="intro-img-main" />
                            <img src={img2} alt="EcoPaper acabado" className="intro-img-secondary" />
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
                        <p>Lo que hace especial a EcoPaper</p>
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

            {/* Styles Section */}
            <section className="product-applications">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="section-header"
                    >
                        <h2>Estilos Disponibles</h2>
                        <p>Texturas únicas para cada proyecto</p>
                    </motion.div>

                    <div className="applications-grid">
                        {styles.map((style, index) => (
                            <motion.div
                                key={index}
                                className="application-item"
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <span className="app-icon">{style.icon}</span>
                                <span className="app-name">{style.name}</span>
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
                        <h2>¿Buscás algo único y sustentable?</h2>
                        <p>
                            EcoPaper es la elección perfecta para proyectos con conciencia ambiental.
                            Consultanos sobre las texturas disponibles.
                        </p>
                        <div className="cta-actions">
                            <Link to="/cotizar" className="btn-cta-primary">
                                Consultar Disponibilidad
                            </Link>
                            <Link to="/productos" className="btn-cta-secondary">
                                Ver Otros Productos
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            <WhatsAppButton />
        </>
    );
};

export default EcoPaper;
