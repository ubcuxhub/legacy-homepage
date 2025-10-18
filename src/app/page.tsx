"use client";

import DotGrid from "@/components/DotGrid";
import HeroSection from "@/pages/HeroSection";
import MailingList from "@/pages/MailingList";
import Navbar from "@/components/Navbar";
import AboutUs from "@/pages/AboutUs";
import LogoCarousel from "@/pages/LogoCarousel";
import EventsSection from "@/pages/EventsSection";
import TeamSection from "@/pages/TeamSection";
import Footer from "@/components/Footer";
import FooterContent from '../components/FooterContent';
import HeroContent from '../components/HeroContent';

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
          <HeroSection>
            <HeroContent />
          </HeroSection>
        </div>

        <div className="mt-[70px] lg:mt-[70px] md:mt-[50px] sm:mt-[30px]">
          <MailingList />
        </div>

        <div id="about-us" className="mt-[70px] lg:mt-[70px] md:mt-[50px] sm:mt-[30px] md:px-[10%] px-[5%]">
          <AboutUs />
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

        <div className="mt-[70px] lg:mt-[70px] md:mt-[50px] sm:mt-[30px] md:px-[20%] px-[5%]">
          <FooterContent
            title="Ready to kickstart your design journey?"
            description="Join hundreds of student designers at UX Hub learning, building, and supporting each other on their journey to better UI and better design."
            showContactButton
          />
        </div>
        <div className="mt-[60px]">
          <Footer />
        </div>
      </div>
    </main>
  );
}
