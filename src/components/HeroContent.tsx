// src/components/HeroContent.tsx
import React from "react";
import Button from "./Button";
import { ArrowUpRight } from "lucide-react";

const HeroContent: React.FC = () => {
  return (
    <div style={{ position: "relative" }}>
    {/* cursor - "and largest!" */}
    <div className="absolute -top-5 left-[200px] lg:-top-5 lg:left-[200px] md:-top-[15px] md:left-[150px] sm:-top-2.5 sm:left-[100px] z-10">
        <img
          src="/and largest.png"
          alt="and largest!"
          className="max-w-[150px] lg:max-w-[150px] md:max-w-[120px] sm:max-w-[100px] w-auto h-auto"
        />
      </div>

    {/* cursor - "UBC UX Hub" */}
    <div className="absolute top-[150px] -right-[120px] lg:top-[150px] lg:-right-[120px] md:top-[120px] md:-right-20 sm:top-20 sm:-right-15 z-10">
        <img
          src="/figma-cursor-chat.png"
          alt="UBC UX Hub"
          className="max-w-[150px] lg:max-w-[150px] md:max-w-[120px] sm:max-w-[100px] w-auto h-auto"
        />
      </div>
    <h1
      className="font-dm-sans font-bold leading-normal flex flex-col gap-8 lg:text-[64px] md:text-[48px] sm:text-[32px]"
      style={{
        color: "#383838",
        fontSize: "64px",
        fontStyle: "normal",
        fontWeight: 700,
        lineHeight: "normal",
      }}
    >
      <div className="flex items-center gap-6">
        <span>UBC&apos;s</span>&nbsp;
        <span
          className="rounded-full text-white font-dm-sans"
          style={{
            borderRadius: "50px",
            background:
              "linear-gradient(133deg, #112B69 18.99%, #B68BC3 83.27%)",
            color: "#F5F5F5",
            fontSize: "64px",
            fontStyle: "normal",
            fontWeight: 700,
            lineHeight: "normal",
            padding: "8px 16px",
            marginLeft: "4px",
          }}
        >
          first-ever
        </span>
      </div>
      <div className="flex items-center gap-6">
        <span>UX</span>&nbsp;
        <span
          style={{
            color: "#383838",
            fontFamily: "Lora",
            fontSize: "64px",
            fontStyle: "italic",
            fontWeight: 600,
            lineHeight: "normal",
            marginLeft: "4px",
            marginRight: "4px",
            position: "relative",
          }}
        >
          design
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 300 32"
            fill="none"
            style={{
              position: "absolute",
              left: "-5px",
              bottom: "-13px",
              width: "240px",
              height: "25px",
              filter:
                "drop-shadow(0px 4px 8px rgba(224, 224, 224, 0.25))",
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
        &nbsp;
        <span>club</span>
      </div>
    </h1>
    <p
      className="font-dm-sans lg:text-[16px] md:text-[14px] sm:text-[12px]"
      style={{
        color: "#000",
        fontSize: "16px",
        fontStyle: "normal",
        fontWeight: 400,
        lineHeight: "normal",
        marginTop: "40px",
        marginBottom: "50px",
      }}
    >
      <span className="lg:inline-block lg:w-[900px] md:inline-block md:w-[700px] sm:block sm:w-full" style={{ display: "inline-block", width: "900px" }}>
        UBC UX Hub empowers students through hands-on learning,
        creative collaboration, and access to the latest in user
        experience and emerging technology.
      </span>
    </p>
    <div className="mt-8 flex gap-4">
        <Button variant="primary" icon={<ArrowUpRight className="w-6 h-6" />}>
          BECOME A MEMBER
        </Button>
      </div>
  </div>
  );
};

export default HeroContent;