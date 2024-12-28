import React from "react";
import { Link } from "react-scroll";

const Navlinks = ({ data  , toggleMenu }) => {
  return (
    <div>
      <Link
        onClick={() => toggleMenu()}
        to={data.href} // The id of the target section
        smooth={true} // Enables smooth scrolling
        duration={500} // Scrolling duration in ms
        className="font-bold font-mono uppercase sm:text-base md:text-base lg:text-lg text-gray-300 hover:text-gray-100 cursor-pointer transition-colors duration-300 ease-in-out"
      >
        {data.label}
      </Link>
    </div>
  );
};

export default Navlinks;
