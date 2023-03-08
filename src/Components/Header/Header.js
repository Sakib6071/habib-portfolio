import React, { useState } from 'react';
import logo from './logo.png'

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
    <header className=" shadow-sm custom-shadow fixed top-0 w-full z-50 flex items-center justify-between flex-wrap custom-bg py-6 px-6 lg:px-20">
      <div className="flex items-center flex-shrink-0 text-white mr-10">
        <img className='w-24' src={logo} alt="logo" />
      </div>
      <div className="block lg:hidden">
        <button className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-green-400 hover:border-white" onClick={toggleMenu}>
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
      </div>
      <div className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${isOpen ? '' : 'hidden'}`}>
        <div className="text-sm lg:flex-grow">
          <a href="#home" className="block mt-4 lg:inline-block lg:mt-0 text-gray-500 hover:text-green-400 mr-4 text-xl" onClick={handleLinkClick}>
            Home
          </a>
          <a href="#about" className="block mt-4 lg:inline-block lg:mt-0 text-gray-500 hover:text-green-400 mr-4 text-xl" onClick={handleLinkClick}>
            About
          </a>
          <a href="#about" className="block mt-4 lg:inline-block lg:mt-0 text-gray-500 hover:text-green-400 mr-4 text-xl" onClick={handleLinkClick}>
            Skills
          </a>
          <a href="#project" className="block mt-4 lg:inline-block lg:mt-0 text-gray-500 hover:text-green-400 mr-4 text-xl" onClick={handleLinkClick}>
            Projects
          </a>
          <a href="#contact" className="block mt-4 lg:hidden text-gray-500 hover:text-green-400 mr-4 text-xl" onClick={handleLinkClick}>
            Contact
          </a>
        </div>
        <div className="hidden lg:block">
          <a href="#contact" className="inline-block px-4 py-2 leading-none text-base rounded text-white  hover:text-green-600 hover:border hover:bg-transparent  mt-4 lg:mt-0 bg-green-600" onClick={handleLinkClick}>
            Contact
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
