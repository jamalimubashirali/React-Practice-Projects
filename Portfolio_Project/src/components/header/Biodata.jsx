import React from "react";
import BiodataItem from "./BiodataItem";
import SocialItem from "./SocialItem";

const Biodata = () => {
  return (
    <div className="relative lg:mt-8 md:mt-6">
      <div className="flex flex-col md:flex-row lg:gap-16 md:gap-8 items-center">
        <img
          src="src/assets/My_Pic.jpg"
          alt="Profile"
          className="max-w-full max-h-[50vh] md:max-w-[40%] rounded-lg object-cover shadow-lg transition-transform duration-300 ease-in-out hover:scale-105"
        />
        <div className="flex flex-col mt-6 lg:mt-0 md:mt-0 md:max-w-[50%] gap-1">
          <h1 className="lg:text-5xl text-3xl md:text-3xl xl:text-6xl text-gray-100 font-bold">
            Mubashir Ali_
          </h1>
          <p className="text-gray-200 lg:text-lg md:text-sm">
            Full Stack Engineer, AI and ML Enthusiast
          </p>
          <div className="my-2 md:my-0 flex flex-col gap-2 text-white">
            <BiodataItem itemData={"20"} itemDes={"Age"} />
            <BiodataItem itemDes={"Phone"} itemData={"(+92) 325 3710650"} />
            <BiodataItem
              itemData={"jamalimubashirali@gmail.com"}
              itemDes={"Email"}
            />
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