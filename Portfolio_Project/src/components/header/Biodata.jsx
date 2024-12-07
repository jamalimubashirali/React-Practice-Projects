import React from "react";
import BiodataItem from "./BiodataItem";
import SocialItem from "./SocialItem";

const Biodata = () => {
  return (
    <div className="absolute top-28">
      <div className="flex flex-col md:flex-row gap-24">
        <img
          src="src/assets/My_Pic.jpg"
          alt="Profile"
          className="w-[70vw] md:w-[20vw] h-[50vh] rounded-lg object-cover shadow-lg transition-transform duration-300 ease-in-out hover:scale-105"
        />
        <div>
          <h1 className="text-3xl md:text-5xl text-gray-100 font-bold">Mubashir Ali_</h1>
          <p className="text-gray-200 text-sm md:text-lg my-2">
            Full Stack Engineer, AI and ML Enthusiast
          </p>
          <div className="my-6 flex flex-col gap-2 text-white">
            <BiodataItem itemData={"20"} itemDes={"Age"} />
            <BiodataItem itemDes={"Phone"} itemData={"(+92) 325 3710650"} />
            <BiodataItem itemData={"jamalimubashirali@gmail.com"} itemDes={"Email"} />
            <BiodataItem
              itemDes={"Address"}
              itemData={"Village Sher Muhammad Jamali, Larkana"}
            />
          </div>
          <div className="flex flex-row gap-4">
            <SocialItem icon={"Github"} />
            <SocialItem icon={"LinkedIn"} />
            <SocialItem icon={"Kaggle"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Biodata;
