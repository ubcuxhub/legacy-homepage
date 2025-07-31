"use client";

import React from "react";
import Image from "next/image";

const AboutImageStack = () => {
  return (
    <div className="relative w-[600px] h-[500px] flex justify-end items-center group mx-auto">
      {/* Container for the horizontal stack - moved more to the right */}
      <div className="relative w-[500px] h-[400px] flex items-center" style={{ marginRight: '-100px' }}>
        {/* Left Image (Back) */}
        <div className="absolute left-0 transition-all duration-600 ease-out transform group-hover:translate-x-[-180px] group-hover:rotate-[-12deg] z-10">
          <div className="w-64 h-80 rounded-lg shadow-2xl overflow-hidden bg-white p-3">
            <Image
              src="/aboutus1.png"
              alt="About us 1"
              width={256}
              height={320}
              className="w-full h-full object-cover rounded"
              priority
            />
          </div>
        </div>

        {/* Center Image (Middle) */}
        <div className="absolute left-16 transition-all duration-600 ease-out transform group-hover:translate-x-0 group-hover:rotate-0 z-20">
          <div className="w-72 h-88 rounded-lg shadow-2xl overflow-hidden bg-white p-3">
            <Image
              src="/aboutus2.jpg"
              alt="About us 2"
              width={288}
              height={352}
              className="w-full h-full object-cover rounded"
              priority
            />
          </div>
        </div>

        {/* Right Image (Front) */}
        <div className="absolute left-32 transition-all duration-600 ease-out transform group-hover:translate-x-[180px] group-hover:rotate-[12deg] z-30">
          <div className="w-64 h-80 rounded-lg shadow-2xl overflow-hidden bg-white p-3">
            <Image
              src="/aboutus3.png"
              alt="About us 3"
              width={256}
              height={320}
              className="w-full h-full object-cover rounded"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutImageStack;
