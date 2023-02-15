import React, { useState } from "react";
import { unversitiesimg, Stars, leftArrow } from "../../utils";

const reviews = () => {
  const [currentindex, setCurrentIndex] = useState(0);

  const Slides = [
    {
      name: "Sophia Moore",
      description:
        "Educo has helped me increase my knoledge anout important aspects of my field of study through detailed courses",
      imageUrl: "",
    },
    {
      name: "Adam Smith",
      description:
        "I’ve used alot of e learning platforms in the past for research and studies but i must confess educo is the best ",
      imageUrl: "",
    },
    {
      name: "Mike Warren",
      description:
        "Finishing my degree was achievable with educo , i could schedule classes to the time that fit me",
      imageUrl: "",
    },
  ];

  return (
    <div className="pt-48 pb-[182px] font-VisbyRegular">
      <h1 className="text-center text-5xl font-VisbyBold font-bold leading-10">
        What Our students say about Us
      </h1>
      <div className="pt-8 flex justify-center gap-[32px]">
        <img src={leftArrow} onClick={(i) => setCurrentIndex(i)} />
        {Slides.slice(currentindex, currentindex + 3).map((slide) => (
          <div className="w-[380px] bg-white border-solid border-[#EFF0F7] border-[1px] shadow-lg rounded-[20px]">
            <div className="pl-[35px] py-[42px]">
              <div>
                <img src="" />
                <h1 className="text-lg font-bold leading-[20px]">
                  {slide.name}
                </h1>
              </div>
              <p className="text-sm font-medium pt-[24px] pr-5">
                {slide.description}
              </p>
              <img src={Stars} className="pt-[24px]" />
            </div>
          </div>
        ))}
        <img src={leftArrow} onClick={(i) => setCurrentIndex(i + 3)} />
      </div>
      <div className="pt-[181.66px]">
        <h1 className="text-center text-5xl font-VisbyBold font-bold leading-10">
          Over 1000+ Universities Recommend Us
        </h1>
        <div className="pt-8 flex justify-center">
          <img src={unversitiesimg} />
        </div>
      </div>
    </div>
  );
};
export default reviews;
