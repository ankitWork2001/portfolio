import React from "react";
import ServiceCard from "./ServiceCard";
import app from "./images/app.png";
import branding from "./images/branding.png";
import digital from "./images/digital.png";
import web from "./images/web.png";
import ui from "./images/ui.png";
import circle from "./images/circle.png";
import BouncyText from "../BouncyText";

const services = [
  {
    icon: web,
    title: "Web Development",
    description:
      "We create modern, user-friendly websites that showcase your brand's unique selling points.",
  },
  {
    icon: app,
    title: "Mobile App Development",
    description:
      "Build user-friendly mobile application to extend your business to mobile platforms.",
  },
  {
    icon: ui,
    title: "UI/UX Design",
    description:
      "We build responsive ecommerce, lead gen, custom, and informational websites that are attractive.",
  },
  {
    icon: digital,
    title: "Digital Marketing",
    description:
      "We care about your brand and make sure that every element on your website reflects it clearly.",
  },
  {
    icon: branding,
    title: "Branding",
    description:
      "We start our process by learning everything about your brand and making sure every element on your website reflects it.",
  },
];

export default function OurServices() {
  return (
    <div className="text-white mx-auto">
      <BouncyText
        text={`Our Services`}
        className="text-5xl  font-bold leading-tight text-center mb-12 text-white"
      />
      <div className="max-w-[1380px] mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.slice(0, 3).map((svc, index) => (
            <ServiceCard key={svc.title} circle={circle} index={index} {...svc} />
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2  gap-8">
          {services.slice(3).map((svc, index) => (
            <ServiceCard key={svc.title} circle={circle} index={index + 3} {...svc} />
          ))}
        </div>
      </div>
    </div>
  );
}
