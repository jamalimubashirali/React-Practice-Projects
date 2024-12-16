import React from "react";
import SkillSlider from "./SkillSlider";

const Skills = () => {
  const skills = {
    Frontend: [
      { name: "React", level: 85 },
      { name: "HTML & CSS", level: 80 },
      { name: "Tailwind CSS", level: 80 },
      { name: "JavaScript", level: 88 },
    ],
    Backend: [
      { name: "Node.js", level: 75 },
      { name: "Express.js", level: 70 },
      { name: "MongoDB", level: 65 },
      { name: "REST API", level: 80 },
    ],
    AI: [
      { name: "Python", level: 70 },
      { name: "Machine Learning", level: 60 },
      { name: "Data Visualization", level: 70 },
      { name: "Data Analysis", level: 65 },
    ],
  };

  return (
    <div className="m-6 lg:m-20 md:m-10 sm:m-6">
      <h1 className="text-4xl font-bold mb-10 transition-all duration-300 ease-in-out transform hover:scale-105">
        Skills_
      </h1>
      <div className="w-full flex flex-col md:flex-row md:flex-wrap lg:flex-row lg:flex-wrap gap-4 justify-center sm:gap-4 md:gap-8 lg:gap-20">
        {Object.entries(skills).map(([category, skillsList]) => (
          <div key={category} className="flex-1 flex flex-col md:w-1/3 transition-all duration-300 ease-in-out transform hover:scale-105">
            <h2 className="text-xl font-bold uppercase tracking-wider mb-4">{category}</h2>
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
