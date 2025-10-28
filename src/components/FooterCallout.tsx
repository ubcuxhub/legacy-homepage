import React from "react";
import Button from "./Button";
import { ArrowUpRight } from "lucide-react";

export default function FooterCallout() {
  const handleContactClick = () => {
    window.location.href = "mailto:ubcuxhub@gmail.com";
  };

  return (
    <section className="w-full px-[5%] md:px-[20%]">
      <div className="mx-auto max-h-[500px] rounded-[20px] bg-gradient-to-r from-[#052462] via-[#CA97CE] to-[#F09485] px-10 py-20 sm:py-12 md:py-16 lg:py-20">
        <div className="mx-auto flex max-w-[552px] flex-col items-center justify-center gap-5 text-center">
          <h2 className="font-dm-sans text-2xl md:text-[32px] lg:text-[42px] font-bold leading-normal text-white drop-shadow-sm">
            Ready to kickstart your design journey?
          </h2>

          <p className="font-dm-sans mx-auto max-w-2xl text-base font-normal leading-normal text-white">
            Join hundreds of student designers at UX Hub learning, building, and
            supporting each other on their journey to better UI and better design.
          </p>

          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button variant="primary" icon={<ArrowUpRight className="h-6 w-6" />}>
              BECOME A MEMBER
            </Button>

            <Button
              variant="secondary"
              onClick={handleContactClick}
              icon={<ArrowUpRight className="h-6 w-6" />}
            >
              CONTACT US
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}