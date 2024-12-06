import React from 'react';

const Navlinks = ({ data }) => {
  return (
    <div>
      <p className="text-lg text-gray-300 hover:after:content-['\_'] after:absolute">
        {data}
      </p>
    </div>
  );
};

export default Navlinks;


