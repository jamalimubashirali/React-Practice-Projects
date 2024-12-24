import React from "react";
import DataContainer from "./DataContainer";

const EmployementContainer = ({ employment }) => {
  return (
    <div className="w-full md:w-1/2">
      <h1 className="text-xl md:text-2xl tracking-widest uppercase font-bold mb-4 md:mb-5 font-mono">
        Employment
      </h1>
      {employment.map((employment, index) => (
        <DataContainer
          key={index}
          instituteName={employment.companyName}
          period={{ start: employment.startDate, end: employment.endDate }}
          degreeType={employment.jobPost}
        />
      ))}
    </div>
  );
};

export default EmployementContainer;
