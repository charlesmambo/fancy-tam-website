import React, { useState } from 'react';
import '../services/Service.css';
import Catering from '../catering/Catering';
import Baking from '../baking/Baking';
import Deco from '../deco/Deco';
// import Event from '../event/Event';
import Rental from '../rental/Rental';


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
        {["Catering", "Baking", "Decoration", "Party Rentals"].map((category) => (
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
        {activeCategory === "Catering" && <Catering />}
        {activeCategory === "Baking" && <Baking />}
        {activeCategory === "Decoration" && <Deco />}
        {/* {activeCategory === "Event Planner" && <Event />} */}
        {activeCategory === "Party Rentals" && <Rental />}
      </div>
    </div>
  );
};

export default Service;
