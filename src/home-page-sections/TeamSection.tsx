"use-client";
import React, { useState, useRef, useEffect } from "react";
import { TeamMember } from "../components/TeamMemberCard";
import Image from "next/image";

const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Zelalem Araya",
    role: "Advisor",
    image: "/people/zela.png",
    roleEmoji: "💭",
  },
  {
    name: "Brian Yang",
    role: "Co-President",
    image: "/people/brian.png",
    roleEmoji: "⭐",
  },
  {
    name: "Jackie Crowley",
    role: "Co-President",
    image: "/people/jackie.png",
    roleEmoji: "⭐",
  },
  {
    name: "Elisabeth Lau",
    role: "VP Logistics",
    image: "/people/Elisabeth.png",
    roleEmoji: "⭐",
  },
  {
    name: "Elaine Li",
    role: "VP Partnerships",
    image: "/people/elaine.jpeg",
    roleEmoji: "⭐",
  },
  {
    name: "Aurora Cheng",
    role: "VP Marketing Design",
    image: "/people/aurora.png",
    roleEmoji: "⭐",
  },
  {
    name: "Erin Chiu",
    role: "Co-Treasurer",
    image: "/people/erin.png",
    roleEmoji: "💵",
  },
  {
    name: "Owen Li",
    role: "Co-Treasurer",
    image: "/people/owen.png",
    roleEmoji: "💵",
  },
  {
    name: "Taro Ren",
    role: "VP Internal",
    image: "/people/taro.jpeg",
    roleEmoji: "🎉",
  },
  {
    name: "Aubrey Ventura",
    role: "Design Director",
    image: "/people/aubrey.png",
    roleEmoji: "🎨",
  },
  {
    name: "Martin Uy",
    role: "Design Director",
    image: "/people/martin.png",
    roleEmoji: "🎨",
  },
  {
    name: "David Theopine",
    role: "Design Director",
    image: "/people/david.png",
    roleEmoji: "🎨",
  },
  {
    name: "Chhavi",
    role: "Design Director",
    image: "/people/chhavi.jpeg",
    roleEmoji: "🎨",
  },
  {
    name: "Iris Liu",
    role: "Media Director",
    image: "/people/iris.png",
    roleEmoji: "🎬",
  },
  {
    name: "Mason Suen",
    role: "Media Director",
    image: "/people/mason.png",
    roleEmoji: "🎬",
  },
  {
    name: "Cherry Wang",
    role: "Media Director",
    image: "/people/cherry.png",
    roleEmoji: "🎬",
  },
  {
    name: "Marina Yu",
    role: "Media Director",
    image: "/people/marina.png",
    roleEmoji: "🎬",
  },
  {
    name: "Eric Yan",
    role: "Logistics Director",
    image: "/people/eric.png",
    roleEmoji: "💡",
  },
  {
    name: "Kazuma Uji",
    role: "Logistics Director",
    image: "/people/kazuma.png",
    roleEmoji: "💡",
  },
  {
    name: "Jessie Megan",
    role: "Logistics Director",
    image: "/people/jessie.png",
    roleEmoji: "💡",
  },
  {
    name: "Mia Makino",
    role: "Logistics Director",
    image: "/people/Mia.png",
    roleEmoji: "💡",
  },
  {
    name: "Carys Fong",
    role: "Logistics Director",
    image: "/people/carys.png",
    roleEmoji: "💡",
  },
  {
    name: "Raksha Zunnuru",
    role: "Logistics Director",
    image: "/people/raksha.png",
    roleEmoji: "💡",
  },
  {
    name: "Katrina Wei",
    role: "Partnerships Director",
    image: "/people/Kat.png",
    roleEmoji: "🤝",
  },
  {
    name: "Quang Mai",
    role: "Partnerships Director",
    image: "/people/quang.jpeg",
    roleEmoji: "🤝",
  },
  {
    name: "Johnny Dong",
    role: "Developer",
    image: "/people/johnny.png",
    roleEmoji: "💻",
  },
];

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
  const [hoveredMember, setHoveredMember] = useState<TeamMember | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const duplicatedMembers = [...TEAM_MEMBERS, ...TEAM_MEMBERS];

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let animationId: number;
    let position = 0;
    let speed = 0.9;

    const cardWidth = 155 + 44;
    const resetPoint = cardWidth * TEAM_MEMBERS.length;

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
  }, []);

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
            className="flex w-max items-center gap-8 will-change-transform"
          >
            {duplicatedMembers.map((member, index) => (
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
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
