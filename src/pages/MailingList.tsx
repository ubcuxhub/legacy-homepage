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
      className={`transition-all duration-700 ease-in-out ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      /* Keep inline, Tailwind doesn't support complex CSS gradients directly in classes */
      style={{
        background: "linear-gradient(156deg, #052462 -1.32%, #CA97CE 77.58%, #F09485 97.31%)",
      }}
    >
      <div
        className="flex flex-col lg:flex-row lg:items-center lg:justify-between px-8 py-8 sm:px-12 sm:py-8 md:px-20 md:py-8 gap-8"
        /* Keep inline for exact desktop padding, Tailwind arbitrary values not working properly */
        style={{
          paddingLeft: "300px",
          paddingRight: "300px",
          paddingTop: "50px",
          paddingBottom: "50px",
        }}
      >
        <div className="flex flex-col gap-4">
          <h2 className="font-dm-sans text-white text-[32px] sm:text-[32px] md:text-[48px] lg:text-[64px] font-bold leading-normal mb-2.5 lg:mb-2.5"
              /* Keep inline for text shadow, Tailwind doesn't support complex shadows */
              style={{
                textShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
              }}>
            Never miss out
          </h2>
          <p className="font-dm-sans text-white text-[16px] sm:text-[16px] md:text-[16px] lg:text-[16px] font-normal leading-relaxed w-full lg:w-[400px] mb-8 lg:mb-[30px] opacity-90">
            Subscribe to our newsletter to stay updated on all things UX
            Hub—events, design tips, community spotlights, and exclusive
            opportunities.
          </p>
        </div>

        <form
          action="https://facebook.us16.list-manage.com/subscribe/post?u=9a26bb1b23b273a2a9f766b4f&id=8faf775ff6"
          method="post"
          target="_blank"
          noValidate
          className="relative w-full max-w-[360px] mx-auto"
        >
          <input
            type="email"
            name="EMAIL"
            placeholder="ex: myname@example.com"
            required
            className="outline-none transition-all duration-300 ease-in-out hover:bg-[rgba(242,244,248,0.45)] focus:bg-[rgba(242,244,248,0.45)] w-full hover:scale-[1.02] focus:scale-[1.02]"
            style={{
              display: "flex",
              height: "25px",
              padding: "10px 0px 10px 10px",
              alignItems: "center",
              gap: "0px",
              borderRadius: "42342px",
              background: "rgba(242, 244, 248, 0.40)",
              color: "#FFFFFF",
              fontSize: "12px",
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
              right: "0px",
              top: "50%",
              transform: "translateY(-50%)",
            }}
          >
            <button
              type="submit"
              className="rounded-full bg-white text-black font-dm-sans transition-all duration-300 ease-in-out hover:bg-opacity-95 hover:transform hover:scale-[1.05] hover:shadow-lg hover:shadow-black/20 active:scale-[0.98] transform hover:-translate-y-1"
              style={{
                display: "flex",
                height: "33px",
                padding: "0px 20px",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "12px",
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
  );
};

export default CTASection;
