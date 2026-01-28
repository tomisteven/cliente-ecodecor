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
                title="Conocé EcoDecor | Glamour Ecológico con Ecopaper"
                description="EcoDecor es representante de Ecopaper en Argentina. Descubrí el papel de pared líquido: sustentable, aislante y 100% reutilizable. Líderes en revestimientos de última generación."
                keywords="ecodecor, ecopaper argentina, papel de pared liquido, revestimientos ecologicos, decoracion sustentable, ecodecor pilar"
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
                        <span className="hero-label">REVESTIMIENTOS DE ÚLTIMA GENERACIÓN</span>
                        <h1 className='h1-container-nosotros'>¡Una explosión de <span>glamour ecológico</span> en tus paredes!</h1>
                        <p>Innovación sustentable para transformar cada rincón de tu hogar</p>
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
                            <span className="section-label">Nuestra Trayectoria</span>
                            <h2>Calidad internacional ahora en Argentina</h2>
                            <p>
                                <strong>EcoDecor</strong> es una empresa internacional que comercializa sus productos en Argentina
                                a través de una red de franquicias en expansión. Representamos el auténtico <strong>Ecopaper</strong>,
                                un producto de uso consolidado en los mercados europeos, Estados Unidos y Brasil.
                            </p>
                            <p>
                                Conocido técnicamente como "papel de pared líquido", Ecopaper está fabricado a base de
                                <strong> seda, algodón y fibras naturales</strong>. Su llegada al país responde a la necesidad
                                de ofrecer una alternativa estética de vanguardia que sea, al mismo tiempo, respetuosa
                                con el medio ambiente y funcional para el hogar moderno.
                            </p>
                            <p>
                                Con sede principal en <strong>Pilar, Buenos Aires</strong>, nuestra misión es acompañar a cada
                                cliente con asesoramiento y atención personalizada, garantizando resultados que combinan
                                confort térmico, acústico y una belleza inigualable.
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
                                <span className="stat-number-nosotros">{stat.number}</span>
                                <span className="stat-label-nosotros">{stat.label}</span>
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
                        <span className="section-label">Tecnología y Confort</span>
                        <h2>Beneficios de Ecopaper</h2>
                    </motion.div>

                    <div className="benefits-grid">
                        <motion.div className="benefit-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                            <span className="benefit-icon">🌿</span>
                            <h4>Sustentabilidad</h4>
                            <p>100% ecológico, inodoro y con certificación europea de calidad.</p>
                        </motion.div>
                        <motion.div className="benefit-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
                            <span className="benefit-icon">♻️</span>
                            <h4>Reutilizable</h4>
                            <p>Se puede recuperar con agua y reutilizarlo en otro lugar sin perder sus propiedades.</p>
                        </motion.div>
                        <motion.div className="benefit-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
                            <span className="benefit-icon">🔇</span>
                            <h4>Aislación</h4>
                            <p>Excelente aislante acústico y térmico natural para tus ambientes.</p>
                        </motion.div>
                        <motion.div className="benefit-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
                            <span className="benefit-icon">🛠️</span>
                            <h4>Fácil Aplicación</h4>
                            <p>Sin enmiendas ni suciedad. Permite cubrir hasta 30m² por día.</p>
                        </motion.div>
                        <motion.div className="benefit-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}>
                            <span className="benefit-icon">🧱</span>
                            <h4>Práctico</h4>
                            <p>Cubre grietas y huecos en una sola pasada. Es elástico y antiestático.</p>
                        </motion.div>
                        <motion.div className="benefit-card" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 }}>
                            <span className="benefit-icon">🔥</span>
                            <h4>Seguridad</h4>
                            <p>Material ignífugo y antialérgico, protegiendo la salud de toda la familia.</p>
                        </motion.div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="section-header"
                        style={{ marginTop: '80px' }}
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
                        <p className="cta-quote">"A todos nuestros clientes ofrecemos asesoramiento y atención personalizada"</p>
                        <div className="cta-buttons">
                            <a href="/cotizar" className="btn-cta">
                                Solicitar Asesoramiento
                            </a>
                            <a href="https://wa.me/5491125181120" target="_blank" rel="noopener noreferrer" className="btn-cta-secondary">
                                WhatsApp: 11 2518-1120
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            <WhatsAppButton />
        </>
    );
};

export default Nosotros;
