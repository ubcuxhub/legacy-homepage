import React from "react";
import Button from "./Button";
import { ArrowUpRight } from "lucide-react";

export default function FooterCallout() {
  const handleContactClick = () => {
    window.location.href = "mailto:ubcuxhub@gmail.com";
  };

  return (
    <section className="w-full px-[5%] md:px-[20%]">
      <div className="mx-auto max-h-[720px] rounded-[20px] bg-gradient-to-br from-[#102A68] via-[#9578B1] to-[#EE9489] px-10 py-28 sm:py-16 md:py-24 lg:py-30">
        <div className="mx-auto flex max-w-[552px] flex-col items-center justify-center gap-5 text-center">
          <h2 className="font-dm-sans text-2xl md:text-[32px] lg:text-[42px] font-bold leading-normal text-white drop-shadow-sm">
            Ready to kickstart your design journey?
          </h2>

          <p className="font-dm-sans mx-auto max-w-2xl text-base font-normal leading-normal text-white">
            Join hundreds of student designers at UX Hub learning, building, and
            supporting each other on their journey to better UI and better design.
          </p>

          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button variant="primary" className="group border-[2px] border-[#383838]" icon={<ArrowUpRight className="h-6 w-6 transition-all duration-300 ease-in-out group-hover:rotate-45 group-hover:text-[#383838]" />}>
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
