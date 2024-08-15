'use client'

import BackgroundAnimation from '@/components/BackgroundAnimation'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Header from '@/components/Header'

export default function Home() {
  return (
    <>
      <BackgroundAnimation />
      <Header />

      <section id="about">
        <About />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="projects">
        <Projects />
      </section>
    </>
  )
}
