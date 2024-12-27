import React, { useState } from "react";

const ProjectCard = ({ title, image, deploylink, des, techStack }) => {
  const [arrowHover , setArrowHover] = useState(false);
  return (
    <div className="border shadow-lg flex flex-col lg:flex-row md:flex-row gap-4">
      <img
        src={image || "https://via.placeholder.com/150"}
        alt="Project"
        className="w-[100%] lg:w-[40%] md:w-[50%] h-80 object-cover"
      />
      <div className="flex flex-col p-4">
        <h1 className="text-lg font-bold mb-4">{title}</h1>
        <p className="text-gray-primary">{des}</p>
        <div className="mt-4 mb-4">
          <h3 className="font-semibold text-gray-primary">Tech Stack Used:</h3>
          <ul className="list-disc list-inside text-gray-primary">
            {techStack.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </div>
        <span className="text-right">
          <a
            href={deploylink}
            className="mt-4 text-gray-secondary p-4 bg-gray-primary uppercase font-bold text-sm inline-block relative transition-transform duration-300 ease-in-out hover:scale-105 shadow-md shadow-gray-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project
            <span className="opacity-100 ml-2">
              {"->"}
            </span>
          </a>
        </span>
      </div>
    </div>
  );
};

export default ProjectCard;
