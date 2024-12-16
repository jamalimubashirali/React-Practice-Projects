import React, { useState } from "react";
import ProjectCard from "./ProjectCard";

const Portfolio = () => {
  const work = {
    web: [
      {
        name: "Project 1",
        image: "",
        des: "A web project demonstrating HTML, CSS, and JavaScript.",
        techStack: ["CSS", "HTML", "JavaScript"],
        websiteLink: "https://www.google.com",
      },
      {
        name: "Project 2",
        image: "",
        des: "Another exciting web project.",
        techStack: ["CSS", "HTML", "JavaScript"],
        websiteLink: "https://www.google.com",
      },
    ],
    mobile: [
      {
        name: "Mobile Project 1",
        image: "",
        des: "A mobile project using Flutter.",
        techStack: ["Dart", "Flutter"],
        websiteLink: "https://www.google.com",
      },
      {
        name: "Mobile Project 2",
        image: "",
        des: "Another mobile project with amazing features.",
        techStack: ["Dart", "Flutter"],
        websiteLink: "https://www.google.com",
      },
    ],
    ai: [
      {
        name: "AI Project 1",
        image: "",
        des: "An AI project showcasing Python and Pandas.",
        techStack: ["Python", "Numpy", "Pandas"],
        websiteLink: "https://www.google.com",
      },
    ],
  };

  const [workItems, setWorkItems] = useState([...work.web, ...work.mobile, ...work.ai]);
  const [activeCategory, setActiveCategory] = useState("All");

  const handleFilter = (category) => {
    setActiveCategory(category);
    if (category === "All") {
      setWorkItems([...work.web, ...work.mobile, ...work.ai]);
    } else {
      setWorkItems(work[category.toLowerCase()]);
    }
  };

  const categories = ["All", "Web", "Mobile", "AI"];

  return (
    <div className="m-6 lg:m-20 md:m-10 sm:m-6">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 font-mono">Work_</h1>
      <div className="flex flex-wrap gap-6 mb-8">
        {categories.map((category) => (
          <WorkType
            key={category}
            name={category}
            isActive={activeCategory === category}
            handleFilter={handleFilter}
          />
        ))}
      </div>
      <div className="flex flex-col gap-6">
        {workItems.map((item, index) => (
          <ProjectCard
            key={index}
            title={item.name}
            image={item.image}
            deploylink={item.websiteLink}
            des={item.des}
            techStack={item.techStack}
          />
        ))}
      </div>
    </div>
  );
};

const WorkType = ({ name, isActive, handleFilter }) => {
  return (
    <button
      onClick={() => handleFilter(name)}
      className={`font-bold font-mono uppercase text-sm md:text-lg px-4 py-1 rounded-full transition-colors duration-300 ease-in-out 
        ${isActive ? "bg-black text-white" : "bg-gray-200 text-gray-800 hover:bg-gray-300"} shadow-lg`}
      aria-label={`Filter by ${name}`}
    >
      {name}
    </button>
  );
};

export default Portfolio;
