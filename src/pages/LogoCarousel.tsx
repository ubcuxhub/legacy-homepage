import React from "react";
import Image from "next/image";

interface Logo {
  name: string;
  src: string;
  alt: string;
  padding_y?: string; // e.g., "py-2"
}

const LogoCarousel: React.FC = () => {
  const logos: Logo[] = [
    { name: "Steve's Poke Bar", src: "/stevespoke.png", alt: "Steve's Poke Bar" },
    { name: "Google Cloud", src: "/googlecloud.png", alt: "Google Cloud" },
    { name: "Microsoft", src: "/microsoft.png", alt: "Microsoft", padding_y: "py-2" },
    { name: "Willowtree", src: "/willowtree.png", alt: "Willowtree" },
    { name: "Notion", src: "/notion.png", alt: "Notion" },
    { name: "TD Bank", src: "/td.png", alt: "TD Bank" },
    { name: "Red Bull", src: "/redbull.png", alt: "Red Bull" },
    { name: "Rain Shine", src: "/rainorshine.png", alt: "Rain Shine" },
  ];


  return (
    <div className="w-full overflow-hidden">
      <p className="pb-12 px-[5%] text-center text-[16px] font-medium">
        Proudly partnered with startups, clubs, and companies across UBC and beyond
      </p>

      {/* Container with background and relative positioning */}
      <div className="relative">
        {/* Fade edges (uses --bg var or falls back to white) */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 sm:w-20 md:w-24 lg:w-28 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 sm:w-20 md:w-24 lg:w-28 bg-gradient-to-l from-white to-transparent" />

        {/* Use group to pause animation on hover */}
        <div className="group overflow-hidden">
          {/* Animated track - wraps two identical sets for seamless loop */}
          <div className="flex">
            <div
              className="
                flex items-center md:gap-20 md:px-10 gap-6 px-3 shrink-0
                md:animate-[logo-scroll_50s_linear_infinite]
                animate-[logo-scroll_30s_linear_infinite]
                group-hover:[animation-play-state:paused]
                motion-reduce:animate-none
              "
            >
              {logos.map((logo, index) => (
                <div
                  key={`${logo.name}-${index}`}
                  className={`flex-shrink-0 opacity-90 transition-all duration-300 flex items-center justify-center`}
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={0}
                    height={0}
                    sizes="100vw"
                    className={`${logo.padding_y ?? ""} w-auto object-contain h-16`}
                    priority={index < 8}
                  />
                </div>
              ))}
            </div>
            <div
              className="
                flex items-center md:gap-20 md:px-10 gap-6 px-3 shrink-0
                md:animate-[logo-scroll_50s_linear_infinite]
                animate-[logo-scroll_30s_linear_infinite]
                group-hover:[animation-play-state:paused]
                motion-reduce:animate-none
              "
              aria-hidden="true"
            >
              {logos.map((logo, index) => (
                <div
                  key={`${logo.name}-duplicate-${index}`}
                  className={`flex-shrink-0 opacity-90 transition-all duration-300 flex items-center justify-center`}
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={0}
                    height={0}
                    sizes="100vw"
                    className={`${logo.padding_y ?? ""} w-auto object-contain h-16`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoCarousel;