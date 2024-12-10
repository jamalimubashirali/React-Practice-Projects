import React, { useState } from "react";
import ProjectCard from "./ProjectCard";

const Portfolio = () => {
  const work = {
    web: [
      {
        name: "Project 1",
        image: "",
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        techStack: ["CSS", "HTML", "JavaScript"],
        websiteLink: "https://www.google.com",
      },
      {
        name: "Project 2",
        image: "",
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        techStack: ["CSS", "HTML", "JavaScript"],
        websiteLink: "https://www.google.com",
      },
    ],
    mobile: [
      {
        name: "Project 1",
        image: "",
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        techStack: ["Dart", "Flutter"],
        websiteLink: "https://www.google.com",
      },
      {
        name: "Project 2",
        image: "",
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        techStack: ["Dart", "Flutter"],
        websiteLink: "https://www.google.com",
      },
    ],
    ai: [
      {
        name: "Project 1",
        image: "",
        des: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        techStack: ["Python", "Numpy", "Pandas"],
        websiteLink: "https://www.google.com",
      },
    ],
  };

  const [workItems, setWorkItems] = useState([...work.web, ...work.mobile, ...work.ai]);

  const handleFilter = (category) => {
    if (category === "All") {
      setWorkItems([...work.web, ...work.mobile, ...work.ai]);
    } else if (category === "Web") {
      setWorkItems(work.web);
    } else if (category === "Mobile") {
      setWorkItems(work.mobile);
    } else if (category === "AI") {
      setWorkItems(work.ai);
    }
  };

  return (
    <div className="m-20">
      <h1 className="text-4xl font-bold mb-10">Work_</h1>
      <div className="flex flex-row gap-12">
        <WorkType name={"All"} handleFilter={handleFilter} />
        <WorkType name={"Web"} handleFilter={handleFilter} />
        <WorkType name={"Mobile"} handleFilter={handleFilter} />
        <WorkType name={"AI"} handleFilter={handleFilter} />
      </div>
      <div className="flex flex-col gap-6 mt-10">
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

const WorkType = ({ name, handleFilter }) => {
  return (
    <div onClick={() => handleFilter(name)}>
      <p className="font-bold font-mono uppercase text-base md:text-lg text-gray-800 hover:text-gray-100 cursor-pointer transition-colors duration-300 ease-in-out hover:after:content-['\_'] after:absolute">
        {name}
      </p>
    </div>
  );
};

export default Portfolio;
