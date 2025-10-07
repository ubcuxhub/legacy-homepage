import React from "react";
import NavigationLinks from "./footer_components/NavigationLinks";
import SocialMediaIcons from "./footer_components/SocialMediaIcons";
import LandAcknowledgement from "./footer_components/LandAcknowledgement";
import FooterLogo from "./footer_components/FooterLogo";

const Footer = () => {
  return (
    <footer className="my-[60px] w-full relative z-9999">
      <div className="flex flex-col max-w-6xl mx-auto px-8 items-center gap-y-8 lg:w-[992px]">
        <FooterLogo />
        <NavigationLinks />
        <SocialMediaIcons />
        <LandAcknowledgement />
      </div>
    </footer>
  );
};

export default Footer;
