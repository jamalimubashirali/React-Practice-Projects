import React, { useState } from "react";
import Navlinks from "./Navlinks";
import Biodata from "./Biodata";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="relative w-full bg-black px-3 py-3 lg:px-20 md:px-10 sm:px-5 lg:py-8 md:py-5 sm:py-3 font-mono">
      {/* Hamburger Menu for Small Screens */}
      <div className="flex justify-between items-center mb-5 md:hidden">
        <h1 className="text-white text-lg sm:text-xl font-bold uppercase">
          Mubashir Ali
        </h1>
        <button
          onClick={toggleMenu}
          className="text-white text-2xl focus:outline-none"
        >
          {isOpen ? "\u2715" : "\u2630"}
        </button>
      </div>

      {/* Navigation Links */}
      <div
        className={`${
          isOpen ? "flex" : "hidden"
        } flex-col md:flex md:flex-row flex-wrap gap-4 md:gap-6 lg:gap-8 xl:gap-8 text-gray-300 transition-all duration-300 ease-in-out`}
      >
        <Navlinks data={"Hello"} />
        <Navlinks data={"Services"} />
        <Navlinks data={"Resume"} />
        <Navlinks data={"Skills"} />
        <Navlinks data={"Portfolio"} />
        <Navlinks data={"Contact"} />
      </div>

      {/* Biodata Section */}
      <div className="">
        <Biodata />
      </div>
    </div>
  );
};

export default NavBar;