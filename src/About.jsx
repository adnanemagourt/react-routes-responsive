import React, {useEffect, useContext} from 'react';

import HeroSection from './components/HeroSection';
import { AppContext } from './context';

const About = () => {
  
  const {updateAboutPage} = useContext(AppContext);

  useEffect(() => {
    updateAboutPage();
  }, []);

  return (
    <HeroSection />
  )
}

export default About;
