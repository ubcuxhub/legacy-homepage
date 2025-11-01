"use client";
import React, { useRef, useEffect, useState } from "react";
import TeamMemberCard, { TeamMember } from "../components/TeamMemberCard";

const SECTION_STYLES = {
  subtitle: {
    color: "#7A7A7A",
    fontFamily: "Lora",
    fontSize: "31.871px",
    fontStyle: "italic" as const,
    fontWeight: 600,
    lineHeight: "normal" as const,
    alignSelf: "stretch",
  },
  title: {
    color: "#383838",
    fontFamily: "DM Sans",
    fontSize: "38px",
    fontStyle: "normal" as const,
    fontWeight: 700,
    lineHeight: "normal" as const,
    alignSelf: "stretch",
  },
} as const;

export default function TeamSection() {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Load team data from JSON file
  useEffect(() => {
    fetch("/team.json")
      .then((res) => res.json())
      .then((data: TeamMember[]) => setTeamMembers(data))
      .catch((err) => console.error("Failed to load team data:", err));
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el || teamMembers.length === 0) return;

    let animationId: number;
    let position = 0;
    let speed = 1; // Increased from 0.5 to move faster

    // Card width: 320px (card) + gap: 44px = 364px per card
    const cardWidth = 364;
    const resetPoint = cardWidth * teamMembers.length;

    const animate = () => {
      position += speed;

      if (position >= resetPoint) {
        position -= resetPoint;
      }

      el.style.transform = `translateX(-${position}px)`;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    const slowDown = () => (speed = 0.1); // Reduced from 0.25 to slow down more on hover
    const speedUp = () => (speed = 0.8); // Updated to match new default speed

    el.addEventListener("mouseenter", slowDown);
    el.addEventListener("mouseleave", speedUp);

    return () => {
      cancelAnimationFrame(animationId);
      el.removeEventListener("mouseenter", slowDown);
      el.removeEventListener("mouseleave", speedUp);
    };
  }, [teamMembers]);

  // Duplicate members for seamless infinite scroll
  const duplicatedMembers = [...teamMembers, ...teamMembers];

  return (
    <div id="team" className="w-full py-12">
      <div className="mb-12 px-[5%] md:px-[10%] xl:px-[20%]">
        <p className="mb-0" style={SECTION_STYLES.subtitle}>
          the team
        </p>
        <h2 style={SECTION_STYLES.title}>The people behind the process</h2>
      </div>

      <div className="relative w-full">
        {/* Gradient overlays for fade effect */}
        <div
          className="absolute left-0 top-0 w-32 h-full z-10 pointer-events-none"
          style={{
            background: "linear-gradient(to right, #fff, transparent)",
          }}
        />
        <div
          className="absolute right-0 top-0 w-32 h-full z-10 pointer-events-none"
          style={{
            background: "linear-gradient(to left, #fff, transparent)",
          }}
        />

        {/* Carousel container - only render when data is loaded */}
        {teamMembers.length > 0 && (
          <div className="overflow-hidden">
            <div
              ref={scrollRef}
              className="flex w-max items-center gap-11 will-change-transform"
              style={{ paddingLeft: "20px" }}
            >
              {duplicatedMembers.map((member, index) => (
                <TeamMemberCard
                  key={`${member.name}-${index}`}
                  member={member}
                  gradientIndex={index}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
