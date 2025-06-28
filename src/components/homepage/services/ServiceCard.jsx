import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import cardBg from "./images/cardBg.png";
import brush from "./images/brush.png";

export default function ServiceCard({ icon, circle, title, description, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        ease: "easeOut",
        delay: index * 0.2,
      }}
      viewport={{ once: true }}
      className="relative group flex flex-col w-[300px]  sm:w-[438px] h-fit mt-4 mx-auto"
    >
      {/* Spinning circle background — hidden on mobile, shown on sm+ */}
      <img
        src={circle}
        alt=""
        className="hidden sm:block absolute w-[320px] sm:w-[396px] h-[380px] rounded-full top-0 left-1/2 transform -translate-x-1/2 group-hover:-translate-y-30 animate-[spin_55s_linear_infinite]"
      />

      {/* Card container */}
      <div className="relative w-[235px] h-[425px] pl-3 flex flex-col items-start pt-4 left-[50px] sm:left-[116px] overflow-hidden">
        {/* Background image on hover */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${cardBg})` }}
        />

        {/* Brush icon */}
        <img
          src={brush}
          alt=""
          className="w-[80px] h-[80px] absolute left-[118px] top-2 opacity-0 group-hover:opacity-10 transition-opacity duration-300 z-10"
        />

        {/* Icon */}
        <div className="w-[60px] h-[58px] mb-4 z-10">
          <img src={icon} alt={title} className="w-full h-full" />
        </div>

        {/* Title */}
        <h3 className="text-[34px] leading-[39px] font-bold text-left z-10">
          {title}
        </h3>

        {/* Description */}
        <p className="mt-4 w-[195px] font-semibold text-left z-10">
          {description}
        </p>

        {/* Button */}
        <button className="absolute top-[340px] flex items-center justify-center w-[144px] h-[42px] bg-[#002E7C] hover:bg-pink-800 text-white font-semibold text-[16px] rounded transition-colors duration-300 z-10">
          Read More
          <FaArrowRightLong
            size={10}
            className="inline-block ml-1 transition-transform duration-300 ease-out group-hover:translate-x-1"
          />
        </button>
      </div>
    </motion.div>
  );
}
