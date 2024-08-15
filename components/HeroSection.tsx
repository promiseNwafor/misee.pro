import { motion } from 'framer-motion';
import HeroBackground from '@/components/HeroBackground';

export default function HeroSection() {
  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-black overflow-hidden">
      <HeroBackground />
      <motion.div
        className="text-center text-white z-10"
        initial="hidden"
        animate="visible"
        variants={textVariants}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <h1 className="text-6xl md:text-8xl font-bold mb-4">Your Name</h1>
        <p className="text-xl md:text-2xl">Creative Frontend Engineer</p>
      </motion.div>
    </div>
  );
}
