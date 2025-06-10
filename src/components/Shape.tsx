'use client';

import { useDraggable } from '@dnd-kit/core';
import { motion } from 'framer-motion';

interface ShapeProps {
  id: string;
  position: { x: number; y: number };
  color?: string;
}

export default function Shape({ id, position, color = '#4CAF50' }: ShapeProps) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
  });

  const style = transform ? {
    transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
  } : undefined;

  return (
    <motion.div
      ref={setNodeRef}
      style={{
        ...style,
        position: 'absolute',
        left: position.x,
        top: position.y,
        width: '100px',
        height: '100px',
        backgroundColor: color,
        borderRadius: '50%',
        cursor: 'move',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      }}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.02 }}
      {...listeners}
      {...attributes}
    />
  );
} 