import React from 'react';

import HeroBanner from './components/HeroBanner';
import Projects from './components/Projects'
import About from './components/About';
import Navbar from '../Home/components/Navbar';

const Hactober = () => {
  return ( 
    <div>
      <Navbar />
      <HeroBanner />
      <About />
      <Projects />
    </div>
   );
}
 
export default Hactober;