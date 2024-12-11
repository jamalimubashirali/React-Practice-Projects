import React from 'react';
import DataContainer from './DataContainer';

const EmployementContainer = () => {
  return (
    <div className="w-full md:w-1/2">
      <h1 className="text-xl md:text-2xl tracking-widest uppercase font-bold mb-4 md:mb-5 font-mono">
        Employment
      </h1>
      <DataContainer
        instituteName={"Bytewise Limited"}
        period={{ start: "06-2024", end: "09-2024" }}
        degreeType={"Full Stack Web Dev Internship"}
      />
      <DataContainer
        instituteName={"Bytewise Limited"}
        period={{ start: "04-2023", end: "06-2023" }}
        degreeType={"Azure Cloud Internship"}
      />
    </div>
  );
};

export default EmployementContainer;
