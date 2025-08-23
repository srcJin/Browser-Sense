'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

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
          
          <div className="flex items-center space-x-8">
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
        </nav>
      </header>
      
      <footer className="bg-gray-600 text-white py-4">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p>Browser Sense Demo Page</p>
        </div>
      </footer>
    </div>
  );
}