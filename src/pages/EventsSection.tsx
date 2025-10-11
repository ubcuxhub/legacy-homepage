import React from "react";
import Image from "next/image";

const EventsSection: React.FC = () => {
  return (
    <div className="w-full bg-gray-100">
      <div className="mx-auto w-fit max-w-8xl">
        <div className="mb-16">
          <p className="mb-0 text-[#7A7A7A] font-['Lora'] italic text-[31.871px] font-semibold">
            events
          </p>
          <h2 className="text-[#383838] font-['DM_Sans'] text-[38px] font-bold">
            Learn by doing, connect by creating
          </h2>
        </div>

        {/* event cards */}
        <div className="mb-20 ml-20 mr-20 flex justify-center gap-10">
          {/* card 1 */}
          <div
            className="relative overflow-hidden flex-shrink-0 w-[472px] h-[280px] rounded-[10.73px] border border-[#C1C7CD] shadow-[0px_4px_8px_0px_rgba(224,224,224,0.25)]"
          >
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
                  className="flex items-center justify-center gap-2 w-[152px] px-[10px] py-2 rounded-[67.066px] border-[0.5px] border-white text-[#383838] text-[14px] font-medium transition-colors hover:bg-gray-50 bg-[linear-gradient(166deg,rgba(251,248,255,0.80)_80.65%,rgba(151,149,153,0.10)_80.65%)] backdrop-blur-[0.5px]"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="shrink-0"
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

          {/* card 2 */}
          <div
            className="relative overflow-hidden flex-shrink-0 w-[472px] h-[280px] rounded-[10.73px] border border-[#C1C7CD] shadow-[0px_4px_8px_0px_rgba(224,224,224,0.25)]"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-pink-200 to-orange-200" />

            <div className="relative z-10 h-full flex flex-col justify-between p-8">
              <div className="flex-1 flex items-center justify-center">
                <Image
                  src="/event2.png"
                  alt="UXATHON 2025 Event"
                  width={400}
                  height={300}
                  className="w-full h-full object-contain"
                />
              </div>

              <div>
                <button
                  className="flex items-center justify-center gap-4 w-[152px] px-[10px] py-2 rounded-[67.066px] border-[0.5px] border-white text-[#383838] text-[14px] font-medium transition-colors hover:bg-gray-50 bg-[linear-gradient(166deg,rgba(251,248,255,0.80)_80.65%,rgba(151,149,153,0.10)_80.65%)] backdrop-blur-[0.5px]"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="shrink-0"
                  >
                    <path d="M6 9H12.5L11 10.5L12.5 12H6V9Z" fill="currentColor" />
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

        {/* CTA */}
        <div className="text-center flex justify-center">
          <button
            className="mx-auto mt-20 flex h-[54px] w-[252px] items-center justify-center gap-3 rounded-[67.066px] bg-[#383838] text-white transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:shadow-black/20 active:scale-95"
          >
            SEE MORE EVENTS
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="shrink-0"
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
