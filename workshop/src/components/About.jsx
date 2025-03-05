import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen w-screen flex flex-col font-sans bg-gray-100">
      {/* Header */}
      <header className="flex items-center justify-between bg-gradient-to-r from-red-500 to-red-700 text-white py-4 px-6 md:px-8 shadow-lg relative">
        <Link to="/" className="text-3xl md:text-4xl font-extrabold tracking-wide">VroomBoom</Link>
        
        {/* Hamburger Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

        {/* Navbar Links */}
        <nav
          className={`absolute md:static top-16 left-0 w-full md:w-auto bg-red-600 md:bg-transparent flex flex-col md:flex-row items-center md:gap-6 text-lg font-medium transition-all duration-300 ease-in-out ${menuOpen ? "flex" : "hidden"} md:flex`}
        >
          <Link to="/about" className="hover:text-yellow-300 transition py-2 md:py-0">About</Link>
          <Link to="/marketplace" className="hover:text-yellow-300 transition py-2 md:py-0">Marketplace</Link>
          <Link to="/testimonials" className="hover:text-yellow-300 transition py-2 md:py-0">Testimonials</Link>
          <Link to="/contact" className="hover:text-yellow-300 transition py-2 md:py-0">Contact Us</Link>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center text-white text-4xl md:text-5xl font-bold bg-cover bg-center bg-[url('/path-to-your-image.jpg')] p-4 text-center">
        <div className="bg-black bg-opacity-50 p-4 md:p-6 rounded-lg shadow-md animate-fade-in">
          <h1>About</h1>
          <p className="text-xl md:text-2xl mt-2">Boom your vroom.</p>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-gray-300 text-lg flex flex-row flex-wrap md:flex-row justify-evenly items-start gap-4 text-center md:text-left px-4">
        <div className="text-2xl font-bold">VroomBoom</div>
        <div className="flex flex-col space-y-2">
          <h3>Quick Links</h3>
          <Link to="/about" className="hover:text-yellow-300 transition">About</Link>
          <Link to="/marketplace" className="hover:text-yellow-300 transition">Marketplace</Link>
          <Link to="/testimonials" className="hover:text-yellow-300 transition">Testimonials</Link>
          <Link to="/contact" className="hover:text-yellow-300 transition">Contact</Link>
        </div>
        <div className="flex flex-col space-y-2">
          <h3>Get in Touch</h3>
          <div className="text-sm">1234 Vroom Street, Boom City, VB 56789</div>
        </div>
      </footer>
    </div>
  );
}
