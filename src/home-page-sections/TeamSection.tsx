"use-client";
import React, { useState, useRef, useEffect } from "react";
import { TeamMember } from "../components/TeamMemberCard";
import Image from "next/image";

const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Martin",
    role: "Design",
    aboutMe: "I love Costco Hotdogs!",
    funFact: "I dream in black and white",
    image: "/martin.png",
    roleEmoji: "🎨",
  },
  {
    name: "Aurora",
    role: "VP Marketing Design",
    aboutMe: "I'm studying CS and I love UX design!",
    funFact: "My MBTI is ISTJ and I like cafe hopping",
    image: "/aurora.png",
    roleEmoji: "⭐",
  },
  {
    name: "Aubrey",
    role: "Design Director",
    aboutMe: "Hi! I'm a 3rd year Media Studies student 🐰",
    funFact: "I like collecting k-pop photocards",
    image: "/aubrey.png",
    roleEmoji: "🎨",
  },
  {
    name: "Iris",
    role: "Media Director",
    aboutMe: "I'm a product designer, filmmaker, and denim skirt enthusiast!",
    funFact: "I got lost in Ottawa once and walked to Quebec.",
    image: "/iris.png",
    roleEmoji: "🎬",
  },
  {
    name: "Mia",
    role: "Logistics Director",
    aboutMe: "I'm studying cs but I love learning about design!",
    funFact: "I learned a bit of asl in high school",
    image: "/Mia.png",
    roleEmoji: "💡",
  },
  {
    name: "Kat",
    role: "Partnerships Director",
    aboutMe: "I'm Kat! I'm a 3rd year BUCS student",
    funFact: "I love collecting useless but cute things",
    image: "/Kat.png",
    roleEmoji: "🤝",
  },
  {
    name: "Mason",
    role: "Media Director",
    aboutMe: "I'm Mason! I'm a 5th year Marketing student.",
    funFact: "I run a Tiktok food account",
    image: "/mason.png",
    roleEmoji: "🎬",
  },
  {
    name: "Cherry",
    role: "Media Director",
    aboutMe: "I'm Cherry and I'm doing BMS + cpsc ;)",
    funFact: "I sleeptalk multilingual",
    image: "/cherry.png",
    roleEmoji: "🎬",
  },
  {
    name: "Elisabeth",
    role: "VP Logistics",
    aboutMe: "I love badminton, calligraphy, kr&b, and cafe hopping",
    funFact: "I've lived on campus since I was 5 years old",
    image: "/Elisabeth.png",
    roleEmoji: "⭐",
  },
  {
    name: "Chhavi",
    role: "Design Director",
    aboutMe: "I am in my fourth year studying CS",
    funFact: "I love the moon 🌙",
    image: "/chhavi.jpeg",
    roleEmoji: "🎨",
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

const duplicatedMembers = [...TEAM_MEMBERS, ...TEAM_MEMBERS];

export default function TeamSection() {
  const [hoveredMember, setHoveredMember] = useState<TeamMember | null>(null);

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    let animationId: number;
    let position = 0;
    let speed = 0.5;

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
    <div className="w-full pt-[80px] pb-[80px]">
      <div className="mb-16 md:px-[20%] px-[5%]">
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
