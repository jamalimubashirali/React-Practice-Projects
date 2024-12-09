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
      { name: "Data Visuallization", level: 70 },
      { name: "Data Analysis", level: 65 },
    ],
  };

    return (
        <div className="m-20">
          <h1 className="text-4xl font-bold mb-10">Skills_</h1>
          <div className="w-full flex flex-row gap-32">
          {Object.entries(skills).map(([category, skillsList]) => (
          <div key={category} className="flex-1 flex flex-col">
            <h2 className="text-xl font-bold uppercase tracking-wider mb-4">{category}</h2>
            <div className="flex flex-col gap-4">
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