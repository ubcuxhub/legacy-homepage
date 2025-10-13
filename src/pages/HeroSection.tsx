import React from "react";

interface HeroSectionProps {
  children?: React.ReactNode;
}

export default function HeroSection({ children }: HeroSectionProps) {
  return (
    <section className="w-[90%] max-w-[1100px] h-[calc(100vh-140px)] flex-shrink-0 rounded-[20px] border border-[#C1C7CD] bg-[#f5f5f5] relative overflow-visible flex flex-col items-center">
      {/* cursor - "and largest!" */}
      <div className="hidden md:block absolute top-[100px] left-[170px] lg:top-[100px] lg:left-[160px] md:top-[100px] md:left-[100px] z-10">
        <img
          src="/and largest.png"
          alt="and largest!"
          className="max-w-[120px] lg:max-w-[120px] md:max-w-[100px] sm:max-w-[80px] w-auto h-auto"
        />
      </div>

      {/* cursor - "UBC UX Hub" */}
      <div className="hidden md:block absolute top-[360px] right-[150px] lg:top-[360px] lg:right-[120px] md:top-[300px] md:right-[95px] z-10">
        <img
          src="/figma-cursor-chat.png"
          alt="UBC UX Hub"
          className="max-w-[120px] lg:max-w-[120px] md:max-w-[100px] sm:max-w-[80px] w-auto h-auto"
        />
      </div>

      {/* Browser window header with colored dots */}
      <div className="w-full h-[58px] flex-shrink-0 rounded-t-[20px] bg-[#f5f5f5] opacity-70 border-b border-[#C1C7CD] inline-flex items-center gap-2.5 py-[18px] pl-4 pr-6 sm:pl-6 sm:pr-10 md:pl-4 md:pr-[20px] lg:pl-4 lg:pr-[20px] justify-start">
        {/* Left circle - gradient */}
        <div className="w-[21px] h-[21px] rounded-full border border-[#C1C7CD]"
          /* Keep inline, Tailwind doesn't support CSS gradients directly in classes" */
          style={{ background: "linear-gradient(156deg, rgba(0, 24, 59, 0.70) -1.32%, rgba(39, 86, 157, 0.70) 41.2%, rgba(243, 197, 255, 0.70) 104.29%)" }} />

        {/* Middle circle - white */}
        <div className="w-[21px] h-[21px] rounded-full border border-[#C1C7CD] bg-white" />

        {/* Right circle - gray */}
        <div className="w-[21px] h-[21px] rounded-full border border-[rgb(214,216,218)] bg-[#C1C7CD]" />
      </div>

      {/* Content area */}
      <div className="flex w-full flex-col items-start justify-center gap-10 sm:gap-10 md:gap-[60px] lg:gap-[80px] flex-1 px-6 py-10 sm:px-10 sm:py-10 md:px-20 md:py-[60px] lg:px-32 lg:pt-20 lg:pb-32">
        {children}
      </div>
    </section>
  );
}