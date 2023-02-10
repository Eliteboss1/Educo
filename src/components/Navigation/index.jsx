import React from "react";
import { navLogo } from "../../utils";
const Navigation = () => {
  return (
    <div className="flex justify-between items-center xl:pl-[48px] xl:pr-[77.91px] md:pl-[20px] md:pr-[20px]">
      <div>
        <img src={navLogo} className=" py-[34.5px] " />
      </div>
      <div className="py-[39px]">
        <ul className="font-VisbyRegular text-lg flex gap-[40px] xl:text-[24px] md:text-[20px] font-[500] cursor-pointer leading-[116%]">
          <li>Home</li>
          <li>Courses</li>
          <li>About us</li>
        </ul>
      </div>
      <div className="flex py-[21px] ">
        <div className="xl:pr-[40px] md:pr-[30px]">
          <button className="rounded-[10px] border-[2px] border-[#000000] md:w-[130px] md:h-[50px] md:text-[20px]  xl:w-[197.65px] xl:h-[64px] xl:text-[24px] font-[400] font-[poppins leading-[116%]">
            Login
          </button>
        </div>
        <div>
          <button className="rounded-[10px] border-[2px] border-[#000000] xl:w-[197.65px] xl:h-[64px] md:w-[130px] md:h-[50px] md:text-[20px] bg-[#000000] text-white xl:text-[24px] font-[400] font-[poppins leading-[116%]">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
