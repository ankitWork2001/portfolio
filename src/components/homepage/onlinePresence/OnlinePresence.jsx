import React from "react";
import circle from "../services/images/circle.png";
import bar from "./img/bar.png";
import black from "./img/black.png";
import lineGraph from "./img/lineGraph.png";
import men from "./img/men.png";
import { FaArrowRightLong } from "react-icons/fa6";
import BouncyText from "../BouncyText";
import brush from "../services/images/Brush.png";
import { motion } from "framer-motion";

export default function OnlinePresence() {
  return (
    <section className="relative text-white py-16 sm:py-20 overflow-hidden">
      <BouncyText
        text={`1st Step of your Online Presence`}
        className="text-2xl sm:text-4xl md:text-5xl px-4 font-extrabold leading-tight text-center mb-10 sm:mb-12"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 flex flex-col lg:flex-row items-center justify-between gap-10 sm:gap-12">
        {/* Left side - illustration */}
        <div className="relative w-full max-w-[400px] aspect-[1/1] mx-auto flex-shrink-0">
          {/* Use responsive img styles */}
          <img
            src={circle}
            alt="circle"
            className="absolute hidden sm:block w-full h-full object-contain animate-[spin_35s_linear_infinite] left-0 top-9"
          />
          <img
            src={men}
            alt="man"
            className="absolute top-[-8%] left-1/2 transform -translate-x-1/2 w-[70%] sm:w-[75%] md:w-[80%] h-auto z-10"
          />
          <img
            src={lineGraph}
            alt="lineGraph"
            className="absolute left-[-20%] top-[32%] w-[30%] sm:w-[28%] h-auto rotate-[3deg] animate-[float-left-up_6s_ease-in-out_infinite]"
          />
          <img
            src={brush}
            alt="brush"
            className="absolute left-[-10%] top-[70%] w-[18%] sm:w-[20%] md:w-[22%] h-auto rotate-[3deg] animate-[float-left-up_5s_ease-in-out_infinite]"
          />
          <img
            src={black}
            alt="black"
            className="absolute bottom-[-10%] left-1/2 transform -translate-x-1/2 w-[90%] h-auto rotate-6"
          />
          <img
            src={bar}
            alt="bar"
            className="absolute top-[50%] left-[78%] w-[28%] sm:w-[30%] md:w-[33%] h-auto rotate-2 animate-[float-right-down_6s_ease-in-out_infinite]"
          />
        </div>

        {/* Right side - animated text block */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="max-w-[668px] w-full relative px-2"
        >
          <p className="text-[#D4D4D4] text-sm sm:text-base md:text-lg font-semibold leading-relaxed mb-6">
            In the era of virtualization, it is important for any organization,
            regardless of its size or industry, to have a strong online presence
            to get discovered. Resultantly, a business website becomes crucial
            for organizations to optimize their online activities and showcase
            the products and services that they offer. With VaishaliTech's
            Website Designing Services, you can unify the essence and values of
            your business to build an optimized and streamlined website.
          </p>

          {/* Button */}
          <button className="group mt-4 md:absolute md:top-[200px] left-0 flex items-center justify-center w-[150px] sm:w-[174px] h-[38px] sm:h-[42px] bg-[#002E7C] hover:bg-pink-800 text-white font-semibold text-sm sm:text-[16px] rounded transition-colors duration-300 z-10">
            Schedule a Call
            <FaArrowRightLong
              size={12}
              className="inline-block ml-1 transition-transform duration-300 ease-out group-hover:translate-x-1"
            />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
