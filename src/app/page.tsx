'use client';

import { useState } from 'react';
import { DndContext, DragEndEvent } from '@dnd-kit/core';
import { motion } from 'framer-motion';
import StickyNote from '@/components/StickyNote';
import Shape from '@/components/Shape';
import Toolbar from '@/components/Toolbar';
import DotGrid from '@/components/DotGrid';

interface Element {
  id: string;
  type: 'note' | 'shape';
  content?: string;
  position: { x: number; y: number };
  color?: string;
}

export default function Home() {
  const [elements, setElements] = useState<Element[]>([]);
  const [selectedTool, setSelectedTool] = useState<'note' | 'shape'>('note');

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, delta } = event;
    setElements((elements) =>
      elements.map((el) =>
        el.id === active.id
          ? {
              ...el,
              position: {
                x: el.position.x + delta.x,
                y: el.position.y + delta.y,
              },
            }
          : el
      )
    );
  };

  const addElement = (type: 'note' | 'shape') => {
    const newElement: Element = {
      id: `${type}-${Date.now()}`,
      type,
      position: { x: 100, y: 100 },
      content: type === 'note' ? 'Double click to edit' : undefined,
      color: type === 'note' ? '#ffd700' : '#4CAF50',
    };
    setElements([...elements, newElement]);
  };

  return (
    <main className="min-h-screen bg-gray-100 relative overflow-hidden">
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <DotGrid
          dotSize={6}
          gap={48}
          baseColor="#E5E5E5"
          activeColor="#000000"
          proximity={120}
          className="w-full h-full"
        />
      </div>
      <div className="relative z-10">
        <Toolbar />
        
        <DndContext onDragEnd={handleDragEnd}>
          <div className="w-full h-screen relative">
            {elements.map((element) => (
              element.type === 'note' ? (
                <StickyNote
                  key={element.id}
                  id={element.id}
                  content={element.content || ''}
                  position={element.position}
                  color={element.color}
                />
              ) : (
                <Shape
                  key={element.id}
                  id={element.id}
                  position={element.position}
                  color={element.color}
                />
              )
            ))}
          </div>
        </DndContext>
      </div>
    </main>
  );
}
