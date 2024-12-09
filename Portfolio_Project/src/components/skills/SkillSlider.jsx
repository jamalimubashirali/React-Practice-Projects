import React from 'react';
import styled from 'styled-components';

const SkillSlider = ({ skillName, skillLevel, secondSkillLevel }) => {
  const SliderContainer = styled.div`
    position: relative;
    width: 100%;
    height: 8px;
    border-radius: 50px;  /* Round the ends of the track */
    background-color: #e0e0e0;  /* Background color of the first track */
  `;

  const FirstBar = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: ${skillLevel}%;
    height: 100%;
    border-radius: 50px;
    background-color: #4caf50;  /* Color for the first bar */
  `;

  const SecondBar = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: ${secondSkillLevel}%;
    height: 100%;
    border-radius: 50px;
    background-color: #2196f3;  /* Color for the second bar */
  `;

  return (
    <div className="mb-6">
      <label className="text-lg font-medium mb-2 flex items-center justify-between">
        <span>{skillName}</span>
        <span>{skillLevel}%</span>  
      </label>
      <SliderContainer>
        <FirstBar />
        <SecondBar />
      </SliderContainer>
    </div>
  );
};

export default SkillSlider;
