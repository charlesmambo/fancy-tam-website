import React from 'react';
import '../contact/Contact.css';
import { ImPhoneHangUp } from "react-icons/im";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { BsHouseFill } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { MdOutlineArrowForwardIos } from "react-icons/md";

const Contact = () => {
  return (
    <div className='contact'>
         <div className="heading-container">
            <h2>Contact Us</h2>
            <div className="line"></div>
        </div>

        <form>
            <div className="ctc-m">
                <div className="ctc-m-content">
                    <div className="ctc-card">
                        <ImPhoneHangUp className='ctc-icon' />
                        <h5>Phone</h5>
                        <p>062 3286 152</p>
                    </div>
                    <div className="ctc-card">
                        <IoLogoWhatsapp className='ctc-icon' />
                        <h5>Whatsapp</h5>
                        <p>062 3286 152</p>
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
                    <iframe className='map' 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.846517737646!2d18.487756511328186!3d-33.89360647310551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc5c24da19c415%3A0x5176bf48a228cab0!2s29%20Bancroft%20St%2C%20Rugby%2C%20Cape%20Town%2C%207405!5e0!3m2!1sen!2sza!4v1731198987861!5m2!1sen!2sza" 
                        allowFullScreen 
                        loading="lazy" 
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>

            </div>
            <div className="ctc-inputs">
                <div className="form-control">
                    <label htmlFor="name">Name</label>
                    <input type="text" placeholder='Your Name' />
                </div>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" placeholder='example@gmail.com' />
                </div>
                <div className="form-control">
                    <label htmlFor="email">Phone</label>
                    <input type="phone" placeholder='+2761 3286 152' />
                </div>
                <div className="form-control">
                    <label htmlFor="message">Message</label>
                    <textarea name="message" placeholder='Your Message'></textarea>
                </div>
                <div className="intro-btn">
                    <button>Book us
                        <MdOutlineArrowForwardIos className='intro-icon' />
                        </button>  
                    </div>
            </div>
        </form>
    </div>
  )
}

export default Contact