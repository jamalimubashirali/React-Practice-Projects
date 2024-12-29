import React, { useState, useEffect } from "react";
import Navlinks from "./Navlinks";

const NavBar = ({ navLinks }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFloating, setIsFloating] = useState(false);

  // To control the hamberger Menu
  const toggleMenu = () => setIsOpen(false);


  // Scroll event handler to toggle floating navbar
  const handleScroll = () => {
    const navbarHeight = 110; // Adjust based on your navbar's height
    const scrollTop = window.scrollY;

    if (scrollTop > navbarHeight) {
      setIsFloating(true); // Enable floating behavior
    } else {
      setIsFloating(false); // Disable floating behavior
    }
  };

  // Add scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    }

    
  }, []);

  return (
    <div className="relative border-none">
      {/* Navbar */}
      <div
        className={`${
          isFloating
            ? "fixed top-0 left-0 w-full z-50 bg-gray-primary shadow-md transition-transform duration-300 ease-in-out"
            : "relative"
        } bg-none p-6 lg:px-20 md:px-10 sm:px-5 lg:py-8 md:py-5 sm:py-3`} 
        
      >
        {/* Hamburger Menu for Small Screens */}
        <div className="flex justify-between items-center md:hidden">
          <h1 className="text-gray-secondary text-lg sm:text-xl font-bold uppercase">
            Mubashir Ali
          </h1>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-secondary text-2xl focus:outline-none"
          >
            {isOpen ? "\u2715" : "\u2630"}
          </button>
        </div>

        {/* Navigation Links */}
        <div
          className={`${
            isOpen
              ? "flex flex-col px-6 py-3 absolute top-16 translate-x-0 transition-all duration-300 ease-in-out bg-gray-primary z-50"
              : "hidden sm:-translate-x-full"
          } md:flex md:flex-row md:translate-x-0 md:items-center flex-wrap gap-4 md:gap-6 lg:gap-8 xl:gap-8 text-gray-secondary`}
        >
          {navLinks.map((navItem, index) => (
            <Navlinks key={index} data={navItem} toggleMenu = {toggleMenu}/>
          ))}
          <div className="ml-auto">
            <button
              className="max-w-[10rem] px-4 py-2 text-gray-primary bg-gray-secondary font-mono font-bold text-sm md:text-base transition-transform duration-300 uppercase ease-in-out hover:scale-105 hover:bg-gray-primary hover:text-gray-secondary"
              type="button"
            >
              <a
                href="src/assets/Mubashir Ali Resume.pdf"
                download="Mubashir Ali Resume.pdf"
              >
                Download CV
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

