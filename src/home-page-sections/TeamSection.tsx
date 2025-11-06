"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";

type TeamMember = {
  name: string;
  role: string;
  image: string;
  roleEmoji: string;
};

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
  // {
  //   name: "Owen Li",
  //   role: "Co-Treasurer",
  //   image: "/people/owen.png",
  //   roleEmoji: "💵",
  // },
  // {
  //   name: "Taro Ren",
  //   role: "VP Internal",
  //   image: "/people/taro.jpeg",
  //   roleEmoji: "🎉",
  // },
  // {
  //   name: "Aubrey Ventura",
  //   role: "Design Director",
  //   image: "/people/aubrey.png",
  //   roleEmoji: "🎨",
  // },
  // {
  //   name: "Martin Uy",
  //   role: "Design Director",
  //   image: "/people/martin.png",
  //   roleEmoji: "🎨",
  // },
  // {
  //   name: "David Theopine",
  //   role: "Design Director",
  //   image: "/people/david.png",
  //   roleEmoji: "🎨",
  // },
  // {
  //   name: "Chhavi",
  //   role: "Design Director",
  //   image: "/people/chhavi.jpeg",
  //   roleEmoji: "🎨",
  // },
  // {
  //   name: "Iris Liu",
  //   role: "Media Director",
  //   image: "/people/iris.png",
  //   roleEmoji: "🎬",
  // },
  // {
  //   name: "Mason Suen",
  //   role: "Media Director",
  //   image: "/people/mason.png",
  //   roleEmoji: "🎬",
  // },
  // {
  //   name: "Cherry Wang",
  //   role: "Media Director",
  //   image: "/people/cherry.png",
  //   roleEmoji: "🎬",
  // },
  // {
  //   name: "Marina Yu",
  //   role: "Media Director",
  //   image: "/people/marina.png",
  //   roleEmoji: "🎬",
  // },
  // {
  //   name: "Eric Yan",
  //   role: "Logistics Director",
  //   image: "/people/eric.png",
  //   roleEmoji: "💡",
  // },
  // {
  //   name: "Kazuma Uji",
  //   role: "Logistics Director",
  //   image: "/people/kazuma.png",
  //   roleEmoji: "💡",
  // },
  // {
  //   name: "Jessie Megan",
  //   role: "Logistics Director",
  //   image: "/people/jessie.png",
  //   roleEmoji: "💡",
  // },
  // {
  //   name: "Mia Makino",
  //   role: "Logistics Director",
  //   image: "/people/Mia.png",
  //   roleEmoji: "💡",
  // },
  // {
  //   name: "Carys Fong",
  //   role: "Logistics Director",
  //   image: "/people/carys.png",
  //   roleEmoji: "💡",
  // },
  // {
  //   name: "Raksha Zunnuru",
  //   role: "Logistics Director",
  //   image: "/people/raksha.png",
  //   roleEmoji: "💡",
  // },
  // {
  //   name: "Katrina Wei",
  //   role: "Partnerships Director",
  //   image: "/people/Kat.png",
  //   roleEmoji: "🤝",
  // },
  // {
  //   name: "Quang Mai",
  //   role: "Partnerships Director",
  //   image: "/people/quang.jpeg",
  //   roleEmoji: "🤝",
  // },
  // {
  //   name: "Johnny Dong",
  //   role: "Developer",
  //   image: "/people/johnny.png",
  //   roleEmoji: "💻",
  // },
];

export default function TeamSection() {
  const [hoveredMember, setHoveredMember] = useState<TeamMember | null>(null);
  const [x, setX] = useState(0);
  const [halfWidth, setHalfWidth] = useState(0);

  const track = useMemo(() => [...TEAM_MEMBERS, ...TEAM_MEMBERS], []);
  const trackRef = useRef<HTMLDivElement>(null);

  // Measure half-track width
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const measure = () => setHalfWidth(el.scrollWidth / 2);
    measure();

    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Animate the track
  useEffect(() => {
    if (halfWidth === 0) return;

    let raf = 0;
    let last = performance.now();
    const baseSpeed = 100; // px per second

    const tick = (t: number) => {
      const dt = t - last;
      last = t;
      const speed = hoveredMember ? baseSpeed / 2 : baseSpeed;

      setX((prev) => {
        const next = prev + (speed * dt) / 1000;
        return next >= halfWidth ? next - halfWidth : next;
      });

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [halfWidth, hoveredMember]);

  return (
    <section id="team" className="w-full">
      <div className="mb-12 md:px-[20%] px-[5%]">
        <p
          className="mb-0 text-[#7A7A7A] font-[600] italic"
          style={{ fontFamily: "Lora", fontSize: 32 }}
        >
          the team
        </p>
        <h2
          className="text-[#383838] font-bold"
          style={{ fontFamily: "DM Sans", fontSize: 38 }}
        >
          The people behind the process
        </h2>
      </div>

      <div className="relative w-full flex flex-col items-center">
        <div
          className="absolute left-0 top-0 md:w-20 w-10 h-full z-10 pointer-events-none"
          style={{
            background: "linear-gradient(to right, #f3f4f6, transparent)",
          }}
        />
        <div
          className="absolute right-0 top-0 md:w-20 w-10 h-full z-10 pointer-events-none"
          style={{
            background: "linear-gradient(to left, #f3f4f6, transparent)",
          }}
        />

        <div className="justify-self-center font-bold h-4 mb-8">
          {hoveredMember
            ? `${hoveredMember.name} ${hoveredMember.roleEmoji} ${hoveredMember.role}`
            : ""}
        </div>

        <div className="overflow-hidden">
          <div
            ref={trackRef}
            className="flex w-max items-center md:gap-8 gap-4 will-change-transform"
            style={{
              transform: `translate3d(-${x}px,0,0)`,
            }}
          >
            {track.map((m, i) => (
              <div
                key={`${m.name}-${i}`}
                className="relative md:h-[155px] md:w-[155px] h-[120px] w-[120px] flex-shrink-0 overflow-hidden rounded-2xl"
                onMouseEnter={() => setHoveredMember(m)}
                onMouseLeave={() => setHoveredMember(null)}
              >
                <Image
                  src={m.image}
                  alt={m.name}
                  fill
                  className="object-cover object-top"
                  sizes="(min-width: 768px) 155px, 120px"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
