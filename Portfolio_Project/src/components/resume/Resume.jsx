import React from 'react'
import EducationContainer from './EducationContainer'
import EmployementContainer from './EmployementContainer';

const Resume = () => {
  return (
    <div className="m-20">
      <h1 className="text-4xl font-bold mb-10">Resume_</h1>
      <div className='flex flex-row'>
        <EducationContainer />
        <EmployementContainer />
      </div>
    </div>
  )
}

export default Resume
