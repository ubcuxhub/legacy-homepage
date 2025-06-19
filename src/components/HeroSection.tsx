import React from 'react';

const headerStyle: React.CSSProperties = {
  width: '1247px',
  height: '58px',
  flexShrink: 0,
  borderTopLeftRadius: '20px',
  borderTopRightRadius: '20px',
  background: '#f5f5f5',
  opacity: 0.7,
  borderBottom: '1px solid #C1C7CD',
  display: 'inline-flex',
  alignItems: 'center',
  gap: '10px',
  padding: '20 28px',
};

const circleStyle: React.CSSProperties = {
  width: '21px',
  height: '21px',
  borderRadius: '701.82px',
  border: '1px solid #C1C7CD',
  background: 'linear-gradient(156deg, rgba(0, 24, 59, 0.70) -1.32%, rgba(39, 86, 157, 0.70) 41.2%, rgba(243, 197, 255, 0.70) 104.29%)',
};

const middleCircleStyle: React.CSSProperties = {
  width: '21px',
  height: '21px',
  borderRadius: '701.82px',
  border: '1px solid #C1C7CD',
  background: '#FFFFFF',
};

const rightCircleStyle: React.CSSProperties = {
  width: '21px',
  height: '21px',
  borderRadius: '701.82px',
  border: '1px solidrgb(214, 216, 218)',
  background: '#C1C7CD',
};

const contentFrameStyle: React.CSSProperties = {
  display: 'flex',
  width: '992px',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '80px',
  flex: 1,
  padding: '128px',
};

const heroStyle: React.CSSProperties = {
  width: '1247px',
  height: '694px',
  flexShrink: 0,
  borderRadius: '20px',
  border: '1px solid #C1C7CD',
  background: '#f5f5f5',
  boxSizing: 'border-box',
  position: 'relative',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

export default function HeroSection({ children }: { children?: React.ReactNode }) {
  return (
    <section style={heroStyle}>
      <div style={headerStyle}>
        <div style={circleStyle}></div>
        <div style={middleCircleStyle}></div>
        <div style={rightCircleStyle}></div>
      </div>
      <div style={contentFrameStyle}>
        {children}
      </div>
    </section>
  );
} 