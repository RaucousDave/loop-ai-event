import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // or any icon lib you prefer

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative bg-gray-100/80 backdrop-blur-md rounded-full w-full px-6  z-10 py-2 shadow-md flex justify-between items-center max-w-6xl mx-auto">
      {/* Logo */}
      <div className="w-12">
        <img src="/logos/logo-2.png" alt="Loop AI Logo" />
      </div>

      {/* Desktop Nav */}
      <ul className="hidden md:flex gap-6 font-medium">
        <li>
          <a href="#" className="hover:text-purple-500 transition">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-purple-500 transition">
            About
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-purple-500 transition">
            Register
          </a>
        </li>
      </ul>

      {/* Mobile Toggle */}
      <div className="md:hidden">
        {isOpen ? (
          <X
            className="w-6 h-6 cursor-pointer"
            onClick={() => setIsOpen(false)}
          />
        ) : (
          <Menu
            className="w-6 h-6 cursor-pointer"
            onClick={() => setIsOpen(true)}
          />
        )}
      </div>

      {/* Mobile Nav Drawer */}
      {isOpen && (
        <ul className="absolute top-20 w-full z-50 right-0 bg-white text-black rounded-lg shadow-lg p-4 space-y-3 md:hidden">
          <li>
            <a href="#" className="block hover:text-purple-500 transition">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="block hover:text-purple-500 transition">
              About
            </a>
          </li>
          <li>
            <a href="#" className="block hover:text-purple-500 transition">
              Register
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
