import React from "react";

const NavigationLinks = () => {
  return (
    <div>
      <nav>
        <ul className="flex flex-wrap gap-y-4 justify-center list-none gap-x-10 px-5">
          <li>
            <a href="#home" className="nav_link">
              Home
            </a>
          </li>
          <li>
            <a href="#about-us" className="nav_link">
              About Us
            </a>
          </li>
          <li>
            <a href="#events" className="nav_link">
              Events
            </a>
          </li>
          <li>
            <a href="#team" className="nav_link">
              Meet the Team
            </a>
          </li>
          <li>
            <a href="mailto:ubcuxhub@gmail.com" className="nav_link">
              Contact Us
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavigationLinks;
