import React from 'react';
import './InfoSection.css';
import { Reveal, FadeIn } from '../Reveal';
import ecoImage from '../../assets/Ecopaper-Diseno-8-1.jpg'; // Usamos una imagen de asset

const InfoSection = () => {
    return (
        <section className="info-section">
            <div className="container">
                <div className="info-grid">
                    {/* Columna Izquierda Visual (si hubiera imagen vertical larga, usaremos placeholder si no ajusta) */}
                    <div className="info-image-col">
                        <Reveal>
                            {/* Si existe imagen vertical tipo 'leaves' mejor, por ahora usamos una disponible */}
                            <img src={ecoImage} alt="Ecopaper" className="eco-feature-img" />
                        </Reveal>
                    </div>

                    {/* Columna Derecha Info */}
                    <div className="info-content-col">
                        <Reveal>
                            <div className="section-header-left">
                                <h2>ECOPAPER</h2>
                                <div className="divider-left"></div>
                            </div>
                        </Reveal>

                        <Reveal delay={0.4}>
                            <p className="eco-description">
                                Revestimiento a base de seda, algodon, papel y sustancias extraidas de la naturaleza.
                                <br /><br />
                                Totalmente natural, antiestático, cubre grietas, huecos en una pasada,
                                aísla el calor, frio y humedad.
                            </p>
                        </Reveal>

                        <div className="eco-features-list">
                            <div className="list-col">
                                <FadeIn delay={0.5} direction="left"><div className="eco-item">✓ Antialérgico</div></FadeIn>
                                <FadeIn delay={0.6} direction="left"><div className="eco-item">✓ Antiestático</div></FadeIn>
                                <FadeIn delay={0.7} direction="left"><div className="eco-item">✓ Acústico</div></FadeIn>
                                <FadeIn delay={0.8} direction="left"><div className="eco-item">✓ Térmico</div></FadeIn>
                            </div>
                            <div className="list-col">
                                <FadeIn delay={0.5} direction="right"><div className="eco-item">✓ Inholoro</div></FadeIn>
                                <FadeIn delay={0.6} direction="right"><div className="eco-item">✓ Inifugo</div></FadeIn>
                                <FadeIn delay={0.7} direction="right"><div className="eco-item">✓ Durabilidad</div></FadeIn>
                                <FadeIn delay={0.8} direction="right"><div className="eco-item">✓ Reparable</div></FadeIn>
                                <FadeIn delay={0.8} direction="right"><div className="eco-item">✓ Reutilizable</div></FadeIn>
                            </div>
                        </div>

                        <Reveal delay={0.9}>
                            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                                <button className="btn btn-primary-eco">Quiero conocer más</button>
                            </div>
                        </Reveal>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default InfoSection;
