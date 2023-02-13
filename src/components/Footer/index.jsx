import React from "react";
import { Fotlogo } from "../../utils";

const Footer = () => {
  return (
    <div className="bg-black pt-16 pb-[224px] px-12 xl:px-0 font-VisbyRegular">
      <div>
        <div className="flex ">
          <div className="xl:pl-[126.19px]  pr-[100px] lg:pr-[350px] xl:pr-[449px]">
            <img src={Fotlogo} />
          </div>
          <div className=" grid md:grid-cols-3 xl:gap-24 gap-10">
            <div className="">
              <p className="text-[white] font-medium text-xl font-VisbyBold">Product</p>
              <ul className="text-white pt-10 text-[18px]  flex flex-col gap-[18px] font-medium">
                <li className="cursor-pointer">Courses</li>
                <li className="cursor-pointer">Pricing</li>
                <li className="cursor-pointer">Reviews</li>
                <li className="cursor-pointer">Become a Mentor</li>
              </ul>
            </div>
            <div>
              <p className="text-[white] font-medium text-xl font-VisbyBold">Company</p>
              <ul className="text-white pt-10 text-lg font-medium flex flex-col gap-[18px]">
                <li className="cursor-pointer">About</li>
                <li className="cursor-pointer">Contact us</li>
                <li className="cursor-pointer">Careers</li>
              </ul>
            </div>
            <div>
              <p className="text-[white] font-medium text-xl font-VisbyBold">Contact us</p>
              <ul className="text-white pt-10 text-lg font-medium  flex flex-col gap-[18px]">
                <li><a href="mailto:contact@educo.com">contact@educo.com</a></li>
                <li><a href="tel:+23436775890">(234) 3677 5890</a></li>
                <li>64 Rashid Estate</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="px-[120px] flex justify-between pt-44">
        <div>
          <span className="text-[#595959] text-[18px]">
            Copyright © 2022 Orion
          </span>
        </div>
        <div>
          {" "}
          <p className="text-[#ffffff] text-[18px]">
            <span className="text-[#595959]">All Rights Reserved</span>
            <span className="mx-1">|</span>
            <span className="cursor-pointer">  Terms and Conditions</span>
            <span className="mx-1">|</span> 
            <span className="cursor-pointer">Privacy Policy{" "}</span>
          </p>{" "}
        </div>
      </div>
    </div>
  );
};

export default Footer;
