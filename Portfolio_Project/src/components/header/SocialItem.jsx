import React from "react";

const SocialItem = ({ social }) => {
  return (
    <div title={social.name} className="mt-3 text-gray-secondary cursor-pointer hover:text-gray-400 transition-colors duration-300 ease-in-out text-sm md:text-lg">
      <a href={social.link}>
        <i className={`${social.icon} text-3xl`}></i>
      </a>
    </div>
  );
};

export default SocialItem;