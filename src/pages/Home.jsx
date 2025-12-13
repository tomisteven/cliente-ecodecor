
import React from 'react';
import SEO from '../components/SEO';
import HeroSection from '../components/Home/HeroSection';
import InfoSection from '../components/Home/InfoSection';
import ColorCatalog from '../components/Home/ColorCatalog';
import ModsCatalog from '../components/Home/ModsCatalog';
import WhyChooseUs from '../components/Home/WhyChooseUs';
import InspirationSection from '../components/Home/InspirationSection';
import VideoSection from '../components/Home/VideoSection';
import Testimonials from '../components/Home/Testimonials';
import ParallaxSection from '../components/Home/ParallaxSection';
import StatsSection from '../components/Home/StatsSection';
import WhatsAppButton from '../components/WhatsAppButton';

const Home = () => {
  return (
    <>
      <SEO
        title="Inicio"
        description="Ecodecor - Transformamos tus espacios con revestimientos de diseño. Paneles WPC, Mármol PVC y más."
        keywords="revestimientos, wpc, marmol pvc, decoracion cordoba, arquitectura, diseño interiores"
      />
      <HeroSection />
      <InfoSection />
      <ColorCatalog />
      <ModsCatalog />
      <WhyChooseUs />
      <InspirationSection />
      <VideoSection />
      <Testimonials />
      <ParallaxSection />
      <StatsSection />
      <WhatsAppButton />

    </>
  );
};

export default Home;

