import React, { useState } from "react";
import Navlinks from "./Navlinks";
import Biodata from "./Biodata";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="relative w-full bg-black py-4 px-6 md:py-8 md:px-20 font-mono">
      {/* Hamburger Menu for Small Screens */}
      <div className="flex justify-between items-center md:hidden">
        <h1 className="text-white text-lg font-bold">My Portfolio</h1>
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
        } flex-col md:flex md:flex-row flex-wrap gap-6 md:gap-10 text-gray-300 transition-all duration-300 ease-in-out`}
      >
        <Navlinks data={"Hello"} />
        <Navlinks data={"Services"} />
        <Navlinks data={"Resume"} />
        <Navlinks data={"Skills"} />
        <Navlinks data={"Portfolio"} />
        <Navlinks data={"Contact"} />
      </div>

      {/* Biodata Section */}
      <div className="mt-8"> {/* Added margin to prevent overlap */}
        <Biodata />
      </div>
    </div>
  );
};

export default NavBar;