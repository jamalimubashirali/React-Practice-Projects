import React from "react";
import BiodataItem from "./BiodataItem";
import SocialItem from "./SocialItem";
const Biodata = () => {
  return (
    <div className="absolute top-24 py-3 rounded-lg">
      <div className="flex gap-16">
        <img
          src="src\assets\My_Pic.jpg"
          alt="Profile"
          className="w-80 h-80 rounded-lg object-cover shadow-lg"
        />
        <div>
          <h1 className="text-5xl text-gray-100 font-bold">Mubashir Ali_</h1>
          <p className="text-gray-200 text-lg my-1">Full Stack Engineer , AI and ML Enthusiast</p>
          <div className="my-3 flex flex-col gap-1 text-white">
            <BiodataItem itemData={"20"} itemDes={"Age"}/>
            <BiodataItem itemDes={"Phone"} itemData={"(+92) 325 3710650"}/>
            <BiodataItem itemData={"jamalimubashirali@gmail.com"} itemDes={"Eamil"}/>
            <BiodataItem itemDes={"Address"} itemData={"Village Sher Muhammad Jamali, Larkana"}/>
          </div>
          <div className="flex flex-row gap-4">
          <SocialItem icon={"Github"}/>
          <SocialItem icon={"LinkedIn"} />
          <SocialItem icon={"Kaggle"}/>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Biodata;
