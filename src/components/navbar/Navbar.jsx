import React, { useState } from 'react';
import '../navbar/Navbar.css';
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { LiaWindowCloseSolid } from "react-icons/lia";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav>
        <div className="logo">
          <a href="#">Fancy Tam</a>
        </div>
        <ul className="nav-items">
          <li className="items">
            <a href="#">home</a>
          </li>
          <li className="items">
            <a href="#">about</a>
          </li>
          <li className="items">
            <a href="#">services</a>
          </li>
          <li className="nav-btn">
          <button>Book us
            <MdOutlineArrowForwardIos className='intro-icon' />
            </button>  
          </li>
        </ul>

        <div className="hamburger" onClick={toggleDropdown}>
          {isOpen ? (
            <LiaWindowCloseSolid className='close-btn-icon' />
          ) : (
            <RxHamburgerMenu className='open-btn-icon' />
          )}
        </div>
        
        {isOpen && (
          <div className="drop-down-nav">
            <ul className="drop-down-items">
              <li className="items">
                <a href="#">home</a>
              </li>
              <li className="items">
                <a href="#">about</a>
              </li>
              <li className="items">
                <a href="#">services</a>
              </li>
              <li className="items nav-btn">
                <a href="#">Book us</a>
                <MdOutlineArrowForwardIos className='nav-icon' />
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
