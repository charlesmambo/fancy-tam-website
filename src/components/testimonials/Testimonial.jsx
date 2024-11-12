import React from 'react';
import '../testimonials/Testimonial.css'
import bgLeft from '../../assets/bg-left.png' 
import bgRight from '../../assets/bg-right.png' 
import pro from '../../assets/pro.png'

const Testimonial = () => {
  return (
    <div className='testimonial'>
        <div className="ts-bg-left">
        <img src={bgLeft} alt="" />
      </div>

    <div>
      <div className="heading-container">
        <h2>Testimonials</h2>
        <div className="line"></div>
      </div> 
      <div className="testimonial-cards">
        <div className="card testimonial-card">
            <div className="name">
                <img src={pro} alt="" />
                <div className="name-content">
                    <h4>Sarah</h4>
                    <p>11 October 2024</p>
                </div>
         </div>
                <p>I hired a catering service for my event and was very impressed. The team was professional, the food was delicious, and the presentation was beautiful. Guests loved it! Highly recommend for quality service!</p>
        </div>
        <div className="card testimonial-card">
            <div className="name">
                <img src={pro} alt="" />
                <div className="name-content">
                    <h4>Carol</h4>
                    <p>18 October 2024</p>
                </div>
         </div>
                <p>Fancy Tam's catering made my event unforgettable! The team was friendly, the food was outstanding, and the setup was beautiful. Guests loved it! Highly recommend for exceptional service!</p>
        </div>
      </div>
      </div>

      <div className="ts-bg-right">
        <img src={bgRight} alt="" />
      </div>
    </div>
  )
}

export default Testimonial
