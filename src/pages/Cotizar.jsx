import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import WhatsAppButton from '../components/WhatsAppButton';
import './Cotizar.css';

const productOptions = [
    { value: 'seda-algodon', label: 'Seda Algodón' },
    { value: 'seda-papel', label: 'Seda Papel' },
    { value: 'seda-textiles', label: 'Seda Textiles' },
    { value: 'ecopaper', label: 'EcoPaper' },
    { value: 'otro', label: 'Otro / No estoy seguro' }
];

const projectTypes = [
    { value: 'residencial', label: 'Residencial' },
    { value: 'comercial', label: 'Comercial' },
    { value: 'arquitecto', label: 'Proyecto de Arquitectura' },
    { value: 'constructora', label: 'Constructora' }
];

const Cotizar = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        telefono: '',
        ciudad: '',
        producto: '',
        tipoProyecto: '',
        metros: '',
        mensaje: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Get product and project type labels
        const productoLabel = productOptions.find(p => p.value === formData.producto)?.label || formData.producto;
        const tipoProyectoLabel = projectTypes.find(p => p.value === formData.tipoProyecto)?.label || formData.tipoProyecto || 'No especificado';

        // Build WhatsApp message
        const message = `🏠 *Nueva Solicitud de Cotización - EcoDecor*

👤 *Datos del Cliente:*
• Nombre: ${formData.nombre}
• Email: ${formData.email}
• Teléfono: ${formData.telefono}
• Ciudad: ${formData.ciudad}

📦 *Detalles del Proyecto:*
• Producto: ${productoLabel}
• Tipo de Proyecto: ${tipoProyectoLabel}
• Metros cuadrados: ${formData.metros || 'No especificado'}

💬 *Mensaje:*
${formData.mensaje || 'Sin mensaje adicional'}`;

        // Encode message for URL
        const encodedMessage = encodeURIComponent(message);

        // WhatsApp number for Pilar shop
        const whatsappNumber = '5491125181120'; // Assuming this is the Pilar number, as no new number was provided in the instruction.

        // Open WhatsApp with pre-filled message
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
        window.open(whatsappUrl, '_blank');

        // Google Ads Conversion Event
        if (window.gtag) {
            window.gtag('event', 'conversion', {
                'send_to': 'AW-11473850308/aycQCLzBxaMZEMSflN8q'
            });
        }

        setIsSubmitting(false);
        setSubmitted(true);
    };

    return (
        <>
            <SEO
                title="Cotizá Revestimientos Gratis | Respuesta en 24hs"
                description="Solicitá tu presupuesto de revestimientos sin compromiso. Asesoramiento profesional, envíos a todo Argentina. Respuesta en 24 horas hábiles. EcoDecor."
                keywords="cotizar revestimientos, presupuesto paneles wpc, precio revestimiento, cotización decoración, presupuesto sin compromiso"
                url="/cotizar"
            />

            {/* Hero Section */}
            <section className="cotizar-hero">
                <div className="cotizar-hero-overlay"></div>
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="cotizar-hero-content"
                    >
                        <h1>Solicitá tu Cotización</h1>
                        <p>Presupuesto personalizado sin compromiso. Respuesta en 24hs.</p>
                    </motion.div>
                </div>
            </section>

            {/* Form Section */}
            <section className="cotizar-section">
                <div className="container">
                    <div className="cotizar-grid">
                        {/* Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            className="cotizar-form-wrapper"
                        >
                            {!submitted ? (
                                <form onSubmit={handleSubmit} className="cotizar-form">
                                    <h2>Completá tus datos</h2>

                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="nombre">Nombre completo *</label>
                                            <input
                                                type="text"
                                                id="nombre"
                                                name="nombre"
                                                value={formData.nombre}
                                                onChange={handleChange}
                                                required
                                                placeholder="Tu nombre"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="email">Email *</label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                placeholder="tu@email.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="telefono">Teléfono / WhatsApp *</label>
                                            <input
                                                type="tel"
                                                id="telefono"
                                                name="telefono"
                                                value={formData.telefono}
                                                onChange={handleChange}
                                                required
                                                placeholder="+54 11 0000 0000"
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="ciudad">Ciudad / Provincia *</label>
                                            <input
                                                type="text"
                                                id="ciudad"
                                                name="ciudad"
                                                value={formData.ciudad}
                                                onChange={handleChange}
                                                required
                                                placeholder="Ej: Pilar, Buenos Aires"
                                            />
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group">
                                            <label htmlFor="producto">Producto de interés *</label>
                                            <select
                                                id="producto"
                                                name="producto"
                                                value={formData.producto}
                                                onChange={handleChange}
                                                required
                                            >
                                                <option value="">Seleccioná un producto</option>
                                                {productOptions.map(opt => (
                                                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                                                ))}
                                            </select>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="tipoProyecto">Tipo de proyecto</label>
                                            <select
                                                id="tipoProyecto"
                                                name="tipoProyecto"
                                                value={formData.tipoProyecto}
                                                onChange={handleChange}
                                            >
                                                <option value="">Seleccioná una opción</option>
                                                {projectTypes.map(opt => (
                                                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                                                ))}
                                            </select>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="metros">Metros cuadrados estimados</label>
                                        <input
                                            type="text"
                                            id="metros"
                                            name="metros"
                                            value={formData.metros}
                                            onChange={handleChange}
                                            placeholder="Ej: 25 m²"
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="mensaje">Contanos sobre tu proyecto</label>
                                        <textarea
                                            id="mensaje"
                                            name="mensaje"
                                            value={formData.mensaje}
                                            onChange={handleChange}
                                            rows="4"
                                            placeholder="Describí brevemente lo que buscás: ambiente a revestir, estilo, dudas..."
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        className={`btn-submit ${isSubmitting ? 'loading' : ''}`}
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? 'Enviando...' : 'Enviar Solicitud'}
                                    </button>
                                </form>
                            ) : (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="success-message"
                                >
                                    <span className="success-icon">✓</span>
                                    <h2>¡Solicitud Enviada!</h2>
                                    <p>
                                        Gracias por contactarnos. Nuestro equipo te responderá
                                        dentro de las próximas 24 horas hábiles.
                                    </p>
                                    <a href="/" className="btn-home">Volver al Inicio</a>
                                </motion.div>
                            )}
                        </motion.div>

                        {/* Info Sidebar */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="cotizar-info"
                        >
                            <div className="info-card">
                                <h3>¿Por qué cotizar con nosotros?</h3>
                                <ul className="benefits-list">
                                    <li>
                                        <span className="benefit-icon">⚡</span>
                                        <div>
                                            <strong>Respuesta rápida</strong>
                                            <p>En menos de 24 horas hábiles</p>
                                        </div>
                                    </li>
                                    <li>
                                        <span className="benefit-icon">🎯</span>
                                        <div>
                                            <strong>Asesoramiento experto</strong>
                                            <p>Te ayudamos a elegir el mejor producto</p>
                                        </div>
                                    </li>
                                    <li>
                                        <span className="benefit-icon">📦</span>
                                        <div>
                                            <strong>Envíos a todo el país</strong>
                                            <p>Llegamos a cualquier punto de Argentina</p>
                                        </div>
                                    </li>
                                    <li>
                                        <span className="benefit-icon">💳</span>
                                        <div>
                                            <strong>Múltiples formas de pago</strong>
                                            <p>Efectivo, transferencia, tarjetas</p>
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className="info-card contact-card">
                                <h3>¿Preferís contacto directo?</h3>
                                <div className="contact-options">
                                    <a href="https://wa.me/5491125181120" className="contact-option whatsapp">
                                        <span>📱</span>
                                        WhatsApp
                                    </a>
                                    <a href="tel:+5491125181120" className="contact-option phone">
                                        <span>📞</span>
                                        Llamar
                                    </a>
                                    <a href="mailto:ecodecorargentina@gmail.com" className="contact-option email">
                                        <span>✉️</span>
                                        Email
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <WhatsAppButton />
        </>
    );
};

export default Cotizar;
