import React from 'react';
import '../socialIcons/Social.css'
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";


const Social = () => {
  return (
    <div className='socials'>
        <div className="s-sub">
       <a href="#">
        <FaSquareInstagram className='s-icon'/>
       </a>
       <a href="#">
       <FaFacebookSquare className='s-icon'/>
       </a>
       <a href="#">
       <AiFillTikTok  className='s-icon tik'/>
       </a>
       </div>
    </div>
  )
}

export default Social
