import React from "react";
import Navlinks from "./Navlinks";
import Biodata from "./Biodata";

const NavBar = () => {
  return (
    <div className="relative w-full h-[65vh] bg-black py-4 px-6 md:py-8 md:px-20 transition-all duration-300 ease-in-out font-mono">
      {/* Navigation Links */}
      <div className="flex flex-row flex-wrap gap-6 md:gap-10">
        <Navlinks data={"Hello"} />
        <Navlinks data={"Services"} />
        <Navlinks data={"Resume"} />
        <Navlinks data={"Skills"} />
        <Navlinks data={"Portfolio"} />
        <Navlinks data={"Contact"} />
      </div>
      {/* Biodata Section */}
      <Biodata />
    </div>
  );
};

export default NavBar;
