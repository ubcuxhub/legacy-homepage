'use client';

import { useState } from 'react';
import { useDraggable } from '@dnd-kit/core';
import { motion } from 'framer-motion';

interface StickyNoteProps {
  id: string;
  content: string;
  position: { x: number; y: number };
  color?: string;
}

export default function StickyNote({ id, content, position, color = '#ffd700' }: StickyNoteProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [noteContent, setNoteContent] = useState(content);
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
        backgroundColor: color,
        padding: '1rem',
        borderRadius: '0.5rem',
        boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        cursor: 'move',
        width: '200px',
        minHeight: '150px',
      }}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.02 }}
      {...listeners}
      {...attributes}
    >
      {isEditing ? (
        <textarea
          value={noteContent}
          onChange={(e) => setNoteContent(e.target.value)}
          onBlur={() => setIsEditing(false)}
          className="w-full h-full bg-transparent border-none outline-none resize-none"
          autoFocus
        />
      ) : (
        <div
          className="w-full h-full cursor-text"
          onDoubleClick={() => setIsEditing(true)}
        >
          {noteContent}
        </div>
      )}
    </motion.div>
  );
} 