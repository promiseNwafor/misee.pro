'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion';
import { gsap } from 'gsap'
import BackgroundAnimation from '@/components/BackgroundAnimation'
import ProjectCard from '@/components/ProjectCard'
import About from '@/components/About'
import SkillBubble from '@/components/SkillBubble'

  const skills = [
    { name: 'React', level: 90 },
    { name: 'Next.js', level: 85 },
    { name: 'TypeScript', level: 80 },
    { name: 'Three.js', level: 75 },
    { name: 'Node.js', level: 70 },
    { name: 'GraphQL', level: 65 },
    { name: 'CSS/SASS', level: 90 },
    { name: 'Webpack', level: 75 },
  ]

export default function Home() {
  const headerRef = useRef<HTMLDivElement | null>(null)
  const projectsRef = useRef<HTMLDivElement | null>(null)
    const aboutRef = useRef(null)
  const skillsRef = useRef(null)


  return (
    <>
      <BackgroundAnimation />
      <div className="h-screen flex flex-col justify-center items-center p-4">
        <header ref={headerRef} className="text-center mb-16">
          <h1 className="font-display text-6xl md:text-8xl font-bold mb-4">
            Your Name
          </h1>
          <p className="text-xl md:text-2xl text-accent">
            Creative Frontend Engineer
          </p>
        </header>
        <nav>
          <ul className="flex space-x-6 text-lg">
            <li>
              <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
            </li>
            <li>
              <a href="#about" className="hover:text-primary transition-colors">About</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
            </li>
          </ul>
        </nav>
      </div>

      <section id="about" ref={aboutRef} className="h-screen p-8 flex items-center">
        <About />
      </section>

      <section id="skills" ref={skillsRef} className="min-h-screen p-8">
        <motion.h2 
          className="font-display text-4xl md:text-5xl font-bold mb-12 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
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

      <section id="projects" ref={projectsRef} className="min-h-screen p-4">
        <h2 className="font-display text-4xl md:text-5xl font-bold mb-8">Projects</h2>
        <ProjectCard 
          title="Project 1"
          description="A brief description of the project and its key features."
          technologies={['React', 'Node.js', 'MongoDB']}
          imageUrl=""
          githubUrl="#"
          liveUrl="#"
        />
      </section>
      {/* Add About and Contact sections */}
    </>
  )
}
