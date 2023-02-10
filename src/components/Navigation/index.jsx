import React from "react";
import { navLogo } from "../../utils";
const Navigation = () => {
  return (
    <div className="flex justify-between items-center xl:pl-[48px] xl:pr-[77.91px] md:pl-[20px] md:pr-[20px]">
      <div className="flex-1 ">
        <img src={navLogo} className=" py-[34.5px] " />
      </div>
      <div className="flex-1">
        <ul className="font-VisbyRegular text-lg flex gap-[40px] leading-[116%]">
          <li className="cursor-pointer">Home</li>
          <li className="cursor-pointer">Courses</li>
          <li className="cursor-pointer">About us</li>
        </ul>
      </div>
      <div className="flex py-[21px] ml-28">
        <div className="xl:pr-[40px] md:pr-[30px]">
          <button className="rounded-[10px] border-[2px] border-[#000000] md:w-[130px] md:h-[50px] text-lg xl:w-[197.65px] xl:h-[64px] leading-[116%]">
            Login
          </button>
        </div>
        <div>
          <button className="rounded-[10px] border-[2px] border-[#000000] xl:w-[197.65px] xl:h-[64px] md:w-[130px] md:h-[50px] text-lg bg-[#000000] text-white leading-[116%]">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
