import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();
  
  const isActive = (path: string) => {
    return pathname === path ? 'text-indigo-600 border-indigo-600' : 'text-gray-600 border-transparent hover:text-indigo-600 hover:border-indigo-300';
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-indigo-600">
              TimeCraft
            </Link>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <Link 
              href="/dashboard" 
              className={`border-b-2 px-1 py-4 text-sm font-medium ${isActive('/dashboard')}`}
            >
              Dashboard
            </Link>
            <Link 
              href="/dashboard/templates" 
              className={`border-b-2 px-1 py-4 text-sm font-medium ${isActive('/dashboard/templates')}`}
            >
              Templates
            </Link>
            <Link 
              href="/dashboard/deep-work" 
              className={`border-b-2 px-1 py-4 text-sm font-medium ${isActive('/dashboard/deep-work')}`}
            >
              Deep Work
            </Link>
          </div>
          
          <div className="hidden md:flex items-center">
            <button className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700">
              Sign Out
            </button>
          </div>
          
          <div className="md:hidden flex items-center">
            <button className="text-gray-500 hover:text-indigo-600 focus:outline-none">
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu, toggle based on menu state */}
      <div className="md:hidden hidden">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link 
            href="/dashboard" 
            className="block px-3 py-2 rounded-md text-base font-medium text-indigo-600 bg-indigo-50"
          >
            Dashboard
          </Link>
          <Link 
            href="/dashboard/templates" 
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-indigo-600 hover:bg-indigo-50"
          >
            Templates
          </Link>
          <Link 
            href="/dashboard/deep-work" 
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-indigo-600 hover:bg-indigo-50"
          >
            Deep Work
          </Link>
        </div>
        <div className="pt-4 pb-3 border-t border-gray-200">
          <div className="px-2 space-y-1">
            <button className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-indigo-600 hover:bg-indigo-50">
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
} 