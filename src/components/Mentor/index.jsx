import React from "react";
import { learningimg, mentorimg } from "../../utils";

const mentor = () => {
  return (
    <div className="font-visbyRegular font-medium px-24">
      <div className="flex">
        <div className="flex-1">
          <img src={mentorimg} />
        </div>
        <div className="flex-1  pl-20">
          <h1 className="text-5xl font-bold leading-[61.34px] ">
            Want to share your Knowledge? Join as a Mentor
          </h1>
          <p className="pt-8 font-VisbyRegular font-light text-xl">
            We provide quality online courses with proper guidance. Our mentors
            are highly skilled and experienced in their fields
          </p>
          <div className="pt-8">
            <button className=" bg-black text-white text-2xl font-light  h-16  w-[237px] rounded-[10px] border-[1px] border-solid border-black">
              Become a Mentor{" "}
            </button>
          </div>
        </div>
      </div>
      <div className="flex pt-36">
        <div className="flex-1">
          <h1 className="text-5xl font-bold font-VisbyBold leading-[61.34px] ">
            Transform your life through Learning
          </h1>
          <p className="pt-8 font-light font-VisbyRegular text-xl">
            Learners around the world are launching new careers, advancing in
            their fields, and enriching their lives.
          </p>
          <div className="pt-8">
            <button className=" bg-black text-white text-2xl font-VisbyLight font-medium  h-16  w-[237px]   rounded-[10px] border-[1px] border-solid border-black">
              Find out how
            </button>
          </div>
        </div>
        <div className="pl-28 flex-1">
          <img src={learningimg} />
        </div>
      </div>
    </div>
  );
};
export default mentor;
