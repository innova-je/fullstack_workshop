import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getDictionary } from "./LocalStorageHelper";
import { Menu, X } from "lucide-react";
import React from "react";

export default function CarSpecific() {
  const { carName } = useParams();
  const [carData, setCarData] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const dictionary = getDictionary();
    setCarData(dictionary[carName]); // Fetch car data using carName
  }, [carName]);

  if (!carData) {
    return (
      <div className="min-h-screen flex items-center justify-center text-2xl font-semibold text-gray-700">
        Car not found!
      </div>
    );
  }

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


      <main className="flex-grow flex flex-col items-center justify-center bg-cover bg-center bg-[url('./assets/contact.webp')] opacity-80 p-4 text-center">
      <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-200 w-[350px] md:w-[650px]">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center max-w-[20rem] w-fit">
  <h1 className="text-xl font-bold text-blue-600 mb-2">{carName}</h1>
  <p className="text-xl font-semibold text-gray-700">Starting from ${carData.price}</p>
  <div className="text-md text-gray-600 mt-2 max-h-[200px] overflow-auto px-2 break-words">
    {carData.longDescription}
  </div>
  <Link to="/marketplace">
    <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md">
      Back to Marketplace
    </button>
  </Link>
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
