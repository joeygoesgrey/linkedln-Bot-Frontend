'use client';

import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';
import { useEffect, useState } from 'react';

const DOTS_COUNT = 30;
const COLORS = ['#0A66C2', '#0077B5', '#00A0DC', '#008CC9', '#0E76A8'];

// Deterministic dots for server-side rendering
const getServerDots = () => 
  Array.from({ length: DOTS_COUNT }).map((_, i) => ({
    id: i,
    size: 8, // Fixed size for server
    delay: 0,
    duration: 3,
    x: (i * 5) % 180 - 40,
    y: (i * 7) % 180 - 40,
    color: COLORS[i % COLORS.length],
  }));

// Random dots for client-side rendering
const getClientDots = () =>
  Array.from({ length: DOTS_COUNT }).map((_, i) => ({
    id: i,
    size: Math.random() * 8 + 6,
    delay: Math.random() * 2,
    duration: 3 + Math.random() * 3,
    x: Math.random() * 180 - 40,
    y: Math.random() * 180 - 40,
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
  }));

export default function AnimatedDots() {
  const [isMounted, setIsMounted] = useState(false);
  
  // Use server dots initially, then switch to client dots after mount
  const dots = isMounted ? getClientDots() : getServerDots();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {dots.map((dot) => (
        <motion.div
          key={dot.id}
          className="absolute flex items-center justify-center"
          style={{
            width: `${dot.size}px`,
            height: `${dot.size}px`,
            left: `${dot.x}%`,
            top: `${dot.y}%`,
            color: dot.color,
          }}
          animate={isMounted ? {
            y: [0, -10, 0],
            opacity: [0.15, 0.5, 0.15],
            scale: [0.9, 1.1, 0.9],
            rotate: [0, 5, -5, 0]
          } : {}}
          transition={{
            duration: dot.duration,
            delay: dot.delay,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
          }}
        >
          <Linkedin className="w-3/4 h-3/4" />
        </motion.div>
      ))}
    </div>
  );
}
