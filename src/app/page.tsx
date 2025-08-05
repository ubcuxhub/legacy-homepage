// This is the main landing page for the UX Hub app
// It features a FigJam-like board with draggable sticky notes and shapes, a toolbar, and a dot grid background

"use client";

import DotGrid from "@/components/DotGrid";
import HeroSection from "@/components/HeroSection";
import CTASection from "@/components/CTASection";
import Navbar from "@/components/Navbar";
import AboutUs from "@/components/AboutUs";
import LogoCarousel from "@/components/LogoCarousel";
import EventsSection from "@/components/EventsSection";
import TeamSection from "@/components/TeamSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 relative">
      {/* Navigation */}
      <Navbar />

      {/* Animated dot grid background (non-interactive) */}
      <div className="fixed inset-0 w-full h-full z-0 pointer-events-none">
        <DotGrid
          dotSize={6} // Size of each dot
          gap={48} // Space between dots
          baseColor="#E5E5E5" // Default dot color
          activeColor="#000000" // Dot color on hover
          proximity={120} // Hover effect radius
          className="w-full h-full"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 pt-[80px]">
        {/* Hero Section */}
        <div id="home" className="flex justify-center items-start pt-[70px]">
          <HeroSection>
            <div style={{ position: "relative" }}>
              {/* Figma Cursor Chat - "and largest!" */}
              <div
                style={{
                  position: "absolute",
                  top: "-20px",
                  left: "200px",
                  zIndex: 10,
                }}
              >
                <img
                  src="/and largest.png"
                  alt="and largest!"
                  style={{
                    width: "auto",
                    height: "auto",
                    maxWidth: "150px",
                  }}
                />
              </div>

              {/* Figma Cursor Chat - "UBC UX Hub" */}
              <div
                style={{
                  position: "absolute",
                  top: "150px",
                  right: "-120px",
                  zIndex: 10,
                }}
              >
                <img
                  src="/figma cursor chat.png"
                  alt="UBC UX Hub"
                  style={{
                    width: "auto",
                    height: "auto",
                    maxWidth: "150px",
                  }}
                />
              </div>
              <h1
                className="font-dm-sans font-bold leading-normal flex flex-col gap-8"
                style={{
                  color: "#383838",
                  fontSize: "64px",
                  fontStyle: "normal",
                  fontWeight: 700,
                  lineHeight: "normal",
                }}
              >
                <div className="flex items-center gap-6">
                  <span>UBC&apos;s</span>&nbsp;
                  <span
                    className="rounded-full text-white font-dm-sans"
                    style={{
                      borderRadius: "50px",
                      background:
                        "linear-gradient(133deg, #112B69 18.99%, #B68BC3 83.27%)",
                      color: "#F5F5F5",
                      fontSize: "64px",
                      fontStyle: "normal",
                      fontWeight: 700,
                      lineHeight: "normal",
                      padding: "8px 16px",
                      marginLeft: "4px",
                    }}
                  >
                    first-ever
                  </span>
                </div>
                <div className="flex items-center gap-6">
                  <span>UX</span>&nbsp;
                  <span
                    style={{
                      color: "#383838",
                      fontFamily: "Lora",
                      fontSize: "64px",
                      fontStyle: "italic",
                      fontWeight: 600,
                      lineHeight: "normal",
                      marginLeft: "4px",
                      marginRight: "4px",
                      position: "relative",
                    }}
                  >
                    design
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 300 32"
                      fill="none"
                      style={{
                        position: "absolute",
                        left: "-5px",
                        bottom: "-13px",
                        width: "240px",
                        height: "25px",
                        filter:
                          "drop-shadow(0px 4px 8px rgba(224, 224, 224, 0.25))",
                      }}
                    >
                      <g filter="url(#filter0_d_84_128)">
                        <path
                          d="M11 23.3345C11 23.3345 17.943 7.5 32.5 7.5C47.057 7.5 54.5602 23.3345 69.1172 23.3345C83.6743 23.3345 98.443 6.5 113 6.5C127.557 6.5 135.943 26.5 150.5 26.5C165.057 26.5 175.272 10 188 11C200.728 12 206 16.5 206 16.5"
                          stroke="url(#paint0_linear_84_128)"
                          strokeWidth="4.38621"
                          strokeLinecap="round"
                        />
                      </g>
                      <defs>
                        <filter
                          id="filter0_d_84_128"
                          x="0.806335"
                          y="0.306885"
                          width="215.387"
                          height="40.3862"
                          filterUnits="userSpaceOnUse"
                          colorInterpolationFilters="sRGB"
                        >
                          <feFlood
                            floodOpacity="0"
                            result="BackgroundImageFix"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />
                          <feOffset dy="4" />
                          <feGaussianBlur stdDeviation="4" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0.878431 0 0 0 0 0.878431 0 0 0 0 0.878431 0 0 0 0.25 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_84_128"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_84_128"
                            result="shape"
                          />
                        </filter>
                        <linearGradient
                          id="paint0_linear_84_128"
                          x1="11"
                          y1="6.12121"
                          x2="12.9503"
                          y2="49.6896"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#00183B" />
                          <stop offset="0.279794" stopColor="#9478B1" />
                          <stop offset="0.695" stopColor="#E89595" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </span>
                  &nbsp;
                  <span>club</span>
                </div>
              </h1>
              <p
                className="font-dm-sans"
                style={{
                  color: "#000",
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "normal",
                  marginTop: "40px",
                  marginBottom: "50px",
                }}
              >
                <span style={{ display: "inline-block", width: "900px" }}>
                  UBC UX Hub empowers students through hands-on learning,
                  creative collaboration, and access to the latest in user
                  experience and emerging technology.
                </span>
              </p>
              <div className="mt-8 flex gap-4">
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
                  }}
                >
                  BECOME A MEMBER
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="transition-transform duration-300 ease-in-out group-hover:translate-x-1"
                    style={{
                      width: "24px",
                      height: "24px",
                      transform: "rotate(0deg)",
                      flexShrink: 0,
                      aspectRatio: "1/1",
                    }}
                  >
                    <g clipPath="url(#clip0_84_134)">
                      <path
                        d="M19.1677 7.63191C19.2083 7.36987 19.1431 7.10244 18.9865 6.88844C18.83 6.67443 18.5948 6.53138 18.3328 6.49073L10.427 5.26547C10.2961 5.24286 10.1621 5.24653 10.0327 5.27627C9.90326 5.30601 9.78107 5.36123 9.67323 5.4387C9.56539 5.51617 9.47405 5.61435 9.40456 5.72749C9.33506 5.84064 9.2888 5.96649 9.26846 6.09771C9.24812 6.22893 9.25412 6.36288 9.28611 6.49176C9.3181 6.62063 9.37543 6.74184 9.45476 6.84832C9.5341 6.9548 9.63384 7.04442 9.74818 7.11194C9.86252 7.17945 9.98916 7.22353 10.1207 7.24158L15.6409 8.09711L4.95305 15.9167C4.739 16.0733 4.59593 16.3085 4.55532 16.5706C4.5147 16.8327 4.57986 17.1002 4.73646 17.3142C4.89306 17.5283 5.12828 17.6713 5.39036 17.712C5.65245 17.7526 5.91994 17.6874 6.13399 17.5308L16.8219 9.71123L15.9664 15.2315C15.9307 15.4912 15.9985 15.7546 16.1552 15.9649C16.3118 16.1752 16.5448 16.3155 16.8039 16.3556C17.063 16.3958 17.3275 16.3326 17.5405 16.1796C17.7535 16.0266 17.8978 15.7961 17.9425 15.5377L19.1677 7.63191Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_84_134">
                        <rect
                          width="24"
                          height="24"
                          fill="white"
                          transform="translate(24) rotate(90)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
              </div>
            </div>
          </HeroSection>
        </div>

        {/* CTA Section */}
        <div className="mt-[70px]">
          <CTASection />
        </div>

        {/* About us Section */}
        <div id="about-us" className="mt-[70px]">
          <AboutUs />
        </div>

        {/* Spnonsors section */}
        <div
          style={{
            paddingTop: "100px",
            paddingBottom: "100px",
          }}
        >
          <LogoCarousel />
        </div>

        {/* Events Section */}
        <div id="events" className="mt-[70px]">
          <EventsSection />
        </div>

        {/* Team Section */}
        <div id="team" className="mt-[70px]">
          <TeamSection />
        </div>

        {/* CTA Section After Team */}
        <div className="mt-[70px]">
          <div
            className="flex items-center justify-center py-20"
            style={{
              background:
                "linear-gradient(156deg, #052462 -1.32%, #CA97CE 77.58%, #F09485 97.31%)",
              width: "1000px",
              height: "500px",
              flexShrink: 0,
              margin: "0 auto",
              borderRadius: "20px",
              marginTop: "100px",
            }}
          >
            <div
              className="max-w-6xl mx-auto px-8 text-center"
              style={{
                display: "flex",
                width: "552px",
                height: "301px",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: "20px",
                flexShrink: 0,
              }}
            >
              <h2
                className="font-dm-sans mb-6"
                style={{
                  color: "#FFFFFF",
                  fontSize: "42px",
                  fontWeight: 700,
                  lineHeight: "normal",
                  textShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                }}
              >
                Ready to kickstart your design journey?
              </h2>
              <p
                className="font-dm-sans mb-8 max-w-2xl mx-auto"
                style={{
                  color: "#FFF",
                  textAlign: "center",
                  fontFamily: "DM Sans",
                  fontSize: "16px",
                  fontStyle: "normal",
                  fontWeight: 400,
                  lineHeight: "normal",
                  height: "49px",
                  flexShrink: 0,
                  alignSelf: "stretch",
                }}
              >
                Join hundreds of student designers at UX Hub learning, building,
                and supporting each other on their journey to better UI and
                better design.
              </p>
              <div className="flex gap-2.5 justify-center">
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
                    marginRight: "6px",
                  }}
                >
                  BECOME A MEMBER
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="transition-transform duration-300 ease-in-out group-hover:translate-x-1"
                    style={{
                      width: "24px",
                      height: "24px",
                      transform: "rotate(0deg)",
                      flexShrink: 0,
                      aspectRatio: "1/1",
                    }}
                  >
                    <g clipPath="url(#clip0_84_134)">
                      <path
                        d="M19.1677 7.63191C19.2083 7.36987 19.1431 7.10244 18.9865 6.88844C18.83 6.67443 18.5948 6.53138 18.3328 6.49073L10.427 5.26547C10.2961 5.24286 10.1621 5.24653 10.0327 5.27627C9.90326 5.30601 9.78107 5.36123 9.67323 5.4387C9.56539 5.51617 9.47405 5.61435 9.40456 5.72749C9.33506 5.84064 9.2888 5.96649 9.26846 6.09771C9.24812 6.22893 9.25412 6.36288 9.28611 6.49176C9.3181 6.62063 9.37543 6.74184 9.45476 6.84832C9.5341 6.9548 9.63384 7.04442 9.74818 7.11194C9.86252 7.17945 9.98916 7.22353 10.1207 7.24158L15.6409 8.09711L4.95305 15.9167C4.739 16.0733 4.59593 16.3085 4.55532 16.5706C4.5147 16.8327 4.57986 17.1002 4.73646 17.3142C4.89306 17.5283 5.12828 17.6713 5.39036 17.712C5.65245 17.7526 5.91994 17.6874 6.13399 17.5308L16.8219 9.71123L15.9664 15.2315C15.9307 15.4912 15.9985 15.7546 16.1552 15.9649C16.3118 16.1752 16.5448 16.3155 16.8039 16.3556C17.063 16.3958 17.3275 16.3326 17.5405 16.1796C17.7535 16.0266 17.8978 15.7961 17.9425 15.5377L19.1677 7.63191Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_84_134">
                        <rect
                          width="24"
                          height="24"
                          fill="white"
                          transform="translate(24) rotate(90)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
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
                    background: "rgba(255, 255, 255, 0.1)",
                    backdropFilter: "blur(0.5px)",
                    color: "#383838",
                    border: "1px solid rgba(255, 255, 255, 0.3)",
                    cursor: "pointer",
                    marginRight: "6px",
                  }}
                >
                  CONTACT US
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="transition-transform duration-300 ease-in-out group-hover:translate-x-1"
                    style={{
                      width: "24px",
                      height: "24px",
                      transform: "rotate(0deg)",
                      flexShrink: 0,
                      aspectRatio: "1/1",
                    }}
                  >
                    <g clipPath="url(#clip0_84_134)">
                      <path
                        d="M19.1677 7.63191C19.2083 7.36987 19.1431 7.10244 18.9865 6.88844C18.83 6.67443 18.5948 6.53138 18.3328 6.49073L10.427 5.26547C10.2961 5.24286 10.1621 5.24653 10.0327 5.27627C9.90326 5.30601 9.78107 5.36123 9.67323 5.4387C9.56539 5.51617 9.47405 5.61435 9.40456 5.72749C9.33506 5.84064 9.2888 5.96649 9.26846 6.09771C9.24812 6.22893 9.25412 6.36288 9.28611 6.49176C9.3181 6.62063 9.37543 6.74184 9.45476 6.84832C9.5341 6.9548 9.63384 7.04442 9.74818 7.11194C9.86252 7.17945 9.98916 7.22353 10.1207 7.24158L15.6409 8.09711L4.95305 15.9167C4.739 16.0733 4.59593 16.3085 4.55532 16.5706C4.5147 16.8327 4.57986 17.1002 4.73646 17.3142C4.89306 17.5283 5.12828 17.6713 5.39036 17.712C5.65245 17.7526 5.91994 17.6874 6.13399 17.5308L16.8219 9.71123L15.9664 15.2315C15.9307 15.4912 15.9985 15.7546 16.1552 15.9649C16.3118 16.1752 16.5448 16.3155 16.8039 16.3556C17.063 16.3958 17.3275 16.3326 17.5405 16.1796C17.7535 16.0266 17.8978 15.7961 17.9425 15.5377L19.1677 7.63191Z"
                        fill="#383838"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_84_134">
                        <rect
                          width="24"
                          height="24"
                          fill="white"
                          transform="translate(24) rotate(90)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Footer */}
        <div className="mt-[60px]">
          <Footer />
        </div>
      </div>
    </main>
  );
}
