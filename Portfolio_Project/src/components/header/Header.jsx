import React, { useState } from "react";
import NavBar from "./NavBar";
import About from "./About";

const Header = () => {
  return (
    <div className="transition-all duration-300 ease-in-out">
      <NavBar />
      <About />
    </div>
  );
};

export default Header;