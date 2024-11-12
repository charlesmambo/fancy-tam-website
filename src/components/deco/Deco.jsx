import React from 'react'
import ServiceCard from '../serviceCard/ServiceCard'
import IMG1 from '../../assets/sv13.png';
import IMG2 from '../../assets/sv14.png';
import '../deco/Deco.css';

const Deco = () => {
  return (
    <>
      <div className='baking deco'>
        <ServiceCard 
        image={IMG1}
        title="Event Decorations"
        description="Weddings, Birthday Parties, Corporate Events, Baby Showers & Gender Reveals"
        />
        <ServiceCard 
        image={IMG2}
        title="Themed Party Setup"
        description="Kids' Parties, Cultural or Seasonal Themes"
        />
    </div>
    </>
  )
}

export default Deco
