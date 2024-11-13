const Header = () => {
  return (
    <header className="sticky top-0 z-10 backdrop-blur-sm header border-b">
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="/" className="text-2xl font-bold">
          ITboo
        </a>

        <div className="space-x-4 uppercase">
          <a
            href="#about"
            className="hover:text-cyan-500 transition-colors "
          >
            About
          </a>
          <a
            href="#skills"
            className="hover:text-cyan-500 transition-colors"
          >
            Skills
          </a>
          <a
            href="#projects"
            className="hover:text-cyan-500 transition-colors"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="hover:text-cyan-500 transition-colors"
          >
            Contacts
          </a>
        </div>
      </nav>
    </header>
  );
};
export default Header;