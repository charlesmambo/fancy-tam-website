import React, { useState } from 'react';
import '../contact/Contact.css';
import { ImPhoneHangUp } from "react-icons/im";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { BsHouseFill } from "react-icons/bs";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { FaCircleCheck } from "react-icons/fa6";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validateForm = () => {
    let formErrors = {};
    const { name, email, phone, message } = formData;

    if (!name) formErrors.name = 'Name is required';
    if (!email) formErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(email)) formErrors.email = 'Email is invalid';
    
    if (!phone) formErrors.phone = 'Phone number is required';
    else if (!/^\+?\d{10,15}$/.test(phone)) formErrors.phone = 'Phone number is invalid';
    
    if (!message) formErrors.message = 'Message is required';

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log('Form submitted:', formData);
      setShowSuccess(true);
      setFormData({ name: '', email: '', phone: '', message: '' }); 
      setTimeout(() => {
        setShowSuccess(false);
      }, 3000); // Hide the success message after 30 seconds
    } else {
      console.log('Form contains errors');
    }
  };

  return (
    <div className='contact'>
      <div className="heading-container">
        <h2>Contact Us</h2>
        <div className="line"></div>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Contact information section */}
        <div className="ctc-m">
          <div className="ctc-m-content">
            <div className="ctc-card">
              <ImPhoneHangUp className='ctc-icon' />
              <h5>Phone</h5>
              <p>+2769 3580 050</p>
            </div>
            <div className="ctc-card">
              <IoLogoWhatsapp className='ctc-icon' />
              <h5>Whatsapp</h5>
              <p>+2769 3580 050</p>
            </div>
            <div className="ctc-card">
              <MdEmail className='ctc-icon' />
              <h5>Email</h5>
              <p>example@gmail.com</p>
            </div>
            <div className="ctc-card">
              <BsHouseFill className='ctc-icon' />
              <h5>Our Business</h5>
              <p>29 Bancroft St, Rugby, Cape Town</p>
            </div>
          </div>
          <div className="map-container">
            <iframe
              className='map'
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.846517737646!2d18.487756511328186!3d-33.89360647310551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc5c24da19c415%3A0x5176bf48a228cab0!2s29%20Bancroft%20St%2C%20Rugby%2C%20Cape%20Town%2C%207405!5e0!3m2!1sen!2sza!4v1731198987861!5m2!1sen!2sza"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* Form section */}
        <div className="ctc-inputs">
          <div className="form-control">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              placeholder='Your Name'
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder='example@gmail.com'
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              name="phone"
              placeholder='+2761 3286 152'
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              placeholder='Your Message'
              value={formData.message}
              onChange={handleInputChange}
            ></textarea>
          </div>
          <div className="intro-btn">
            <button type="submit">Book us
              <MdOutlineArrowForwardIos className='intro-icon' />
            </button>
          </div>
        </div>

        {/* Success message */}
        {showSuccess && (
          <div className="success">
            <FaCircleCheck className='succ-icon' />
            <p>Your message has been successfully sent!</p>
          </div>
        )}
      </form>
    </div>
  );
};

export default Contact;
