import React from "react";

const headerStyle: React.CSSProperties = {
  width: "100%", // Changed from fixed width to responsive
  height: "58px",
  flexShrink: 0,
  borderTopLeftRadius: "20px",
  borderTopRightRadius: "20px",
  background: "#f5f5f5",
  opacity: 0.7,
  borderBottom: "1px solid #C1C7CD",
  display: "inline-flex",
  alignItems: "center",
  gap: "10px",
  padding: "18px 18px 18px 80px", // Large screen padding
  justifyContent: "flex-start",
};

const circleStyle: React.CSSProperties = {
  width: "21px",
  height: "21px",
  borderRadius: "701.82px",
  border: "1px solid #C1C7CD",
  background:
    "linear-gradient(156deg, rgba(0, 24, 59, 0.70) -1.32%, rgba(39, 86, 157, 0.70) 41.2%, rgba(243, 197, 255, 0.70) 104.29%)",
  marginLeft: '19px"',
};

const middleCircleStyle: React.CSSProperties = {
  width: "21px",
  height: "21px",
  borderRadius: "701.82px",
  border: "1px solid #C1C7CD",
  background: "#FFFFFF",
};

const rightCircleStyle: React.CSSProperties = {
  width: "21px",
  height: "21px",
  borderRadius: "701.82px",
  border: "1px solidrgb(214, 216, 218)",
  background: "#C1C7CD",
};

const contentFrameStyle: React.CSSProperties = {
  display: "flex",
  width: "100%", // Changed from fixed width to responsive
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "80px", // Large screen gap
  flex: 1,
  padding: "80px 128px 128px 128px", // Large screen padding
};

const heroStyle: React.CSSProperties = {
  width: "100%", // Changed from fixed width to responsive
  maxWidth: "1247px", // Large screen max width
  height: "694px", // Large screen height
  flexShrink: 0,
  borderRadius: "20px",
  border: "1px solid #C1C7CD",
  background: "#f5f5f5",
  boxSizing: "border-box",
  position: "relative",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};

export default function HeroSection({
  children,
}: {
  children?: React.ReactNode;
}) {
  return (
    <section 
      className="w-full max-w-[1247px] lg:h-[694px] md:h-[600px] sm:h-[500px] flex-shrink-0 rounded-[20px] border border-[#C1C7CD] bg-[#f5f5f5] box-border relative overflow-hidden flex flex-col items-center"
      style={heroStyle}
    >
      <div 
        className="w-full h-[58px] flex-shrink-0 rounded-t-[20px] bg-[#f5f5f5] opacity-70 border-b border-[#C1C7CD] inline-flex items-center gap-[10px] lg:px-[80px] md:px-[60px] sm:px-[40px] py-[18px] justify-start"
        style={headerStyle}
      >
        <div style={circleStyle}></div>
        <div style={middleCircleStyle}></div>
        <div style={rightCircleStyle}></div>
      </div>
      <div 
        className="flex w-full flex-col items-center justify-center lg:gap-[80px] md:gap-[60px] sm:gap-[40px] flex-1 lg:px-[128px] lg:py-[80px] md:px-[80px] md:py-[60px] sm:px-[40px] sm:py-[40px]"
        style={contentFrameStyle}
      >
        {children}
      </div>
    </section>
  );
}
