import React from "react";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2";
import { prettyGirl } from "../../utils";
import FooterHero from "../../partials/FooterHero";

const Hero = () => {
  return (
    <section>
      {/* <div className='w-full h-screen bg-white-200 flex flex-col justify-between font-[400] font-[poppins leading-[116%]'>
                <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
                    <div className='flex flex-col  md:items-start w-full px-2 py-8'>
                        <h2 className='text-6xl w-auto font-VisbyBold'>
                            Learn From Anywhere in the World
                        </h2>
                        <p className='py-5 leading-7 text-lg max-w-xs visbyRegular'>
                            We provide quality online courses with proper guidance.
                            Our mentors are highly skilled and experienced in their fields
                        </p>
                        <div className="flex items-center">
                            <div className="flex border border-black-200 rounded-xl">
                                <input
                                    type="text"
                                    className="block item-left px-3 w-96 py-2 bg-white border rounded-l-xl border-black"
                                    placeholder="Search for courses"
                                />
                                <button className="px-3 py-3 text-white bg-black border rounded-r-xl ">
                                    <HiOutlineMagnifyingGlass />
                                </button>
                            </div>
                        </div>
                        <h3 className="pt-5 pb-3 font-bold">
                            400,000
                        </h3>
                        <p>
                            Users Trust Us
                        </p>
                    </div>
                    <div>
                        <img src={prettyGirl} className="max-w-xl" />
                    </div>
                </div>
            </div> */}

      <div>
        {/* wrapper */}
        <div>
          {/* container */}
          <div className="grid grid-cols-2 px-28 py-16 justify-center">
            {/* left side: text and input field */}
            <div className="flex flex-col gap-8">
              <h1 className="text-6xl font-VisbyBold w-[41rem]">
                Learn From Anywhere in the World
              </h1>
              <p className="font-visbyRegular text-xl">
                We provide quality online courses with proper
                <br /> guidance. Our mentors are highly skilled and
                <br /> experienced in their fields
              </p>
              <div className="flex items-center">
                <input
                  type="text"
                  placeholder="Search for courses"
                  className="border-black border-2 w-[462px] h-[56px] rounded-2xl rounded-r-none placeholder:px-4 "
                />
                <button className="bg-black text text-white p-[1.26rem] rounded-2xl rounded-l-none">
                  <HiOutlineMagnifyingGlass />
                </button>
              </div>
            </div>

            {/* right side: image */}
            <div className="-mt-12 ml-10">
              <img src={prettyGirl} alt="" />
            </div>
            <FooterHero />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
