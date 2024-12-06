import React from "react";
import Navlinks from "./Navlinks";
import Biodata from "./Biodata";

const NavBar = () => {
  return (
    <div className="relative w-full h-96 bg-black py-8 px-20">
      {/* Parent with relative positioning */}
      <div className="flex flex-row gap-20">
        <Navlinks data={"Hello"} />
        <Navlinks data={"Services"} />
        <Navlinks data={"Resume"} />
        <Navlinks data={"Portfolio"} />
        <Navlinks data={"Contact"} />
      </div>
      <Biodata />
    </div>
  );
};

export default NavBar;
