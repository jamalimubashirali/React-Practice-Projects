import React from "react";

const About = () => {
  return (
    <div className="flex flex-col mt-10 lg:px-20 md:px-10 xl:px-auto px-3 gap-4">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold font-mono">Hi_</h1>
      <p className="text-sm sm:text-base md:text-lg lg:text-xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti,
        quaerat quae. Corrupti nam animi dignissimos! Impedit cum delectus
        sapiente quia numquam saepe consectetur placeat excepturi molestiae.
        Delectus minima earum dignissimos?
      </p>
      <button
        className="max-w-[10rem] px-4 py-2 rounded-full text-white bg-gray-950 font-mono font-bold text-sm md:text-base transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-gray-800"
        type="button"
      >
        Download CV
      </button>
    </div>
  );
};

export default About;