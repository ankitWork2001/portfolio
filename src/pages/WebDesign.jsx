// src/pages/WebDesign.jsx
import React from 'react';
import image1 from '../../public/Frame.png'
import image3 from '../../public/Frame3.png'
import image2 from '../../public/Frame2.png'
import { GoDotFill } from "react-icons/go";
import { motion } from 'framer-motion'

const pointsForSection1 = [
  "Business Website Design (Static/Dynamic)",
  "Portfolio Website",
  "E-commerce Website (with payment gateway)",
  "Custom Web Application Development",
  "Landing Page Design",
  "School Website",
  "Coaching Institute Website (with course listings)",
  "College/University Website",
  "E-Learning Platform Website",
  "Blog/News Website",
  "Website Maintenance & Support",
  "Website Speed Optimization",
  "Domain & Hosting Support"
];

const pointsForSection2 = [
  "Android App Development (Native/Hybrid)",
  "iOS App Development",
  "Cross-platform App Development (React Native, Flutter)",
  "E-commerce Mobile App",
  "Booking & Service Apps",
  "Custom App Solutions (Education, Laundry, Hotel, etc.)",
  "School Management App (Student, Teacher, Admin Login)"
];

const pointsForSection3 = [
  "WordPress Website Design",
  "WordPress E-commerce (WooCommerce)",
  "Theme Customization",
  "Plugin Integration & Setup",
  "Blog Website Creation",
  "WordPress Maintenance"
];



const WebDesign = () => (
  <div className='bg-blue-950 '>
    <section className='flex justify-around items-center pt-25 h-[45.0625rem]'>
      <div className='relative w-[644px] h-[607px]'>
        <div className='absolute top-0 left-8 w-[568px] h-[568px] opacity-10 bg-[#FFFFFF] rounded-full  z-0'></div>
        <motion.div
          className="absolute left-20 -top-10 w-[568px] h-[568px] border border-gray-600 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
        >
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
            <motion.div
              className="bg-red-700 rounded-full"
              animate={{
                width: ["10px", "17px", "10px"],
                height: ["10px", "17px", "10px"]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>

          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
            <motion.div
              className="bg-red-700 rounded-full"
              animate={{
                width: ["10px", "17px", "10px"],
                height: ["10px", "17px", "10px"]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.75
              }}
            />
          </div>
        </motion.div>
        <img src={image1} alt="image1" className='absolute top-10 left-0 w-[670px] h-[444.32px] z-10 object-cover' />
      </div>

      <div className='space-y-5'>
        <div>
          <h1 className='text-white font-bold text-[2.875rem]'>Website Development</h1>
        </div>
        <div className='text-[#A0AEC0] space-y-1 '>
          {
            pointsForSection1.map(title => (
              <p className='flex items-center gap-5'><span className='text-sm'><GoDotFill /></span><span className='text-[1.125rem]'>{title}</span></p>
            ))
          }
        </div>
      </div>
    </section>

    <section className='flex justify-around items-center h-[45.0625rem]'>

      <div className='space-y-5'>
        <div>
          <h1 className='text-white font-bold text-[2.875rem]'>App Development</h1>
        </div>
        <div className='text-[#A0AEC0] space-y-1'>
          {
            pointsForSection2.map(title => (
              <p className='flex items-center gap-5'><span className='text-sm'><GoDotFill /></span><span className='text-[1.125rem]'>{title}</span></p>
            ))
          }
        </div>
      </div>
      <div className='relative  w-[644px] h-[607px]'>
        <div className='absolute top-0 left-8 w-[568px] h-[568px] opacity-10 bg-[#FFFFFF] rounded-full  z-0'></div>
        <motion.div
          className="absolute left-20 -top-10 w-[568px] h-[568px] border border-gray-600 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
        >
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
            <motion.div
              className="bg-red-700 rounded-full"
              animate={{
                width: ["10px", "17px", "10px"],
                height: ["10px", "17px", "10px"]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>

          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
            <motion.div
              className="bg-red-700 rounded-full"
              animate={{
                width: ["10px", "17px", "10px"],
                height: ["10px", "17px", "10px"]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.75
              }}
            />
          </div>
        </motion.div>
        <img src={image2} alt="image1" className='absolute left-27 top-15 w-[429px] h-[449px] z-10 object-cover' />
      </div>
    </section>

    <section className='flex justify-around py-25  h-[45.0625rem]'>
      <div className='relative flex justify-center w-[644px] h-[607px]'>
        <div className='absolute -top-15 w-[568px] h-[568px] opacity-10 bg-[#FFFFFF] rounded-full  z-0'></div>
        <motion.div
          className="absolute left-20 -top-25 w-[568px] h-[568px] border border-gray-600 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
        >
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
            <motion.div
              className="bg-red-700 rounded-full"
              animate={{
                width: ["10px", "17px", "10px"],
                height: ["10px", "17px", "10px"]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>

          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
            <motion.div
              className="bg-red-700 rounded-full"
              animate={{
                width: ["10px", "17px", "10px"],
                height: ["10px", "17px", "10px"]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.75
              }}
            />
          </div>
        </motion.div>
        <img src={image3} alt="image1" className='absolute -top-10 w-[466px] h-[466px] z-10 object-fill ' />
      </div>

      <div className='space-y-5'>
        <div>
          <h1 className='text-white font-bold text-[2.875rem]'>WordPress Solutions </h1>
        </div>
        <div className='text-[#A0AEC0] space-y-1'>
          {
            pointsForSection3.map(title => (
              <p className='flex items-center gap-5'><span className='text-sm'><GoDotFill /></span><span className='text-[1.125rem]'>{title}</span></p>
            ))
          }
        </div>
      </div>
    </section>
  </div>
);

export default WebDesign;
