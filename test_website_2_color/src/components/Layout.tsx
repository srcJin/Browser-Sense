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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <header className="w-full bg-white/90 backdrop-blur-md border-b border-indigo-100 py-4 px-6 sticky top-0 z-50">
        <nav className="flex items-center justify-between max-w-7xl mx-auto">
          <Link href="/" className="text-3xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent tracking-wider hover:scale-105 transition-transform">
            BROWSER SENSE
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-gray-700 hover:text-indigo-600 transition-all duration-300 relative font-medium ${
                  pathname === item.href
                    ? 'text-indigo-600 after:content-[""] after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-[2px] after:bg-gradient-to-r after:from-indigo-500 after:to-purple-500 after:rounded-full'
                    : 'hover:after:content-[""] hover:after:absolute hover:after:bottom-[-4px] hover:after:left-0 hover:after:w-full hover:after:h-[2px] hover:after:bg-gradient-to-r hover:after:from-indigo-300 hover:after:to-purple-300 hover:after:rounded-full'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            <Link
              href="https://github.com"
              className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-6 py-2 rounded-full transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              GitHub
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-indigo-600 p-2 rounded-lg hover:bg-indigo-50 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fadeInUp">
            <div className="flex flex-col space-y-4 bg-white rounded-lg p-4 shadow-lg border border-indigo-100">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-gray-700 hover:text-indigo-600 transition-colors px-2 py-1 rounded font-medium ${
                    pathname === item.href ? 'text-indigo-600 bg-indigo-50' : 'hover:bg-indigo-50'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="https://github.com"
                className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-2 rounded-full transition-all duration-300 text-center font-medium shadow-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                GitHub
              </Link>
            </div>
          </div>
        )}
      </header>
      
      <main className="relative">
        {/* Background decorations */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-200/30 to-cyan-200/30 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
        </div>
        {children}
      </main>
      
      <footer className="bg-gradient-to-r from-slate-800 via-indigo-900 to-purple-900 text-white py-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/20 to-purple-600/20"></div>
        <div className="max-w-7xl mx-auto px-6 text-center relative">
          <div className="mb-4">
            <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Browser Sense Demo
            </h3>
            <p className="text-indigo-200 mt-2">The Senseable QA Agent - Boost your vibe coding</p>
          </div>
          <div className="flex justify-center space-x-6 text-sm text-indigo-300">
            <span>Built with Next.js</span>
            <span>•</span>
            <span>Powered by AI</span>
            <span>•</span>
            <span>Open Source</span>
          </div>
        </div>
      </footer>
    </div>
  );
}