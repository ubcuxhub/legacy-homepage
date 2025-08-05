import React from "react";
import Image from "next/image";

const TeamSection: React.FC = () => {
  const teamMembers = [
    {
      name: "Martin",
      role: "Designer",
      aboutMe: "I love Costco Hotdogs!",
      funFact: "I dream in black and white",
      skills: {
        organization: 80,
        visual: 90,
        coding: 60,
        creative: 85,
        speed: 75,
      },
    },
    {
      name: "Sarah",
      role: "UX Lead",
      aboutMe: "Coffee addict and design enthusiast",
      funFact: "I can solve a Rubik's cube in under 2 minutes",
      skills: {
        organization: 95,
        visual: 85,
        coding: 70,
        creative: 90,
        speed: 80,
      },
    },
    {
      name: "Alex",
      role: "Developer",
      aboutMe: "Building the future, one pixel at a time",
      funFact: "I have a pet cactus named Spike",
      skills: {
        organization: 75,
        visual: 70,
        coding: 95,
        creative: 80,
        speed: 90,
      },
    },
    {
      name: "Emma",
      role: "Researcher",
      aboutMe: "Understanding users through data and empathy",
      funFact: "I can identify any font just by looking at it",
      skills: {
        organization: 90,
        visual: 75,
        coding: 65,
        creative: 85,
        speed: 70,
      },
    },
    {
      name: "Jordan",
      role: "Strategist",
      aboutMe: "Connecting dots between business and design",
      funFact: "I've visited 15 countries in the last 3 years",
      skills: {
        organization: 85,
        visual: 80,
        coding: 55,
        creative: 90,
        speed: 85,
      },
    },
    {
      name: "Maya",
      role: "Content Designer",
      aboutMe: "Crafting words that connect and inspire",
      funFact: "I can recite the entire alphabet backwards",
      skills: {
        organization: 85,
        visual: 80,
        coding: 45,
        creative: 95,
        speed: 85,
      },
    },
    {
      name: "David",
      role: "Product Manager",
      aboutMe: "Turning ideas into reality through strategic thinking",
      funFact: "I collect vintage typewriters",
      skills: {
        organization: 95,
        visual: 70,
        coding: 60,
        creative: 80,
        speed: 90,
      },
    },
    {
      name: "Lisa",
      role: "Visual Designer",
      aboutMe: "Creating beautiful experiences that tell stories",
      funFact: "I can draw with both hands simultaneously",
      skills: {
        organization: 75,
        visual: 95,
        coding: 50,
        creative: 90,
        speed: 80,
      },
    },
    {
      name: "Tom",
      role: "Frontend Developer",
      aboutMe: "Bringing designs to life with clean code",
      funFact: "I can type 120 words per minute",
      skills: {
        organization: 80,
        visual: 75,
        coding: 95,
        creative: 70,
        speed: 85,
      },
    },
    {
      name: "Nina",
      role: "UX Researcher",
      aboutMe: "Uncovering insights that drive better design",
      funFact: "I speak 4 languages fluently",
      skills: {
        organization: 90,
        visual: 70,
        coding: 55,
        creative: 85,
        speed: 75,
      },
    },
  ];

  // Duplicate team members for seamless loop
  const duplicatedTeamMembers = [
    ...teamMembers,
    ...teamMembers,
    ...teamMembers,
  ];

  return (
    <div className="w-full bg-gray-100">
      <div
        className="max-w-8xl mx-auto"
        style={{
          width: "fit-content",
        }}
      >
        {/* Header */}
        <div
          className="mb-16"
          style={{ paddingLeft: "160px", paddingRight: "160px" }}
        >
          <p
            className="mb-0"
            style={{
              color: "#7A7A7A",
              fontFamily: "Lora",
              fontSize: "31.871px",
              fontStyle: "italic",
              fontWeight: 600,
              lineHeight: "normal",
              alignSelf: "stretch",
            }}
          >
            the team
          </p>
          <h2
            style={{
              color: "#383838",
              fontFamily: "DM Sans",
              fontSize: "38px",
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "normal",
              alignSelf: "stretch",
            }}
          >
            The people behind the process
          </h2>
        </div>

        {/* Team Cards Slideshow */}
        <div className="relative">
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-gray-100 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-gray-100 to-transparent z-10"></div>

          {/* Cards Container */}
          <div
            className="flex justify-center items-center overflow-hidden ml-20 mr-20"
            style={{ minHeight: "500px" }}
          >
            <div
              className="flex transition-transform duration-500 ease-in-out animate-scroll"
              style={{
                alignItems: "center",
                gap: "53px",
                width: `${duplicatedTeamMembers.length * (312.2 + 53) - 53}px`,
              }}
            >
              {duplicatedTeamMembers.map((member, index) => (
                <div
                  key={`${member.name}-${index}`}
                  className="flex-shrink-0"
                  style={{
                    display: "flex",
                    width: "312.2px",
                    padding: "20px",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "11.328px",
                    borderRadius: "25px",
                    background:
                      index % 3 === 0
                        ? "linear-gradient(180deg, #C597F0 0%, #F09485 100%)" // Updated gradient
                        : index % 3 === 1
                        ? "linear-gradient(156deg, #9478B1 54.93%, #00183B 135.3%)" // Cardfill2 gradient
                        : "linear-gradient(156deg, #00183B -1.32%, #9478B1 57.86%, #E89595 116.3%)", // Third gradient
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  {/* White Background Container with Image and Text */}
                  <div
                    className="relative w-full"
                    style={{
                      display: "flex",
                      width: "282px",
                      height: "480px", // Increased height to accommodate content
                      padding: "14.953px 14.953px 14.953px 14.953px", // Reduced bottom padding
                      justifyContent: "center",
                      alignItems: "flex-start", // Changed from center to flex-start
                      gap: "4.984px",
                      flexShrink: 0,
                      background: "#FFF",
                      borderRadius: "20px",
                      flexDirection: "column",
                      overflow: "hidden",
                    }}
                  >
                    {/* Role Label - Speech Bubble Style positioned relative to white card */}
                    <div
                      className="relative -top-20 left-1/2 transform -translate-x-1/2"
                      style={{
                        background: "white",
                        padding: "6px 14px",
                        borderRadius: "15px",
                        fontSize: "12px",
                        fontWeight: "600",
                        color: "#374151",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                      }}
                    >
                      {member.role}
                      {/* Speech bubble tail pointing down */}
                      <div
                        style={{
                          position: "absolute",
                          bottom: "-6px",
                          left: "50%",
                          transform: "translateX(-50%)",
                          width: "0",
                          height: "0",
                          borderLeft: "6px solid transparent",
                          borderRight: "6px solid transparent",
                          borderTop: "6px solid white",
                        }}
                      />
                    </div>

                    {/* Name Label - Speech Bubble Style positioned relative to white card */}
                    <div
                      className="absolute bottom-200 left-20"
                      style={{
                        background: "white",
                        padding: "6px 14px",
                        borderRadius: "15px",
                        fontSize: "14px",
                        fontWeight: "700",
                        color: "#374151",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                      }}
                    >
                      {member.name}
                      {/* Speech bubble tail pointing left */}
                      <div
                        style={{
                          position: "absolute",
                          left: "-6px",
                          top: "50%",
                          transform: "translateY(-50%)",
                          width: "0",
                          height: "0",
                          borderTop: "6px solid transparent",
                          borderBottom: "6px solid transparent",
                          borderRight: "6px solid white",
                        }}
                      />
                    </div>

                    {/* Image */}
                    <div
                      className="flex items-center justify-center overflow-hidden"
                      style={{
                        width: "270px",
                        height: "280px", // Reduced height to make room for text
                        flexShrink: 0,
                        borderRadius: "20px",
                        margin: "0 auto",
                      }}
                    >
                      <Image
                        src="/image.png"
                        alt={`${member.name} - ${member.role}`}
                        width={270}
                        height={280}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          // Fallback to a placeholder if image fails to load
                          const target = e.target as HTMLImageElement;
                          target.src =
                            "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='270' height='280' viewBox='0 0 270 280'%3E%3Crect width='270' height='280' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%239ca3af' font-family='Arial' font-size='16'%3EPhoto%3C/text%3E%3C/svg%3E";
                        }}
                      />
                    </div>

                    {/* Bottom Section - Split into two columns */}
                    <div
                      className="flex w-full mt-2" // Reduced margin top
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "12px", // Reduced gap
                        width: "100%",
                        justifyContent: "space-between",
                        alignItems: "flex-start",
                        flex: 1, // Take remaining space
                      }}
                    >
                      {/* Left side - Text */}
                      <div
                        className="flex-1"
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-start",
                          gap: "6px", // Reduced gap
                          alignSelf: "stretch",
                        }}
                      >
                        <div>
                          <h4
                            style={{
                              color: "#1E90FF",
                              fontFamily: "Inter",
                              fontSize: "13px", // Slightly smaller
                              fontStyle: "normal",
                              fontWeight: "600",
                              lineHeight: "normal",
                              marginBottom: "3px", // Reduced margin
                            }}
                          >
                            About me
                          </h4>
                          <div
                            style={{
                              display: "flex",
                              padding: "8px 10px", // Reduced padding
                              alignItems: "center",
                              gap: "3.5px",
                              alignSelf: "stretch",
                              border: "1px solid #000",
                              background: "#FFF",
                              borderRadius: "8px",
                            }}
                          >
                            <p
                              style={{
                                fontSize: "12px", // Slightly smaller
                                lineHeight: "1.4",
                                padding: "1px 0",
                                color: "#374151",
                                margin: 0,
                              }}
                            >
                              {member.aboutMe}
                            </p>
                          </div>
                        </div>
                        <div>
                          <h4
                            style={{
                              color: "#1E90FF",
                              fontFamily: "Inter",
                              fontSize: "13px", // Slightly smaller
                              fontStyle: "normal",
                              fontWeight: "600",
                              lineHeight: "normal",
                              marginBottom: "3px", // Reduced margin
                            }}
                          >
                            Fun Fact
                          </h4>
                          <div
                            style={{
                              display: "flex",
                              padding: "8px 10px", // Reduced padding
                              alignItems: "center",
                              gap: "3.5px",
                              alignSelf: "stretch",
                              border: "1px solid #000",
                              background: "#FFF",
                              borderRadius: "8px",
                            }}
                          >
                            <p
                              style={{
                                fontSize: "12px", // Slightly smaller
                                lineHeight: "1.4",
                                padding: "1px 0",
                                color: "#374151",
                                margin: 0,
                              }}
                            >
                              {member.funFact}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Right side - Radar Chart */}
                      <div
                        className="flex flex-col items-center"
                        style={{
                          width: "70px", // Slightly smaller
                          height: "90px", // Reduced height
                          justifyContent: "center",
                          position: "relative",
                        }}
                      >
                        <div
                          style={{
                            position: "relative",
                            width: "60px",
                            height: "60px",
                          }}
                        >
                          {" "}
                          {/* Smaller chart */}
                          <svg
                            width="60"
                            height="60"
                            viewBox="0 0 60 60"
                            className="transform -rotate-90"
                          >
                            {/* Radar Chart Background */}
                            <polygon
                              points="30,6 45,15 39,30 21,30 15,15"
                              fill="rgba(59, 130, 246, 0.1)"
                              stroke="rgba(59, 130, 246, 0.3)"
                              strokeWidth="1"
                            />
                            <polygon
                              points="30,12 42,18 36,27 24,27 18,18"
                              fill="rgba(59, 130, 246, 0.1)"
                              stroke="rgba(59, 130, 246, 0.3)"
                              strokeWidth="1"
                            />
                            <polygon
                              points="30,18 39,21 33,24 27,24 21,21"
                              fill="rgba(59, 130, 246, 0.1)"
                              stroke="rgba(59, 130, 246, 0.3)"
                              strokeWidth="1"
                            />

                            {/* Skills Polygon */}
                            <polygon
                              points={`
                                ${
                                  30 + (member.skills.organization - 50) * 0.3
                                },${
                                30 - (member.skills.organization - 50) * 0.3
                              }
                                ${30 + (member.skills.visual - 50) * 0.3},${
                                30 - (member.skills.visual - 50) * 0.3
                              }
                                ${30 + (member.skills.coding - 50) * 0.3},${
                                30 - (member.skills.coding - 50) * 0.3
                              }
                                ${30 + (member.skills.creative - 50) * 0.3},${
                                30 - (member.skills.creative - 50) * 0.3
                              }
                                ${30 + (member.skills.speed - 50) * 0.3},${
                                30 - (member.skills.speed - 50) * 0.3
                              }
                              `}
                              fill="rgba(59, 130, 246, 0.3)"
                              stroke="rgba(59, 130, 246, 0.8)"
                              strokeWidth="2"
                            />
                          </svg>
                          {/* Radar Chart Labels - Positioned around the chart like a compass */}
                          <span
                            style={{
                              position: "absolute",
                              top: "-8px",
                              left: "50%",
                              transform: "translateX(-50%)",
                              fontSize: "7px",
                              color: "#666",
                              fontWeight: "500",
                            }}
                          >
                            Org
                          </span>
                          <span
                            style={{
                              position: "absolute",
                              top: "15px",
                              right: "-8px",
                              fontSize: "7px",
                              color: "#666",
                              fontWeight: "500",
                            }}
                          >
                            Speed
                          </span>
                          <span
                            style={{
                              position: "absolute",
                              bottom: "-8px",
                              left: "50%",
                              transform: "translateX(-50%)",
                              fontSize: "7px",
                              color: "#666",
                              fontWeight: "500",
                            }}
                          >
                            Coding
                          </span>
                          <span
                            style={{
                              position: "absolute",
                              bottom: "15px",
                              left: "-10px",
                              fontSize: "7px",
                              color: "#666",
                              fontWeight: "500",
                            }}
                          >
                            Creative
                          </span>
                          <span
                            style={{
                              position: "absolute",
                              top: "15px",
                              left: "-8px",
                              fontSize: "7px",
                              color: "#666",
                              fontWeight: "500",
                            }}
                          >
                            Visual
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-50% - 2rem));
          }
        }

        .animate-scroll {
          animation: scroll 90s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default TeamSection;
