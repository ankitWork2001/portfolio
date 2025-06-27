// src/pages/UIUX.jsx
import React from 'react';
import { GoDotFill } from "react-icons/go";
import image from '../../public/Frame.png'
import {motion} from 'framer-motion'

const pointsData = [
  "Website UI/UX Design",
  "Mobile App UI/UX Design",
  "Logo Design",
  "Business Card / Visiting Card Design",
  "Brochure / Flyer / Banner Design",
  "Social Media Post Design"
]


const UIUX = () => (
  <div className='bg-blue-950 pt-30 px-10'>
    <div className='flex justify-around '>
      <div className='pt-25 '>
        <div>
          <h1 className='text-white text-[46px] font-bold'>Graphic & UI/UX Design</h1>
        </div>
        <div className='space-y-1'>
          {
            pointsData.map(title => (
              <p className='text-[#A0AEC0] text-[18px] flex gap-5'><span><GoDotFill/></span><span>{title}</span></p>
            ))
          }
        </div>

      </div>
      <div className='w-[644px] h-[607px] relative  '>
        <div className='absolute bg-[#D9D9D9] opacity-10 w-[568px] h-[568px] rounded-full'></div>
         <motion.div
          className="absolute left-20 -top-10 w-[568px] h-[568px] border border-gray-700 rounded-full overflow-hidden"
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
        <img src={image} alt="Image" className='absolute w-[480px] h-[472px] left-20 top-10'/>
      </div>
    </div>
  </div>
);

export default UIUX;
