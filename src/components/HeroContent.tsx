// src/components/HeroContent.tsx
import React from "react";
import Button from "./Button";
import { ArrowUpRight } from "lucide-react";


const HeroContent: React.FC = () => {
  return (
    <div className="px-4 sm:px-6 md:px-8 lg:px-0">
    <h1
      className="font-dm-sans font-bold leading-normal flex flex-col gap-0 sm:gap-0 md:gap-1 lg:gap-1 text-[#383838] mt-4 sm:mt-5 md:mt-6 lg:mt-8"
      style={{
        fontSize: "clamp(42px, 8vw, 48px)"
      }}
    >
      <div className="flex items-center flex-nowrap gap-2 sm:gap-2 md:gap-2 lg:gap-2">
        <span>UBC&apos;s</span>
        <span
          className="rounded-[80px] text-[#F5F5F5] font-dm-sans font-bold px-2 sm:px-4 md:px-6 lg:px-6"
          /* Keep inline, Tailwind doesn't support CSS gradients directly in classes */
          style={{
            background: "linear-gradient(156deg, #052462 -1.32%, #CA97CE 77.58%, #F09485 97.31%)",
            fontSize: "clamp(40px, 6vw, 48px)",
            padding: "8px 16px",
            marginLeft: "4px",
            lineHeight: "1",
            paddingTop: "4px",
            paddingBottom: "4px",
          }}
        >
          first-ever
        </span>
      </div>
      <div className="flex items-center flex-wrap gap-2 sm:gap-2 md:gap-2 lg:gap-2">
        <span>UX</span>
        <span className="font-serif italic text-[#383838] leading-normal relative">
          design
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 300 32"
            fill="none"
            className="absolute left-1/2 -translate-x-1/2 -bottom-[13px] w-[160px] h-[17px] sm:w-[170px] sm:h-[18px] md:w-[180px] md:h-[19px] lg:w-[200px] lg:h-[21px] ml-[15px] lg:ml-[20px]"
            /* Keep inline for complex filter, Tailwind doesn't support drop-shadow filters */
            style={{
              filter: "drop-shadow(0px 4px 8px rgba(224, 224, 224, 0.25))",
            }}
          >
              <g filter="url(#filter0_d_84_128)">
                <path
                  d="M11 23.3345C11 23.3345 17.943 7.5 32.5 7.5C47.057 7.5 54.5602 23.3345 69.1172 23.3345C83.6743 23.3345 98.443 6.5 113 6.5C127.557 6.5 135.943 26.5 150.5 26.5C165.057 26.5 175.272 10 188 11C200.728 12 206 16.5 206 16.5"
                  stroke="url(#paint0_linear_84_128)"
                  strokeWidth="4.38621"
                  strokeLinecap="round"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_84_128"
                  x="0.806335"
                  y="0.306885"
                  width="215.387"
                  height="40.3862"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood
                    floodOpacity="0"
                    result="BackgroundImageFix"
                  />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="4" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.878431 0 0 0 0 0.878431 0 0 0 0 0.878431 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_84_128"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_84_128"
                    result="shape"
                  />
                </filter>
                <linearGradient
                  id="paint0_linear_84_128"
                  x1="11"
                  y1="6.12121"
                  x2="12.9503"
                  y2="49.6896"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#00183B" />
                  <stop offset="0.279794" stopColor="#9478B1" />
                  <stop offset="0.695" stopColor="#E89595" />
                </linearGradient>
              </defs>
            </svg>
          </span>
        <span>club</span>
      </div>
    </h1>
    <p className="font-dm-sans leading-normal text-[#000] text-[14px] mt-6 mb-[30px] max-w-[600px] text-left">
      UBC UX Hub empowers students through hands-on learning, creative collaboration, and access to the latest in user experience and emerging technology.
    </p>
    <div className="mt-16 flex gap-4">
        <Button variant="primary" icon={<ArrowUpRight className="w-5 h-5" />}>
          BECOME A MEMBER
        </Button>
      </div>
    </div>
  );
};

export default HeroContent;
