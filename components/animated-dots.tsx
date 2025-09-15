'use client';

import { motion } from 'framer-motion';
import { Linkedin } from 'lucide-react';

const DOTS_COUNT = 30; // Increased number of dots for more coverage
const COLORS = ['#0A66C2', '#0077B5', '#00A0DC', '#008CC9', '#0E76A8']; // Added more color variations

export default function AnimatedDots() {
  // Generate random positions and delays for the dots
  const dots = Array.from({ length: DOTS_COUNT }).map((_, i) => ({
    id: i,
    size: Math.random() * 8 + 6, // Slightly larger size between 6 and 14
    delay: Math.random() * 2, // Random delay up to 2s
    duration: 3 + Math.random() * 3, // Slower animation between 3s and 6s
    x: Math.random() * 180 - 40, // Slightly less spread (-40% to 140%)
    y: Math.random() * 180 - 40, // Slightly less spread (-40% to 140%)
    color: COLORS[Math.floor(Math.random() * COLORS.length)], // Random color from our palette
  }));

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
          animate={{
            y: [0, -10, 0], // Slightly more vertical movement
            opacity: [0.15, 0.5, 0.15], // Slightly more visible at peak
            scale: [0.9, 1.1, 0.9], // More noticeable scaling
            rotate: [0, 5, -5, 0] // Slightly more rotation
          }}
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
