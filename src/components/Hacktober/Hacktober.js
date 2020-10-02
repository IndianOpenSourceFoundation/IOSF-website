import React from 'react';

import HeroBanner from './components/HeroBanner';
import Projects from './components/Projects'
import About from './components/About';
import HacktoberNav from './components/HacktoberNav'
import Footer from '../Home/components/Footer';

const Hactober = () => {
  return ( 
    <div>
      <HacktoberNav />
      <HeroBanner />
      <About />
      <Projects />
      <Footer />
    </div>
   );
}
 
export default Hactober;