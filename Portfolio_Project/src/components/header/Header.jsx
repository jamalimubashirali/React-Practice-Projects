import React from "react";
import NavBar from "./NavBar";
import About from "./About";

const Header = ({headerData}) => {
  console.log(headerData)
  return (
    <div className="transition-all duration-300 ease-in-out">
      <NavBar navLinks={headerData.navLinks} bioData={headerData.bioData} socialData = {headerData.socialData}/>
      <About aboutData={headerData.about}/>
    </div>
  );
};

export default Header;
