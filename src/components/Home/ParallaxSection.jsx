import React from 'react';
// Nota: framer-motion no tiene componente Parallax directo simple, usaremos CSS + bg-attachment fixed.
import './ParallaxSection.css';
import { Reveal } from '../Reveal';
import parallaxImg from '../../assets/ECODECOR/515016540_17973766148862930_4478820150561117147_n.jpg';

const ParallaxSection = () => {
    return (
        <section className="parallax-section" style={{ backgroundImage: `url('${parallaxImg}')` }}>
            <div className="parallax-overlay">
                <div className="container">
                    <Reveal>
                        <div className="parallax-content text-center">
                            <h2>100% Reutilizable</h2>
                            <div className="divider-light mx-auto"></div>
                            <p>Hasta 30m2 de pared colocados en un solo dia sin ensuciar ni mover un solo mueble.</p>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
};

export default ParallaxSection;
