import React from "react";
import { navLogo } from "../../utils";
const Navigation = () => {
  return (
    <div className=" flex justify-between pl-[48px] pr-[77.91px]">
      <div>
        <img src={navLogo} className=" py-[34.5px]" />
      </div>
      <div className="py-[39px]">
        <ul className="flex gap-[40px] text-[24px] font-[500] font-[visby] cursor-pointer leading-[116%]">
          <li>Home</li>
          <li>Courses</li>
          <li>About us</li>
        </ul>
      </div>
      <div className="flex py-[21px] ">
        <div className="pr-[40px]">
          <button className="rounded-[10px] border-[2px] border-[#000000] w-[197.65px] h-[64px] text-[24px] font-[400] font-[poppins leading-[116%]">
            Login
          </button>
        </div>
        <div>
          <button className="rounded-[10px] border-[2px] border-[#000000] w-[197.65px] h-[64px] bg-[#000000] text-white text-[24px] font-[400] font-[poppins leading-[116%]">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
