import { skills } from '@/constants'
import { motion } from 'framer-motion'
import SkillBubble from './SkillBubble'

const Skills = () => {
  return (
    <div className="min-h-screen p-8 max-w-[700px] m-auto grid items-center">
      <div>
        <motion.h2
          className="font-display text-4xl md:text-5xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}>
          Skills & Expertise
        </motion.h2>
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap justify-center gap-6">
            {skills.map((skill, index) => (
              <SkillBubble key={skill.name} skill={skill} index={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
