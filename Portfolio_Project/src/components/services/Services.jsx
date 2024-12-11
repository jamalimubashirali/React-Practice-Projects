import React from "react";
import Service from "./Service";

const Services = () => {
  return (
    <div className="m-4 sm:m-10 md:m-20">
      <h1 className="text-2xl sm:text-3xl md:text-4xl mb-6 sm:mb-8 md:mb-10 font-bold font-mono">Services_</h1>
      <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 md:gap-10">
        <Service logo={"web Logo"} name={"Web Development"} des={"Des For web dev"} />
        <Service logo={"App Logo"} name={"Mobile App Development"} des={"Des for Mobile app dev"} />
        <Service logo={"ML Logo"} name={"AI/ML System Development"} des={"Des for AI/ML Sys dev"} />
      </div>
    </div>
  );
};

export default Services;