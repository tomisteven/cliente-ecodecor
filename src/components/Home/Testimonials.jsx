import React from 'react';
import './Testimonials.css';
import { Reveal, FadeIn } from '../Reveal';
import logo from '../../assets/logo.png'; // Usamos logo como badge si no hay otro asset específico

const Testimonials = () => {
    return (
        <section className="testimonials-section">
            <div className="container">
                <Reveal>
                    <div className="section-header text-center">
                        <h2>Porque los clientes nos eligen?</h2>
                        <div className="divider mx-auto mb-5"></div>
                    </div>
                </Reveal>

                <div className="testimonials-content-wrapper">
                    <div className="testimonials-grid">
                        <FadeIn delay={0.2} direction="right">
                            <div className="client-reason-item">
                                <h4>Variedad</h4>
                                <p>Amplia gama de colores y texturas para todos los gustos.</p>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.3} direction="right">
                            <div className="client-reason-item">
                                <h4>Facil y rapido de aplicar</h4>
                                <p>Se aplica en una sola pasada y no genera suciedad</p>
                            </div>
                        </FadeIn>
                    </div>

                    <div className="center-badge-container">
                        <Reveal delay={0.4}>
                            <div className="badge-wrapper">
                                {/* Simulando el badge verde de la imagen */}
                                <div className="eco-badge">
                                    <img src={logo} alt="Ecodecor Calidad" />
                                    <span>Calidad Garantizada</span>
                                </div>
                            </div>
                        </Reveal>
                    </div>

                    <div className="testimonials-grid">
                        <FadeIn delay={0.2} direction="left">
                            <div className="client-reason-item text-right">
                                <h4>Equipo profesional</h4>
                                <p>Visitas a domicilio para asesoramiento y aplicación</p>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.3} direction="left">
                            <div className="client-reason-item text-right">
                                <h4>Sustentable</h4>
                                <p>Los habitos sustentables crean un mejor futuro para todos</p>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
