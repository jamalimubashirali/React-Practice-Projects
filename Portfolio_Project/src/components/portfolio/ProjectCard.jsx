import React from "react";

const ProjectCard = ({ title, image, deploylink, des, techStack }) => {
  return (
    <div className="border shadow-lg flex flex-row gap-4">
      <img
        src={image || "https://via.placeholder.com/150"}
        alt="Project"
        className="w-[40%] h-80 object-cover"
      />
      <div className="flex flex-col p-4">
        <h1 className="text-lg font-bold mb-4">{title}</h1>
        <p className="text-gray-700">{des}</p>
        <div className="mt-4 mb-4">
          <h3 className="font-semibold text-gray-800">Tech Stack Used:</h3>
          <ul className="list-disc list-inside text-gray-600">
            {techStack.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </div>
        <a
          href={deploylink}
          className="mt-4 text-blue-500 hover:underline text-sm self-end"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Project
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
