
import React from "react";
import Image from "next/image";


export interface TeamMember {
  name: string;
  role: string;
  aboutMe: string;
  funFact: string;
  image: string;
  roleEmoji: string;
}

interface TeamMemberCardProps {
  member: TeamMember;
  gradientIndex: number;
}

const GRADIENTS = [
  "linear-gradient(180deg, #C597F0 0%, #F09485 100%)",
  "linear-gradient(156deg, #9478B1 54.93%, #00183B 135.3%)",
  "linear-gradient(156deg, #00183B -1.32%, #9478B1 57.86%, #E89595 116.3%)",
] as const;

const CARD_STYLES = {
  outer: {
    display: "flex",
    width: "320px",
    padding: "20px",
    flexDirection: "column" as const,
    alignItems: "center",
    gap: "11.328px",
    borderRadius: "25px",
    position: "relative" as const,
    overflow: "hidden" as const,
  },
  inner: {
    display: "flex",
    width: "286px",
    height: "560px",
    padding: "12px",
    justifyContent: "center",
    alignItems: "flex-start",
    gap: "8px",
    flexShrink: 0,
    background: "#FFF",
    borderRadius: "20px",
    flexDirection: "column" as const,
    overflow: "hidden" as const,
  },
  roleLabel: {
    background: "white",
    padding: "4px 12px",
    borderRadius: "15px",
    fontSize: "12px",
    fontWeight: "600",
    color: "#374151",
    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
    zIndex: 10,
  },
  nameLabel: {
    background: "white",
    padding: "6px 14px",
    borderRadius: "15px",
    fontSize: "14px",
    fontWeight: "700",
    color: "#374151",
    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
    zIndex: 10,
  },
  imageContainer: {
    width: "250px",
    height: "280px",
    flexShrink: 0,
    borderRadius: "20px",
    margin: "0 auto",
  },
  infoBox: {
    display: "flex" as const,
    padding: "8px 10px",
    alignItems: "flex-start",
    gap: "3.5px",
    alignSelf: "stretch",
    border: "1px solid #000",
    background: "#FFF",
    borderRadius: "8px",
    height: "62px",
    minHeight: "30px",
  },
  infoText: {
    fontSize: "12px",
    lineHeight: "1.4",
    padding: "1px 0",
    color: "#374151",
    margin: 0,
  },
  sectionTitle: {
    color: "#1E90FF",
    fontFamily: "Inter",
    fontSize: "13px",
    fontStyle: "normal" as const,
    fontWeight: "600",
    lineHeight: "normal" as const,
    marginBottom: "4px",
  },
} as const;

export default function TeamMemberCard({
  member,
  gradientIndex,
}: TeamMemberCardProps) {
  const gradient = GRADIENTS[gradientIndex % GRADIENTS.length];

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement;
    target.src =
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='250' height='280' viewBox='0 0 250 280'%3E%3Crect width='250' height='280' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%239ca3af' font-family='Arial' font-size='16'%3EPhoto%3C/text%3E%3C/svg%3E";
  };

  return (
    <div
      className="flex-shrink-0"
      style={{
        ...CARD_STYLES.outer,
        background: gradient,
      }}
    >
      <div
        className="flex flex-col items-center justify-center relative w-full"
        style={CARD_STYLES.inner}
      >
        {/* role label */}
        <div
          className="relative left-1/2 -translate-x-1/2 text-center"
          style={CARD_STYLES.roleLabel}
        >
          {member.role}
          <div
            style={{
              position: "absolute",
              bottom: "-6px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "0",
              height: "0",
              borderLeft: "6px solid transparent",
              borderRight: "6px solid transparent",
              borderTop: "6px solid white",
            }}
          />
        </div>

        {/* name label */}
        <div className="absolute" style={CARD_STYLES.nameLabel}>
          {member.name}
          <div
            style={{
              position: "absolute",
              right: "-6px",
              top: "50%",
              transform: "translateY(-50%)",
              width: "0",
              height: "0",
              borderTop: "6px solid transparent",
              borderBottom: "6px solid transparent",
              borderLeft: "6px solid white",
            }}
          />
        </div>

        <div
          className="flex items-center justify-center overflow-hidden"
          style={CARD_STYLES.imageContainer}
        >
          <Image
            src={member.image}
            alt={`${member.name} - ${member.role}`}
            width={250}
            height={280}
            className="w-full h-full object-cover"
            onError={handleImageError}
          />
        </div>

        {/* member info */}
        <div
          className="flex w-full mt-4"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "stretch",
            flex: 1,
          }}
        >
          <div>
            <h4 style={CARD_STYLES.sectionTitle} className="">
              About Me
            </h4>
            <div style={CARD_STYLES.infoBox}>
              <p style={CARD_STYLES.infoText}>{member.aboutMe}</p>
            </div>
          </div>

          <div>
            <h4 style={CARD_STYLES.sectionTitle}>Fun Fact</h4>
            <div style={CARD_STYLES.infoBox}>
              <p style={CARD_STYLES.infoText}>{member.funFact}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}