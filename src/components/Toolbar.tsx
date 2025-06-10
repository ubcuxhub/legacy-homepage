'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

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
    <motion.nav
      className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-white border border-gray-200 rounded-3xl shadow-2xl px-8 py-3 flex gap-8 z-50 items-center"
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      role="navigation"
    >
      {navItems.map((item) => (
        <button
          key={item.label}
          onClick={() => router.push(item.href)}
          className="flex flex-col items-center px-4 py-2 rounded-2xl hover:bg-gray-100 transition-colors focus:outline-none"
        >
          <span className="text-gray-700">{item.icon}</span>
          <span className="text-xs font-semibold mt-1 text-gray-700">{item.label}</span>
        </button>
      ))}
    </motion.nav>
  );
} 