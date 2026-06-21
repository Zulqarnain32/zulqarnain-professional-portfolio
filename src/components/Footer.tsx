"use client";

import React from "react";
import Link from "next/link";

const GithubIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

const LinkedinIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
  </svg>
);

const TwitterIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const YoutubeIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M23.498 6.163a3.003 3.003 0 00-2.11-2.11C19.53 3.545 12 3.545 12 3.545s-7.53 0-9.388.508a3.003 3.003 0 00-2.11 2.11C0 8.017 0 12 0 12s0 3.983.502 5.837a3.003 3.003 0 002.11 2.11c1.858.507 9.388.507 9.388.507s7.53 0 9.388-.507a3.003 3.003 0 002.11-2.11C24 15.983 24 12 24 12s0-3.983-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" clipRule="evenodd" />
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" clipRule="evenodd" />
  </svg>
);

const SendIcon = () => (
  <svg className="w-4 h-4 text-secondary fill-secondary" viewBox="0 0 24 24" fill="currentColor">
    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
  </svg>
);

const Footer = () => {
  const socialLinks = [
    { icon: <GithubIcon />, href: "https://github.com", name: "GitHub" },
    { icon: <LinkedinIcon />, href: "https://linkedin.com", name: "LinkedIn" },
    { icon: <TwitterIcon />, href: "https://twitter.com", name: "Twitter" },
    { icon: <YoutubeIcon />, href: "https://youtube.com", name: "YouTube" },
    { icon: <InstagramIcon />, href: "https://instagram.com", name: "Instagram" },
  ];

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Blogs", href: "/blogs" },
    { name: "FAQs", href: "/faqs" },
  ];

  return (
    <footer className="bg-background text-foreground transition-colors duration-300 relative border-t border-border/10">
      
      {/* Top CTA Row */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-20 pb-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-12 border-b border-border/30">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-sans">
            Let&apos;s <span className="text-secondary">Connect</span> there
          </h2>
          
          {/* Custom Overlap Pill Button */}
          <div className="self-start md:self-auto">
            <Link 
              href="/blogs"
              className="inline-flex items-center bg-secondary p-1 rounded-full group transition-all duration-300 hover:shadow-lg hover:shadow-secondary/20 hover:scale-[1.02] active:scale-[0.98]"
            >
              <div className="bg-primary text-white font-semibold px-6 py-3 rounded-full text-sm md:text-base transition-colors hover:bg-primary/95">
                View All Blogs
              </div>
              <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center ml-3 mr-1 shadow-sm transition-transform duration-300 group-hover:translate-x-1">
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  viewBox="0 0 24 24" 
                  fill="currentColor" 
                  className="w-4 h-4 text-primary"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </Link>
          </div>
        </div>

        {/* Main Footer Links & Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 py-16">
          
          {/* Column 1: Brand, Bio & Socials */}
          <div className="flex flex-col space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center font-extrabold text-secondary-foreground text-lg shadow-md shadow-secondary/15">
                Z
              </div>
              <span className="text-2xl font-bold tracking-tight">
                Zulqarnain<span className="text-secondary">.</span>
              </span>
            </div>
            
            <p className="text-foreground/75 text-sm md:text-base leading-relaxed font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            
            {/* Social Icons */}
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center shadow-md shadow-secondary/10 transition-transform duration-300 hover:scale-110 active:scale-95"
                  aria-label={item.name}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="flex flex-col space-y-6">
            <h3 className="text-lg font-bold text-secondary tracking-wide uppercase font-sans">
              Navigation
            </h3>
            <ul className="flex flex-col space-y-3 list-none p-0 m-0">
              {navLinks.map((link, idx) => (
                <li key={idx}>
                  <Link 
                    href={link.href}
                    className="text-foreground/75 hover:text-primary dark:hover:text-secondary text-sm md:text-base transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Details */}
          <div className="flex flex-col space-y-6">
            <h3 className="text-lg font-bold text-secondary tracking-wide uppercase font-sans">
              Contact
            </h3>
            <ul className="flex flex-col space-y-3 list-none p-0 m-0 text-sm md:text-base text-foreground/75">
              <li>
                <a href="tel:+0123456789" className="hover:text-primary dark:hover:text-secondary transition-colors">
                  +0123-456-789
                </a>
              </li>
              <li>
                <a href="https://www.zulqarnain.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary dark:hover:text-secondary transition-colors">
                  www.zulqarnain.com
                </a>
              </li>
              <li>
                <a href="mailto:example@gmail.com" className="hover:text-primary dark:hover:text-secondary transition-colors">
                  example@gmail.com
                </a>
              </li>
              <li className="leading-relaxed">
                2464 Royal Ln. Mesa,<br />New Jersey 45463
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="flex flex-col space-y-6">
            <h3 className="text-lg font-bold text-secondary tracking-wide uppercase font-sans">
              Get the latest information
            </h3>
            
            {/* Newsletter input container */}
            <form 
              onSubmit={(e) => e.preventDefault()}
              className="flex items-center bg-custom-gray/60 dark:bg-custom-gray/40 border border-border rounded-xl p-1.5 w-full focus-within:border-primary/50 dark:focus-within:border-secondary/50 transition-colors duration-300"
            >
              <input 
                type="email" 
                placeholder="Email address"
                className="bg-transparent text-foreground placeholder:text-foreground/45 px-3 py-2.5 flex-1 focus:outline-none text-sm md:text-base min-w-0"
                required
              />
              <button 
                type="submit"
                className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center hover:bg-primary/95 transition-colors duration-300 flex-shrink-0"
                aria-label="Subscribe"
              >
                <SendIcon />
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* Very Bottom Bar: Copyright */}
      <div className="bg-primary text-white py-6 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left text-xs md:text-sm font-medium">
          <p className="text-white/80">
            Copyright © 2026 <span className="text-secondary">Zulqarnain</span>. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/terms" className="hover:text-secondary transition-colors duration-300">
              User Terms & Conditions
            </Link>
            <span className="text-white/40">|</span>
            <Link href="/privacy" className="hover:text-secondary transition-colors duration-300">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
