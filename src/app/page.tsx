"use client";

import DotGrid from "@/components/DotGrid";
import HeroSection from "@/home-page-sections/HeroSection";
import MailingList from "@/home-page-sections/MailingListSection";
import Navbar from "@/home-page-sections/Navbar";
import AboutUsSection from "@/home-page-sections/AboutUsSection";
import LogoCarousel from "@/home-page-sections/LogoCarousel";
import EventsSection from "@/home-page-sections/EventsSection";
import TeamSection from "@/home-page-sections/TeamSection";
import Footer from "@/home-page-sections/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white relative">

      <Navbar />

      {/* dot bg */}
      <div className="fixed inset-0 w-full h-full z-0 pointer-events-none">
        <DotGrid
          dotSize={6}
          gap={48}
          baseColor="#E5E5E5"
          activeColor="#000000"
          proximity={120}
          className="w-full h-full"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 pt-[80px] lg:pt-[80px] md:pt-[70px] sm:pt-[60px]">
        {/* Hero Section */}
        <div id="home" className="pt-[15px] md:px-[10%] px-[5%]">
          <HeroSection />
        </div>

        <div className="mt-[70px] lg:mt-[70px] md:mt-[50px] sm:mt-[30px]">
          <MailingList />
        </div>

        <div id="about-us" className="mt-[70px] lg:mt-[70px] md:mt-[50px] sm:mt-[30px] md:px-[10%] px-[5%]">
          <AboutUsSection />
        </div>

        <div className="lg:pt-[100px] lg:pb-[100px] md:pt-[80px] md:pb-[80px] sm:pt-[60px] sm:pb-[60px]">
          <LogoCarousel />
        </div>

        <div id="events" className="mt-[70px] lg:mt-[70px] md:mt-[50px] sm:mt-[30px] md:px-[20%] px-[5%]">
          <EventsSection />
        </div>


        <div id="team" className="mt-[70px] lg:mt-[70px] md:mt-[50px] sm:mt-[30px]">
          <TeamSection />
        </div>

        <div className="bg-white">
          <div className="pt-10">
            <Footer />
          </div>
        </div>
      </div>
    </main>
  );
}
