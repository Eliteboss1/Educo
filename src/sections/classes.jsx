import React from "react";
import { bookIcon, dollarIcon, worldIcon, goodIcon } from "../utils";

const classes = () => {
  return (
    <div className="pt-6 font-[visby] ">
      <div className="flex justify-center gap-6">
        <div className="flex items-center">
          <img src={bookIcon} />
          <span className="pl-4 text-[20px] font-medium">1000+ Courses</span>
        </div>
        <div className="flex items-center">
          <img src={dollarIcon} />
          <span className="pl-4 text-[20px] font-medium">Value for money</span>
        </div>
        <div className="flex items-center">
          <img src={worldIcon} />
          <span className="pl-4 text-[20px] font-medium">
            Community Support
          </span>
        </div>
        <div className="flex items-center">
          <img src={goodIcon} />
          <span className="pl-4 text-[20px] font-medium">Lifetime Access</span>
        </div>
      </div>
      <div className="pt-[135px] text-center  ">
        <div className="w-[775px]">
          <h1 className="text-[48px]  font-bold">
            Get Access to high quality video, audio and live classes
          </h1>
          <p className="pt-8 text-[20px] font-medium leading-[29.86px]">
            We provide quality online courses with proper guidance. Our mentors
            are highly skilled and experienced in their fields
          </p>
          <div className="pt-8">
            <button></button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default classes;
