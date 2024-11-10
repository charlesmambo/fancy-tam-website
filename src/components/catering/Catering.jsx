import React from 'react'
import ServiceCard from '../serviceCard/ServiceCard';
import IMG1 from '../../assets/sv1.png';
import IMG2 from '../../assets/sv2.png';
import IMG3 from '../../assets/sv3.png';
import IMG4 from '../../assets/svg4.png';
import IMG5 from '../../assets/sv5.png';
import IMG6 from '../../assets/svg6.png';
import IMG7 from '../../assets/sv7.png';
import IMG8 from '../../assets/svg8.png';
import '../catering/Catering.css'

const Catering = () => {
  return (
    <div className="catering-wrapper">
    <div className='catering-container'>
        <ServiceCard 
        image={IMG1}
        title="Corporate Catering"
        description="Corporate lunch deliveries, meeting refreshments, employee appreciation events."
        />
        <ServiceCard 
        image={IMG2}
        title="Wedding Catering"
        description="Full-service wedding catering, buffet-style receptions, plated dinners."
        />
        <ServiceCard 
        image={IMG3}
        title="Social Event Catering"
        description="Birthday parties, anniversaries, family reunions, baby showers, networking events."
        />
        <ServiceCard 
        image={IMG4}
        title="Buffet Catering"
        description="Self-serve buffet setups for various occasions like parties, conferences, or weddings."
        />
    </div>
    <div className='catering-container'>
        <ServiceCard 
        image={IMG5}
        title="Drop-off Catering"
        description="Meals delivered to your location without on-site staff; great for casual gatherings."
        />
        <ServiceCard 
        image={IMG6}
        title="Catering for Special Diets"
        description="Vegan, gluten-free, or allergen-free catering options tailored for specific dietary needs."
        />
        <ServiceCard 
        image={IMG7}
        title="Picnic Catering"
        description="Delightful outdoor picnics for birthdays, anniversaries, family gatherings, baby showers, and networking events."

        />
        <ServiceCard 
        image={IMG8}
        title="Dessert & Sweet Table Catering"
        description="Perfect for celebrations and parties that focus on desserts."
        />
    </div>
    </div>
  )
}

export default Catering
