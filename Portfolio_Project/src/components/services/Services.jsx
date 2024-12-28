import React from "react";
import Service from "./Service";

const Services = ({services}) => {
  return (
    <div id="services" className="m-6 sm:m-6 md:m-10 lg:m-20 text-gray-primary">
      <h1 className="text-2xl sm:text-3xl md:text-4xl mb-6 sm:mb-8 md:mb-10 font-bold font-mono transition-transform hover:scale-105">Services_</h1>
      <div className="flex flex-col lg:flex-row md:flex-col md:justify-center sm:flex-col gap-6 sm:gap-8 md:gap-5">
        {
          services.map((service , index) => <Service key={index} logo={service.logo} name={service.name} des={service.desc}/>)
        }
      </div>
    </div>
  );
};

export default Services;