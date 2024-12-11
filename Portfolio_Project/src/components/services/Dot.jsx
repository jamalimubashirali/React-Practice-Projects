import React from 'react';

const Dot = () => {
  return (
    <div className="w-2 sm:w-3 md:w-4 h-2 sm:h-3 md:h-4 bg-gray-800 rounded-full absolute top-1 left-1 opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:animate-spin"></div>
  );
};

export default Dot;
