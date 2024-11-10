import React from 'react';
import '../home/Home.css'
import Navbar from '../../components/navbar/Navbar'
import Intro from '../../components/intro/Intro';
import About from '../../components/about/About';
import Service from '../../components/services/Service';
import Testimonial from '../../components/testimonials/Testimonial';
import Contact from '../../components/contact/Contact';
import Social from '../../components/socialIcons/Social';
import Footer from '../../components/footer/Footer';

const Home = () => {
  return (
    <div className='home'>
        <Navbar/>
        <Intro/>
        <About/>
        <Service/>
        <Testimonial/>
        <Contact/>
        <div className="social-container">
          <Social/>
        </div>
        <Footer/>
    </div>
  )
}

export default Home