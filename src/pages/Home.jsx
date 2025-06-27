import React from "react";
import HeroSection from "../components/homepage/heroSection/HeroSection";
import OurServices from "../components/homepage/services/OurServices";
import OnlinePresence from "../components/homepage/onlinePresence/OnlinePresence.jsx";
import DigitalMarketing from "../components/homepage/digital-Marketing/Marketing.jsx";
import AboutShort from "../components/homepage/about/AboutShort.jsx";
import ContactUs from "../components/homepage/contact-us/ContactShort.jsx";
const Home = () => (
  <div>
    <HeroSection />
    <OurServices />
    <OnlinePresence /> 
     <DigitalMarketing />
     <AboutShort />
    <ContactUs /> 

  </div>
);

export default Home;
