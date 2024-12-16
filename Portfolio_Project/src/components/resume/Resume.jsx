import React from 'react';
import EducationContainer from './EducationContainer';
import EmployementContainer from './EmployementContainer';

const Resume = () => {
  return (
    <div className="m-6 md:m-10 lg:m-20 sm:m-6">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 md:mb-10 font-mono">Resume_</h1>
      <div className="flex flex-col md:flex-row gap-10">
        <EducationContainer />
        <EmployementContainer />
      </div>
    </div>
  );
};

export default Resume;
