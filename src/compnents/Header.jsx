import { useState } from "react";
import logo from "../images/image1.png";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative flex items-center justify-between px-4 md:px-9 py-3 shadow-md bg-white">
      
      <div className="flex items-center gap-2">
        <img
          src={logo}
          alt="logo"
          className="w-[100px] sm:w-[120px] md:w-[170px] h-[50px] sm:h-[60px] md:h-[70px] object-contain"
        />
      </div>
      <div className="hidden md:flex items-center text-sm font-medium text-gray-700">
        <div className="flex items-center gap-6">
          <a href="#products" className="hover:text-blue-600">
            PRODUCTS
          </a>
          <a href="#features" className="hover:text-blue-600">
            FEATURES
          </a>
          <a href="#support" className="hover:text-blue-600">
            SUPPORT
          </a>
        </div>
        <button className="ml-4 px-6 py-2 rounded-full text-white font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 transition">
          LOGIN
        </button>
      </div>

      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-gray-700 focus:outline-none"
        >
          {isOpen ? (
            <span className="text-2xl">&times;</span> 
          ) : (
            <span className="text-2xl">&#9776;</span>
          )}
        </button>
      </div>


      <div
        className={`absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-center py-4 md:hidden transition-all duration-300 ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <a href="#products" className="py-2 text-gray-700 hover:text-blue-600">
          PRODUCTS
        </a>
        <a href="#features" className="py-2 text-gray-700 hover:text-blue-600">
          FEATURES
        </a>
        <a href="#support" className="py-2 text-gray-700 hover:text-blue-600">
          SUPPORT
        </a>
        <button className="mt-2 px-6 py-2 rounded-full text-white font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 transition">
          LOGIN
        </button>
      </div>
    </nav>
  );
}
