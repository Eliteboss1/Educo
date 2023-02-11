import React from "react";
import { learningimg, mentorimg } from "../../utils";

const mentor = () => {
  return (
    <div className="font-[visby] px-24">
      <div className="flex">
        <div>
          <img src={mentorimg} />
        </div>
        <div className="pl-[112px] w-[513px]  ">
          <h1 className="text-[48px] font-bold leading-[61.34px] ">
            Want to share your Knowledge? Join as a Mentor
          </h1>
          <p className="pt-8 font-medium    text-[20px]">
            We provide quality online courses with proper guidance. Our mentors
            are highly skilled and experienced in their fields
          </p>
          <div className="pt-8">
            <button className=" bg-black text-white text-2xl font-medium  h-16  w-[237px]   rounded-[10px] border-[1px] border-solid border-black">
              Become a Mentor{" "}
            </button>
          </div>
        </div>
      </div>
      <div className="flex pt-36">
        <div className=" w-[529px]  ">
          <h1 className="text-[48px] font-bold leading-[61.34px] ">
            Transform your life through Learning
          </h1>
          <p className="pt-8 font-medium    text-[20px]">
            Learners around the world are launching new careers, advancing in
            their fields, and enriching their lives.
          </p>
          <div className="pt-8">
            <button className=" bg-black text-white text-2xl font-medium  h-16  w-[237px]   rounded-[10px] border-[1px] border-solid border-black">
              Find out how
            </button>
          </div>
        </div>
        <div className="pl-28">
          <img src={learningimg} />
        </div>
      </div>
    </div>
  );
};
export default mentor;
