import React from 'react';
import '../baking/Baking.css'
import ServiceCard from '../serviceCard/ServiceCard';
import IMG1 from '../../assets/sv9.png';
import IMG2 from '../../assets/sv10.png';
import IMG3 from '../../assets/sv11.png';
import IMG4 from '../../assets/sv12.png';

const Baking = () => {
  return (
    <div className='baking'>
        <ServiceCard 
        image={IMG1}
        title="Custom Cake Orders"
        description="Beautifully crafted cakes for all occasions! From birthdays and weddings to anniversaries, our custom..."
        />
        <ServiceCard 
        image={IMG2}
        title="Pastries and Desserts"
        description="Indulge in our delicious selection of pastries, from cupcakes and cookies to pies and tarts, crafted to satisfy any sweet tooth!."
        />
        <ServiceCard 
        image={IMG3}
        title="Party Platters & Corporate Events"
        description="Delicious, customizable platters for any event. Ideal for corporate functions, parties, and more, with a variety..."
        />
        <ServiceCard 
        image={IMG4}
        title="Seasonal and Holiday Specials"
        description="Celebrate the season with our festive offerings! From holiday baking and custom gift baskets to themed party platters, we bring seasonal..."
        />
    </div>
  )
}

export default Baking
