export const trackConversion = (conversionLabel) => {
    if (window.gtag) {
        window.gtag('event', 'conversion', {
            'send_to': `AW-11473850308/${conversionLabel}`
        });
    }
};

export const trackWhatsAppClick = () => {
    /** 
     * ============================================================
     * CAMBIAR AQUÍ LA ETIQUETA REAL LUEGO:
     * Sustituir 'WHATSAPP_CONTACT' por la etiqueta de Google Ads.
     * Ej: const REAL_LABEL = 'aycQCLzBxaMZEMSflN8q';
     * ============================================================
     */
    const REAL_LABEL = 'WHATSAPP_CONTACT'; // <--- CAMBIAR ESTO

    trackConversion(REAL_LABEL);
};
