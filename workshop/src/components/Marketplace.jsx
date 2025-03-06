import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import React from "react";
import { motion } from 'framer-motion';
import { getDictionary, removeEntry } from "./LocalStorageHelper";
import CarSpecific from "./CarSpecific";


export default function Marketplace() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dictionary, setDictionary] = useState(getDictionary());

  // Sync dictionary state with localStorage on mount
      useEffect(() => {
          setDictionary(getDictionary());
      }, []);
  
      // Remove car data from the dictionary using carName as the key
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