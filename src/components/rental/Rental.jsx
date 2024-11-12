import React from 'react';
import '../rental/Rental.css'
import ServiceCard from '../serviceCard/ServiceCard';
import IMG1 from '../../assets/sv18.png';
import IMG2 from '../../assets/kid.jpg';

const Rental = () => {
  return (
    <>
    <div className='baking deco'>
        <ServiceCard 
            image={IMG2}
            title="Jumping castle"
            description="Weddings, Birthday Parties, Corporate Events, Baby Showers & Gender Reveals"
        />
        <ServiceCard 
        image={IMG1}
        title="Themed Decor and Props"
        description="Kids' Parties, Cultural or Seasonal Themes"
        />
    </div>
    </>
  )
}

export default Rental