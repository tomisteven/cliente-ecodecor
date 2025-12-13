import React, { useState } from 'react';
import './InspirationSection.css';
import { Reveal } from '../Reveal';

// Imágenes seleccionadas (Nombres seguros sin espacios)
import img1 from '../../assets/ECODECOR/20251202_181554.jpg';
import img2 from '../../assets/ECODECOR/20251205_152759.jpg';
import img3 from '../../assets/ECODECOR/20251205_153338.jpg'; // Reemplazo seguro
import img4 from '../../assets/ECODECOR/20251205_153342.jpg'; // Reemplazo seguro
import img5 from '../../assets/ECODECOR/20251205_153349.jpg'; // Reemplazo seguro
import img6 from '../../assets/ECODECOR/515016540_17973766148862930_4478820150561117147_n.jpg';
import img7 from '../../assets/ECODECOR/457193784_17931724688919263_4452654476385081158_n.jpg';

const slides = [
    { id: 1, img: img1, title: "Texturas Orgánicas", desc: "Ambientes cálidos" },
    { id: 2, img: img2, title: "Acabados Premium", desc: "Elegancia pura" },
    { id: 3, img: img3, title: "Mica Style", desc: "Brillo sutil" },
    { id: 4, img: img4, title: "Espacios Modernos", desc: "Vanguardia" },
    { id: 5, img: img5, title: "Renovación Total", desc: "Sin obras" },
    { id: 6, img: img6, title: "Detalles", desc: "Perfección" },
    { id: 7, img: img7, title: "Confort", desc: "Hogar ideal" },
];

const InspirationSection = () => {
    const [activeId, setActiveId] = useState(2);

    return (
        <section className="inspiration-section">
            {/* Contenedor para el título centrado */}
            <div className="container">
                <Reveal>
                    <div className="section-header text-center mb-5">
                        <h2>Inspiración Real</h2>
                        <p className="section-desc">Desliza para descubrir nuestros proyectos</p>
                        <div className="divider mx-auto"></div>
                    </div>
                </Reveal>
            </div>

            <div className="container-fluid p-0">
                <div className="accordion-slider">
                    {slides.map((slide) => (
                        <div
                            key={slide.id}
                            className={`accordion-item ${activeId === slide.id ? 'active' : ''}`}
                            onMouseEnter={() => setActiveId(slide.id)}
                            style={{
                                backgroundImage: `url(${slide.img})`,
                                backgroundColor: '#ddd' // Fallback color
                            }}
                        >
                            <div className="accordion-content">
                                <div className="accordion-shadow"></div>
                                <div className="accordion-text">
                                    <h3>{slide.title}</h3>
                                    <p>{slide.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default InspirationSection;
