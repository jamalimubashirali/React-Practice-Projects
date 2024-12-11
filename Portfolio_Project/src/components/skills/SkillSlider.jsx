import React from 'react';
import styled from 'styled-components';

// Move the styled components outside the functional component
const SliderContainer = styled.div`
  position: relative;
  width: 100%;
  height: 8px;
  border-radius: 50px;
  background-color: #e0e0e0;
  transition: all 0.3s ease-in-out;
`;

const FirstBar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: ${props => props.skillLevel}%;  // Dynamically set the width
  height: 100%;
  border-radius: 50px;
  background-color: #4caf50;
  transition: all 0.5s ease-out;
`;

const SkillSlider = ({ skillName, skillLevel }) => {
  return (
    <div className="mb-6">
      <label className="text-lg font-medium mb-2 flex items-center justify-between transition-all duration-300 ease-in-out transform hover:scale-105">
        <span>{skillName}</span>
        <span>{skillLevel}%</span>
      </label>
      <SliderContainer>
        <FirstBar skillLevel={skillLevel} />
      </SliderContainer>
    </div>
  );
};

export default SkillSlider;
