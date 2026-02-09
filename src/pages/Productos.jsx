import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import WhatsAppButton from '../components/WhatsAppButton';
import './Productos.css';

// Import images
import sedaAlgodonImage from '../assets/optimized/Ecopaper-Diseno-1.webp';
import sedaPapelImage from '../assets/optimized/Ecopaper-Diseno-3.webp';
import sedaTextilesImage from '../assets/optimized/Ecopaper-Diseno-4.webp';
import ecopaperImage from '../assets/optimized/Ecopaper-Diseno-5.webp';

const productos = [
    {
        id: 'ecopaper',
        title: 'EcoPaper',
        subtitle: 'Sustentable y Original',
        description: 'Revestimiento ecológico con texturas únicas. Fabricado con materiales reciclados. La opción perfecta para proyectos con conciencia ambiental.',
        features: ['100% ecológico', 'Texturas únicas', 'Reciclable'],
        image: ecopaperImage,
        link: '/productos/ecopaper'
    },
    {
        id: 'seda-algodon',
        title: 'Seda Algodón',
        subtitle: 'Textura Natural Premium',
        description: 'Revestimiento con acabado suave y natural de algodón. Aporta calidez y elegancia a cualquier ambiente. Ideal para livings, dormitorios y espacios que buscan confort visual.',
        features: ['Textura suave', 'Acabado natural', 'Alta durabilidad', 'Fácil aplicación'],
        image: sedaAlgodonImage,
        link: '/productos/seda-algodon'
    },
    {
        id: 'seda-papel',
        title: 'Seda Papel',
        subtitle: 'Elegancia Artesanal',
        description: 'Revestimiento con textura de papel artesanal. Combina la delicadeza del papel con la resistencia de materiales modernos. Perfecto para acentos decorativos.',
        features: ['Aspecto artesanal', 'Múltiples diseños', 'Resistente', 'Versátil'],
        image: sedaPapelImage,
        link: '/productos/seda-papel'
    },
    {
        id: 'seda-textiles',
        title: 'Seda Textiles',
        subtitle: 'Lujo y Sofisticación',
        description: 'Revestimiento con acabado textil premium. Aporta profundidad y sofisticación a los espacios. Ideal para ambientes que buscan un toque de lujo.',
        features: ['Acabado textil', 'Look premium', 'Aislación acústica', "Reparable", "Reutilizable"],
        image: sedaTextilesImage,
        link: '/productos/seda-textiles'
    }
];

const Productos = () => {
    return (
        <>
            <SEO
                title="Productos - Revestimientos Seda y EcoPaper"
                description="Catálogo de revestimientos EcoDecor: Seda Algodón, Seda Papel, Seda Textiles y EcoPaper. Texturas únicas para transformar tus espacios. Envíos a todo Argentina."
                keywords="revestimientos seda, seda algodón, seda papel, seda textiles, ecopaper, revestimientos decorativos, texturas paredes"
                url="/productos"
            />

            {/* Hero Section */}
            <section className="productos-hero">
                <div className="productos-hero-overlay"></div>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="productos-hero-content"
                    >
                        <h1>Nuestros Productos</h1>
                        <p className="productos-hero-subtitle">
                            Revestimientos de alta calidad para transformar cualquier espacio
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Products Grid */}
            <section className="productos-section">
                <div className="container">
                    <div className="productos-grid">
                        {productos.map((producto, index) => (
                            <motion.article
                                key={producto.id}
                                className="producto-card"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                            >
                                <div className="producto-image-wrapper">
                                    <img
                                        src={producto.image}
                                        alt={`${producto.title} - Revestimiento decorativo EcoDecor`}
                                        loading="lazy"
                                    />
                                    <div className="producto-overlay">
                                        <Link to={producto.link} className="btn-ver-mas">
                                            Ver Detalles
                                        </Link>
                                    </div>
                                </div>
                                <div className="producto-content">
                                    <span className="producto-subtitle">{producto.subtitle}</span>
                                    <h2>{producto.title}</h2>
                                    <p>{producto.description}</p>
                                    <ul className="producto-features">
                                        {producto.features.map((feature, i) => (
                                            <li key={i}>
                                                <span className="feature-icon">✓</span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <Link to={producto.link} className="producto-link">
                                        Explorar {producto.title} →
                                    </Link>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="productos-cta">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="cta-content"
                    >
                        <h2 className='h2-container-productos'>¿No sabés qué producto elegir?</h2>
                        <p className='p-container-productos'>
                            Nuestros asesores te ayudan a encontrar el revestimiento ideal
                            para tu proyecto. Cotización sin compromiso.
                        </p>
                        <Link to="/cotizar" className="btn-cta-primary">
                            Solicitar Asesoramiento
                        </Link>
                    </motion.div>
                </div>
            </section>

            <WhatsAppButton />
        </>
    );
};

export default Productos;
