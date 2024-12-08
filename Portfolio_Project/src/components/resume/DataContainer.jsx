import React from 'react';
import RoundedCircle from './RoundedCircle';

const DataContainer = ({ instituteName, period, degreeType }) => {
  return (
    <div className="pl-10 pb-10 relative border-l-4 border-black">
      <RoundedCircle />
      <h1 className="uppercase font-bold text-lg">
        {instituteName}
      </h1>
      <p>
        {period.start} <span className="uppercase italic">to</span>
        {` ${period.end}`}
      </p>
      <p className="uppercase font-bold">
        {degreeType}
      </p>
    </div>
  );
};

export default DataContainer;

