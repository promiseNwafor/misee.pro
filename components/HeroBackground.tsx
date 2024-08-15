import { motion } from 'framer-motion';

export default function HeroBackground() {
  const animationVariants = {
    rotate: {
      rotate: 360,
      transition: { repeat: Infinity, duration: 30, ease: 'linear' }
    }
  };

  return (
    <motion.div
      className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500"
      variants={animationVariants}
      animate="rotate"
      style={{ backgroundSize: '200% 200%' }}
    />
  );
}
