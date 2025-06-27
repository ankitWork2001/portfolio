import React from "react";
import { motion } from "framer-motion";

import cardImage1 from "./imgs/1.png";
import cardImage2 from "./imgs/2.png";
import cardImage3 from "./imgs/3.png";
import cardImage4 from "./imgs/4.png";
import BouncyText from "../BouncyText.jsx";

const digitalData = [
  {
    text: "Boost Your Reach\n& Visibility",
    image: cardImage1,
  },
  {
    text: "Secure Your Virtual\nInteractions",
    image: cardImage2,
  },
  {
    text: "Elevate Your Brand\nValue",
    image: cardImage3,
  },
  {
    text: "Streamline Your \nPerformance",
    image: cardImage4,
  },
];

const services = [
  {
    number: "01",
    title: "One-Stop Solution",
    description:
      "From UI/UX design to complete website development, logo design, and SEO, we cover all aspects of digital presence under one roof.",
  },
  {
    number: "02",
    title: "Client-Centric Approach",
    description:
      "Dedicated Support: We prioritize client satisfaction by offering dedicated support throughout the project and beyond.",
  },
  {
    number: "03",
    title: "Proven \nResults",
    description:
      "Boosted Online Presence: Our SEO and digital marketing strategies have helped numerous clients increase their online visibility and drive more traffic to their sites.",
  },
  {
    number: "04",
    title: "Transparent Pricing",
    description:
      "No Hidden Costs: Our pricing is clear and transparent, ensuring you get the best value for your investment without any surprises. Flexible Packages: We offer various pricing packages to suit businesses of all sizes, from startups to established enterprises.",
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6 } },
};

export default function DigitalMarketing() {
  return (
    <section className=" text-white py-16 px-4 md:px-10">
      {/* Header */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <BouncyText
          text={`Digital Marketing`}
          className="text-5xl font-extrabold leading-tight text-center mb-8 text-white"
        />
        <p className="text-gray-300 max-w-7xl mx-auto text-xl text-left">
          Just like your business, your business website needs to be unique,
          impactful, and advanced to get ahead of the competition.
          VaishaliTech's team of experts works closely with you to build a
          website that helps you stand out and beat the competition.
        </p>
      </div>

      {/* Digital Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto px-2">
        {digitalData.map((item, index) => (
          <motion.div
            key={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition duration-300"
          >
            <img
              src={item.image}
              alt={`card-${index}`}
              className="w-full h-[386px] object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-60 transition-opacity duration-300 z-10"></div>
            <div className="absolute inset-0 flex items-center justify-center p-4 z-20">
              <div className="relative top-[110px] flex items-start gap-3 transform -translate-x-10 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                <div className="w-1 h-18 bg-white rounded-full"></div>
                <h3 className="text-white w-[269px] text-3xl leading-9 font-semibold whitespace-pre-line">
                  {item.text}
                </h3>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Services Section */}
      <div className="mt-32 text-center">
        <BouncyText
          text={`Here’s What We Bring to the Table`}
          className="text-5xl font-extrabold leading-tight text-center mb-2 text-white"
        />
        <p className="text-[#CACACA] text-3xl mb-12">
          Our Services: From Idea to Impact
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeInUp}
              transition={{ delay: index * 0.15 }}
              className="relative mt-8 w-[304px] h-[500px ] mx-auto bg-[#1C2A45] rounded-[70px_70px_20px_20px] p-8 pb-10 flex flex-col justify-between min-h-[380px] shadow-lg overflow-hidden half-moon-right"
            >
              <div className="relative z-10 text-right mb-5">
                <div className="text-[90px] font-bold text-[#ccc] mb-4">
                  {service.number}
                </div>
                <h3 className="text-[#880E4F] font-extrabold mt-5 text-3xl leading-7 mb-2 text-left">
                  {service.title}
                </h3>
                <p className="text-gray-300 font-semibold leading-5 text-sm text-left mt-4">{service.description}</p>
              </div>
              <button className=" top-[15px] self-start px-6 py-1 bg-[#00308F] text-white font-extrabold rounded-full text-xl hover:bg-[#e6007a] transition duration-300 relative z-10">
                Know More
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
