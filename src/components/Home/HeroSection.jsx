import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './HeroSection.css';

// Imports de nuevas imágenes para Banner
import banner1 from '../../assets/ECODECOR/515016540_17973766148862930_4478820150561117147_n.jpg';
import banner2 from '../../assets/ECODECOR/20251202_181559.jpg';
import banner3 from '../../assets/ECODECOR/20251205_153145.jpg';
import banner4 from '../../assets/ECODECOR/20251205_153338.jpg';
// Nuevas 4
import banner5 from '../../assets/ECODECOR/3.jpg';
import banner6 from '../../assets/ECODECOR/Recoat.jpg';
import banner7 from '../../assets/ECODECOR/Victoria.jpg';
import banner8 from '../../assets/ECODECOR/20251205_153412.jpg';

const slides = [
    {
        id: 1,
        image: banner1,
        title: "Antialérgico, Acústico, Inholoro",
        subtitle: "Se repara, se reutiliza, no deja enmiendas",
        cta: "Quiero conocer más",
        link: "/productos"
    },
    {
        id: 2,
        image: banner2,
        title: "Renovación Sin Obra",
        subtitle: "Ideal para oficinas, hoteles y residencias",
        cta: "Contáctanos",
        link: "/contacto"
    },
    {
        id: 3,
        image: banner3,
        title: "Diseño Sostenible",
        subtitle: "Cuidamos tu salud y el medio ambiente",
        cta: "Ver Catálogo",
        link: "/nosotros"
    },
    {
        id: 4,
        image: banner4,
        title: "Acabados Exclusivos",
        subtitle: "Transforma tus paredes en obras de arte",
        cta: "Ver Galería",
        link: "/galeria"
    },
    {
        id: 5,
        image: banner5,
        title: "Texturas que Enamoran",
        subtitle: "Dale vida y calidez a cada rincón",
        cta: "Ver Colores",
        link: "/productos"
    },
    {
        id: 6,
        image: banner6,
        title: "Innovación en Decoración",
        subtitle: "Tendencias europeas en tu hogar",
        cta: "Inspirate",
        link: "/galeria"
    },
    {
        id: 7,
        image: banner7,
        title: "Aplicación Rápida",
        subtitle: "Renueva tus ambientes en tiempo récord",
        cta: "Ver Videos",
        link: "/#videos" // Enlace ancla si se implementa, o a Inicio
    },
    {
        id: 8,
        image: banner8,
        title: "Calidad Ecodecor",
        subtitle: "Líderes en revestimientos ecológicos",
        cta: "Contactar Asesor",
        link: "/contacto"
    }
];

const HeroSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 6000);
        return () => clearInterval(interval);
    }, []);

    const nextSlide = () => {
        setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
    };

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
    };

    return (
        <section className="hero-section">
            <AnimatePresence mode='wait'>
                {slides.map((slide, index) => (
                    index === currentSlide && (
                        <motion.div
                            key={slide.id}
                            className="hero-slide active"
                            style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${slide.image})` }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="container hero-content">
                                <motion.h1
                                    initial={{ y: 30, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.7, duration: 0.8 }}
                                >
                                    {slide.title}
                                </motion.h1>
                                <motion.p
                                    initial={{ y: 30, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.8, duration: 0.8 }}
                                >
                                    {slide.subtitle}
                                </motion.p>
                                <motion.div
                                    initial={{ scale: 0.8, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    transition={{ delay: 1.1, duration: 0.5 }}
                                >
                                    <Link to={slide.link} className="btn-hero">{slide.cta}</Link>
                                </motion.div>
                            </div>
                        </motion.div>
                    )
                ))}
            </AnimatePresence>

            <button className="slider-arrow left" onClick={prevSlide} aria-label="Anterior">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
            </button>
            <button className="slider-arrow right" onClick={nextSlide} aria-label="Siguiente">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
            </button>

            <div className="slider-dots">
                {slides.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${index === currentSlide ? 'active' : ''}`}
                        onClick={() => setCurrentSlide(index)}
                    ></span>
                ))}
            </div>
        </section>
    );
};

export default HeroSection;
