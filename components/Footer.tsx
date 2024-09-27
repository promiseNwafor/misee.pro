import { FaGithub, FaLinkedin, FaFileDownload, FaEnvelope } from 'react-icons/fa'

const githubUrl = 'https://github.com/promisenwafor'
const linkedinUrl = 'https://www.linkedin.com/in/promise-nwafor-8765711a0/'
const resumeUrl =
  'https://6pwxqfpcbd9gufxf.public.blob.vercel-storage.com/Promise%20Nwafor%20Resume-4Peu4Fx9QRU5hO9JfDd0p2Kw2U7QVp.pdf'
const email = 'misee.nwafor@gmail.com'

export default function Footer() {
  return (
    <footer id="contact" className="bg-background text-secondary py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">© {new Date().getFullYear()} Misee Pro. All rights reserved.</p>
        <div className="mt-4 flex justify-center space-x-4">
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="link">
            <FaGithub size={24} />
          </a>
          <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="link">
            <FaLinkedin size={24} />
          </a>
          <a
            href={`mailto:${email}`}
            rel="noopener noreferrer"
            target="_blank"
            className="text-secondary hover:text-primary">
            <FaEnvelope size={24} />
            <span className="sr-only">Email Me</span>
          </a>
          <a href={resumeUrl} download rel="noopener noreferrer" target="_blank" className="link">
            <FaFileDownload size={24} />
            <span className="sr-only">Download Resume</span>
          </a>
        </div>
      </div>
    </footer>
  )
}
