import React from "react";
import EventCard from "../components/EventCard";
import Button from "@/components/Button";

const EventsSection: React.FC = () => {
  const triangleIcon = (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
    >
      <path
        d="M3 21L12 3L21 21H3Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  const starIcon = (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
    >
      <path d="M6 9H12.5L11 10.5L12.5 12H6V9Z" fill="currentColor" />
      <path
        d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <div className="max-w-8xl md:px-[15%] px-[5%]">
      <div className="mb-8">
        <p className="mb-0 text-gray font-serif italic font-semibold text-[32px]">
          events
        </p>
        <h2 className=" text-[40px] font-bold leading-tight">
          Learn by doing, connect by creating
        </h2>
      </div>

      {/* event cards */}
      <div className="flex flex-col md:flex-row">
        <EventCard
          imageSrc="/event1.png"
          imageAlt="Design Archetypes Event"
          buttonText="office tour"
          buttonIcon={triangleIcon}
        />

        <div className="md:w-[5%] h-8"></div>

        <EventCard
          imageSrc="/event2.png"
          imageAlt="UXATHON 2025 Event"
          buttonText="competition"
          buttonIcon={starIcon}
        />
      </div>

      {/* CTA */}
      <div className="text-center flex justify-center">
        <Button
          onClick={() => (window.location.href = "/under-construction")}
          className="mt-20"
        >
          SEE MORE EVENTS
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="shrink-0"
          >
            <path
              d="M7 17L17 7M17 7H7M17 7V17"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Button>
      </div>
    </div>
  );
};

export default EventsSection;