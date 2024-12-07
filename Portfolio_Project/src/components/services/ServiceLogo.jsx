import React from 'react';
import Dot from './Dot';

function ServiceLogo({ logo }) {
  return (
    <div className='p-6 sm:p-8 border-2 text-gray-800 border-gray-800 rounded-full transition-all duration-300 ease-in-out relative'>
      <h1>{logo}</h1>
      <Dot />
    </div>
  );
}

export default ServiceLogo;
