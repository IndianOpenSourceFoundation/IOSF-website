import React from 'react';

import HeroBanner from './components/HeroBanner';
import Projects from './components/Projects'
import Navbar from '../Home/components/Navbar'

const Hactober = () => {
  return ( 
    <div>
      <Navbar />
      <HeroBanner />
      <Projects />
    </div>
   );
}
 
export default Hactober;