// src/components/MailingListSection.tsx
"use client";

import { useEffect, useRef, useState } from "react";

export default function MailingListSection() {
  const [isVisible, setIsVisible] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.5 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={rootRef}
      className={[
        "transition-all duration-700 ease-in-out",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10",
        "bg-[linear-gradient(156deg,#102A68_-1.32%,#9578B1_77.58%,#EE9489_97.31%)]",
      ].join(" ")}
    >
      <div className="px-[5%] md:px-[10%] xl:px-[20%] py-16 sm:py-20 md:py-24 lg:py-28">
        <div className="flex flex-col md:flex-row md:items-center md:justify-center md:gap-8 lg:gap-12">
          {/* Text */}
          <div className="mb-8 flex-shrink-0 text-center md:mb-0 md:pr-4 md:text-left md:max-w-[400px]">
            <h2 className="font-dm-sans mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-[40px] font-bold leading-tight text-white drop-shadow-md">
              Never miss out
            </h2>
            <p className="font-dm-sans mx-auto mb-6 max-w-[400px] text-sm sm:text-base md:mb-0 md:mx-0 md:max-w-none lg:text-lg font-normal leading-relaxed text-white/90">
              Subscribe to our newsletter to stay updated on all things UX
              Hub—events, design tips, community spotlights, and exclusive
              opportunities.
            </p>
          </div>

          {/* Form */}
          <div className="flex w-full flex-1 justify-center md:justify-start md:min-w-0">
            <form
              action="https://facebook.us16.list-manage.com/subscribe/post?u=9a26bb1b23b273a2a9f766b4f&amp;id=8faf775ff6"
              method="post"
              target="_blank"
              noValidate
              className="relative w-full"
            >
              <label htmlFor="mce-EMAIL" className="sr-only">
                Email address
              </label>
              <input
                id="mce-EMAIL"
                type="email"
                name="EMAIL"
                placeholder="ex: myname@example.com"
                required
                className={[
                  "w-full",
                  "h-14 sm:h-16 md:h-17",
                  "rounded-full px-6 sm:px-8 py-3 sm:py-4",
                  "bg-white/40 text-white placeholder-white/70",
                  "backdrop-blur-md shadow-md outline-none ring-0 border-none",
                  "text-sm sm:text-base",
                  "transition-transform transition-colors duration-300 ease-in-out",
                  "hover:bg-white/45 focus:bg-white/45",
                  "hover:scale-[1.02] focus:scale-[1.02]",
                  "pr-24 sm:pr-28", // room for submit button
                ].join(" ")}
              />

              {/* Honeypot (optional) */}
              {/* <div className="absolute -left-[5000px]" aria-hidden="true">
                <input
                  type="text"
                  name="b_9a26bb1b23b273a2a9f766b4f_8faf775ff6"
                  tabIndex={-1}
                  defaultValue=""
                />
              </div> */}

              <div className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2">
                <button
                  type="submit"
                  className={[
                    "flex items-center justify-center",
                    "rounded-full bg-white text-black font-dm-sans",
                    "h-10 sm:h-12 md:h-13 px-5 sm:px-6",
                    "text-xs sm:text-sm md:text-base font-medium",
                    "transition-all duration-300 ease-in-out",
                    "hover:bg-opacity-95 hover:scale-105 hover:shadow-lg hover:shadow-black/20",
                    "active:scale-95 hover:-translate-y-1",
                    "outline-none border-none",
                  ].join(" ")}
                >
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
