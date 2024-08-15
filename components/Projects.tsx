import { projects } from '@/constants'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <div className="min-h-screen p-4 lg:p-8">
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
    </div>
  )
}

export default Projects
