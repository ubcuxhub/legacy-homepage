import React from "react";
import Image from "next/image";
import Button from "./Button";
import { ArrowUpRight } from "lucide-react";

export default function FooterCallout() {
  const handleContactClick = () => {
    window.location.href = "mailto:ubcuxhub@gmail.com";
  };

  return (
    <section className="w-full px-[5%] md:px-[20%]">
      <div className="relative mx-auto max-h-[820px] rounded-[20px] bg-gradient-to-br from-[#102A68] via-[#9578B1] to-[#EE9489] px-15 py-28 sm:py-16 md:py-35 lg:py-30">
        {/* cursor - top left */}
        <div className="absolute z-10 hidden md:block md:top-[40px] md:left-[40px] lg:top-[50px] lg:left-[60px] transition-transform duration-300 ease-in-out hover:scale-[1.15]">
          <Image
            src="/footer-cursor-top.png"
            alt=""
            width={120}
            height={120}
            className="h-auto w-auto max-w-[50px] md:max-w-[65px] lg:max-w-[80px]"
            priority
          />
        </div>

        {/* cursor - bottom right */}
        <div className="absolute z-10 hidden md:block md:bottom-[40px] md:right-[40px] lg:bottom-[50px] lg:right-[60px] transition-transform duration-300 ease-in-out hover:scale-[1.15]">
          <Image
            src="/footer-cursor-bottom.png"
            alt=""
            width={120}
            height={120}
            className="h-auto w-auto max-w-[50px] md:max-w-[65px] lg:max-w-[80px]"
            priority
          />
        </div>

        <div className="mx-auto flex max-w-[552px] flex-col items-center justify-center gap-5 text-center">
          <h2 className="font-dm-sans text-2xl md:text-[32px] lg:text-[42px] font-bold leading-normal text-white drop-shadow-sm">
            Ready to kickstart your design journey?
          </h2>

          <p className="font-dm-sans mx-auto max-w-2xl text-base font-normal leading-normal text-white">
            Join hundreds of student designers at UX Hub learning, building, and
            supporting each other on their journey to better UI and better design.
          </p>

          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button variant="primary" className="" icon={<ArrowUpRight className="h-6 w-6 transition-all duration-300 ease-in-out group-hover:rotate-45 group-hover:text-[#383838]" />}>
              BECOME A MEMBER
            </Button>

            <Button
              variant="secondary"
              onClick={handleContactClick}
              className="group border-[2px] border-[#383838]"
              icon={<ArrowUpRight className="h-6 w-6 transition-all duration-300 ease-in-out group-hover:rotate-45 group-hover:text-white" />}
            >
              CONTACT US
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
