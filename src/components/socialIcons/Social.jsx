import React from 'react';
import '../socialIcons/Social.css'
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { RiWhatsappFill } from "react-icons/ri";

const Social = () => {
  return (
    <div className='socials'>
        <div className="s-sub">
       <a href="https://wa.me/27693580050" target='blank'>
        <RiWhatsappFill className='s-icon'/>
       </a>
       <a href="#">
        <FaSquareInstagram className='s-icon'/>
       </a>
       <a href="https://www.facebook.com/profile.php?id=61568288684437" target='blank'>
       <FaFacebookSquare className='s-icon'/>
       </a>
       {/* <a href="#">
       <AiFillTikTok  className='s-icon tik'/>
       </a> */}
       </div>
    </div>
  )
}

export default Social
