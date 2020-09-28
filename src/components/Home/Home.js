import React from 'react'

// components 
import Footer from './components/Footer';
import Header from './components/Header'
import Motto from './components/Motto';
import Paths from './components/Paths';
import "./Home.css";
import HacktoberBanner from './components/HacktoberBanner';

const Home = () => {
  return ( 
    <div>
      <Header />
      <Motto />
      <HacktoberBanner />
      <Paths />
      <Footer />
    </div>
   );
}
 
export default Home;