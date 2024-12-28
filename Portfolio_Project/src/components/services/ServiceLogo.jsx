import React from 'react';
import Dot from './Dot';

function ServiceLogo({ logo }) {
  console.log(logo)
  return (
    <div className='p-4 sm:p-6 md:p-8 border-2 text-gray-primary border-gray-primary rounded-full transition-all duration-300 ease-in-out relative'>
      <h1 className="text-base sm:text-lg md:text-3xl font-bold text-center"><i className={logo}></i></h1>
      <Dot />
    </div>
  );
}

export default ServiceLogo;