"use-client";
import React, { useState, useRef, useEffect } from "react";
import { TeamMember } from "../components/TeamMemberCard";
import Image from "next/image";

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
  const [hoveredMember, setHoveredMember] = useState<TeamMember | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    fetch("/team.json")
      .then((res) => res.json())
      .then((data) => {
        const filtered = (data as TeamMember[]).filter(member => member.image && member.image.trim() !== "");
        setTeamMembers(filtered);
      })
      .catch((err) => console.error("Error loading team data:", err));
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el || teamMembers.length === 0) return;

    let animationId: number;
    let position = 0;
    let speed = 0.5;

    const cardWidth = 155 + 44;
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

    const slowDown = () => (speed = 0.25);
    const speedUp = () => (speed = 0.5);

    el.addEventListener("mouseenter", slowDown);
    el.addEventListener("mouseleave", speedUp);

    return () => {
      cancelAnimationFrame(animationId);
      el.removeEventListener("mouseenter", slowDown);
      el.removeEventListener("mouseleave", speedUp);
    };
  }, [teamMembers]);

  const duplicatedMembers = [...teamMembers, ...teamMembers];

  return (
    <div id="team" className="w-full">
      <div className="mb-12 md:px-[20%] px-[5%]">
        <p className="mb-0" style={SECTION_STYLES.subtitle}>
          the team
        </p>
        <h2 style={SECTION_STYLES.title}>The people behind the process</h2>
      </div>

      <div className="relative w-full">
        <div
          className="absolute left-0 top-0 w-20 h-full z-10 pointer-events-none"
          style={{
            background: "linear-gradient(to right, #f3f4f6, transparent)",
          }}
        />
        <div
          className="absolute right-0 top-0 w-20 h-full z-10 pointer-events-none"
          style={{
            background: "linear-gradient(to left, #f3f4f6, transparent)",
          }}
        />

        <div className="justify-self-center font-bold h-4 mb-8">
          {hoveredMember
            ? hoveredMember.name +
            " " +
            hoveredMember.roleEmoji +
            " " +
            hoveredMember.role
            : ""}
        </div>

        {/* card container */}
        <div className="overflow-hidden">
          <div
            ref={scrollRef}
            className="flex w-max items-center gap-11 will-change-transform"
          >
            {duplicatedMembers.map((member, index) => (
              member.image ? (
                <div
                  key={`${member.name}-${index}`}
                  className="relative h-[155px] w-[155px] flex-shrink-0 overflow-hidden rounded-2xl"
                  onMouseEnter={() => setHoveredMember(member)}
                  onMouseLeave={() => setHoveredMember(null)}
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill={true}
                    className="object-cover object-top"
                  />
                </div>
              ) : null
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
