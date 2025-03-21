import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import React from "react";
import { motion } from 'framer-motion';

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen w-screen flex flex-col font-sans bg-gray-300">
      {/* Header */}
      <header className="flex items-center justify-between bg-gray-900 text-white py-4 px-6 md:px-8 shadow-lg relative z-50">
            <Link to="/" className="text-3xl md:text-4xl font-extrabold text-gray-300">VroomBoom</Link>
              
              {/* Hamburger Menu button */}
              <div
                className="md:hidden text-white bg-gray-600 focus:outline-none"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {menuOpen ? <X size={30} /> : <Menu size={30} />}
              </div>
      
              {/* Navbar Links */}
              <nav
        className={`absolute md:static top-full py-4 left-0 w-full md:w-auto bg-gray-800 md:bg-transparent flex flex-col md:flex-row items-center md:gap-6 text-lg font-extrabold transition-all duration-300 ease-in-out z-50 ${menuOpen ? "flex" : "hidden"} md:flex`}
      >
      
                <Link to="/about">About</Link>
                <Link to="/marketplace">Marketplace</Link>
                <Link to="/testimonials">Testimonials</Link>
                <Link to="/contact">Contact Us</Link>
              </nav>
            </header>

      {/* Main Content */}


      <main className="flex-grow flex flex-col items-center justify-center bg-cover bg-center bg-[url('./assets/hero.webp')] opacity-80 p-4 text-center">
        <div className="bg-white bg-opacity-80 p-6 md:p-8 rounded-2xl shadow-lg animate-fade-in max-w-xl">
          <motion.h1 
            initial={{ opacity: 0, y: -50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-blue-600 mb-4"
          >
            VroomBoom
          </motion.h1>
          <p className="text-lg md:text-xl text-blue-500 mb-6">Boom your vroom.</p>
          <div className="px-6 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg shadow-md">
            Browse Cars
          </div>
        </div>
    </main>


      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-gray-300 text-lg flex flex-col md:flex-row justify-evenly md:items-start gap-12 md:gap-4 text-center md:text-start items-center px-4">
        <div className="flex flex-col space-y-2">
          <div className="text-2xl font-bold text-blue-500">VroomBoom</div>
          <div className="text-sm">Boom your vroom.</div>
        </div>
        <div className="flex flex-col space-y-2">
          <h3 className="font-bold text-blue-500">Quick Links</h3>
          <Link to="/about" className="text-white">About</Link>
          <Link to="/marketplace">Marketplace</Link>
          <Link to="/testimonials">Testimonials</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="flex flex-col space-y-2">
          <h3 className="font-bold text-blue-500">Get in Touch</h3>
          <div className="text-sm">1234 Vroom Street, Boom City, VB 56789</div>
        </div>
      </footer>
    </div>
  );
}
