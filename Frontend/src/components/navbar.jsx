// src/components/Navbar.jsx
import { useState } from 'react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      {/* Logo on the left */}
      <div className="flex items-center">
        <a href="/">
          <img
            src="/logo.png"
            alt="Logo"
            className="h-16 w-auto"
          />
        </a>
      </div>
      {/* Menu items for larger screens */}
      <div className="hidden md:flex space-x-4">
        <a href="/" className="hover:text-gray-400">Home</a>
        <a href="/signup" className="hover:text-gray-400">Sign Up</a>
        <a href="/login" className="hover:text-gray-400">Login</a>
      </div>
      {/* Toggle button for mobile view */}
      <button
        onClick={toggleMenu}
        className="md:hidden flex items-center px-3 py-2 border rounded text-white border-white hover:text-gray-400"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>
      {/* Mobile menu items */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} absolute top-16 right-0 bg-gray-800 text-white w-full`}>
        <a href="/" className="block px-4 py-2 border-b border-gray-700 hover:bg-gray-700">Home</a>
        <a href="/signup" className="block px-4 py-2 border-b border-gray-700 hover:bg-gray-700">Sign Up</a>
        <a href="/login" className="block px-4 py-2 hover:bg-gray-700">Login</a>
      </div>
    </nav>
  );
}

export default Navbar;
