import React, { useEffect, useContext } from 'react';

import HeroSection from './components/HeroSection';
import { AppContext } from './context';
import Services from './Services';
import Contact from './Contact';
import About from './About';

const Home = () => {

  const { updateHomePage } = useContext(AppContext);

  useEffect(() => {
    updateHomePage();
  }, []);

  return  <>
    <HeroSection />
    <Services />
    <About />
    <Contact />
  </>
}

export default Home;