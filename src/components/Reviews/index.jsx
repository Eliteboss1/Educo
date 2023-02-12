import React from "react";
import { unversitiesimg } from "../../utils";

const reviews = () => {
  return (
    <div className="pt-48 pb-[182px] font-VisbyRegular">
      <h1 className="text-center text-5xl font-VisbyBold font-bold leading-10">
        What Our students say about Us
      </h1>
      <div className="pt-8"></div>
      <div>
        <h1 className="text-center text-[48px] font-bold leading-10">
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
