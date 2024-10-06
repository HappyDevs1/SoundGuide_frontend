import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-semibold">
          <Link to="/">SkillSpace</Link>
        </div>

        <div className="hidden md:flex space-x-8">
          <Link to="/" className="text-white hover:text-blue-300">Home</Link>
          <Link to="/about" className="text-white hover:text-blue-300">About</Link>
          <Link to="/blog" className="text-white hover:text-blue-300">Blog</Link>
          <Link to="/contact" className="text-white hover:text-blue-300">Contact</Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden flex flex-col space-y-4 mt-2 p-4 bg-blue-500">
          <Link to="/" className="text-white hover:text-blue-300">Home</Link>
          <Link to="/about" className="text-white hover:text-blue-300">About</Link>
          <Link to="/blog" className="text-white hover:text-blue-300">Blog</Link>
          <Link to="/contact" className="text-white hover:text-blue-300">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
