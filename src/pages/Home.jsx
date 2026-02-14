
import React from 'react';
import SEO from '../components/SEO';
import HeroSection from '../components/Home/HeroSection';
import InfoSection from '../components/Home/InfoSection';
import ColorCatalog from '../components/Home/ColorCatalog';
import ModsCatalog from '../components/Home/ModsCatalog';
import WhyChooseUs from '../components/Home/WhyChooseUs';
import InspirationSection from '../components/Home/InspirationSection';

import Testimonials from '../components/Home/Testimonials';
import ParallaxSection from '../components/Home/ParallaxSection';
import StatsSection from '../components/Home/StatsSection';
import WhatsAppButton from '../components/WhatsAppButton';

const Home = () => {
  return (
    <>
      <SEO
        title="Revestimientos Decorativos Argentina"
        description="Revestimientos Seda Algodón, Seda Papel, Seda Textiles y EcoPaper. Texturas únicas para transformar tus espacios. Envíos a todo Argentina. ¡Cotizá ahora!"
        keywords="revestimientos decorativos, seda algodón, seda papel, seda textiles, ecopaper, revestimientos paredes, decoración interiores, texturas paredes"
        url="/"
      />
      <HeroSection />
      <InfoSection />
      <ColorCatalog />
      {/* <ModsCatalog /> */}
      <WhyChooseUs />
      <InspirationSection />

      <Testimonials />
      <ParallaxSection />
      <StatsSection />
      <WhatsAppButton />

    </>
  );
};

export default Home;

