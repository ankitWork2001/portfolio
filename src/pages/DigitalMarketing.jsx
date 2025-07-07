// src/pages/DigitalMarketing.jsx
import React from 'react';
import { GoDotFill } from "react-icons/go";
import image from '../public/Digital_Marketing.png';
import { motion } from 'framer-motion'
import BouncyText from '../components/homepage/BouncyText';

const pointsData = [
  "Meta (Facebook & Instagram) Ads",
  "Google Ads (Search, Display, Shopping)",
  "Social Media Marketing (SMM)",
  "Search Engine Optimization (SEO)",
  "Google My Business Optimization",
  "Content Writing & Blog Posting",
  "Email Marketing Campaigns"
]


const DigitalMarketing = () => (
  <div className='bg-blue-950 flex w-full overflow-hidden flex-col md:flex-row py-15 lg:pt-30 justify-around'>
    <div className='relative w-full max-w-lg h-auto mt-8 md:my-0 right-6 order-1 md:order-2 py-10 '>
      <div className='absolute top-0 left-8 w-[90%] lg:w-full aspect-square opacity-10 bg-white rounded-full z-0'></div>
      <div className='absolute left-17  md:left-20 -top-10 w-[85%] lg:w-full aspect-square overflow-hidden'>
        <motion.div
          className="relative w-full h-full border border-gray-600 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
        >
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
            <motion.div
              className="bg-red-700 rounded-full"
              animate={{ width: ["10px", "17px", "10px"], height: ["10px", "17px", "10px"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
            <motion.div
              className="bg-red-700 rounded-full"
              animate={{ width: ["10px", "17px", "10px"], height: ["10px", "17px", "10px"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.75 }}
            />
          </div>
        </motion.div>
      </div>

      <img src={image} alt="Website" className='relative left-20 lg:left-22 -top-5 z-10 w-[70%] lg:w-[83%] h-auto object-contain' />
    </div>
    <div className='space-y-5 relative left-5 max-w-xl order-2 md:order-1 mt-12 md:mt-0'>
      <BouncyText
            text={"Digital Marketing"}
            className="text-white font-bold text-[2rem] md:text-[2.875rem]"
          />
      <div className='text-[#A0AEC0] space-y-1'>
        {
          pointsData.map((title, idx) => (
            <p key={idx} className='flex items-start gap-3'><GoDotFill className='mt-1 text-sm' /><span className='text-[1rem] md:text-[1.125rem]'>{title}</span></p>
          ))
        }
      </div>
    </div>
  </div>
);

export default DigitalMarketing;
