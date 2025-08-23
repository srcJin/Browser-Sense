'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Service', href: '/service' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <header className="w-full bg-white py-4 px-6">
        <nav className="flex items-center justify-between max-w-7xl mx-auto">
          <Link href="/" className="text-2xl font-bold text-gray-600 tracking-wider">
            FOO BAR
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-gray-600 hover:text-gray-900 transition-colors relative ${
                  pathname === item.href
                    ? 'text-gray-900 after:content-[""] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-gray-900'
                    : ''
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            <Link
              href="https://github.com"
              className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-full transition-colors"
            >
              GitHub
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-gray-600 hover:text-gray-900 transition-colors px-2 ${
                    pathname === item.href ? 'text-gray-900 font-semibold' : ''
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="https://github.com"
                className="bg-gray-600 hover:bg-gray-700 text-white px-6 py-2 rounded-full transition-colors text-center w-fit"
                onClick={() => setIsMenuOpen(false)}
              >
                GitHub
              </Link>
            </div>
          </div>
        )}
      </header>
      
      <main>{children}</main>
      
      <footer className="bg-gray-600 text-white py-4">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p>Browser Sense Demo Page</p>
        </div>
      </footer>
    </div>
  );
}