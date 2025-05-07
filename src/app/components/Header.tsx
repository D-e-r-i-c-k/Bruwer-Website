'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="w-full flex items-center justify-between py-4 px-8 bg-white sticky top-0 z-50">
        {/* Social Icons */}
        <div className="flex items-center space-x-4">
          <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black hover:text-gray-600 transition-colors" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" y1="6.5" x2="17.5" y2="6.5"/>
            </svg>
          </a>
          <a href="https://www.youtube.com/channel/UCI4fmsvuOaXOOndThiRjkKA" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-black hover:text-gray-600 transition-colors" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <polygon points="10 15 15 12 10 9 10 15" fill="currentColor"/>
            </svg>
          </a>
        </div>
        {/* Center Name */}
        <div className="flex items-center justify-center h-full">
          <Link href="/" className="text-xl font-semibold tracking-widest text-black hover:text-gray-600 transition-colors">
            BRUWER BORNMAN
          </Link>
        </div>
        {/* Menu Button */}
        <button
          onClick={toggleMenu}
          className="flex items-center space-x-2 focus:outline-none"
          aria-label="Toggle menu"
        >
          <span className="text-base font-semibold tracking-widest text-black">MENU</span>
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`text-black transition-transform duration-200 ${isMenuOpen ? 'rotate-180' : ''}`}
            xmlns="http://www.w3.org/2000/svg"
          >
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </header>

      {/* Sidebar Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleMenu}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-8">
          <div className="flex justify-end mb-8">
            <button
              onClick={toggleMenu}
              className="text-black hover:text-gray-600 transition-colors"
              aria-label="Close menu"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
          <nav className="space-y-6">
            <Link
              href="/portfolio"
              className="block text-lg font-semibold text-black hover:text-gray-600 transition-colors"
              onClick={toggleMenu}
            >
              Portfolio
            </Link>
            <Link
              href="/about"
              className="block text-lg font-semibold text-black hover:text-gray-600 transition-colors"
              onClick={toggleMenu}
            >
              About
            </Link>
            <Link
              href="/contact"
              className="block text-lg font-semibold text-black hover:text-gray-600 transition-colors"
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
