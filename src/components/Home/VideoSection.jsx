import React, { useRef } from 'react';
import './VideoSection.css';
import { Reveal, FadeIn } from '../Reveal';
import { motion } from 'framer-motion';

import img1 from '../../assets/ECODECOR/20251202_181554.jpg';
import img2 from '../../assets/ECODECOR/3.jpg';
import img3 from '../../assets/ECODECOR/20251205_153338.jpg';
import img4 from '../../assets/ECODECOR/20251205_153342.jpg';
import img5 from '../../assets/ECODECOR/20251205_153349.jpg';
import img6 from '../../assets/ECODECOR/515016540_17973766148862930_4478820150561117147_n.jpg';
import img7 from '../../assets/ECODECOR/457193784_17931724688919263_4452654476385081158_n.jpg';

// Importación directa de videos
import video1 from '../../assets/videos/Ecodecor-video-5.mp4';
import video2 from '../../assets/videos/Ecopaper-Diseno-Video2.mp4';
import video3 from '../../assets/videos/Ecopaper-Diseno-Video3.mp4';
import video4 from '../../assets/videos/Ecopaper-Diseno-Video4.mp4';
// Videos faltantes
import video5 from '../../assets/videos/10000000_689200899860797_6295591672541429476_n.mp4';
import video6 from '../../assets/videos/407425941_1529290557827321_1778112316774832661_n.mp4';

// Posters (imágenes placeholder limpias de internet relacionadas a decoración)
const poster1 = img1;
const poster2 = img2;
const poster3 = img3;
const poster4 = img4;
const poster5 = img5;
const poster6 = img6;

const VideoItem = ({ src, poster, title, subtitle, delay }) => {
    const videoRef = useRef(null);

    return (
        <FadeIn delay={delay}>
            <div className="video-card-wrapper">
                <div className="video-container-styled">
                    <video
                        ref={videoRef}
                        src={src}
                        poster={poster}
                        controls
                        className="video-player"
                        preload="metadata"
                    />
                    {/* Overlay sutil antes de reproducir (desaparece al usar controles nativos, 
                         pero sirve para dar contexto visual si el navegador lo permite mostrar bajo controles) */ }
                </div>
                <div className="video-info">
                    <div className="info-header">
                        <h4>{title}</h4>
                    </div>
                    <p className="video-subtitle">{subtitle}</p>
                    <div className="watch-action">
                        <span>Ver video</span>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polygon points="10 8 16 12 10 16 10 8" /></svg>
                    </div>
                </div>
            </div>
        </FadeIn>
    );
};

const VideoSection = () => {
    return (
        <section className="video-section">
            <div className="container">
                <Reveal>
                    <div className="section-header-light">
                        <h2>Super fácil de preparar y aplicar</h2>
                        <div className="divider mx-auto mb-4" style={{ backgroundColor: 'var(--color-primary)' }}></div>
                    </div>
                    <p className="p-section-header-light text-center">
                        Mira nuestros videos instructivos y casos reales de aplicación para inspirarte.
                    </p>
                </Reveal>

                <div className="video-grid">
                    <VideoItem
                        src={video1}
                        poster={poster1}
                        title="Preparación de Material"
                        subtitle="Aprende a mezclar correctamente"
                        delay={0.1}
                    />
                    <VideoItem
                        src={video2}
                        poster={poster2}
                        title="Aplicación Paso a Paso"
                        subtitle="Técnica básica de aplicación"
                        delay={0.2}
                    />
                    <VideoItem
                        src={video3}
                        poster={poster3}
                        title="Texturas y Acabados"
                        subtitle="Cómo lograr el efecto deseado"
                        delay={0.3}
                    />
                    <VideoItem
                        src={video4}
                        poster={poster4}
                        title="Renovación Completa"
                        subtitle="Transformación total de living"
                        delay={0.4}
                    />
                    <VideoItem
                        src={video5}
                        poster={poster5}
                        title="Detalles Finales"
                        subtitle="El toque de perfección"
                        delay={0.5}
                    />
                    <VideoItem
                        src={video6}
                        poster={poster6}
                        title="Resultado Exclusivo"
                        subtitle="Clientes felices con su nuevo hogar"
                        delay={0.6}
                    />
                </div>
            </div>
        </section>
    );
};

export default VideoSection;
