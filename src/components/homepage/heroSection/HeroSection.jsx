// import React from "react";
// import { motion } from "framer-motion";
// import bgCircle from "../onlinePresence/img/black.png";
// import man from "./images/man.png";
// import rocket from "./images/rocket.png";
// import search from "./images/search.png";
// import sms from "./images/sms.png";
// import BouncyText from "../BouncyText.jsx";
// import circle from "../services/images/circle.png";

// const HeroSection = () => {
//   return (
//     <div className="relative w-full h-[597px]  overflow-hidden px-6 py-16 text-white flex items-center justify-center">
//       <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-10">
//         {/* LEFT SIDE - TEXT */}
//         <div className="w-full md:w-1/2 space-y-6 text-center md:text-left z-10">
//           <BouncyText
//             text={`Shaping Unique Digital \nExperiences That Mirror \nYour Brand’s Soul`}
//             className="text-4xl md:text-5xl font-bold leading-tight"
//           />

//           <motion.p
//             initial={{ y: 50, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ delay: 0.3 }}
//             className="text-lg text-[#D4D4D4] leading-[29px] mx-auto md:mx-0 max-w-xl"
//           >
//             VaishaliTech is a top website design company that uses the latest
//             technology and creative ideas to bring your vision to life, making
//             your brand stand out online.
//           </motion.p>

//           <div className="flex justify-center md:justify-start">
//             <button
//               className="relative bg-[#111E33] mt-4 hover:bg-pink-600 text-white w-[280px] h-[62px] font-bold overflow-hidden transition-colors duration-300"
//               style={{
//                 clipPath: "polygon(8% 0%, 92% 0%, 100% 100%, 0% 100%)",
//                 borderTop: "5px solid gray",
//                 borderRight: "5px solid gray",
//               }}
//             >
//               <span className="absolute inset-0 flex items-center justify-center text-[22px]">
//                 Learn More
//               </span>
//             </button>
//           </div>
//         </div>

//         {/* RIGHT SIDE - IMAGES */}
//         <div className="w-full md:w-1/2 relative flex items-center justify-center">
//           {/* Background Circle */}
//           <motion.img
//             src={bgCircle}
//             alt="circle"
//             className="absolute w-[455px] h-[440px] left-[85px]  "
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ duration: 0.8 }}
//           />
//           {/*   cicle rotation */}

//           <img
//             src={circle}
//             alt="circle"
//             className="absolute w-[542px] h-[485px] left-[124px] top-[-48px] animate-[spin_35s_linear_infinite]"
//           />

//           {/* Man Image */}
//           <motion.img
//             src={man}
//             alt="man"
//             className="relative z-10 w-[350px] md:w-[500px] h-auto object-contain"
//             initial={{ x: 100, opacity: 0 }}
//             animate={{ x: 0, opacity: 1 }}
//             transition={{
//               delay: 0.5,
//               duration: 0.8,
//               type: "spring",
//               stiffness: 200,
//             }}
//           />

//           {/* Rocket */}

//           <motion.img
//             src={rocket}
//             alt="rocket"
//             className="absolute top-[10%] left-[22px] w-[100px] h-[120px] z-20 animate-[float-left-up_4s_ease-in-out_infinite]"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.7 }}
//           />

//           <motion.img
//             src={search}
//             alt="search"
//             className="absolute top-14 right-[40px] w-[60px] h-[80px] z-20 animate-[float-right-down_6s_ease-in-out_infinite]"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.9 }}
//           />

//           <motion.img
//             src={sms}
//             alt="sms"
//             className="absolute bottom-[-10px] right-[10px] w-[60px] h-[60px] z-20 animate-[float-right-down_5s_ease-in-out_infinite]"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 1.1 }}
//           />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;



import React from "react";
import { motion } from "framer-motion";
import bgCircle from "../onlinePresence/img/black.png";
import man from "./images/man.png";
import rocket from "./images/rocket.png";
import search from "./images/search.png";
import sms from "./images/sms.png";
import BouncyText from "../BouncyText.jsx";
import circle from "../services/images/circle.png";

const HeroSection = () => {
  return (
    <div className="relative w-full min-h-[597px] overflow-hidden px-4 sm:px-6 py-12 sm:py-16 text-white flex items-center justify-center">
      <div className="max-w-7xl w-full flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* LEFT SIDE - TEXT */}
        <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left z-10">
          <BouncyText
            text={`Shaping Unique Digital \nExperiences That Mirror \nYour Brand’s Soul`}
            className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
          />

          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-base sm:text-lg text-[#D4D4D4] leading-[29px] mx-auto lg:mx-0 max-w-xl"
          >
            VaishaliTech is a top website design company that uses the latest
            technology and creative ideas to bring your vision to life, making
            your brand stand out online.
          </motion.p>

          <div className="flex justify-center lg:justify-start">
            <button
              className="relative bg-[#111E33] mt-4 hover:bg-pink-600 text-white w-[240px] sm:w-[280px] h-[56px] sm:h-[62px] font-bold overflow-hidden transition-colors duration-300"
              style={{
                clipPath: "polygon(8% 0%, 92% 0%, 100% 100%, 0% 100%)",
                borderTop: "5px solid gray",
                borderRight: "5px solid gray",
              }}
            >
              <span className="absolute inset-0 flex items-center justify-center text-[20px] sm:text-[22px]">
                Learn More
              </span>
            </button>
          </div>
        </div>

        {/* RIGHT SIDE - IMAGES */}
        <div className="w-full lg:w-1/2 relative flex items-center justify-center mt-10 lg:mt-0 lg:mr-28">
          {/* Background Circle */}
          <motion.img
            src={bgCircle}
            alt="circle"
            className="absolute w-[250px] sm:w-[350px] lg:w-[455px] h-auto left-1/2 transform -translate-x-1/2 lg:left-[85px] lg:translate-x-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          />

          {/* cicle rotation */}
          <img
            src={circle}
            alt="circle"
            className="absolute w-[300px] sm:w-[420px] lg:w-[542px] h-auto top-[-60px] left-1/2 transform -translate-x-1/2 lg:left-[124px] lg:translate-x-0 animate-[spin_35s_linear_infinite]"
          />

          {/* Man Image */}
          <motion.img
            src={man}
            alt="man"
            className="relative z-10 w-[220px] sm:w-[350px] lg:w-[500px] h-auto object-contain"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              delay: 0.5,
              duration: 0.8,
              type: "spring",
              stiffness: 200,
            }}
          />

          {/* Rocket */}
          <motion.img
            src={rocket}
            alt="rocket"
            className="absolute top-[5%] left-[10px] md:left-[100px] lg:left-[10px] w-[60px] sm:w-[80px] lg:w-[100px] h-auto z-20 animate-[float-left-up_4s_ease-in-out_infinite]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          />

          <motion.img
            src={search}
            alt="search"
            className="absolute top-10 right-[30px] md:right-[88px] lg:right-[10px] w-[40px] sm:w-[60px] h-auto z-20 animate-[float-right-down_6s_ease-in-out_infinite]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
          />

          <motion.img
            src={sms}
            alt="sms"
            className="absolute bottom-[-5px] right-[30px] md:right-[110px ] w-[40px] sm:w-[60px] h-auto z-20 animate-[float-right-down_5s_ease-in-out_infinite]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
