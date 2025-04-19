import React from 'react';

const Navbar = () => {
  return (
    <nav className="w-full p-4 bg-gray-900 shadow-lg fixed top-0 z-50 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-cyan-400">JemreyWebProj</h1>
      <div className="space-x-4">
        <a href="#about" className="hover:text-cyan-400">About</a>
        <a href="#gallery" className="hover:text-cyan-400">Gallery</a>
        <a href="#portfolio" className="hover:text-cyan-400">Portfolio</a>
        <a href="#contact" className="hover:text-cyan-400">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
