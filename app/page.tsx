'use client'

import { motion } from 'framer-motion'
import { navItems, projects, skills } from '@/constants'
import BackgroundAnimation from '@/components/BackgroundAnimation'
import ProjectCard from '@/components/ProjectCard'
import About from '@/components/About'
import SkillBubble from '@/components/SkillBubble'

const textVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
}

const navItemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
}

export default function Home() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const targetId = (e as any).currentTarget.getAttribute('href').substring(1)
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth',
      })
    }
  }

  return (
    <>
      <BackgroundAnimation />
      <div className="h-screen flex flex-col justify-center items-center p-4">
        <header className="text-center mb-10">
          <motion.div
            className="text-center text-white z-10"
            initial="hidden"
            animate="visible"
            variants={textVariants}
            transition={{ duration: 1, ease: 'easeOut' }}>
            <h1 className="font-display text-secondary text-6xl md:text-8xl font-bold mb-3">
              Promise Nwafor
            </h1>
            <p className="text-xl md:text-2xl text-accent/80">Frontend Engineer</p>
          </motion.div>
        </header>
        <nav>
          <ul className="flex space-x-6 text-lg">
            {navItems.map((item) => (
              <motion.li
                key={item.name}
                initial="hidden"
                animate="visible"
                variants={navItemVariants}
                transition={{ duration: 0.5, ease: 'easeOut' }}>
                <a
                  href={item.href}
                  onClick={handleScroll}
                  className="hover:text-primary transition-colors">
                  {item.name}
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>
      </div>

      <section id="about" className="h-screen p-8">
        <About />
      </section>

      <section id="skills" className="min-h-screen p-8 max-w-[600px] m-auto">
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
      </section>

      <section id="projects" className="min-h-screen p-4 lg:p-8">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">Projects</h2>
        <div className="grid md:grid-cols-2 gap-4 lg:gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              imageUrl={project.imageUrl}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
            />
          ))}
        </div>
      </section>
    </>
  )
}
