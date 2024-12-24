import React from "react";
import SkillSlider from "./SkillSlider";

const Skills = ({ skills }) => {
  return (
    <div className="m-6 lg:m-20 md:m-10 sm:m-6">
      <h1 className="text-4xl font-bold mb-10 transition-all duration-300 ease-in-out transform hover:scale-105">
        Skills_
      </h1>
      <div className="w-full flex flex-col md:flex-row md:flex-wrap lg:flex-row lg:flex-wrap gap-4 justify-center sm:gap-4 md:gap-8 lg:gap-20">
        {Object.entries(skills).map(([category, skillsList]) => (
          <div
            key={category}
            className="flex-1 flex flex-col md:w-1/3 transition-all duration-300 ease-in-out transform hover:scale-105"
          >
            <h2 className="text-xl font-bold uppercase tracking-wider mb-4">
              {category}
            </h2>
            <div className="flex flex-col gap-1 md:gap-1 lg:gap-3">
              {skillsList.map((skill, index) => (
                <SkillSlider
                  key={index}
                  skillName={skill.name}
                  skillLevel={skill.level}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
