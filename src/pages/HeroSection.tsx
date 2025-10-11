import React from "react";

interface HeroSectionProps {
  children?: React.ReactNode;
}

export default function HeroSection({ children }: HeroSectionProps) {
  return (
    <section className="w-full max-w-[1247px] h-auto min-h-[600px] sm:min-h-[650px] md:h-[750px] lg:h-[800px] flex-shrink-0 rounded-[20px] border border-[#C1C7CD] bg-[#f5f5f5] relative overflow-hidden flex flex-col items-center">
      {/* Browser window header with colored dots */}
      <div className="w-full h-[58px] flex-shrink-0 rounded-t-[20px] bg-[#f5f5f5] opacity-70 border-b border-[#C1C7CD] inline-flex items-center gap-2.5 py-[18px] px-6 sm:px-10 md:px-[60px] lg:pl-[80px] lg:pr-[18px] justify-start">
        {/* Left circle - gradient */}
        <div className="w-[21px] h-[21px] rounded-full border border-[#C1C7CD] ml-[19px]"
             /* Keep inline, Tailwind doesn't support CSS gradients directly in classes" */
             style={{ background: "linear-gradient(156deg, rgba(0, 24, 59, 0.70) -1.32%, rgba(39, 86, 157, 0.70) 41.2%, rgba(243, 197, 255, 0.70) 104.29%)" }} />

        {/* Middle circle - white */}
        <div className="w-[21px] h-[21px] rounded-full border border-[#C1C7CD] bg-white" />

        {/* Right circle - gray */}
        <div className="w-[21px] h-[21px] rounded-full border border-[rgb(214,216,218)] bg-[#C1C7CD]" />
      </div>

      {/* Content area */}
      <div className="flex w-full flex-col items-center justify-center gap-10 sm:gap-10 md:gap-[60px] lg:gap-[80px] flex-1 px-6 py-10 sm:px-10 sm:py-10 md:px-20 md:py-[60px] lg:px-32 lg:pt-20 lg:pb-32">
        {children}
      </div>
    </section>
  );
}
