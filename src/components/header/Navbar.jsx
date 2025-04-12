import React, { useState } from 'react';
import logo from '../../assets/logo.png';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = ['About Us', 'Our Story', 'Sell on 1MDM', 'Pricing'];

  return (
    <nav className="sticky top-0 z-50 bg-white w-full shadow-sm">
      <div className="flex items-center justify-between px-4 md:px-28 py-4">
        <img
          src={logo}
          alt="Logo"
          className="w-[140px] sm:w-[160px] transition-all duration-300"
        />

        <ul className="hidden md:flex gap-6">
          {navItems.map((item, index) => (
            <li
              key={index}
              className="text-[#838383] hover:underline hover:text-[#ED1C24] cursor-pointer transition-colors duration-300 ease-in-out"
            >
              {item}
            </li>
          ))}
        </ul>

        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <ul className="md:hidden bg-white px-4 pb-4 flex flex-col gap-4 border-t w-full">
          {navItems.map((item, index) => (
            <li
              key={index}
              className="text-[#838383] hover:underline hover:text-[#ED1C24] cursor-pointer transition-colors duration-300 ease-in-out"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;