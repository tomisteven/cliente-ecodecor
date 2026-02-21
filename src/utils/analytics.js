import { GOOGLE_ADS_ID, CONVERSION_LABELS } from '../config/analyticsConfig';

export const trackConversion = (conversionLabel) => {
    if (window.gtag) {
        window.gtag('event', 'conversion', {
            'send_to': `${GOOGLE_ADS_ID}/${conversionLabel}`
        });
    }
};

export const trackWhatsAppClick = () => {
    /** 
     * La etiqueta real se gestiona en src/config/analyticsConfig.js
     */
    trackConversion(CONVERSION_LABELS.WHATSAPP_CLICK);
};
