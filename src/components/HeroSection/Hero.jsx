import React from 'react'
import {HiOutlineMagnifyingGlass} from "react-icons/hi2";
import { prettyGirl } from "../../utils";

const Hero = () => {
  return (
    <div className='w-full h-screen bg-white-200 flex flex-col justify-between font-[400] font-[poppins leading-[116%]'>
       <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
        <div className='flex flex-col  md:items-start w-full px-2 py-8'>
            <h2 className='text-5xl max-w-lg font-bold'>
                Learn From Anywhere in the World
            </h2>
             <p className='py-5 leading-7 text-sm max-w-xs'>
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
             <img src={prettyGirl} className="max-w-xl"/>
        </div>
        </div> 
    </div>
  )
}

export default Hero