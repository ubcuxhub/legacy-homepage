"use client";

import React from "react";

interface RadarChartProps {
  organization: number; // 0-1
  speed: number;
  visual: number;
  creative: number;
  coding: number;
}

export default function RadarChart({
  organization,
  speed,
  visual,
  creative,
  coding,
}: RadarChartProps) {
  const size = 100;
  const center = size / 2;
  const radius = 55;

  // Calculate positions for pentagon vertices
  // Using standard math coordinate system where -Math.PI/2 is top
  const getPoint = (angle: number, distance: number) => {
    const x = center + Math.cos(angle) * distance * radius;
    const y = center + Math.sin(angle) * distance * radius;
    return { x, y };
  };

  // Trait configuration with angles and labels
  const traitKeys = ["organization", "visual", "coding", "creative", "speed"] as const;
  const traitLabels = ["Organization", "Visual", "Coding", "Creative", "Speed"];

  // Angles for each trait (starting from top, going clockwise)
  const baseAngle = -Math.PI / 2;
  const angles = traitKeys.map((_, i) => baseAngle + (i * 2 * Math.PI / 5));

  // Data values in the same order
  const dataValues = [organization, visual, coding, creative, speed];

  // Helper function to create a pentagon path from a distance level
  const createPentagonPath = (distance: number): string => {
    const points = angles.map((angle) => getPoint(angle, distance));
    return `M ${points.map((p) => `${p.x},${p.y}`).join(" L ")} Z`;
  };

  // Data points for the filled polygon
  const dataPoints = angles.map((angle, i) => getPoint(angle, dataValues[i]));

  // Label positions (outside the pentagon)
  const labelDistance = 1.25;
  const labelPoints = angles.map((angle) => getPoint(angle, labelDistance));

  // Grid lines (concentric pentagons) - 5 levels like Russian dolls
  const gridLevels = [0.2, 0.4, 0.6, 0.8, 1.0];
  const gridPaths = gridLevels.map(createPentagonPath);

  // Data polygon path
  const dataPath = `M ${dataPoints.map((p) => `${p.x},${p.y}`).join(" L ")} Z`;

  // Outer pentagon outline (same as grid level 1.0)
  const outerPentagonPath = gridPaths[gridPaths.length - 1];

  // Darker grey color for all pentagon outlines
  const gridStrokeColor = "#B0B0B0";

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      style={{ overflow: "visible" }}
    >
      {/* Grid lines - concentric pentagons (Russian doll style) */}
      {gridPaths.map((path, i) => (
        <path
          key={i}
          d={path}
          fill="none"
          stroke={gridStrokeColor}
          strokeWidth="0.5"
        />
      ))}

      {/* Axis lines (radial lines from center to vertices) */}
      {angles.map((angle, i) => {
        const outerPoint = getPoint(angle, 1);
        return (
          <line
            key={traitKeys[i]}
            x1={center}
            y1={center}
            x2={outerPoint.x}
            y2={outerPoint.y}
            stroke={gridStrokeColor}
            strokeWidth="0.5"
          />
        );
      })}

      {/* Outer pentagon outline - darker grey */}
      <path
        d={outerPentagonPath}
        fill="none"
        stroke={gridStrokeColor}
        strokeWidth="0.5"
      />

      {/* Filled data polygon */}
      <path
        d={dataPath}
        fill="#A8D8FF"
        fillOpacity="0.6"
        stroke="#4A90E2"
        strokeWidth="1.5"
      />

      {/* White circular markers at each vertex of data polygon */}
      {dataPoints.map((point, index) => (
        <circle
          key={index}
          cx={point.x}
          cy={point.y}
          r="2"
          fill="#fff"
          stroke="#4A90E2"
          strokeWidth="1"
        />
      ))}

      {/* Labels */}
      {labelPoints.map((point, i) => (
        <text
          key={traitKeys[i]}
          x={point.x}
          y={point.y}
          fontSize="16"
          fontFamily="DM Sans"
          fill="#000"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          {traitLabels[i]}
        </text>
      ))}
    </svg>
  );
}
