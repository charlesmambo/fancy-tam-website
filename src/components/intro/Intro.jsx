import React from 'react';
import '../intro/Intro.css';
import { MdOutlineArrowForwardIos } from "react-icons/md";
import Cards from '../cards/Cards';
import bgLeft from '../../assets/bg-left.png';
import bgRight from '../../assets/bg-right.png';

const Intro = () => {
  // Function to scroll to the contact section
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='intro'>
      <div className="bg-left">
        <img src={bgLeft} alt="" />
      </div>
      <div className="intro-content">
        <h1><span className='style-text'>Fancy Tam Events</span> makes every event special with expert catering, beautiful decor, reliable party rentals, and custom cakes. Let us handle the details, so you can enjoy a seamless, memorable experience!</h1>

        <div className="intro-btn int-btn">
          <button onClick={scrollToContact}>
            Book us
            <MdOutlineArrowForwardIos className='intro-icon' />
          </button>  
        </div>
      </div>

      {/* Carousel  */}
      <div className="carousel">
        <Cards/>
      </div>

      <div className="bg-right">
        <img src={bgRight} alt="" />
      </div>
    </div>
  );
}

export default Intro;
