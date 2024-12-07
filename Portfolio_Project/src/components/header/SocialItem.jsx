import React from 'react';

const SocialItem = ({ icon }) => {
  return (
    <div className="text-gray-700 cursor-pointer hover:text-gray-100 transition-colors duration-300 ease-in-out text-sm md:text-lg">
      {icon}
    </div>
  );
};

export default SocialItem;
