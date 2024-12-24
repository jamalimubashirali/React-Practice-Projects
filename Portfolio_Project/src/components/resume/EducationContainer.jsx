import React from "react";
import DataContainer from "./DataContainer";

const EducationContainer = ({ education }) => {
  return (
    <div className="w-full md:w-1/2">
      <h1 className="text-xl md:text-2xl tracking-widest uppercase font-bold mb-4 md:mb-5 font-mono">
        Education
      </h1>
      {education.map((education, index) => (
        <DataContainer
          key={index}
          instituteName={education.instituteName}
          period={{ start: education.startDate, end: education.endDate }}
          degreeType={education.degreeName}
        />
      ))}
    </div>
  );
};

export default EducationContainer;
