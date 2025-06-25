// src/components/common/Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../public/Logo.png'
import {AnimatePresence, motion} from 'framer-motion'
import { FaAngleRight } from "react-icons/fa6";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showDigitalMarketingDropdown, setShowDigitalMarketingDropdown] = useState(false);
  const [showUIDropdown, setShowUIDropdown] = useState(false);

  return (
  <nav className='flex justify-between px-10 py-2 bg-[#000E26]'>
    <img src={logo} alt="Logo" className='w-[141px] h-[80px]' />
    <ul className='flex items-center gap-6 text-white font-semibold'>
      <li className='relative hover:text-red-800 group py-5 cursor-pointer transition-colors duration-300' onMouseEnter={() => setShowDropdown(true)} onMouseLeave={() => setShowDropdown(false)}>
        <span>Web-Design</span>
        <AnimatePresence>
         {
          showDropdown && 
        <motion.ul initial={{opacity:0,y:-200}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-200}} transition={{duration:0.3}} className='group-hover:block hidden absolute space-y-3 bg-gray-900 min-w-[15rem]  -left-28 top-15 border-t border-r border-gray-400'>
          <li className='text-gray-400 hover:text-white py-4 border-b pl-4 flex gap-3 items-center justify-between pr-4'>Website Development <FaAngleRight/></li>
          <li className='text-gray-400 hover:text-white py-2 border-b pl-4 flex gap-3 items-center justify-between pr-4'>App Development <FaAngleRight/></li>
          <li className='text-gray-400 hover:text-white py-2 border-b pl-4  flex gap-3 items-center justify-between pr-4'>WordPress Solutions <FaAngleRight/></li>
        </motion.ul>
         }
        </AnimatePresence>
      </li>
      <li className='hover:text-red-800 relative group py-5 cursor-pointer transition-colors duration-300' onMouseEnter={() => setShowUIDropdown(true)} onMouseLeave={() => setShowUIDropdown(false)}>
        <span>UI/UX</span>
        <AnimatePresence>
          {
            showUIDropdown && 
        <motion.ul initial={{opacity:0,y:-200}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-200}} transition={{duration:0.3}} className='group-hover:block text-white hidden font-normal absolute min-w-[17rem] bg-blue-950 -left-28 top-16'>
          <li className='py-4 border-b border-gray-400 pl-4'>Website UI/UX Design</li>
          <li className='py-4 border-b border-gray-400 pl-4'>Mobile App UI/UX Design</li>
          <li className='py-4 border-b border-gray-400 pl-4'>Logo Design</li>
          <li className='py-4 border-b border-gray-400 pl-4'>Business Card / Visiting Card Design</li>
          <li className='py-4 border-b border-gray-400 pl-4'>Brochure / Flyer / Banner Design</li>
          <li className='py-4 border-b border-gray-400 pl-4'>Social Media Post Design</li>
        </motion.ul>
        }
        </AnimatePresence>
      </li>
      <li className='hover:text-red-800  py-5 cursor-pointer transition-colors duration-300' ><Link to="/mploy">Employ</Link></li>
      <li className='hover:text-red-800 group relative py-5 cursor-pointer transition-colors duration-300' onMouseEnter={() => setShowDigitalMarketingDropdown(true)} onMouseLeave={() => setShowDigitalMarketingDropdown(false)}>
        <span>Digital Marketing</span>
        <AnimatePresence>
         {
          showDigitalMarketingDropdown &&
        <motion.ul initial={{opacity:0,y:-200}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-200}} transition={{duration:0.3}} className='group-hover:block hidden font-normal absolute text-white min-w-[20rem] bg-blue-950 -left-28 top-16'>
          <li className='py-4 border-b border-gray-400 pl-4'>Meta (Facebook & Instagram) Ads</li>
          <li className='py-4 border-b border-gray-400 pl-4'>Google Ads (Search, Display, Shopping)</li>
          <li className='py-4 border-b border-gray-400 pl-4'>Social Media Marketing (SMM)</li>
          <li className='py-4 border-b border-gray-400 pl-4'>Search Engine Optimization (SEO)</li>
          <li className='py-4 border-b border-gray-400 pl-4'>Google My Business Optimization</li>
          <li className='py-4 border-b border-gray-400 pl-4'>Content Writing & Blog Posting</li>
          <li className='py-4 border-b border-gray-400 pl-4'>Email Marketing Campaigns</li>
        </motion.ul>
        }
        </AnimatePresence>

      </li>
      <li className='hover:text-red-800  py-5 cursor-pointer transition-colors duration-300' ><Link to="/about-us">About Us</Link></li>
      <li className='bg-[#880E4F] px-5 py-2 rounded-lg'><Link to="/contact-us">Contact Us</Link></li>
    </ul>
  </nav>
)};

export default Navbar;
