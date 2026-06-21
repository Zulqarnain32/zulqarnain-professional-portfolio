"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const pathname = usePathname();
  const [theme, setTheme] = React.useState<'light' | 'dark'>('light');
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
      const isDark = document.documentElement.classList.contains('dark');
      setTheme(isDark ? 'dark' : 'light');
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Blogs', href: '/blogs' },
    { name: 'Testimonials', href: '/testimonials' },
  ];

  return (
    <div className="fixed top-8 left-0 right-0 flex justify-center z-50 pointer-events-none">
      <nav className="flex items-center justify-between bg-primary backdrop-blur-md px-4 md:px-8 py-3 rounded-full w-full max-w-7xl border border-white/10 shadow-2xl transition-all duration-300 pointer-events-auto">
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-3 no-underline group">
          <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center font-extrabold text-secondary-foreground text-lg transition-transform group-hover:scale-110">
            Z
          </div>
          <span className="text-white text-xl md:text-2xl font-semibold tracking-tighter">
            Zulqarnain<span className="text-[#F4B400]">.</span>
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
        <div className="flex items-center gap-3 md:gap-4">
          {/* Theme Toggler */}
          <button
            onClick={toggleTheme}
            className="flex items-center justify-center w-10 h-10 rounded-full border border-white/20 hover:border-white/40 bg-white/5 hover:bg-white/10 text-white transition-all duration-300 pointer-events-auto cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#F4B400] relative"
            aria-label="Toggle Theme"
          >
            {mounted ? (
              theme === 'light' ? (
                <Moon className="w-5 h-5 transition-transform duration-300 hover:rotate-12" />
              ) : (
                <Sun className="w-5 h-5 text-secondary transition-transform duration-300 hover:rotate-45" />
              )
            ) : (
              <div className="w-5 h-5 rounded-full bg-white/20 animate-pulse" />
            )}
          </button>

          <Button 
            variant="outline" 
            size={"lg"}
            className="rounded-full bg-white text-primary hover:bg-transparent hover:text-white border-white transition-all duration-300 font-semibold px-6 hidden sm:flex"
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
