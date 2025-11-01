
"use client";

import React from "react";
import Image from "next/image";
import RadarChart from "./RadarChart";

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  aboutMe: string;
  funFact: string;
  radarChart: {
    organization: number;
    speed: number;
    visual: number;
    creative: number;
    coding: number;
  };
}

interface TeamMemberCardProps {
  member: TeamMember;
  gradientIndex: number;
}

const GRADIENTS = [
  "linear-gradient(180deg, #C597F0 0%, #F09485 100%)",
  "linear-gradient(156deg, #9478B1 54.93%, #00183B 135.3%)",
  "linear-gradient(156deg, #00183B -1.32%, #9478B1 57.86%, #E89595 116.3%)",
] as const;

// Helper component for corner squares
interface CornerSquaresProps {
  size: number;
  borderColor: string;
}

function CornerSquares({ size, borderColor }: CornerSquaresProps) {
  const corners = [
    { className: "absolute -top-1 -left-1" },
    { className: "absolute -top-1 -right-1" },
    { className: "absolute -bottom-1 -left-1" },
    { className: "absolute -bottom-1 -right-1" },
  ];

  return (
    <>
      {corners.map((corner, index) => (
        <div
          key={index}
          className={corner.className}
          style={{
            width: `${size}px`,
            height: `${size}px`,
            backgroundColor: "#fff",
            border: `1px solid ${borderColor}`,
          }}
        />
      ))}
    </>
  );
}

// Helper component for About Me / Fun Fact sections
interface InfoSectionProps {
  title: string;
  content: string;
}

function InfoSection({ title, content }: InfoSectionProps) {
  return (
    <div>
      <h4
        className="mb-0.5"
        style={{
          color: "#1E90FF",
          fontSize: "14px",
          fontWeight: "600",
        }}
      >
        {title}
      </h4>
      <div
        className="relative p-1.5 border"
        style={{
          borderColor: "#1E90FF",
          borderStyle: "solid",
          borderRadius: 0,
          minHeight: "35px",
        }}
      >
        <CornerSquares size={5} borderColor="#1E90FF" />
        <p
          className="leading-relaxed m-0"
          style={{ color: "#000", fontSize: "12px" }}
        >
          {content}
        </p>
      </div>
    </div>
  );
}

export default function TeamMemberCard({
  member,
  gradientIndex,
}: TeamMemberCardProps) {
  const gradient = GRADIENTS[gradientIndex % GRADIENTS.length];

  return (
    <div
      className="flex-shrink-0"
      style={{
        width: "320px",
        padding: "20px",
        borderRadius: "25px",
        background: gradient,
      }}
    >
      <div
        className="flex flex-col relative w-full bg-white"
        style={{
          width: "280px",
          height: "440px",
          borderRadius: 0,
        }}
      >
        {/* Photo Container (Top Section) - with padding */}
        <div
          className="relative w-full"
          style={{
            height: "264px",
            borderBottom: "2px solid #000",
            paddingTop: "10px",
            paddingLeft: "10px",
            paddingRight: "10px",
          }}
        >
          <div
            className="relative w-full h-full overflow-hidden flex items-center justify-center"
            style={{ borderRadius: 0 }}
          >
            <Image
              src={member.image}
              alt={`${member.name} - ${member.role}`}
              fill
              className="object-cover"
              style={{
                objectPosition: "top center",
                objectFit: "cover",
              }}
            />
          </div>

          {/* Role Label - Centered at Top */}
          <div
            className="absolute top-4 left-1/2 -translate-x-1/2 bg-white"
            style={{
              borderRadius: "6px",
              fontSize: "14px",
              fontWeight: "600",
              color: "#000",
              boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
              zIndex: 10,
              padding: "4px 8px",
              display: "inline-flex",
              whiteSpace: "nowrap",
            }}
          >
            {member.role}
          </div>

          {/* Name Label - Bottom Left with Ruler and Cursor Icons */}
          <div className="absolute bottom-12 left-6 relative" style={{ zIndex: 10 }}>
            {/* White background badge wrapping ruler and name */}
            <div
              className="flex items-center gap-2"
              style={{
                borderRadius: "8px",
                fontSize: "14px",
                fontWeight: "700",
                color: "#000",
                boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                border: "1px solid #D3D3D3",
                backgroundColor: "#fff",
                padding: "4px 8px",
                display: "inline-flex",
              }}
            >
              <Image
                src="/ruler-cursor.png"
                alt=""
                width={16}
                height={16}
                className="flex-shrink-0"
              />
              <span>{member.name}</span>
            </div>

            {/* Cursor Icon - positioned further out to the right */}
            <div
              className="absolute bottom-9 left-18"
              style={{ transform: "translate(50%, 50%)" }}
            >
              <Image
                src="/cursor-icon.png"
                alt=""
                width={20}
                height={20}
                className="flex-shrink-0"
              />
            </div>
          </div>
        </div>

        {/* Content Section (Bottom Section) - with black outline, flush with edges */}
        <div
          className="flex flex-1 gap-2.5 pt-2 relative"
          style={{
            border: "2px solid #000",
            borderTop: "none",
            borderRadius: 0,
            padding: "8px",
          }}
        >
          {/* Corner squares - white with black outline */}
          <CornerSquares size={8} borderColor="#000" />

          {/* Left side - About Me and Fun Fact */}
          <div className="flex-1 flex flex-col gap-1.5">
            <InfoSection title="About me" content={member.aboutMe} />
            <InfoSection title="Fun Fact" content={member.funFact} />
          </div>

          {/* Right side - Radar Chart */}
          <div className="flex items-center justify-center flex-shrink-0">
            <div style={{ transform: "scale(0.65)" }}>
              <RadarChart
                organization={member.radarChart.organization}
                speed={member.radarChart.speed}
                visual={member.radarChart.visual}
                creative={member.radarChart.creative}
                coding={member.radarChart.coding}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
