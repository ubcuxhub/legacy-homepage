import React, { useState, useEffect } from "react";

const CTASection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      setIsVisible(scrollPosition > windowHeight * 0.5);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`transition-all duration-700 ease-in-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      /* Keep inline, Tailwind doesn't support complex CSS gradients directly in classes */
      style={{
        background: "linear-gradient(156deg, #052462 -1.32%, #CA97CE 77.58%, #F09485 97.31%)",
      }}
    >
      <div
        className="md:px-[20%] px-[5%] py-8"
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-center md:gap-6">
          {/* Text Container */}
          <div className="md:pr-3 mb-6 sm:mb-7 md:mb-0 text-center md:text-left">
            <h2 className="font-dm-sans text-white text-[40px] font-bold leading-normal mb-2 sm:mb-2.5 lg:mb-2.5"
              /* Keep inline for text shadow, Tailwind doesn't support complex shadows */
              style={{
                textShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
              }}>
              Never miss out
            </h2>
            <p className="font-dm-sans text-white text-[11px] sm:text-xs md:text-sm font-normal leading-relaxed max-w-[350px] mb-4 sm:mb-6 md:mb-0 opacity-90 mx-auto md:mx-0">
              Subscribe to our newsletter to stay updated on all things UX
              Hub—events, design tips, community spotlights, and exclusive
              opportunities.
            </p>
          </div>

          {/* Email Form Container */}
          <div className="w-full md:pl-3 flex-1 flex justify-center md:justify-start">
            <form
              action="https://facebook.us16.list-manage.com/subscribe/post?u=9a26bb1b23b273a2a9f766b4f&id=8faf775ff6"
              method="post"
              target="_blank"
              noValidate
              className="relative w-full max-w-[350px] sm:max-w-[400px] md:max-w-[500px]"
            >
              <input
                type="email"
                name="EMAIL"
                placeholder="ex: myname@example.com"
                required
                className="outline-none transition-all duration-300 ease-in-out hover:bg-[rgba(242,244,248,0.45)] focus:bg-[rgba(242,244,248,0.45)] w-full hover:scale-[1.02] focus:scale-[1.02] h-[45px] sm:h-[48px] md:h-[50px] text-xs sm:text-sm"
                style={{
                  display: "flex",
                  padding: "12px 16px 12px 16px",
                  alignItems: "center",
                  gap: "0px",
                  borderRadius: "42342px",
                  background: "rgba(242, 244, 248, 0.40)",
                  color: "#FFFFFF",
                  fontFamily: "DM Sans",
                  backdropFilter: "blur(10px)",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
                  border: "none",
                }}
              />

              {/* Honeypot field (anti-bot).  off-screen but in the form. */}
              {/* <div
              style={{ position: "absolute", left: "-5000px" }}
              aria-hidden="true"
            >
              <input
                type="text"
                name="b_9a26bb1b23b273a2a9f766b4f_8faf775ff6"
                tabIndex="-1"
                defaultValue=""
              />
            </div> */}

              <div
                style={{
                  position: "absolute",
                  right: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                }}
              >
                <button
                  type="submit"
                  className="rounded-full bg-white text-black font-dm-sans transition-all duration-300 ease-in-out hover:bg-opacity-95 hover:transform hover:scale-[1.05] hover:shadow-lg hover:shadow-black/20 active:scale-[0.98] transform hover:-translate-y-1 h-[30px] sm:h-[32px] md:h-[33px] text-[10px] sm:text-[11px] md:text-xs px-4 sm:px-5 md:px-6"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontWeight: 500,
                    border: "none",
                    outline: "none",
                  }}
                >
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
