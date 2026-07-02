import { GOOGLE_ADS_ID, CONVERSION_LABELS } from '../config/analyticsConfig';

export const trackConversion = (conversionLabel) => {
    // 1. Google Ads Conversion
    if (window.gtag) {
        window.gtag('event', 'conversion', {
            'send_to': `${GOOGLE_ADS_ID}/${conversionLabel}`
        });
    }

    // 2. Meta Pixel (Facebook) Conversion
    if (window.fbq) {
        if (conversionLabel === CONVERSION_LABELS.QUOTATION_SUBMIT) {
            window.fbq('track', 'Lead');
        } else if (conversionLabel === CONVERSION_LABELS.WHATSAPP_CLICK) {
            window.fbq('track', 'Contact');
        }
    }
};

export const trackWhatsAppClick = () => {
    /** 
     * La etiqueta real se gestiona en src/config/analyticsConfig.js
     */
    trackConversion(CONVERSION_LABELS.WHATSAPP_CLICK);
};
