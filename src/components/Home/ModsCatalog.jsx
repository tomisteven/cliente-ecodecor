import React, { useState, useEffect } from 'react';
import './ModsCatalog.css';
import modsData from '../../data/mods.json';
import { Reveal, FadeIn } from '../Reveal';

const images = import.meta.glob('../../assets/*.{png,jpg,jpeg,webp}', { eager: true });

const ModsCatalog = () => {
    const [activeCategory, setActiveCategory] = useState('Todos');
    const [visibleItems, setVisibleItems] = useState([]);

    const categories = ['Todos', 'Interior', 'Living', 'Cocina', 'Cuartos', 'Oficina', 'Baño'];

    useEffect(() => {
        const filtered = activeCategory === 'Todos'
            ? modsData
            : modsData.filter(item => item.category === activeCategory);
        setVisibleItems(filtered);
    }, [activeCategory]);

    const getImagePath = (filename) => {
        // mods.json filenames are expected to be directly in assets
        const path = `../../assets/${filename}`;
        return images[path] ? images[path].default : '';
    };

    return (
        <section className="mods-section" id="ambientes">
            <div className="container">
                <Reveal>
                    <div className="mods-header">
                        <h2>Inspiración por Ambientes</h2>
                        <p>Descubre cómo nuestros productos transforman cada rincón de tu hogar.</p>
                        <div className="divider mx-auto mt-2"></div>
                    </div>
                </Reveal>

                <Reveal delay={0.2}>
                    <div className="filter-container">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
                                onClick={() => setActiveCategory(cat)}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </Reveal>

                <div className="mods-grid">
                    {visibleItems.map((item, index) => (
                        <FadeIn key={item.id} delay={index * 0.05} duration={0.3}>
                            <div className="mods-item">
                                <div className="img-wrapper">
                                    <img
                                        src={getImagePath(item.filename)}
                                        alt={item.name}
                                        loading="lazy"
                                    />
                                    <div className="overlay">
                                        <span className="category-tag">{item.category}</span>
                                    </div>
                                </div>
                                <div className="item-info">
                                    <h4>{item.name}</h4>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ModsCatalog;
