import React, { useState } from "react";
import ProjectCard from "./ProjectCard";

const Portfolio = ({work}) => {
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
    <div id="portfolio" className="m-6 lg:m-20 md:m-10 sm:m-6 text-gray-primary">
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
        {workItems.length > 0 ? workItems.map((item, index) => (
          <ProjectCard
          key={index}
          title={item.name}
          image={item.image}
          deploylink={item.websiteLink}
          des={item.des}
          techStack={item.techStack}
        />
        )) : <Empty />}
      </div>
    </div>
  );
};



const Empty = () => {
  return (
    <div className="mx-auto py-10 justify-center items-center">
      <h1 className="text-gray-primary text-xl md:text-3xl sm:text-2xl lg:text-5xl font-bold">
        Projects to be Added...
      </h1>
    </div>
  )
}


const WorkType = ({ name, isActive, handleFilter }) => {
  return (
    <button
      onClick={() => handleFilter(name)}
      className={`font-bold font-mono uppercase text-sm md:text-lg px-4 py-1 transition-colors duration-300 ease-in-out 
        ${isActive ? "bg-gray-primary text-white" : "bg-gray-secondary text-gray-primary hover:bg-gray-300"} shadow-lg shadow-gray-primary`}
      aria-label={`Filter by ${name}`}
    >
      {name}
    </button>
  );
};

export default Portfolio;
