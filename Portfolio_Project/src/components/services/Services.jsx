import React from "react";
import Service from "./Service";

const Services = ({services}) => {
  return (
    <div className="m-6 sm:m-6 md:m-10 lg:m-20">
      <h1 className="text-2xl sm:text-3xl md:text-4xl mb-6 sm:mb-8 md:mb-10 font-bold font-mono">Services_</h1>
      <div className="flex flex-col lg:flex-row md:flex-col md:justify-center sm:flex-col gap-6 sm:gap-8 md:gap-5">
        {
          services.map((service) => <Service logo={service.name.split(" ")[0]} name={service.name} des={service.desc}/>)
        }
      </div>
    </div>
  );
};

export default Services;