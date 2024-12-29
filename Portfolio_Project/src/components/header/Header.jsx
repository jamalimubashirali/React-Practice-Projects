import React from "react";
import NavBar from "./NavBar";
import Biodata from "./Biodata";

const Header = ({headerData}) => {
  return (
    <div id="home" className="transition-all duration-300 ease-in-out md:bg-[url('/src/assets/bg-hero.jpg')] bg-cover bg-center bg-blend-overlay bg-gray-primary">
      <NavBar navLinks={headerData.navLinks} bioData={headerData.bioData} socialData = {headerData.socialData}/>
      <Biodata bioData={headerData.bioData} socialData={headerData.socialData}/>
    </div>
  );
};

export default Header;
