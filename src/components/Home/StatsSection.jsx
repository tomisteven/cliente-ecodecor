import React, { useEffect, useState, useRef } from 'react';
import './StatsSection.css';
import { Reveal, FadeIn } from '../Reveal';

// Iconos SVG simples para no depender de librería externa
const ProjectIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21h18M5 21V7l8-4 8 4v14M8 21v-8a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v8" /></svg>
);
const ClientIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
);
const ColorIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="13.5" cy="6.5" r=".5" /><circle cx="17.5" cy="10.5" r=".5" /><circle cx="8.5" cy="7.5" r=".5" /><circle cx="6.5" cy="12.5" r=".5" /><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" /></svg>
);
const FollowerIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
);

const useCounter = (end, duration = 2000) => {
    const [count, setCount] = useState(0);
    const countRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.disconnect();
            }
        });

        if (countRef.current) {
            observer.observe(countRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!isVisible) return;

        let startTime;
        const animationFrame = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / duration, 1);

            setCount(Math.floor(end * percentage));

            if (progress < duration) {
                requestAnimationFrame(animationFrame);
            }
        };

        requestAnimationFrame(animationFrame);
    }, [isVisible, end, duration]);

    return { count, countRef };
};

const StatItem = ({ number, label, icon: Icon, delay }) => {
    const numericValue = parseInt(number.replace(/\D/g, ''));
    const { count, countRef } = useCounter(numericValue || 0);

    return (
        <div className="stat-card-modern" ref={countRef}>
            <FadeIn delay={delay} direction="up">
                <div className="stat-icon-wrapper">
                    <Icon />
                </div>
                <span className="stat-number-modern">{count}</span>
                <span className="stat-label-modern">{label}</span>
            </FadeIn>
        </div>
    );
};

const StatsSection = () => {
    return (
        <section className="stats-section-modern">
            <div className="stats-overlay"></div>
            <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                <Reveal>
                    <h2 className="stats-title-modern">Nuestra Trayectoria</h2>
                    <p className="stats-subtitle">Resultados que respaldan nuestra pasión por la decoración</p>
                </Reveal>

                <div className="stats-container-modern">
                    <StatItem number="90" label="Proyectos Realizados" icon={ProjectIcon} delay={0.2} />
                    <StatItem number="100" label="Clientes Satisfechos" icon={ClientIcon} delay={0.3} />
                    <StatItem number="80" label="Variedad De Colores" icon={ColorIcon} delay={0.4} />
                    <StatItem number="33.001" label="Seguidores en Redes" icon={FollowerIcon} delay={0.5} />
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
