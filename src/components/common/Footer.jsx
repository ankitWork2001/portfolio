// src/components/common/Footer.jsx
import React from 'react';
import logo from '../../../public/Logo.png'
import { FaThreads } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";

const Footer = () => (
  <footer className='bg-[#000E26] py-5 pt-14 cursor-default'>
    <div className='flex justify-around '>
      {/* Logo and images */}
      <div>
        <img src={logo} alt="Logo" className='w-[169.2px] h-[96px]'/>
        <div className='flex gap-3 mt-4 '>
          <FaThreads className='text-white w-[20px] h-[20px]'/>
          <FaInstagram className='text-white w-[20px] h-[20px]'/>
          <FaLinkedin className='text-white w-[20px] h-[20px]'/>
          <FaXTwitter className='text-white w-[20px] h-[20px]'/>
          <FaPinterest className='text-white w-[20px] h-[20px]'/>

        </div>
      </div>
       {/* Contact */}
      <div className='space-y-1'>
        <h1 className='text-white font-semibold text-[18px]'>CONTACT</h1>
        <p className='text-[#D4D4D4]'>vaishalitechtech.info@gmail.com</p>
        <p className='text-[#D4D4D4]'>E-2, Ashok Marg, Panch Batti, C Scheme, Ashok Nagar, Jaipur, Rajasthan, 302001</p>
        <p className='text-[#D4D4D4]'>+91 9135867021 </p>
      </div>

      {/* PRODUCT */}
      <div className='space-y-1'>
        <h1 className='text-white font-semibold text-[18px]'>PRODUCT</h1>
        <p className='text-[#D4D4D4]'>Web-designs & Devlopment</p>
        <p className='text-[#D4D4D4]'>App-designs & Devlopment</p>
        <p className='text-[#D4D4D4]'>UI/UX </p>
        <p className='text-[#D4D4D4]'>Digital Marketing</p>
        <p className='text-[#D4D4D4]'>Social Media Management </p>
        <p className='text-[#D4D4D4]'>SEO </p>
      </div>
      {/* LEGAL */}
      <div className='space-y-1'>
        <h1 className='text-white font-semibold text-[18px] '>LEGAL</h1>
        <p className='text-[#D4D4D4] '>Terms</p>
        <p className='text-[#D4D4D4]'>Privacy</p>
        
      </div>
    </div>
    <p className='text-white text-center mt-3'>© 2025 Company Name. All rights reserved.</p>
  </footer>
);

export default Footer;
