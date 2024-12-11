import React from "react";

const Navlinks = ({ data }) => {
  return (
    <div>
      <p className="font-bold font-mono uppercase text-base md:text-lg text-gray-300 hover:text-gray-100 cursor-pointer transition-colors duration-300 ease-in-out hover:after:content-['\_'] after:absolute">
        {data}
      </p>
    </div>
  );
};

export default Navlinks;
