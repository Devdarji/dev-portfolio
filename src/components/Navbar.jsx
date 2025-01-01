import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl font-bold">Your Name</Link>
          <div className="flex gap-6">
            <Link to="/about" className="hover:text-blue-600">About</Link>
            <Link to="/projects" className="hover:text-blue-600">Projects</Link>
            <Link to="/contact" className="hover:text-blue-600">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;