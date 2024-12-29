import React from 'react';
import ServiceLogo from './ServiceLogo';

const Service = ({ name, logo, des }) => {
  return (
    <div className="group w-full sm:w-[100%] md:w-[80%] lg:w-1/3 md:mx-auto border-2 border-gray-400 shadow-lg shadow-gray-primary flex flex-col items-center justify-center p-6 sm:p-8 md:p-10 gap-4 sm:gap-6 transition-all duration-300 ease-in-out hover:scale-105 relative">
      <ServiceLogo logo={logo} />
      <h1 className="font-mono font-bold text-lg sm:text-xl md:text-2xl uppercase text-center">{name}</h1>
      <p className="text-sm sm:text-base md:text-lg text-justify">{des}</p>
    </div>
  );
};

export default Service;