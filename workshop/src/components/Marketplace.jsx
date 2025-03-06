import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import React from "react";


export default function Marketplace() {
  const [menuOpen, setMenuOpen] = useState(false);
  
  return (
    <div className="min-h-screen w-screen flex flex-col font-sans bg-gray-300">
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
      <main className="bg-gray-100 flex flex-col w-screen items-center justify-start text-center">
        <div className="min-h-[60vh] flex-grow w-screen flex flex-col items-center justify-center bg-cover bg-center bg-[url('./assets/marketplace.webp')] opacity-80 p-4 text-center">
          <div className="bg-white bg-opacity-80 p-6 md:p-8 rounded-2xl shadow-lg animate-fade-in max-w-xl">
            <h2>VroomBoom</h2>
            <p className="text-lg md:text-xl text-blue-500 mb-6">Boom your vroom.</p>
            <div className="px-6 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg shadow-md">
              Browse Cars
            </div>
          </div>
        </div>
        <div className="text-xl font-semibold my-6">Find the Hottest Car Deals!</div>
        <div className="flex flex-wrap justify-center gap-6">
          <div className="relative bg-white p-4 w-[15rem] shadow-md rounded-lg hover:scale-105 transition">
            <button className="absolute bg-blue-500 top-2 right-2 text-red-600 hover:text-red-800">
              <X size={20} />
            </button>
            <div className="bg-[url('./assets/car.webp')] h-[7rem] bg-cover bg-center"></div>
            <div className="mt-4 flex flex-col gap-1">
              <h2 className="text-lg font-bold">Porsche 911 GT3 RS</h2>
              <p className="text-lg font-medium">From $380000</p>
              <p className="text-sm text-gray-600 mb-4">Built different. Cool car.</p>
              <Link to={`/marketplace/porsche`}>
                <div className="bg-blue-500 text-white px-4 py-2 rounded-md">
                  Read More
                </div>
              </Link>
            </div>
          </div>
          <div className="relative bg-white p-4 w-[15rem] shadow-md rounded-lg hover:scale-105 transition">
            <button className="absolute bg-blue-500 top-2 right-2 text-red-600 hover:text-red-800">
              <X size={20} />
            </button>
            <div className="bg-[url('./assets/car.webp')] h-[7rem] bg-cover bg-center"></div>
            <div className="mt-4 flex flex-col gap-1">
              <h2 className="text-lg font-bold">Porsche 911 GT3 RS</h2>
              <p className="text-lg font-medium">From $380000</p>
              <p className="text-sm text-gray-600 mb-4">Built different. Cool car.</p>
              <div className="bg-blue-500 text-white px-4 py-2 rounded-md">
                Read More
              </div>
            </div>
          </div>
          <div className="relative bg-white p-4 w-[15rem] shadow-md rounded-lg hover:scale-105 transition">
            <button className="absolute bg-blue-500 top-2 right-2 text-red-600 hover:text-red-800">
              <X size={20} />
            </button>
            <div className="bg-[url('./assets/car.webp')] h-[7rem] bg-cover bg-center"></div>
            <div className="mt-4 flex flex-col gap-1">
              <h2 className="text-lg font-bold">Porsche 911 GT3 RS</h2>
              <p className="text-lg font-medium">From $380000</p>
              <p className="text-sm text-gray-600 mb-4">Built different. Cool car.</p>
              <div className="bg-blue-500 text-white px-4 py-2 rounded-md">
                Read More
              </div>
            </div>
          </div>
          <div className="relative bg-white p-4 w-[15rem] shadow-md rounded-lg hover:scale-105 transition">
            <button className="absolute bg-blue-500 top-2 right-2 text-red-600 hover:text-red-800">
              <X size={20} />
            </button>
            <div className="bg-[url('./assets/car.webp')] h-[7rem] bg-cover bg-center"></div>
            <div className="mt-4 flex flex-col gap-1">
              <h2 className="text-lg font-bold">Porsche 911 GT3 RS</h2>
              <p className="text-lg font-medium">From $380000</p>
              <p className="text-sm text-gray-600 mb-4">Built different. Cool car.</p>
              <div className="bg-blue-500 text-white px-4 py-2 rounded-md">
                Read More
              </div>
            </div>
          </div>
          <div className="relative bg-white p-4 w-[15rem] shadow-md rounded-lg hover:scale-105 transition">
            <button className="absolute bg-blue-500 top-2 right-2 text-red-600 hover:text-red-800">
              <X size={20} />
            </button>
            <div className="bg-[url('./assets/car.webp')] h-[7rem] bg-cover bg-center"></div>
            <div className="mt-4 flex flex-col gap-1">
              <h2 className="text-lg font-bold">Porsche 911 GT3 RS</h2>
              <p className="text-lg font-medium">From $380000</p>
              <p className="text-sm text-gray-600 mb-4">Built different. Cool car.</p>
              <div className="bg-blue-500 text-white px-4 py-2 rounded-md">
                Read More
              </div>
            </div>
          </div>
          <div className="relative bg-white p-4 w-[15rem] shadow-md rounded-lg hover:scale-105 transition">
            <button className="absolute bg-blue-500 top-2 right-2 text-red-600 hover:text-red-800">
              <X size={20} />
            </button>
            <div className="bg-[url('./assets/car.webp')] h-[7rem] bg-cover bg-center"></div>
            <div className="mt-4 flex flex-col gap-1">
              <h2 className="text-lg font-bold">Porsche 911 GT3 RS</h2>
              <p className="text-lg font-medium">From $380000</p>
              <p className="text-sm text-gray-600 mb-4">Built different. Cool car.</p>
              <div className="bg-blue-500 text-white px-4 py-2 rounded-md">
                Read More
              </div>
            </div>
          </div>
        </div>
        <Link to="/addCar" className="mt-4 self-center my-6">
          <div className="bg-blue-500 text-white text-lg font-semibold hover:scale-105 px-6 py-2 transition-all duration-100 ease-lineat">Add Another Car</div>
        </Link>
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

{
  /*
  import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion } from 'framer-motion';
import { getDictionary, removeEntry } from "./LocalStorageHelper";

export default function Marketplace() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dictionary, setDictionary] = useState({});

  useEffect(() => {
    setDictionary(getDictionary());
  }, []);

  const handleRemove = (carName) => {
    removeEntry(carName);
    setDictionary(getDictionary());
  };

  return (
    <div className="min-h-screen w-screen flex flex-col font-sans bg-gray-300">
      <header className="flex items-center justify-between bg-gray-900 text-white py-4 px-6 md:px-12 shadow-lg relative">
        <Link to="/" className="text-3xl md:text-4xl font-extrabold text-gray-300">VroomBoom</Link>
        <div className="md:hidden text-white bg-gray-600 focus:outline-none" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </div>
      </header>
      <main className="flex-grow min-h-[60vh] flex flex-col items-center justify-center bg-gray-100 p-4 text-center">
        <div className="text-xl font-semibold mb-6">Find the Hottest Car Deals!</div>
        <div className="flex flex-wrap justify-center gap-6">
          {Object.keys(dictionary).map((carName) => {
            const carData = dictionary[carName]; // Get car data using the key
            return (
              <div key={carName} className="relative bg-white p-4 w-[15rem] shadow-md rounded-lg hover:scale-105 transition">
                <button className="absolute top-2 right-2 text-red-600 hover:text-red-800" onClick={() => handleRemove(carName)}>
                  <X size={20} />
                </button>
                <div className="bg-[url('./assets/car.webp')] h-[7rem] bg-cover bg-center"></div>
                <div className="mt-4">
                  <h2 className="text-lg font-bold">{carName}</h2>
                  <p className="text-xl font-medium">From ${carData.price}</p>
                  <p className="text-sm text-gray-600">{carData.shortDescription}</p>
                  <Link to={`/marketplace/${encodeURIComponent(carName)}`}>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                    Read More
                    </button>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </main>
      <Link to="/addCar" className="self-center my-6 bg-blue-500 text-white rounded-lg px-6 py-2 text-lg font-semibold hover:scale-105 transition">
        Add Another Car
      </Link>
    </div>
  );
}

  */
}

{/*
  {Object.keys(dictionary).map((carName) => {
  const carData = dictionary[carName]; // Get car data using the key
  return (
    <div key={carName} className="relative bg-white p-4 w-[15rem] shadow-md rounded-lg hover:scale-105 transition">
      <button className="absolute top-2 right-2 text-red-600 hover:text-red-800" onClick={() => handleRemove(carName)}>
        <X size={20} />
      </button>
      <div className="bg-[url('./assets/car.webp')] h-[7rem] bg-cover bg-center"></div>
      <div className="mt-4">
        <h2 className="text-lg font-bold">{carName}</h2>
        <p className="text-xl font-medium">From ${carData.price}</p>
        <p className="text-sm text-gray-600">{carData.shortDescription}</p>
        <Link to={`/marketplace/${encodeURIComponent(carName)}`}>
          <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
          Read More
          </button>
        </Link>
      </div>
    </div>
  );
})}

  */}