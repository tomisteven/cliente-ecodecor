import React, { useState, useEffect, useMemo } from 'react';
import './ColorCatalog.css';
import colorsData from '../../data/colors.json';
import { Reveal, FadeIn } from '../Reveal';

const images = import.meta.glob('../../assets/colores/*.{png,jpg,jpeg,webp}', { eager: true });

const ColorCatalog = () => {
    const [activeCategory, setActiveCategory] = useState('Todos');
    const [visibleItems, setVisibleItems] = useState([]);

    // Extract unique lines for categories
    const categories = useMemo(() => {
        const lines = [...new Set(colorsData.map(item => item.linea))];
        return ['Todos', ...lines];
    }, []);

    useEffect(() => {
        const filtered = activeCategory === 'Todos'
            ? colorsData
            : colorsData.filter(item => item.linea === activeCategory);
        setVisibleItems(filtered);
    }, [activeCategory]);

    const getImagePath = (filename) => {
        const path = `../../assets/colores/${filename}`;
        return images[path] ? images[path].default : '';
    };

    return (
        <section className="catalog-section" id="catalogo">
            <div className="container">
                <Reveal>
                    <div className="catalog-header">
                        <h2>Nuestra Colección de Modelos</h2>
                        <p>Explora nuestras líneas exclusivas y encuentra el diseño perfecto para tu espacio.</p>
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

                <div className="catalog-grid">
                    {visibleItems.map((item, index) => (
                        <FadeIn key={`${item.linea}-${item.codigo}`} delay={0.1} duration={0.3}>
                            <div className="catalog-item">
                                <div className="img-wrapper">
                                    <img
                                        src={getImagePath(item.img)}
                                        alt={`${item.linea} ${item.codigo}`}
                                        loading="lazy"
                                    />
                                    <div className="overlay">
                                        <span className="category-tag">{item.linea}</span>
                                    </div>
                                </div>
                                <div className="item-info">
                                    <h4>Código: {item.codigo}</h4>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ColorCatalog;
