import Link from "next/link";
import React from "react";

const NavigationLinks = () => {
  return (
    <div className="flex flex-wrap flex-row justify-center gap-x-8">
      <Link href="#home" className="nav_link">
        Home
      </Link>
      <Link href="#about-us" className="nav_link">
        About Us
      </Link>
      <Link href="#events" className="nav_link">
        Events
      </Link>
      <Link href="#team" className="nav_link">
        Meet the Team
      </Link>
      <Link href="mailto:ubcuxhub@gmail.com" className="nav_link">
        Contact Us
      </Link>
    </div>
  );
};

export default NavigationLinks;
