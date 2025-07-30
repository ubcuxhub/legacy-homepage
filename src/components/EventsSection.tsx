import React from "react";
import Image from "next/image";

const EventsSection: React.FC = () => {
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
        <div className="mb-16">
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
            events
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
            Learn by doing, connect by creating
          </h2>
        </div>

        {/* Event Cards */}
        <div className="flex justify-center gap-10 mb-20 ml-20 mr-20">
          {/* Design Archetypes Card */}
          <div
            className="relative overflow-hidden flex-shrink-0"
            style={{
              width: "472px",
              height: "280px",
              borderRadius: "10.73px",
              border: "1px solid #C1C7CD",
              boxShadow: "0px 4px 8px 0px rgba(224, 224, 224, 0.25)",
              marginRight: "20px",
            }}
          >
            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-between p-6">
              <div className="flex-1 flex items-center justify-center">
                <Image
                  src="/event1.png"
                  alt="Design Archetypes Event"
                  width={800}
                  height={600}
                  className="w-full h-auto object-contain"
                />
              </div>

              <div>
                <button
                  className="flex items-center gap-2 hover:bg-gray-50 transition-colors"
                  style={{
                    display: "flex",
                    width: "152px",
                    padding: "8px 10px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "10px",
                    borderRadius: "67.066px",
                    border: "0.5px solid #FFF",
                    background:
                      "linear-gradient(166deg, rgba(251, 248, 255, 0.80) 80.65%, rgba(151, 149, 153, 0.10) 80.65%)",
                    backdropFilter: "blur(0.5px)",
                    color: "#383838",
                    fontSize: "14px",
                    fontWeight: "500",
                  }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 21L12 3L21 21H3Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  office tour
                </button>
              </div>
            </div>
          </div>

          {/* UXATHON 2025 Card */}
          <div
            className="relative overflow-hidden flex-shrink-0"
            style={{
              width: "472px",
              height: "280px",
              borderRadius: "10.73px",
              border: "1px solid #C1C7CD",
              boxShadow: "0px 4px 8px 0px rgba(224, 224, 224, 0.25)",
              marginLeft: "20px",
            }}
          >
            {/* Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-pink-200 to-orange-200"></div>

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-between p-8">
              <div className="flex-1 flex items-center justify-center">
                <img
                  src="/event2.png"
                  alt="UXATHON 2025 Event"
                  className="max-w-full max-h-full object-contain"
                />
              </div>

              <div>
                <button
                  className="flex items-center gap-4 hover:bg-gray-50 transition-colors"
                  style={{
                    display: "flex",
                    width: "152px",
                    padding: "8px 10px",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "10px",
                    borderRadius: "67.066px",
                    border: "0.5px solid #FFF",
                    background:
                      "linear-gradient(166deg, rgba(251, 248, 255, 0.80) 80.65%, rgba(151, 149, 153, 0.10) 80.65%)",
                    backdropFilter: "blur(0.5px)",
                    color: "#383838",
                    fontSize: "14px",
                    fontWeight: "500",
                  }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 9H12.5L11 10.5L12.5 12H6V9Z"
                      fill="currentColor"
                    />
                    <path
                      d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  competition
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Button */}
        <div className="text-center flex justify-center">
          <button
            className="transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-black/20 transform hover:-translate-y-1 active:scale-95"
            style={{
              display: "flex",
              width: "252px",
              height: "54px",
              padding: "8px 10px",
              justifyContent: "center",
              alignItems: "center",
              gap: "12px",
              borderRadius: "67.066px",
              background: "#383838",
              backdropFilter: "blur(0.5px)",
              color: "white",
              border: "none",
              cursor: "pointer",
              marginTop: "80px",
            }}
          >
            SEE MORE EVENTS
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 17L17 7M17 7H7M17 7V17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventsSection;
