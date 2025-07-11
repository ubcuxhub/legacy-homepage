"use client";

import React from "react";
import Image from "next/image";
// Remove the incomplete import line
// import aboutus1 from "public/aboutus1.png";
// import aboutus2 from "public/aboutus2.png";
// import aboutus3 from "public/aboutus3.png";

const AboutImageStack = () => {
  return (
    <div className="relative w-[600px] h-[500px] flex justify-center items-center group mx-auto">
      {/* Left image - starts stacked, moves left on hover */}
      <div className="absolute transition-transform duration-500 ease-in-out transform translate-x-0 translate-y-0 group-hover:-translate-x-32 group-hover:-translate-y-4 z-10">
        <div className="w-48 h-64 rounded-2xl shadow-lg overflow-hidden">
          <Image
            src="/aboutus1.png"
            alt="About us 1"
            width={192}
            height={256}
            className="w-full h-full object-cover"
            priority
          />
        </div>
      </div>

      {/* Center image - stays in center */}
      <div className="absolute transition-transform duration-500 ease-in-out transform translate-x-0 translate-y-0 z-20">
        <div className="w-48 h-64 rounded-2xl shadow-2xl overflow-hidden">
          <Image
            src="/aboutus2.png"
            alt="About us 2"
            width={192}
            height={256}
            className="w-full h-full object-cover"
            priority
          />
        </div>
      </div>

      {/* Right image - starts stacked, moves right on hover */}
      <div className="absolute transition-transform duration-500 ease-in-out transform translate-x-0 translate-y-0 group-hover:translate-x-32 group-hover:translate-y-4 z-10">
        <div className="w-48 h-64 rounded-2xl shadow-lg overflow-hidden">
          <Image
            src="/aboutus3.png"
            alt="About us 3"
            width={192}
            height={256}
            className="w-full h-full object-cover"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default AboutImageStack;
