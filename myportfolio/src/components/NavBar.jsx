export default function NavBar() {
    return (
      <nav className="bg-gray-800 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">My Portfolio</h1>
          <ul className="flex space-x-4">
            <li><a href="#about" className="hover:text-blue-400">About</a></li>
            <li><a href="#projects" className="hover:text-blue-400">Projects</a></li>
            <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
          </ul>
        </div>
      </nav>
    );
  }
  