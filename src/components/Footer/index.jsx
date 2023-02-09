import React from "react";
import { Fotlogo } from "../../utils";

const Footer = () => {
  return (
    <div className="bg-black pt-[64px] pb-[224px] px-[50px] xl:px-0  font-[visby]">
      <div>
        <div className="flex ">
          <div className="xl:pl-[126.19px]  pr-[100px] lg:pr-[350px] xl:pr-[449px]">
            <img src={Fotlogo} />
          </div>
          <div className=" grid  grid-cols-3 xl:gap-24 gap-10">
            <div className="">
              <p className="text-[white] font-[500] text-[20px] ">Product</p>
              <ul className="text-white pt-10 text-[18px]  flex flex-col gap-[18px] font-[500]">
                <li>Courses</li>
                <li>Pricing</li>
                <li>Reviews</li>
                <li>Become a Mentor</li>
              </ul>
            </div>
            <div>
              <p className="text-[white] font-[500] text-[20px]">Company</p>
              <ul className="text-white pt-10 text-[18px] font-[500]  flex flex-col gap-[18px]">
                <li>About</li>
                <li>Contact us</li>
                <li>Careers</li>
              </ul>
            </div>
            <div>
              <p className="text-[white] font-[500] text-[20px]">Contact us</p>
              <ul className="text-white pt-10 text-[18px] font-[500]  flex flex-col gap-[18px]">
                <li>contact@educo.com</li>
                <li>(234) 3677 5890</li>
                <li>64 Rashid Estate</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="px-[120px]">
        <div>
          <span className="text-white text-[18px]">Copyright © 2022 Orion</span>
        </div>
        <div>
          {" "}
          <p className="text-[#7C7C7C] text-[18px]">
            <span className="text-[#595959]">All Rights Reserved</span> | Terms
            and Conditions | Privacy Policy{" "}
          </p>{" "}
        </div>
      </div>
    </div>
  );
};

export default Footer;
