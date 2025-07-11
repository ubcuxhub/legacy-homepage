import React from "react";

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
    <div className="w-full py-12 bg-gray-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-center text-gray-400 text-md font-medium mb-12">
          Proudly partnered with startups, clubs, and companies across UBC and
          beyond
        </h2>

        <div className="relative">
          {/* Gradient overlays for fade effect */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-gray-50 to-transparent z-10"></div>

          {/* Logo container */}
          <div className="flex items-center space-x-[80px] animate-scroll">
            {duplicatedLogos.map((logo, index) => (
              <div
                key={`${logo.name}-${index}`}
                className="flex-shrink-0 transition-all duration-300 opacity-60 hover:opacity-100"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-12 w-auto object-contain"
                />
              </div>
            ))}
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
          animation: scroll 20s linear infinite;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default LogoCarousel;
