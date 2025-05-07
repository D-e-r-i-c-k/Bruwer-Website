import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Navigation Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              <Link href="/portfolio" className="hover:text-gray-300 transition-colors">
                My Work
              </Link>
              <Link href="/about" className="hover:text-gray-300 transition-colors">
                About
              </Link>
              <Link href="/contact" className="hover:text-gray-300 transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="flex flex-col space-y-2">
              <p>Email: contact@bruwer.com</p>
              <p>Phone: +27 XX XXX XXXX</p>
              <p>Location: South Africa</p>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold mb-4">Follow Me</h3>
            <div className="flex flex-col space-y-2">
              <a
                href="https://www.instagram.com/bruwerbornman/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition-colors"
              >
                Instagram
              </a>
              <a
                href="https://www.youtube.com/channel/UCI4fmsvuOaXOOndThiRjkKA"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition-colors"
              >
                YouTube
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Bruwer Photography. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;