import React, { useState } from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import Typewriter from "typewriter-effect";
import mehdi from "../assets/mehdi.png";

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-[#0a192f] flex items-center justify-center">
      {/* Container */}
   
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col md:flex-row justify-center items-center h-full">
        {/* Left Side - Text */}
        <div className="flex-1 text-center md:text-left">
          <p className="text-pink-600">Hi, my name is</p>
          <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
            EL MEHDI  EL KARKORI
          </h1>
          <h1 className="text-4xl sm:text-7xl font-bold text-[#ea3434]">
Im A          </h1>

          <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
            <Typewriter
              options={{
                strings: [
                  "Software Developer",
                  "Freelancer",
                  "MERN Stack Developer",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
              }}
            />
          </h2>
          <p className="text-[#8892b0] py-4 max-w-[700px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam at
            velit expedita! Corrupti tempora, molestiae tenetur voluptate optio
            sapiente sed?
          </p>
          <div>
            <button className="text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 duration-300 group">
              View Work
              <span className="inline-block ml-2 group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight />
              </span>
            </button>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="flex-1 flex justify-center">
          <img
            src={mehdi}
            alt="mehdi"
            className="w-100 h-70 object-cover rounded-full shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
