import React from 'react';
import ServiceLogo from './ServiceLogo';
import Dot from './Dot';

const Service = ({ name, logo, des }) => {
  return (
    <div className="group w-full sm:w-1/3 rounded-md border-2 border-gray-400 flex flex-col items-center justify-center p-8 gap-6 transition-all duration-300 ease-in-out hover:scale-105 relative">
      <ServiceLogo logo={logo} />
      <h1 className="font-mono font-bold text-xl sm:text-2xl uppercase text-center">{name}</h1>
      <p className="text-center">{des}</p>
    </div>
  );
};

export default Service;
