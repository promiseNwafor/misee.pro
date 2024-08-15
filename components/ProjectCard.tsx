import Image from 'next/image'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

interface ProjectCardProps {
  title: string
  description: string
  technologies: string[]
  imageUrl: string
  githubUrl: string
  liveUrl: string
}

export default function ProjectCard({
  title,
  description,
  technologies,
  imageUrl,
  githubUrl,
  liveUrl,
}: ProjectCardProps) {
  return (
    <div className="border border-background rounded-lg shadow-md p-4">
      <Image
        src={imageUrl || '/placeholder.png'}
        alt={title}
        className="w-full h-72 object-cover"
        width={500}
        height={500}
      />
      <div className="p-6">
        <h3 className="text-accent/80 text-2xl font-semibold mb-2">{title}</h3>
        <p className="text-secondary mb-4">{description}</p>
        <div className="mb-4">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="inline-block bg-primary bg-opacity-20 text-primary rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex space-x-4">
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:text-primary transition-colors">
            <FaGithub className="inline mr-2" />
            Code
          </a>
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:text-primary transition-colors">
            <FaExternalLinkAlt className="inline mr-2" />
            Live Demo
          </a>
        </div>
      </div>
    </div>
  )
}
