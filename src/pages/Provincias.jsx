import React from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import WhatsAppButton from '../components/WhatsAppButton';
import { trackWhatsAppClick } from '../utils/analytics';
import './Provincias.css';

const provincesData = [
    {
        name: "Buenos Aires",
        featured: true,
        sellers: [
            {
                name: "EcoDecor Casa Central",
                address: "Guayaquil 1730, Ing Pablo Nogues",
                city: "Solo Con Cita Previa",
                phone: "+54 9 11 2518 1120"
            }
        ]
    },
    {
        name: "Córdoba",
        sellers: [
            {
                name: "Ariel",
                address: "Roma 2435",
                city: "Río Cuarto",
                phone: "358 420-7749"
            }
        ]
    },
    {
        name: "Tucumán",
        sellers: [
            {
                name: "Jose",
                address: "Chubut al 2600",
                city: "Yerba Buena",
                phone: "381 412-0813"
            }
        ]
    },
    {
        name: "Entre Ríos / Santa Fe",
        sellers: [
            {
                name: "Maillen",
                address: "Av. Belgrano y America",
                city: "Crespo",
                phone: "343 506-6891"
            }
        ]
    },
    {
        name: "Formosa",
        sellers: [
            {
                name: "Natalia",
                address: "Av. González Lelong 348",
                city: "Formosa",
                phone: "3705-131930"
            }
        ]
    }
];

const Provincias = () => {
    return (
        <>
            <SEO
                title="Donde Comprar | EcoDecor Revestimientos"
                description="Encontrá distribuidores oficiales de EcoDecor en tu provincia. Vendedores autorizados en Buenos Aires (Pilar), Córdoba, Tucumán, Entre Ríos, Santa Fe y Formosa."
                keywords="ecodecor provincias, donde comprar revestimientos, distribuidores ecodecor, vendedores autorizados, ecodecor pilar"
                url="/provincias"
            />

            {/* Hero Section */}
            <section className="provincias-hero">
                <div className="provincias-hero-overlay"></div>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="provincias-hero-content"
                    >
                        <h1 className="h1-container-provincias">Nuestros Vendedores</h1>
                        <p>Encontrá el distribuidor más cercano a tu ubicación</p>
                    </motion.div>
                </div>
            </section>

            {/* List Section */}
            <section className="provincias-section">
                <div className="container">
                    <div className="provincias-grid">
                        {provincesData.map((prov, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className={`provincia-card ${prov.featured ? 'featured-card' : ''}`}
                            >
                                {prov.featured && (
                                    <div className="featured-badge">
                                        <span className="badge-icon">⭐</span>
                                        CASA CENTRAL
                                    </div>
                                )}
                                <h2 className="provincia-name">{prov.name}</h2>
                                <div className="sellers-list">
                                    {prov.sellers.map((seller, sIndex) => (
                                        <div key={sIndex} className="seller-item">
                                            <div className="seller-header">
                                                <span className="seller-name">{seller.name}</span>
                                            </div>
                                            <span className="seller-location">{seller.address} - {seller.city}</span>
                                            <a
                                                href={`https://wa.me/549${seller.phone.replace(/[^0-9]/g, '')}`}
                                                className="seller-phone"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                onClick={trackWhatsAppClick}
                                            >
                                                <span>📱</span> {seller.phone}
                                            </a>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <WhatsAppButton />
        </>
    );
};

export default Provincias;
