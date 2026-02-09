import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Reveal, FadeIn } from '../components/Reveal';
import SEO from '../components/SEO';
import './Gallery.css';

// Importación dinámica de imágenes optimizadas
const imagesGlob = import.meta.glob('../assets/optimized/*.{jpg,jpeg,png,webp}', { eager: true });

// Convertimos el objeto glob a un array de URLs
const galleryImages = Object.values(imagesGlob).map(img => img.default);

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <div className="gallery-page">
            <SEO
                title="Galería de Proyectos"
                description="Explora nuestros proyectos realizados con revestimientos WPC, mármol PVC y más. Inspírate para tu próxima renovación."
                url="/galeria"
            />
            <header className="gallery-header">
                <div className="container">
                    <Reveal>
                        <h1>Nuestra Galería</h1>
                        <p className="gallery-subtitle">Inspiración real para transformar tus espacios</p>
                        <div className="divider mx-auto"></div>
                    </Reveal>
                </div>
            </header>

            <section className="gallery-content container">
                <div className="gallery-grid">
                    {galleryImages.map((src, index) => (
                        <FadeIn key={index} delay={index % 4 * 0.1}>
                            <div className="gallery-item" onClick={() => setSelectedImage(src)}>
                                <img src={src} alt={`Proyecto Ecodecor ${index + 1}`} loading="lazy" />
                                <div className="gallery-overlay">
                                    <span>Ver Proyecto</span>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </section>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        className="lightbox-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.div
                            className="lightbox-img-container"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()} // Evitar cierre al clic en imagen
                        >
                            <img src={selectedImage} alt="Detalle Proyecto" />
                            <button className="close-lightbox" onClick={() => setSelectedImage(null)}>×</button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Gallery;
