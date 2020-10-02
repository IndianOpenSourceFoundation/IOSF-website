import React from 'react';

import HeroBanner from './components/HeroBanner';
import Projects from './components/Projects'
import About from './components/About';
import Navbar from '../Home/components/Navbar';
import Footer from '../Home/components/Footer';

const Hactober = () => {
  return ( 
    <div>
      <Navbar />
      <HeroBanner />
      <About />
      <Projects />
      <Footer />
    </div>
   );
}
 
export default Hactober;