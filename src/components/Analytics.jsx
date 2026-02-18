import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Analytics = () => {
    const location = useLocation();

    useEffect(() => {
        if (window.gtag) {
            // Google Analytics 4 page view
            window.gtag('event', 'page_view', {
                page_path: location.pathname + location.search,
                page_location: window.location.href,
                page_title: document.title
            });

            // Google Ads (Conversion Linker and Remarketing)
            window.gtag('config', 'AW-11473850308', {
                page_path: location.pathname + location.search
            });
        }
    }, [location]);

    return null;
};

export default Analytics;
