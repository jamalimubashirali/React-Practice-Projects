import React, { useState } from "react";
import Navlinks from "./Navlinks";
import Biodata from "./Biodata";

const NavBar = ({navLinks , bioData , socialData}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="relative w-full bg-[url('/src/assets/bg-hero.jpg')] bg-cover bg-center bg-blend-overlay bg-gray-primary text-gray-400 p-6 lg:px-20 md:px-10 sm:px-5 lg:py-8 md:py-5 sm:py-3 font-mono">
      {/* Hamburger Menu for Small Screens */}
      <div className="flex justify-between items-center mb-5 md:hidden">
        <h1 className="text-gray-secondary text-lg sm:text-xl font-bold uppercase">
          Mubashir Ali
        </h1>
        <button
          onClick={toggleMenu}
          className="text-gray-secondary text-2xl focus:outline-none"
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
        {navLinks.map((link , index) => <Navlinks key={index} data={link}/>)}
        <button
        className="max-w-[10rem] px-4 py-2 rounded-full text-gray-primary bg-gray-secondary float-left font-mono font-bold text-sm md:text-base transition-transform duration-300 uppercase ease-in-out hover:scale-105 hover:bg-gray-primary hover:text-gray-secondary"
        type="button"
      >
        Download CV
      </button>
      </div>
      <div className="">
        <Biodata />
      </div>
    </div>
  );
};

export default NavBar;