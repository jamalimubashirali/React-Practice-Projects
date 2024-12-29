import React from "react";
import BiodataItem from "./BiodataItem";
import SocialItem from "./SocialItem";

const Biodata = ({bioData , socialData}) => {
  return (
    <div className="relative">
      <div className="lg:py-8 md:py-6 py-3 px-5 flex flex-col md:bg-[url('/src/assets/bg-hero.jpg')] bg-cover bg-center bg-blend-overlay bg-gray-primary justify-evenly md:flex-row-reverse lg:gap-16 md:gap-8 items-center">
        <img
          src="src/assets/My_Pic.jpg"
          alt="Profile"
          className="max-w-full max-h-[50vh] md:max-w-[40%] rounded-lg object-cover shadow-lg transition-transform duration-300 ease-in-out hover:scale-105"
        />
        <div className="flex flex-col mt-6 lg:mt-0 md:mt-0 md:max-w-[50%] gap-1">
          <h1 className="lg:text-5xl text-3xl md:text-3xl xl:text-6xl text-gray-100 font-bold">
            {bioData.name + "_"}
          </h1>
          <p className="text-gray-200 lg:text-lg md:text-sm">
            {bioData.tagLine}
          </p>
          <div className="my-2 md:my-0 flex flex-col gap-2 text-white">
            <BiodataItem itemData={bioData.age} itemDes={"Age"} />
            <BiodataItem itemDes={"Phone"} itemData={bioData.phone} />
            <BiodataItem
              itemData={bioData.email}
              itemDes={"Email"}
            />
            <BiodataItem
              itemDes={"Address"}
              itemData={bioData.address}
            />
          </div>
          <div className="flex flex-row gap-4">
            {socialData.map((social , index) => <SocialItem key={index} social = {social}/>)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Biodata;