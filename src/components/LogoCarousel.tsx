import React from "react";
import Image from "next/image";

interface Logo {
  name: string;
  src: string;
  alt: string;
}

const LogoCarousel: React.FC = () => {
  const logos: Logo[] = [
    {
      name: "Steve's Poke Bar",
      src: "/stevespoke.png",
      alt: "Steve's Poke Bar",
    },
    {
      name: "Google Cloud",
      src: "/googlecloud.png",
      alt: "Google Cloud",
    },
    {
      name: "Microsoft",
      src: "/microsoft.png",
      alt: "Microsoft",
    },
    {
      name: "Willowtree",
      src: "/willowtree.png",
      alt: "Willowtree",
    },
    {
      name: "Notion",
      src: "/notion.png",
      alt: "Notion",
    },
    {
      name: "TD Bank",
      src: "/td.png",
      alt: "TD Bank",
    },
    {
      name: "Red Bull",
      src: "/redbull.png",
      alt: "Red Bull",
    },
    {
      name: "Rain Shine",
      src: "/rainorshine.png",
      alt: "Rain Shine",
    },
  ];

  // Duplicate logos for seamless loop
  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <div 
      className="w-full bg-gray-50 overflow-hidden"
      style={{
        paddingTop: "80px",
        paddingBottom: "80px",
        paddingLeft: "80px",
        paddingRight: "80px",
      }}
    >
      <div className="max-w-6xl mx-auto">
        <p
          className="mb-12 sm:mb-16 md:mb-20"
          style={{
            color: "#383838",
            fontFamily: "DM Sans",
            fontSize: "14px",
            fontStyle: "normal",
            fontWeight: 500,
            lineHeight: "normal",
            alignSelf: "stretch",
            alignContent: "center",
            textAlign: "center",
          }}
        >
          Proudly partnered with startups, clubs, and companies across UBC and
          beyond
        </p>

        <div className="relative">
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 w-16 sm:w-20 md:w-24 lg:w-28 h-full bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-16 sm:w-20 md:w-24 lg:w-28 h-full bg-gradient-to-l from-gray-50 to-transparent z-10"></div>

          {/* Logo container */}
          <div
            className="flex items-center"
            style={{
              gap: "80px",
              animation: "scroll 20s linear infinite",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.animationPlayState = "paused";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.animationPlayState = "running";
            }}
          >
            {duplicatedLogos.map((logo, index) => (
              <div
                key={`${logo.name}-${index}`}
                className="flex-shrink-0 transition-all duration-300 opacity-60 hover:opacity-100"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={48}
                  height={48}
                  className="h-8 sm:h-10 md:h-12 w-auto object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style
        dangerouslySetInnerHTML={{
          __html: `
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(calc(-50% - 2rem));
            }
          }
        `,
        }}
      />
    </div>
  );
};

export default LogoCarousel;
