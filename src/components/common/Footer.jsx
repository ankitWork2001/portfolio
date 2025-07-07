// src/components/common/Footer.jsx
import React from 'react';
import logo from '../../public/Logo.png'
import { FaThreads } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";

const Footer = () => (
  <footer className='bg-[#000E26] py-5 cursor-default'>
    <div className='flex justify-around lg:flex-row flex-col space-y-5 '>
      {/* Logo and images */}
      <div className=' mx-auto lg:mx-0'>
        <div className='order-1'>
        <img src={logo} alt="Logo" className='w-[169.2px] h-[96px]' />
        </div>
        <div className='flex gap-3 mt-4 order-2'>
          <FaThreads className='text-white w-[20px] h-[20px]' />
          <FaInstagram className='text-white w-[20px] h-[20px]' />
          <FaLinkedin className='text-white w-[20px] h-[20px]' />
          <FaXTwitter className='text-white w-[20px] h-[20px]' />
          <FaPinterest className='text-white w-[20px] h-[20px]' />
        </div>
      </div>
      {/* Contact */}
      <div className='space-y-1 text-center lg:text-left order-2'>
        <h1 className='text-white font-semibold text-[18px] '>CONTACT</h1>
        <div className='font-semibold'>
        <p className='text-[#D4D4D4]'>vaishalitechtech.info@gmail.com</p>
        <p className='text-[#D4D4D4]'>E-2, Ashok Marg, Panch Batti, C Scheme, Ashok Nagar, Jaipur, Rajasthan, 302001</p>
        <p className='text-[#D4D4D4]'>+91 9135867021 </p>
        </div>
      </div>

      {/* PRODUCT */}
      <div className='space-y-1 order-3'>
        <h1 className='text-white font-semibold text-[18px] text-center lg:text-left'>PRODUCT</h1>
        <div className='font-semibold text-center lg:text-left'>
        <p className='text-[#D4D4D4]'>Web-designs & Devlopment</p>
        <p className='text-[#D4D4D4]'>App-designs & Devlopment</p>
        <p className='text-[#D4D4D4]'>UI/UX </p>
        <p className='text-[#D4D4D4]'>Digital Marketing</p>
        <p className='text-[#D4D4D4]'>Social Media Management </p>
        <p className='text-[#D4D4D4]'>SEO </p>
        </div>
      </div>
      {/* LEGAL */}
      <div className=' order-4 flex text-center lg:text-left flex-col'>
        <h1 className='text-white font-semibold text-[18px]'>LEGAL</h1>
        <div className='font-semibold'>
        <p className='text-[#D4D4D4] '>Terms</p>
        <p className='text-[#D4D4D4]'>Privacy</p>
        </div>
        

      </div>
    </div>
    <p className='text-white text-center mt-3'>© 2025 Company Name. All rights reserved.</p>
  </footer>
);

export default Footer;
