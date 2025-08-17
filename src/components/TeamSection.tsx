import React from "react";
import Image from "next/image";

const TeamSection: React.FC = () => {
  const teamMembers = [
    {
      name: "Martin",
      role: "Design",
      aboutMe: "I love Costco Hotdogs!",
      funFact: "I dream in black and white",
      image: "/martin.png",
    },
    {
      name: "Aurora",
      role: "VP Marketing Design",
      aboutMe: "I'm studying CS and I love UX design!",
      funFact: "My MBTI is ISTJ and I like cafe hopping",
      image: "/aurora.png",
    },
    {
      name: "Aubrey",
      role: "Design Director",
      aboutMe: "Hi! I'm a 3rd year Media Studies student 🐰",
      funFact: "I like collecting k-pop photocards",
      image: "/aubrey.png",
    },
    {
      name: "Iris",
      role: "Media Director",
      aboutMe: "I'm a product designer, filmmaker, and denim skirt enthusiast!",
      funFact: "I got lost in Ottawa once and walked to Quebec.",
      image: "/iris.png",
    },
    {
      name: "Mia",
      role: "Logistics Director",
      aboutMe: "I'm studying cs but I love learning about design!",
      funFact: "I learned a bit of asl in high school",
      image: "/Mia.png",
    },
    {
      name: "Kat",
      role: "Partnerships Director",
      aboutMe: "I'm Kat! I'm a 3rd year BUCS student",
      funFact: "I love collecting useless but cute things",
      image: "/Kat.png",
    },
    {
      name: "Mason",
      role: "Media Director",
      aboutMe: "I'm Mason! I'm a 5th year Marketing student.",
      funFact: "I run a Tiktok food account",
      image: "/mason.png",
    },
    {
      name: "Cherry",
      role: "Media Director",
      aboutMe: "I'm Cherry and I'm doing BMS + cpsc ;)",
      funFact: "I sleeptalk multilingual",
      image: "/cherry.png",
    },
    {
      name: "Elisabeth",
      role: "VP Logistics",
      aboutMe: "I love badminton, calligraphy, kr&b, and cafe hopping",
      funFact: "I've lived on campus since I was 5 years old",
      image: "/Elisabeth.png",
    },
    {
      name: "Chhavi",
      role: "Design Director",
      aboutMe: "I am in my fourth year studying CS",
      funFact: "I love the moon 🌙",
      image: "/chhavi.jpeg",
    },
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
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-gray-100 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-gray-100 to-transparent z-10"></div>

          {/* Cards Container */}
          <div
            className="flex justify-center items-center overflow-hidden ml-20 mr-20"
            style={{ minHeight: "580px" }}
          >
            <div
              className="flex animate-scroll"
              style={{
                alignItems: "center",
                gap: "40px",
                width: `${teamMembers.length * (292.2 + 53) - 53}px`,
              }}
            >
              {teamMembers.map((member, index) => (
                <div
                  key={`${member.name}-${index}`}
                  className="flex-shrink-0"
                  style={{
                    display: "flex",
                    width: "280px",
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
                      width: "262px",
                      height: "520px",
                      padding: "20px 12px 20px 12px",
                      justifyContent: "center",
                      alignItems: "flex-start",
                      gap: "8px",
                      flexShrink: 0,
                      background: "#FFF",
                      borderRadius: "20px",
                      flexDirection: "column",
                      overflow: "hidden",
                    }}
                  >
                    {/* Role Label - Speech Bubble Style positioned relative to white card */}
                    <div
                      className="relative -top-16 left-1/2 transform -translate-x-1/2"
                      style={{
                        background: "white",
                        padding: "6px 14px",
                        borderRadius: "15px",
                        fontSize: "12px",
                        fontWeight: "600",
                        color: "#374151",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                        zIndex: 10,
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
                      className="absolute bottom-200 right-16"
                      style={{
                        background: "white",
                        padding: "6px 14px",
                        borderRadius: "15px",
                        fontSize: "14px",
                        fontWeight: "700",
                        color: "#374151",
                        boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                        zIndex: 10,
                      }}
                    >
                      {member.name}
                      {/* Speech bubble tail pointing right */}
                      <div
                        style={{
                          position: "absolute",
                          right: "-6px",
                          top: "50%",
                          transform: "translateY(-50%)",
                          width: "0",
                          height: "0",
                          borderTop: "6px solid transparent",
                          borderBottom: "6px solid transparent",
                          borderLeft: "6px solid white",
                        }}
                      />
                    </div>

                    {/* Image */}
                    <div
                      className="flex items-center justify-center overflow-hidden"
                      style={{
                        width: "250px",
                        height: "280px",
                        flexShrink: 0,
                        borderRadius: "20px",
                        margin: "0 auto",
                      }}
                    >
                      <Image
                        src={member.image}
                        alt={`${member.name} - ${member.role}`}
                        width={250}
                        height={280}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          // Fallback to a placeholder if image fails to load
                          const target = e.target as HTMLImageElement;
                          target.src =
                            "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='250' height='280' viewBox='0 0 250 280'%3E%3Crect width='250' height='280' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%239ca3af' font-family='Arial' font-size='16'%3EPhoto%3C/text%3E%3C/svg%3E";
                        }}
                      />
                    </div>

                    {/* Bottom Section - Full width text content */}
                    <div
                      className="flex w-full mt-4"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "8px",
                        width: "100%",
                        justifyContent: "flex-start",
                        alignItems: "stretch",
                        flex: 1,
                      }}
                    >
                      {/* About Me Section */}
                      <div>
                        <h4
                          style={{
                            color: "#1E90FF",
                            fontFamily: "Inter",
                            fontSize: "13px",
                            fontStyle: "normal",
                            fontWeight: "600",
                            lineHeight: "normal",
                            marginBottom: "4px",
                          }}
                        >
                          About me
                        </h4>
                        <div
                          style={{
                            display: "flex",
                            padding: "10px 12px",
                            alignItems: "flex-start",
                            gap: "3.5px",
                            alignSelf: "stretch",
                            border: "1px solid #000",
                            background: "#FFF",
                            borderRadius: "8px",
                            minHeight: "40px",
                          }}
                        >
                          <p
                            style={{
                              fontSize: "12px",
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

                      {/* Fun Fact Section */}
                      <div>
                        <h4
                          style={{
                            color: "#1E90FF",
                            fontFamily: "Inter",
                            fontSize: "13px",
                            fontStyle: "normal",
                            fontWeight: "600",
                            lineHeight: "normal",
                            marginBottom: "4px",
                          }}
                        >
                          Fun Fact
                        </h4>
                        <div
                          style={{
                            display: "flex",
                            padding: "10px 12px",
                            alignItems: "flex-start",
                            gap: "3.5px",
                            alignSelf: "stretch",
                            border: "1px solid #000",
                            background: "#FFF",
                            borderRadius: "8px",
                            minHeight: "40px",
                          }}
                        >
                          <p
                            style={{
                              fontSize: "12px",
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
            transform: translateX(calc(-100% + 100vw));
          }
        }

        .animate-scroll {
          animation: scroll 70s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default TeamSection;
