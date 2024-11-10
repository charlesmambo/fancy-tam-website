import React from 'react';
import '../intro/Intro.css'
import { MdOutlineArrowForwardIos } from "react-icons/md";
import Cards from '../cards/Cards';
import bgLeft from '../../assets/bg-left.png' 
import bgRight from '../../assets/bg-right.png' 

const Intro = () => {
  return (
    <div className='intro'>
      <div className="bg-left">
        <img src={bgLeft} alt="" />
      </div>
      <div className="intro-content">
        <h1>Fancy Tam makes every event special with expert catering, beautiful decor, reliable rentals, and custom cakes. Let us handle the details, so you can enjoy a seamless, memorable experience!</h1>

        <div className="intro-btn">
        <button>Book us
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
  )
}

export default Intro
