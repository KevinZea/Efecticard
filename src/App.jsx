import React, { useRef, useEffect, useState } from 'react';
import Head from './components/Head/Head';
import Home from './components/Home/Home';
import Slider from './components/Slider/Slider';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import CardSlider from './components/Cards/Cards';
import WhatsAppButton from './components/BtnW/BtnW';
import NotesComponent from './components/Notes/Notes';
import ContactSection from './components/Contact/Contact';

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const sliderRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <Head isMobile={isMobile} refs={{ homeRef, aboutRef, sliderRef, cardsRef }} />
      <div ref={homeRef}><Home isMobile={isMobile} /></div>
      <div ref={sliderRef}><Slider /></div>
      <NotesComponent isMobile={isMobile}/>
      <div ref={aboutRef}><About isMobile={isMobile} /></div>
      <div ref={cardsRef}><CardSlider isMobile={isMobile} /></div>
      <ContactSection/>
      <Footer isMobile={isMobile} />
      <WhatsAppButton />
    </>
  )
}

export default App;
