"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Blogs', href: '/blogs' },
    { name: 'Testimonials', href: '/testimonials' },
  ];

  return (
    <div className="fixed top-8 left-0 right-0 flex justify-center z-50 px-4 pointer-events-none">
      <nav className="flex items-center justify-between bg-[#1B2B1B]/95 backdrop-blur-md px-4 md:px-8 py-3 rounded-full w-full max-w-6xl border border-white/10 shadow-2xl transition-all duration-300 pointer-events-auto">
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-3 no-underline group">
          <div className="w-8 h-8 bg-[#F4B400] rounded-full flex items-center justify-center font-extrabold text-[#1B2B1B] text-lg transition-transform group-hover:scale-110">
            O
          </div>
          <span className="text-white text-xl md:text-2xl font-semibold tracking-tighter">
            Olivia<span className="text-[#F4B400]">.</span>
          </span>
        </Link>

        {/* Navigation Links */}
        <ul className="hidden lg:flex items-center gap-8 list-none m-0 p-0">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <li key={link.name}>
                <Link 
                  href={link.href} 
                  className={cn(
                    "text-[#A0A0A0] no-underline text-[0.95rem] font-medium transition-colors hover:text-white relative py-1",
                    isActive && "text-[#F4B400] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#F4B400] after:rounded-full"
                  )}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Action Button */}
        <div className="flex items-center gap-4">
          <Button 
            asChild
            variant="outline" 
            className="rounded-full bg-white text-[#1B2B1B] hover:bg-transparent hover:text-white border-white transition-all duration-300 font-semibold px-6 hidden sm:flex"
          >
            <Link href="/contact">Contact Me</Link>
          </Button>
          
          {/* Mobile Menu Trigger (Placeholder for now) */}
          <button className="lg:hidden text-white p-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
