export default function Nav() {
  return (
    <header className="sticky top-0 z-10 border-b border-gray-700 bg-gray-800">
      <nav className="container mx-auto flex items-center justify-end px-4 py-4">
        <div className="space-x-4">
          <a href="/#" className="hover:text-gray-300">
            About
          </a>
          <a href="/#/projects" className="hover:text-gray-300">
            Projects
          </a>
          <a href="#/resume" className="hover:text-gray-300">
            Resume
          </a>
        </div>
      </nav>
    </header>
  );
}
