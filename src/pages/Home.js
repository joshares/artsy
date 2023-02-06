import React from 'react'
import Hero from '../components/Hero';
import Featured from '../components/Featured';
import Upcoming from '../components/Upcoming';
import Explore from '../components/Explore';
import Footer from '../components/Footer';

const Home = () => {
 return(
  <main>
   <Hero/>
   <Featured/>
   <Upcoming/>
   <Explore/>
   <Footer/>
  </main>
 )
}

export default Home;
