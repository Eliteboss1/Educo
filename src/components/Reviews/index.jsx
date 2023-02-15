import React, { useState } from "react";
import {
  unversitiesimg,
  Stars,
  prettySmile,
  chillSmile,
  lastSmile,
  leftArrow,
  rightArrow,
} from "../../utils";

const reviews = () => {
  const [currentindex, setCurrentIndex] = useState(0);

  const Slides = [
    {
      name: "Sophia Moore",
      description:
        "Educo has helped me increase my knoledge anout important aspects of my field of study through detailed courses",
      // image: { prettySmile },
    },
    {
      name: "Adam Smith",
      description:
        "I’ve used alot of e learning platforms in the past for research and studies but i must confess educo is the best ",
      // image: { chillSmile },
    },
    {
      name: "Mike Warren",
      description:
        "Finishing my degree was achievable with educo , i could schedule classes to the time that fit me",
      // image: { lastSmile },
    },
    {
      name: "Mike Warren",
      description:
        "Finishing my degree was achievable with educo , i could schedule classes to the time that fit me",
      // image: { lastSmile },
    },
    {
      name: "Mike Warren",
      description:
        "Finishing my degree was achievable with educo , i could schedule classes to the time that fit me",
      // image: { lastSmile },
    },
    {
      name: "Mike Warren",
      description:
        "Finishing my degree was achievable with educo , i could schedule classes to the time that fit me",
      // image: { lastSmile },
    },
    {
      name: "Mike Warren",
      description:
        "Finishing my degree was achievable with educo , i could schedule classes to the time that fit me",
      // image: { lastSmile },
    },
    {
      name: "Mike Warren",
      description:
        "Finishing my degree was achievable with educo , i could schedule classes to the time that fit me",
      // image: { lastSmile },
    },
    {
      name: "Mike Warren",
      description:
        "Finishing my degree was achievable with educo , i could schedule classes to the time that fit me",
      // image: { lastSmile },
    },
  ];

  console.log(currentindex);
  console.log(Slides.slice(currentindex, currentindex + 2));

  return (
    <div className="pt-48 pb-[182px] font-VisbyRegular">
      <h1 className="text-center text-5xl font-VisbyBold font-bold leading-10">
        What Our students say about Us
      </h1>
      <div className="pt-8 lg:flex lg:flex-row  md:flex md:justify-center md:items-center md:flex-col lg:justify-center gap-[32px]">
        <img
          src={leftArrow}
          onClick={() => currentindex > 0 && setCurrentIndex(currentindex - 3)}
        />
        {Slides.slice(currentindex, currentindex + 3).map((slide, i) => (
          <div
            key={i}
            className="w-[380px] bg-white border-solid border-[#EFF0F7] border-[1px] shadow-lg rounded-[20px]"
          >
            <div className="pl-[35px] py-[42px]">
              <div className="flex items-center gap-[9.84px]">
                <img src={prettySmile} className="rounded-[50%]" />
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
        <img
          src={rightArrow}
          onClick={() => currentindex < 5 && setCurrentIndex(currentindex + 3)}
        />
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
