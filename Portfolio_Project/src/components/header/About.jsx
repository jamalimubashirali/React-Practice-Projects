import React from "react";

const About = ({aboutData}) => {
  return (
    <div className="flex flex-col mt-10 lg:px-20 md:px-10 xl:px-auto px-6 gap-4">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold font-mono transition-transform hover:scale-105">Hi_</h1>
      <p className="text-sm sm:text-base md:text-lg lg:text-xl text-justify p-6 border-1 border-gray-secondary shadow-lg shadow-gray-primary rounded-lg">
        {aboutData}
      </p>
      <button
        className="max-w-[10rem] mt-10 px-4 py-2 rounded-full text-gray-secondary bg-gray-primary font-mono font-bold text-sm md:text-base transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-gray-secondary hover:text-gray-primary shadow-md uppercase shadow-gray-primary"
        type="button"
      >
        Download CV
      </button>
    </div>
  );
};

export default About;