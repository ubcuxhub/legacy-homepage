// This is the main landing page for the UX Hub app
// It features a FigJam-like board with draggable sticky notes and shapes, a toolbar, and a dot grid background

'use client';

import { useState } from 'react';
import { DndContext, DragEndEvent } from '@dnd-kit/core';
import { motion } from 'framer-motion';
import Toolbar from '@/components/Toolbar';
import DotGrid from '@/components/DotGrid';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 relative overflow-hidden">
      {/* Animated dot grid background (non-interactive) */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <DotGrid
          dotSize={6} // Size of each dot
          gap={48} // Space between dots
          baseColor="#E5E5E5" // Default dot color
          activeColor="#000000" // Dot color on hover
          proximity={120} // Hover effect radius
          className="w-full h-full"
        />
      </div>
      {/* Foreground content (toolbar only) */}
      <div className="relative z-10">
        {/* Toolbar at the bottom of the page */}
        <Toolbar />
      </div>
    </main>
  );
}
