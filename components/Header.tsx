import Link from 'next/link'

export default function Header() {
  return (
    <header
    >
      <nav className="container mx-auto px-4 py-6">
        <ul className="flex justify-center space-x-8">
          <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
          <li><Link href="/projects" className="hover:text-primary transition-colors">Projects</Link></li>
          <li><Link href="/skills" className="hover:text-primary transition-colors">Skills</Link></li>
          <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}