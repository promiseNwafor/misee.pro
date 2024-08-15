export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full flex justify-center space-x-6 bg-opacity-75 backdrop-blur-md p-4">
      <ul className="flex space-x-6 text-lg">
        <li>
          <a href="#projects" className="hover:text-yellow-300 transition-colors">Projects</a>
        </li>
        <li>
          <a href="#about" className="hover:text-yellow-300 transition-colors">About</a>
        </li>
        <li>
          <a href="#contact" className="hover:text-yellow-300 transition-colors">Contact</a>
        </li>
      </ul>
    </nav>
  );
}
