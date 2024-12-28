import React from 'react';
import RoundedCircle from './RoundedCircle';

const DataContainer = ({ instituteName, period, degreeType }) => {
  return (
    <div className="pl-8 md:pl-10 pb-10 relative border-l-4 border-gray-primary group transition-transform hover:scale-y-105">
      <RoundedCircle />
      <h1 className="uppercase font-bold text-base md:text-lg transition-colors duration-300 ease-in-out hover:text-gray-800">
        {instituteName}
      </h1>
      <p className="text-sm md:text-base">
        {period.start} <span className="uppercase italic">to</span> {` ${period.end}`}
      </p>
      <p className="uppercase font-bold text-sm md:text-base">
        {degreeType}
      </p>
    </div>
  );
};

export default DataContainer;
