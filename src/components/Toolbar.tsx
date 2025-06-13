// Toolbar component for the UX Hub app
// This toolbar is fixed at the bottom of the page and contains four columns:
// 1. Cursor/Select vertical group
// 2. Pen, sticky note, and shapes
// 3. Navigation icons
// 4. Event photos image

'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

// Navigation items for the toolbar
const navItems = [
  {
    label: 'Home',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12L12 3l9 9"/><path d="M9 21V9h6v12"/></svg>
    ),
    href: '/',
  },
  {
    label: 'About',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
    ),
    href: '/about',
  },
  {
    label: 'Events',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
    ),
    href: '/events',
  },
  {
    label: 'Contact',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4.5"/><polyline points="17 8 12 13 7 8"/></svg>
    ),
    href: '/contact',
  },
];

export default function Toolbar() {
  const router = useRouter();
  return (
    // The main toolbar container, fixed at the bottom center of the page
    <motion.nav
      className="fixed left-1/2 -translate-x-1/2 z-50"
      // Use inline style to force bottom placement (with a 30px gap)
      style={{ bottom: 30, top: 'auto' }}
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      role="navigation"
    >
      {/* Cursor/Select vertical group, absolutely positioned to overlap the left edge of the toolbar */}
      <div
        className="transition-shadow hover:shadow-lg"
        style={{
          position: 'absolute',
          left: -1,
          bottom: 0,
          width: 60,
          height: 90,
          borderRadius: '20px 0 0 20px',
          border: '1px solid #B0B0B0',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          boxShadow: '0px 2px 2px 0px rgba(0,0,0,0.25)',
          zIndex: 10,
        }}
      >
        {/* Cursor icon (top) */}
        <div className="transition-shadow hover:shadow-lg" style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderBottom: '1px solid #B0B0B0',
        }}>
          <img src="/cursor.png" alt="Cursor" width={30} height={30} />
        </div>
        {/* Select icon (bottom) */}
        <div className="transition-shadow hover:shadow-lg" style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <img src="/select.png" alt="Select" width={20} height={20} />
        </div>
      </div>
      {/* Main toolbar content, 4 columns */}
      <div
        className="flex items-center justify-between px-6"
        style={{
          width: 767,
          height: 91,
          borderRadius: 20,
          background: '#FFFEFE',
          boxShadow: '0px 4px 4px 0px rgba(0,0,0,0.25)',
          border: '1px solid #B0B0B0',
        }}
      >
        {/* Column 1: Cursor/Select vertical group (for visual alignment) */}
        <div
          className="transition-shadow hover:shadow-lg"
          style={{
            width: 60,
            height: 90,
            borderRadius: '20px 0 0 20px',
            background: '#FFFEFE',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            boxShadow: '0px 2px 2px 0px rgba(0,0,0,0.25)',
            zIndex: 10,
          }}
        >
          {/* Cursor icon (top) */}
          <div className="transition-shadow hover:shadow-lg" style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderBottom: '1px solid #B0B0B0',
          }}>
            <img src="/cursor.png" alt="Cursor" width={30} height={30} />
          </div>
          {/* Select icon (bottom) */}
          <div className="transition-shadow hover:shadow-lg" style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <img src="/select.png" alt="Select" width={20} height={20} />
          </div>
        </div>
        {/* Column 2: Pen, sticky note, and shapes */}
        <div className="flex gap-6 items-center">
          {/* Pen tool PNG */}
          <img src="/pen.png" alt="Pen Tool" width={60} height={102} style={{ marginTop: 38 }} className="transition-shadow hover:shadow-lg rounded-lg" />
          {/* Sticky note PNG */}
          <img src="/sticky.png" alt="Sticky Note" width={95} height={61} style={{ marginTop: 38 }} className="transition-shadow hover:shadow-lg rounded-lg" />
          {/* 2x2 grid of shapes */}
          <div className="grid grid-cols-2 grid-rows-2 gap-3 ml-2">
            {/* Circle */}
            <div className="transition-shadow hover:shadow-lg rounded-full flex items-center justify-center">
              <svg width="50" height="50" viewBox="0 0 54 54" fill="none">
                <circle cx="27" cy="30" r="20" stroke="#757575" strokeWidth="4" filter="url(#shadow)" fill="white" />
                <defs>
                  <filter id="shadow" x="0" y="0" width="54" height="54" filterUnits="userSpaceOnUse">
                    <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#000" floodOpacity="0.15" />
                  </filter>
                </defs>
              </svg>
            </div>
            {/* Square */}
            <div className="transition-shadow hover:shadow-lg rounded flex items-center justify-center">
              <svg width="50" height="50" viewBox="0 0 54 54" fill="none">
                <rect x="10" y="10" width="34" height="34" stroke="#757575" strokeWidth="4" filter="url(#shadow)" fill="white" />
                <defs>
                  <filter id="shadow" x="0" y="0" width="54" height="54" filterUnits="userSpaceOnUse">
                    <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#000" floodOpacity="0.15" />
                  </filter>
                </defs>
              </svg>
            </div>
            {/* Triangle */}
            <div className="transition-shadow hover:shadow-lg rounded flex items-center justify-center">
              <svg width="50" height="50" viewBox="0 0 54 54" fill="none">
                <polygon points="27,10 44,44 10,44" stroke="#757575" strokeWidth="4" fill="white" filter="url(#shadow)" />
                <defs>
                  <filter id="shadow" x="0" y="0" width="54" height="54" filterUnits="userSpaceOnUse">
                    <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#000" floodOpacity="0.15" />
                  </filter>
                </defs>
              </svg>
            </div>
            {/* Arrow */}
            <div className="transition-shadow hover:shadow-lg rounded flex items-center justify-center">
              <svg width="50" height="50" viewBox="0 0 54 54" fill="none">
                <g filter="url(#shadow)">
                  <line x1="27" y1="44" x2="27" y2="14" stroke="#757575" strokeWidth="4" strokeLinecap="round" />
                  <polyline points="20,21 27,14 34,21" fill="none" stroke="#757575" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                </g>
                <defs>
                  <filter id="shadow" x="0" y="0" width="54" height="54" filterUnits="userSpaceOnUse">
                    <feDropShadow dx="0" dy="4" stdDeviation="4" floodColor="#000" floodOpacity="0.15" />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
          {/* Vertical divider line */}
          <div style={{ width: 1, height: 91, background: '#B0B0B0', borderRadius: 0.5, marginLeft: 24, marginRight: 24 }} />
        </div>
        {/* Column 3: Navigation icons (interactive buttons) */}
        <div className="flex gap-[25px] items-center ml-6" style={{ marginLeft: -20 }}>
          {navItems.map((item, i) => (
            <button
              key={i}
              onClick={() => router.push(item.href)}
              className="transition-shadow hover:shadow-lg rounded cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400"
              style={{ width: 46, height: 43, borderRadius: 4, border: '1px solid #B0B0B0', background: '#FFFEFE', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
            >
              <span className="text-gray-700">{item.icon}</span>
            </button>
          ))}
        </div>
        {/* Vertical divider line after rectangles */}
        <div style={{ width: 1, height: 91, background: '#B0B0B0', borderRadius: 0.5, marginLeft:0, marginRight: 0 }} />
        {/* Column 4: Event photos image */}
        <div className="flex items-right justify-center transition-shadow hover:shadow-lg rounded-lg" style={{ width: 91, height: 91 }}>
          <img src="/eventphotos.png" alt="Event Photos" style={{ width: 90, height: 90, objectFit: 'contain' }} />
        </div>
      </div>
    </motion.nav>
  );
} 