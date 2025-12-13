import React from 'react';
import './WhyChooseUs.css';
import { Reveal, FadeIn } from '../Reveal';
import { motion } from 'framer-motion';

// Iconos lineales elegantes
const ContactIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
);

const ChatIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
);

const EnjoyIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>
    /* Usamos icono de cliente/persona disfrutando */
);

const StepCard = ({ number, title, desc, icon: Icon, delay }) => {
    return (
        <FadeIn delay={delay} direction="up" className="step-card-wrapper">
            <div className="step-card-elegant">
                <div className="step-number-bg">{number}</div>
                <div className="step-content">
                    <div className="step-icon-elegant">
                        <Icon />
                    </div>
                    <h4>{title}</h4>
                    <p>{desc}</p>
                </div>
            </div>
        </FadeIn>
    )
}

const WhyChooseUs = () => {
    return (
        <section className="why-us-section">
            <div className="container">
                <Reveal>
                    <div className="section-header text-center">
                        <span className="section-subtitle">Proceso Simplificado</span>
                        <h2>Transforma Tu Espacio en 3 Pasos</h2>
                        <div className="divider mx-auto"></div>
                    </div>
                </Reveal>

                <div className="steps-container-elegant">
                    <StepCard
                        number="01"
                        title="Póngase en contacto"
                        desc="Coordine una visita técnica sin cargo para evaluar su proyecto."
                        icon={ContactIcon}
                        delay={0.2}
                    />

                    <div className="step-connector"></div>

                    <StepCard
                        number="02"
                        title="Despeje sus dudas"
                        desc="Reciba asesoramiento experto sobre colores, texturas y beneficios."
                        icon={ChatIcon}
                        delay={0.4}
                    />

                    <div className="step-connector"></div>

                    <StepCard
                        number="03"
                        title="Disfrute su ambiente"
                        desc="Aplicación rápida, limpia y profesional. ¡Listo para estrenar!"
                        icon={EnjoyIcon}
                        delay={0.6}
                    />
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
