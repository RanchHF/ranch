'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-2">
        <div className="flex justify-between items-center">
          <Link href="/" className="relative w-64 h-24">
            <Image
              src="/images/ranch-logo.png"
              alt="Ranch Hardwood Floors LLC"
              fill
              className="object-contain"
              priority
              quality={100}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            <Link href="/" className="text-lg font-semibold text-gray-600 hover:text-green-600 transition-colors duration-200">
              Home
            </Link>
            <Link href="/#services" className="text-lg font-semibold text-gray-600 hover:text-green-600 transition-colors duration-200">
              Services
            </Link>
            <Link href="/gallery" className="text-lg font-semibold text-gray-600 hover:text-green-600 transition-colors duration-200">
              Gallery
            </Link>
            <Link href="/blog" className="text-lg font-semibold text-gray-600 hover:text-green-600 transition-colors duration-200">
              Blog
            </Link>
            <a
              href="tel:+19136332425"
              className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors duration-200 flex items-center gap-2 font-bold text-lg shadow-md hover:shadow-lg"
            >
              <Phone className="w-5 h-5" />
              <span>(913) 633-2425</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4">
            <Link
              href="/"
              className="block py-2 text-lg font-semibold text-gray-600 hover:text-gray-900"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/#services"
              className="block py-2 text-lg font-semibold text-gray-600 hover:text-gray-900"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/gallery"
              className="block py-2 text-lg font-semibold text-gray-600 hover:text-gray-900"
              onClick={() => setIsOpen(false)}
            >
              Gallery
            </Link>
            <Link
              href="/blog"
              className="block py-2 text-lg font-semibold text-gray-600 hover:text-gray-900"
              onClick={() => setIsOpen(false)}
            >
              Blog
            </Link>
            <a
              href="tel:+19136332425"
              className="block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors duration-200 flex items-center gap-2 font-bold text-lg shadow-md hover:shadow-lg mt-2"
            >
              <Phone className="w-5 h-5" />
              <span>(913) 633-2425</span>
            </a>
          </div>
        )}
      </nav>
    </header>
  );
} 