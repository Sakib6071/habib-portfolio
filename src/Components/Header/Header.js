import React, { useState } from 'react';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  function handleLinkClick(event) {
    event.preventDefault();
    const targetId = event.target.getAttribute('href');
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  }

  return (
    <header className="flex items-center justify-between flex-wrap bg-gray-800 py-6 px-6 lg:px-20">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">My Portfolio</span>
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white" onClick={toggleMenu}>
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
      </div>
      <div className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? '' : 'hidden'}`}>
        <div className="text-sm lg:flex-grow">
          <a href="#home" className="block mt-4 lg:inline-block lg:mt-0 text-gray-500 hover:text-white mr-4 text-xl" onClick={handleLinkClick}>
            Home
          </a>
          <a href="#about" className="block mt-4 lg:inline-block lg:mt-0 text-gray-500 hover:text-white mr-4 text-xl" onClick={handleLinkClick}>
            About
          </a>
          <a href="#projects" className="block mt-4 lg:inline-block lg:mt-0 text-gray-500 hover:text-white mr-4 text-xl" onClick={handleLinkClick}>
            Projects
          </a>
          <a href="#contact" className="block mt-4 lg:hidden text-gray-500 hover:text-white mr-4 text-xl" onClick={handleLinkClick}>
            Contact
          </a>
        </div>
        <div className="hidden lg:block">
          <a href="#contact" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-green-600 hover:bg-white mt-4 lg:mt-0 bg-green-600">
            Contact
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
