import React, { useState } from 'react';
import '../services/Service.css';
import Catering from '../catering/Catering';

const Service = () => {
  const [activeCategory, setActiveCategory] = useState("Catering");

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  return (
    <div className='services'>
      <div className="heading-container">
        <h2>Our Services</h2>
        <div className="line"></div>
      </div> 
      <div className="category-link">
        {["Catering", "Baking", "Decoration", "Event Planner", "Hiring"].map((category) => (
          <h3
            key={category}
            onClick={() => handleCategoryClick(category)}
            className={activeCategory === category ? 'active' : ''}
          >
            {category}
          </h3>
        ))}
      </div>

      <div className="service-content">
        <Catering/>
      </div>
    </div>
  );
};

export default Service;
