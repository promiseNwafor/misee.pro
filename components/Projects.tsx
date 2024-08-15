import { motion } from 'framer-motion';
import ProjectCard from '@/components/ProjectCard'; // Ensure this component is created

export default function Projects() {
  const projects = [
    {
      title: 'Project 1',
      description: 'A brief description of the project and its key features.',
      technologies: ['React', 'Node.js', 'MongoDB'],
      imageUrl: '/project1.jpg',
      githubUrl: '#',
      liveUrl: '#',
    },
    {
      title: 'Project 2',
      description: 'A brief description of another project with its key features.',
      technologies: ['Vue.js', 'Express', 'MySQL'],
      imageUrl: '/project2.jpg',
      githubUrl: '#',
      liveUrl: '#',
    },
    // Add more projects as needed
  ];

  const contentVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="projects" className="min-h-screen p-4 bg-white flex flex-col items-center">
      <motion.div
        className="text-center mb-12"
        initial="hidden"
        animate="visible"
        variants={contentVariants}
        transition={{ duration: 1, ease: 'easeOut' }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-8">Projects</h2>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
  );
}
