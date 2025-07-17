"use client";

import React from "react";
import Image from "next/image";

const AboutImageStack = () => {
  return (
    <div className="relative w-[600px] h-[500px] flex justify-center items-center group mx-auto">
      {/* Top Right Photo (Largest and most prominent) */}
      <div className="absolute top-8 right-8 transition-all duration-500 ease-in-out transform rotate-6 group-hover:rotate-12 group-hover:translate-x-8 group-hover:translate-y-4 z-10">
        <div className="w-56 h-72 rounded-2xl shadow-xl overflow-hidden">
          <Image
            src="/aboutus1.png"
            alt="About us 1"
            width={224}
            height={288}
            className="w-full h-full object-cover"
            priority
          />
        </div>
      </div>

      {/* Middle Left Photo (Overlapping) */}
      <div className="absolute top-20 left-12 transition-all duration-500 ease-in-out transform -rotate-3 group-hover:-rotate-6 group-hover:-translate-x-8 group-hover:-translate-y-4 z-20">
        <div className="w-52 h-68 rounded-2xl shadow-xl overflow-hidden">
          <Image
            src="/aboutus2.jpg"
            alt="About us 2"
            width={208}
            height={272}
            className="w-full h-full object-cover"
            priority
          />
        </div>
      </div>

      {/* Bottom Right Photo (Smallest and partially obscured) */}
      <div className="absolute bottom-8 right-4 transition-all duration-500 ease-in-out transform rotate-2 group-hover:rotate-4 group-hover:translate-x-4 group-hover:translate-y-8 z-30">
        <div className="w-44 h-56 rounded-2xl shadow-lg overflow-hidden">
          <Image
            src="/aboutus3.png"
            alt="About us 3"
            width={176}
            height={224}
            className="w-full h-full object-cover"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default AboutImageStack;
