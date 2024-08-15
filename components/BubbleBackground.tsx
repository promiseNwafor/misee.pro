import { motion } from 'framer-motion';
import React from 'react';

const Bubbles = () => {
  // Create random positions and sizes for bubbles
  const generateBubble = (index: number) => ({
    cx: Math.random() * 100 + '%',
    cy: Math.random() * 100 + '%',
    r: Math.random() * 5 + 1 + 'px',
    key: index,
  });

  const bubbles = Array.from({ length: 30 }, (_, index) => generateBubble(index));

  return (
    <svg className="absolute inset-0" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      {bubbles.map(({ cx, cy, r, key }) => (
        <motion.circle
          key={key}
          cx={cx}
          cy={cy}
          r={r}
          fill="rgba(15, 23, 42, 0.6)"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [1, 0.5, 1],
            y: ['0%', '10%', '0%'],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeInOut',
            delay: Math.random() * 5,
          }}
        />
      ))}
    </svg>
  );
};

export default function BubbleBackground() {
  return (
    <div className="relative w-full h-full">
      <Bubbles />
    </div>
  );
}
