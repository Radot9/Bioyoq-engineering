import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../assets/images/bioyoq-logo-white.svg';
import HamburgerButton from './HamburgerButton';

const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about-us' },
    { name: 'Capabilities', path: '/capabilities' },
    { name: 'Projects', path: '/projects' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`w-full fixed top-0 left-0 z-50 transition-colors duration-300 ${scrolled ? 'bg-red-950' : 'bg-transparent'} my-0`}>
      <div className="flex items-center justify-between px-4 py-4 md:px-8 max-w-screen-2xl mx-auto">
        <img src={logo} alt="Bioyoq Logo" className="h-14 md:h-16" />
        {/* Desktop nav */}
        <nav className="hidden md:block">
          <div className="backdrop-blur-md bg-white/30 rounded-xl px-4 py-2">
            <ul className="flex space-x-4 h-full">
              {navLinks.map(link => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `text-white font-satoshi font-bold rounded-lg px-4 h-full flex items-center transition-colors hover:bg-primary hover:text-white ${isActive ? 'bg-primary text-white' : ''}`
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </nav>
        {/* Mobile hamburger */}
        
  <HamburgerButton checked={menuOpen} onClick={() => setMenuOpen(!menuOpen)} color="#9D2B21" style={{ width: 56, height: 56 }} className="md:hidden" />
      </div>
      {/* Mobile menu */}
      {menuOpen && (
        <nav className="md:hidden px-4 pb-4">
          <div className="backdrop-blur-lg bg-white/30 rounded-xl p-4 shadow-lg">
            <ul className="flex flex-col space-y-4">
              {navLinks.map(link => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="nav-link block text-primary hover:text-red-950 font-satoshi font-bold"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      )}
    </header>
  );
}

export default Navbar
