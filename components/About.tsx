import { motion } from 'framer-motion'
import Image from 'next/image'

export default function About() {
  return (
    <div className="bg-photo bg-center bg-cover">
      <div className="bg-background/90">
        <div className="max-w-5xl mx-auto min-h-screen p-4 md:p-12">
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}>
            About Me
          </motion.h2>
          <div className="bg-black/40 p-8 border-l border-accent/60">
            <Image
              src="/photo.jpeg"
              alt="photo of me"
              className="w-40 h-40 rounded-full object-cover m-auto md:float-left md:mr-8 mb-3"
              width={500}
              height={500}
            />
            <motion.p
              className="md:text-lg mb-2 md:mb-6 leading-relaxed"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}>
              As a Frontend Engineer with over 4 years of experience, I specialize in crafting
              high-performance, user-centric web applications using cutting-edge technologies. My
              journey in web development is driven by a passion for creating seamless digital
              experiences that not only meet but exceed user expectations.
            </motion.p>
            <motion.p
              className="md:text-lg mb-2 md:mb-6 leading-relaxed"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}>
              My expertise lies in React, TypeScript, and Next.js, complemented by a strong
              foundation in modern frontend architectures. I also specialize in web accessibility,
              ensuring that the applications I build are inclusive and accessible to all users. I
              have consistently delivered results across various industries, from fintech to social
              media analytics, always focusing on optimizing performance and enhancing user
              satisfaction.
            </motion.p>
            <motion.p
              className="md:text-lg mb-2 md:mb-6 leading-relaxed"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}>
              My approach combines technical expertise with a keen eye for design, ensuring that the
              applications I build are not only functionally robust but also visually appealing and
              intuitive. I am particularly passionate about creating accessible, responsive designs
              that provide an optimal user experience across all devices.
            </motion.p>
            <motion.p
              className="md:text-lg leading-relaxed"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}>
              Beyond coding, I am a digital nomad and have been traveling for over a year, exploring
              new places while expanding my skill set, exploring new technologies, and contributing
              to open-source projects. I believe in the power of continuous learning and
              collaboration to drive innovation in the ever-evolving landscape of frontend
              development.
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  )
}
