import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, image, url }) => {
    const siteTitle = "EcoDecor | Revestimientos y Decoración de Interiores";
    const defaultDescription = "EcoDecor ofrece lo mejor en revestimientos de paredes, paneles WPC, mármol PVC y soluciones decorativas. Transforma tus espacios con calidad y estilo.";
    const defaultKeywords = "revestimientos, decoración, paneles wpc, mármol pvc, interiorismo, ecodecor, paredes, arquitectura, diseño";
    const defaultImage = "/logo.png";
    const siteUrl = "https://www.ecodecor.com.ar"; // Replace with actual domain if known, or localhost for now/placeholder

    const finalTitle = title ? `${title} | EcoDecor` : siteTitle;
    const finalDescription = description || defaultDescription;
    const finalKeywords = keywords || defaultKeywords;
    const finalImage = image ? image : `${siteUrl}${defaultImage}`;
    const finalUrl = url ? `${siteUrl}${url}` : siteUrl;

    return (
        <Helmet>
            {/* Standard metadata tags */}
            <title>{finalTitle}</title>
            <meta name='description' content={finalDescription} />
            <meta name='keywords' content={finalKeywords} />
            <link rel="canonical" href={finalUrl} />

            {/* Open Graph tags (Facebook, LinkedIn) */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content={finalTitle} />
            <meta property="og:description" content={finalDescription} />
            <meta property="og:image" content={finalImage} />
            <meta property="og:url" content={finalUrl} />
            <meta property="og:site_name" content="EcoDecor" />

            {/* Twitter cards */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={finalTitle} />
            <meta name="twitter:description" content={finalDescription} />
            <meta name="twitter:image" content={finalImage} />
        </Helmet>
    );
};

export default SEO;
