import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import WhatsAppButton from '../components/WhatsAppButton';
import './Nosotros.css';
import image from '../assets/ECODECOR/3.jpg';

const values = [
    {
        icon: '🎯',
        title: 'Calidad Premium',
        description: 'Seleccionamos los mejores materiales del mercado para garantizar durabilidad y estética superior.'
    },
    {
        icon: '🤝',
        title: 'Compromiso',
        description: 'Cumplimos lo que prometemos. Plazos, presupuestos y calidad acordada.'
    },
    {
        icon: '💡',
        title: 'Innovación',
        description: 'Incorporamos constantemente las últimas tendencias y tecnologías en revestimientos.'
    },
    {
        icon: '🌱',
        title: 'Sustentabilidad',
        description: 'Priorizamos materiales ecológicos y procesos responsables con el medio ambiente.'
    }
];

const stats = [
    { number: '500+', label: 'Proyectos completados' },
    { number: '8', label: 'Años de experiencia' },
    { number: '100%', label: 'Clientes satisfechos' },
    { number: '24', label: 'Provincias alcanzadas' }
];

const Nosotros = () => {
    return (
        <>
            <SEO
                title="Quiénes Somos | Expertos en Revestimientos"
                description="Conocé a EcoDecor: más de 8 años transformando espacios en Argentina. Especialistas en paneles WPC, mármol PVC y soluciones decorativas de alta calidad."
                keywords="ecodecor, sobre nosotros, empresa revestimientos, decoración córdoba, especialistas interiores"
                url="/nosotros"
            />

            {/* Hero Section */}
            <section className="nosotros-hero">
                <div className="nosotros-hero-overlay"></div>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="nosotros-hero-content"
                    >
                        <h1 className='h1-container-nosotros'>Quiénes Somos</h1>
                        <p>Transformamos espacios con pasión y experiencia</p>
                    </motion.div>
                </div>
            </section>

            {/* Story Section */}
            <section className="nosotros-story">
                <div className="container">
                    <div className="story-grid">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="story-content"
                        >
                            <span className="section-label">Nuestra Historia</span>
                            <h2>De la pasión por el diseño a transformar hogares argentinos</h2>
                            <p>
                                <strong>EcoDecor</strong> nació en Córdoba con una visión clara: hacer accesible
                                la decoración de alta calidad para todos. Comenzamos como un pequeño emprendimiento
                                familiar y hoy somos referentes en revestimientos decorativos en Argentina.
                            </p>
                            <p>
                                Nuestra filosofía se centra en tres pilares: <strong>calidad sin compromiso</strong>,
                                <strong>atención personalizada</strong> y <strong>respeto por el medio ambiente</strong>.
                                Cada proyecto que realizamos es una oportunidad de transformar un espacio y
                                mejorar la calidad de vida de nuestros clientes.
                            </p>
                            <p>
                                Trabajamos con arquitectos, diseñadores, constructoras y clientes finales,
                                adaptándonos a cada necesidad y presupuesto. Nuestro compromiso es acompañarte
                                desde la elección del material hasta la instalación final.
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="story-image"
                        >
                            <div className="image-placeholder">
                                <img src={image} alt="" />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="nosotros-stats">
                <div className="container">
                    <div className="stats-grid">
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                className="stat-item"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <span className="stat-number">{stat.number}</span>
                                <span className="stat-label">{stat.label}</span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="nosotros-values">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="section-header"
                    >
                        <span className="section-label">Lo que nos define</span>
                        <h2>Nuestros Valores</h2>
                    </motion.div>

                    <div className="values-grid">
                        {values.map((value, index) => (
                            <motion.div
                                key={index}
                                className="value-card"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <span className="value-icon">{value.icon}</span>
                                <h3>{value.title}</h3>
                                <p>{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="nosotros-cta">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="cta-content"
                    >
                        <h2 className="h2-container-nosotros">¿Listo para transformar tu espacio?</h2>
                        <p>Contanos tu proyecto y hagamos realidad tu visión</p>
                        <a href="/cotizar" className="btn-cta">
                            Contactanos
                        </a>
                    </motion.div>
                </div>
            </section>

            <WhatsAppButton />
        </>
    );
};

export default Nosotros;
