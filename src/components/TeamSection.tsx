import React, { useState } from "react";
import Image from "next/image";

const TeamSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

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

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === teamMembers.length - 3 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? teamMembers.length - 3 : prevIndex - 1
    );
  };

  return (
    <div
      className="w-full bg-gray-100"
      // style={{
      //   paddingLeft: "160px",
      //   paddingRight: "160px",
      //   paddingTop: "80px",
      //   paddingBottom: "139px",
      // }}
    >
      <div
        className="max-w-8xl mx-auto"
        style={{
          width: "fit-content",
        }}
      >
        {/* Header */}
        <div className="mb-16" style={{ paddingLeft: "160px", paddingRight: "160px" }}>
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
            The team
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
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-all duration-300 hover:scale-110"
            style={{ width: "48px", height: "48px" }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15 18L9 12L15 6"
                stroke="#374151"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:bg-gray-50 transition-all duration-300 hover:scale-110"
            style={{ width: "48px", height: "48px" }}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 18L15 12L9 6"
                stroke="#374151"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          {/* Cards Container */}
          <div
            className="flex justify-center items-center overflow-hidden ml-20 mr-20"
            style={{ minHeight: "500px" }}
          >
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                alignItems: "center",
                gap: "53px",
                transform: `translateX(-${currentIndex * (312.2 + 53)}px)`,
                width: `${teamMembers.length * (312.2 + 53) - 53}px`,
              }}
            >
              {teamMembers.map((member, index) => (
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
                    borderRadius: "11.8px",
                    background:
                      index % 3 === 0
                        ? "linear-gradient(156deg, #CA97CE 10.37%, #F09485 138.22%)" // Original gradient
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
                      height: "426px",
                      padding: "14.953px 14.953px 39.875px 14.953px",
                      justifyContent: "center",
                      alignItems: "center",
                      gap: "4.984px",
                      flexShrink: 0,
                      background: "#FFF",
                      borderRadius: "11.8px",
                      flexDirection: "column",
                      overflow: "hidden",
                    }}
                  >
                    {/* Image */}
                    <div
                      className="flex items-center justify-center overflow-hidden"
                      style={{
                        width: "270px",
                        height: "300px",
                        flexShrink: 0,
                        borderRadius: "11.8px",
                        margin: "0 auto",
                      }}
                    >
                      <Image
                        src="/image.png"
                        alt={`${member.name} - ${member.role}`}
                        width={270}
                        height={300}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Role Label */}
                    <div
                      className="absolute top-4 left-1/2 transform -translate-x-1/2"
                      style={{
                        background: "rgba(255, 255, 255, 0.9)",
                        padding: "4px 12px",
                        borderRadius: "20px",
                        fontSize: "12px",
                        fontWeight: "600",
                        color: "#374151",
                      }}
                    >
                      {member.role}
                    </div>

                    {/* Name Label */}
                    <div
                      className="absolute bottom-4 left-4"
                      style={{
                        background: "rgba(255, 255, 255, 0.9)",
                        padding: "4px 12px",

                        fontSize: "14px",
                        fontWeight: "700",
                        color: "#374151",
                      }}
                    >
                      {member.name}
                    </div>

                    {/* Text Sections */}
                    <div
                      className="flex w-full"
                      style={{
                        padding: "8px",
                        background: "#FFF",
                      }}
                    >
                      {/* Left side - Text */}
                      <div
                        className="flex-1 pr-4"
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "flex-start",
                          gap: "4.248px",
                          alignSelf: "stretch",
                        }}
                      >
                        <div className="mb-3">
                          <h4
                            style={{
                              color: "#1E90FF",
                              fontFamily: "Inter",
                              fontSize: "16px",
                              fontStyle: "normal",
                              fontWeight: 400,
                              lineHeight: "11.328px",
                            }}
                          >
                            About me
                          </h4>
                          <div
                            style={{
                              display: "flex",
                              padding: "10px 9.44px",
                              alignItems: "center",
                              gap: "3.5px",
                              alignSelf: "stretch",
                              border: "1px solid #000",
                              background: "#FFF",
                            }}
                          >
                            <p className="text-gray-700 text-xs leading-relaxed">
                              {member.aboutMe}
                            </p>
                          </div>
                        </div>
                        <div>
                          <h4
                            style={{
                              color: "#1E90FF",
                              fontFamily: "Inter",
                              fontSize: "16px",
                              fontStyle: "normal",
                              fontWeight: 400,
                              lineHeight: "11.328px",
                            }}
                          >
                            Fun Fact
                          </h4>
                          <div
                            style={{
                              display: "flex",
                              padding: "10px 9.44px",
                              alignItems: "center",
                              gap: "3.5px",
                              alignSelf: "stretch",
                              border: "1px solid #000",
                              background: "#FFF",
                            }}
                          >
                            <p className="text-gray-700 text-xs leading-relaxed">
                              {member.funFact}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Right side - Radar Chart */}
                      <div className="w-20 h-20 relative">
                        <svg
                          width="80"
                          height="80"
                          viewBox="0 0 80 80"
                          className="transform -rotate-90"
                        >
                          {/* Radar Chart Background */}
                          <polygon
                            points="40,8 60,20 52,40 28,40 20,20"
                            fill="rgba(59, 130, 246, 0.1)"
                            stroke="rgba(59, 130, 246, 0.3)"
                            strokeWidth="1"
                          />
                          <polygon
                            points="40,16 56,24 48,36 32,36 24,24"
                            fill="rgba(59, 130, 246, 0.1)"
                            stroke="rgba(59, 130, 246, 0.3)"
                            strokeWidth="1"
                          />
                          <polygon
                            points="40,24 52,28 44,32 36,32 28,28"
                            fill="rgba(59, 130, 246, 0.1)"
                            stroke="rgba(59, 130, 246, 0.3)"
                            strokeWidth="1"
                          />

                          {/* Skills Polygon */}
                          <polygon
                            points={`
                              ${40 + (member.skills.organization - 50) * 0.4},${
                              40 - (member.skills.organization - 50) * 0.4
                            }
                              ${40 + (member.skills.visual - 50) * 0.4},${
                              40 - (member.skills.visual - 50) * 0.4
                            }
                              ${40 + (member.skills.coding - 50) * 0.4},${
                              40 - (member.skills.coding - 50) * 0.4
                            }
                              ${40 + (member.skills.creative - 50) * 0.4},${
                              40 - (member.skills.creative - 50) * 0.4
                            }
                              ${40 + (member.skills.speed - 50) * 0.4},${
                              40 - (member.skills.speed - 50) * 0.4
                            }
                            `}
                            fill="rgba(59, 130, 246, 0.3)"
                            stroke="rgba(59, 130, 246, 0.8)"
                            strokeWidth="2"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 gap-2">
            {Array.from(
              { length: Math.ceil(teamMembers.length / 3) },
              (_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i * 3)}
                  className={`
                    w-3 h-3 rounded-full transition-colors ${
                      Math.floor(currentIndex / 3) === i
                        ? "bg-blue-600"
                        : "bg-gray-300"
                    }
                  `}
                />
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;