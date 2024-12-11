import React from 'react';
import Dot from './Dot';

function ServiceLogo({ logo }) {
  return (
    <div className='p-4 sm:p-6 md:p-8 border-2 text-gray-800 border-gray-800 rounded-full transition-all duration-300 ease-in-out relative'>
      <h1 className="text-sm sm:text-base md:text-lg font-bold text-center">{logo}</h1>
      <Dot />
    </div>
  );
}

export default ServiceLogo;