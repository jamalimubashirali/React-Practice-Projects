import React from 'react';
import DataContainer from './DataContainer';

const EducationContainer = () => {
  return (
    <div className="w-full md:w-1/2">
      <h1 className="text-xl md:text-2xl tracking-widest uppercase font-bold mb-4 md:mb-5 font-mono">
        Education
      </h1>
      <DataContainer
        instituteName={"Mehran University of Engineering and Technology, Jamshoro"}
        period={{ start: "11-2021", end: "11-2025" }}
        degreeType={"BE Software Engineering"}
      />
      <DataContainer
        instituteName={"Govt: Degree College, Larkana"}
        period={{ start: "08-2019", end: "08-2021" }}
        degreeType={"Pre-Engineering"}
      />
    </div>
  );
};

export default EducationContainer;
