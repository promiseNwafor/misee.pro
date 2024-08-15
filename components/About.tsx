import { motion } from 'framer-motion'

export default function About() {
  const contentVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div className="max-w-3xl mx-auto">
      <motion.h2
        className="font-display text-4xl md:text-5xl font-bold mb-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}>
        About Me
      </motion.h2>
      <motion.p
        className="text-lg mb-6 leading-relaxed"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}>
        As a Creative Frontend Engineer with over 4 years of experience, I blend technical expertise
        with artistic vision to craft immersive digital experiences. My journey in web development
        began with a fascination for the intersection of design and technology, and has evolved into
        a passion for pushing the boundaries of what is possible on the web.
      </motion.p>
      <motion.p
        className="text-lg mb-6 leading-relaxed"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}>
        I specialize in building performant, accessible, and visually stunning web applications
        using cutting-edge technologies. My approach combines clean, efficient code with innovative
        design techniques to create seamless user experiences that leave a lasting impression.
      </motion.p>
      <motion.p
        className="text-lg leading-relaxed"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        viewport={{ once: true }}>
        When I am not coding, you can find me exploring new design trends, experimenting with
        generative art, or contributing to open-source projects. I am always eager to take on new
        challenges and collaborate on projects that push the envelope of web development.
      </motion.p>
    </div>
  )
}
