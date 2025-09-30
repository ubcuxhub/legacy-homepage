import React from "react";
import TeamMemberCard, { TeamMember } from "../components/TeamMemberCard";

const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Martin",
    role: "Design",
    aboutMe: "I love Costco Hotdogs!",
    funFact: "I dream in black and white",
    image: "/martin.png",
  },
  {
    name: "Aurora",
    role: "VP Marketing Design",
    aboutMe: "I'm studying CS and I love UX design!",
    funFact: "My MBTI is ISTJ and I like cafe hopping",
    image: "/aurora.png",
  },
  {
    name: "Aubrey",
    role: "Design Director",
    aboutMe: "Hi! I'm a 3rd year Media Studies student 🐰",
    funFact: "I like collecting k-pop photocards",
    image: "/aubrey.png",
  },
  {
    name: "Iris",
    role: "Media Director",
    aboutMe: "I'm a product designer, filmmaker, and denim skirt enthusiast!",
    funFact: "I got lost in Ottawa once and walked to Quebec.",
    image: "/iris.png",
  },
  {
    name: "Mia",
    role: "Logistics Director",
    aboutMe: "I'm studying cs but I love learning about design!",
    funFact: "I learned a bit of asl in high school",
    image: "/Mia.png",
  },
  {
    name: "Kat",
    role: "Partnerships Director",
    aboutMe: "I'm Kat! I'm a 3rd year BUCS student",
    funFact: "I love collecting useless but cute things",
    image: "/Kat.png",
  },
  {
    name: "Mason",
    role: "Media Director",
    aboutMe: "I'm Mason! I'm a 5th year Marketing student.",
    funFact: "I run a Tiktok food account",
    image: "/mason.png",
  },
  {
    name: "Cherry",
    role: "Media Director",
    aboutMe: "I'm Cherry and I'm doing BMS + cpsc ;)",
    funFact: "I sleeptalk multilingual",
    image: "/cherry.png",
  },
  {
    name: "Elisabeth",
    role: "VP Logistics",
    aboutMe: "I love badminton, calligraphy, kr&b, and cafe hopping",
    funFact: "I've lived on campus since I was 5 years old",
    image: "/Elisabeth.png",
  },
  {
    name: "Chhavi",
    role: "Design Director",
    aboutMe: "I am in my fourth year studying CS",
    funFact: "I love the moon 🌙",
    image: "/chhavi.jpeg",
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

const ANIMATION_CONFIG = {
  duration: "70s",
  cardWidth: 292.2,
  gap: 53,
} as const;


export default function TeamSection() {
  const totalWidth = TEAM_MEMBERS.length * (ANIMATION_CONFIG.cardWidth + ANIMATION_CONFIG.gap) - ANIMATION_CONFIG.gap;

  return (
    <div className="w-full bg-gray-100">
      <div className="max-w-8xl mx-auto" style={{ width: "fit-content" }}>
        <div className="mb-16 px-[160px]">
          <p className="mb-0" style={SECTION_STYLES.subtitle}>
            the team
          </p>
          <h2 style={SECTION_STYLES.title}>
            The people behind the process
          </h2>
        </div>

        {/* slideshow */}
        <div className="relative">
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-gray-100 to-transparent z-10" />
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-gray-100 to-transparent z-10" />

          {/* card container */}
          <div
            className="flex justify-center items-center overflow-hidden mx-20"
            style={{ minHeight: "580px" }}
          >
            <div
              className="flex animate-scroll items-center gap-30"
              style={{ width: `${totalWidth}px`, gap:'25px' }}
            >
              {TEAM_MEMBERS.map((member, index) => (
                <TeamMemberCard
                  key={`${member.name}-${index}`}
                  member={member}
                  gradientIndex={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* animate scroll! */}
      <style jsx global>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% + 100vw));
          }
        }

        .animate-scroll {
          animation: scroll 70s linear infinite;
        }
      `}</style>
    </div>
  );
}
