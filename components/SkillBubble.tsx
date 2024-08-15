import { motion } from 'framer-motion'

interface SkillBubbleProps {
  skill: {
    name: string
    level: number
  }
  index: number
}

export default function SkillBubble({ skill, index }: SkillBubbleProps) {
  const size = 50 + skill.level / 2

  return (
    <motion.div
      className="relative flex items-center justify-center"
      style={{
        width: size,
        height: size,
      }}
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}>
      <motion.div
        className="absolute inset-0 bg-primary rounded-full opacity-20"
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
      />
      <motion.div
        className="absolute inset-0 border-2 border-primary rounded-full"
        style={{
          borderWidth: 2 + skill.level / 20,
        }}
      />
      <span className="text-sm font-semibold">{skill.name}</span>
    </motion.div>
  )
}
