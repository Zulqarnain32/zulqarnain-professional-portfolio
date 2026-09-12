"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
const Asterisk = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 mx-4 inline-block text-black">
    <path d="M12 2a1 1 0 0 1 1 1v7.59l5.36-5.36a1 1 0 0 1 1.42 1.42L14.41 12l5.36 5.36a1 1 0 0 1-1.42 1.42L13 14.41V22a1 1 0 0 1-2 0v-7.59l-5.36 5.36a1 1 0 0 1-1.42-1.42L9.59 12 4.23 6.64a1 1 0 0 1 1.42-1.42L11 9.59V3a1 1 0 0 1 1-1z" />
  </svg>
);

const roles = [
  "MERN Stack Developer",
  "Software Engineer",
  "Backend Developer",
  "Frontend Developer",
  "PERN Stack Developer"
];

const MarqueeBanner = ({ className }: { className?: string }) => (
  <div className={`relative w-screen left-1/2 -translate-x-1/2 h-20 select-none overflow-hidden z-20 ${className || ""}`}>
    {/* Green slanted background strip */}
    <div className="absolute inset-0 bg-primary -rotate-1.5 origin-center h-20"></div>
    {/* Yellow slanted marquee banner */}
    <div className="absolute inset-0 bg-secondary rotate-1 shadow-md origin-center flex items-center overflow-hidden h-20">
      <div className="custom-marquee flex items-center whitespace-nowrap text-secondary-foreground font-bold text-xl sm:text-2xl md:text-3xl tracking-wider py-3">
        <span className="flex items-center">
          <span className="mx-6">React</span>
          <Asterisk />
          <span className="mx-6">Next.js</span>
          <Asterisk />
          <span className="mx-6">Node.js</span>
          <Asterisk />
          <span className="mx-6">TypeScript</span>
          <Asterisk />
          <span className="mx-6">MongoDB</span>
          <Asterisk />
          <span className="mx-6">PostgreSQL</span>
          <Asterisk />
          <span className="mx-6">Redux</span>
          <Asterisk />
          <span className="mx-6">Tailwind CSS</span>
          <Asterisk />
        </span>
        <span className="flex items-center">
          <span className="mx-6">React</span>
          <Asterisk />
          <span className="mx-6">Next.js</span>
          <Asterisk />
          <span className="mx-6">Node.js</span>
          <Asterisk />
          <span className="mx-6">TypeScript</span>
          <Asterisk />
          <span className="mx-6">MongoDB</span>
          <Asterisk />
          <span className="mx-6">PostgreSQL</span>
          <Asterisk />
          <span className="mx-6">Redux</span>
          <Asterisk />
          <span className="mx-6">Tailwind CSS</span>
          <Asterisk />
        </span>
      </div>
    </div>
  </div>
);

const Hero = () => {
  const [mounted, setMounted] = useState(false);
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
      const isDark = document.documentElement.classList.contains('dark');
      setTheme(isDark ? 'dark' : 'light');
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const observer = new MutationObserver(() => {
      const isDarkNow = document.documentElement.classList.contains('dark');
      setTheme(isDarkNow ? 'dark' : 'light');
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, [mounted]);

  useEffect(() => {
    if (!mounted) return;

    let timer: NodeJS.Timeout;
    const currentRole = roles[currentIndex];
    
    if (isDeleting) {
      // Erase character
      timer = setTimeout(() => {
        setCurrentText((prev) => prev.slice(0, -1));
      }, 35); // Speed of erasing
    } else {
      // Type character
      timer = setTimeout(() => {
        setCurrentText((prev) => currentRole.slice(0, prev.length + 1));
      }, 75); // Speed of typing
    }

    // State transitions
    if (!isDeleting && currentText === currentRole) {
      // Delay before deleting starts
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && currentText === "") {
      timer = setTimeout(() => {
        setIsDeleting(false);
        // Advance index
        setCurrentIndex((prev) => (prev + 1) % roles.length);
      }, 0);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentIndex, mounted]);

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-between bg-background text-foreground transition-colors duration-300 pt-28 sm:pt-32 overflow-hidden px-6 sm:px-8 lg:px-12 pb-0">
      {/* Decorative background grids or blur shapes if desired, keeping the primary focus clean */}
      
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-8 items-stretch z-10 flex-1">
        
        {/* Left Column: Text & Content (Appears 1st on mobile and desktop) */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 md:space-y-8 animate-fade-in-left justify-center py-6 sm:py-8 lg:py-12 order-1">
          
          {/* Bounding Box: Hello There! */}
          <div className="relative inline-flex items-center px-6 py-2 border border-border rounded bg-custom-gray/50 shadow-sm font-sans font-medium text-sm md:text-base text-foreground tracking-wide select-none transition-colors duration-300">
            {/* Square anchors at corners */}
            <span className="absolute -top-1 -left-1 w-2 h-2 bg-secondary border border-foreground/30 rounded-sm"></span>
            <span className="absolute -top-1 -right-1 w-2 h-2 bg-secondary border border-foreground/30 rounded-sm"></span>
            <span className="absolute -bottom-1 -left-1 w-2 h-2 bg-secondary border border-foreground/30 rounded-sm"></span>
            <span className="absolute -bottom-1 -right-1 w-2 h-2 bg-secondary border border-foreground/30 rounded-sm"></span>
            Hello There!
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-5xl md:text-4xl lg:text-[3.8rem] text-primary font-extrabold md:font-bold 2xl:font-extrabold leading-[1.15] lg:leading-[1.1] tracking-tight font-sans">
            I&apos;m{" "}
            <span className="relative inline-block text-secondary italic">
              Zulqarnain,
              {/* Offset underline matching the premium reference vibe */}
              {/* <span className="hidden lg:block absolute bottom-[6px] left-0 w-full h-[5px] bg-secondary rounded-full"></span> */}
            </span>
            <br />
            {mounted ? (
              <span className="text-primary block mt-2 min-h-[1.2em]">
                {currentText}
                <span className="animate-pulse text-primary font-light ml-1">|</span>
              </span>
            ) : (
              <span className="text-primary block mt-2">MERN Stack Developer</span>
            )}
            {/* <span className="block mt-2">Based in Pakistan.</span> */}
          </h1>

          {/* Subtitle / Paragraph */}
          <p className="text-foreground/75 text-sm sm:text-base md:text-lg max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed transition-colors duration-300">
            I&apos;m an experienced <span className="text-secondary">MERN / PERN</span> Stack Developer, collaborating with various clients and startups to build high-performance, user-friendly, and visually stunning web applications.
          </p>

          {/* Button Row / Stack */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full max-w-xs sm:max-w-none mx-auto lg:mx-0">
            {/* Compound Button: View My Portfolio */}
            <div className="inline-flex items-center justify-between sm:justify-start bg-secondary p-[3px] rounded-full group cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-secondary/20 hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto">
              <div className="bg-primary text-white font-semibold px-6 py-3.5 rounded-full text-sm sm:text-base transition-colors hover:bg-primary/95 select-none text-center flex-1 sm:flex-none">
                View My Portfolio
              </div>
              <div className="w-10 h-10 sm:w-9 sm:h-9 bg-white rounded-full flex items-center justify-center ml-2 mr-1 sm:ml-3 sm:mr-2 shadow-sm transition-transform duration-300 group-hover:translate-x-1 shrink-0">
                <Play className="w-4 h-4 text-primary fill-primary translate-x-[1px]" />
              </div>
            </div>

            {/* Standard Button: Hire Me */}
            <button className="inline-flex items-center justify-center border-2 border-foreground/80 text-foreground font-semibold px-8 py-3.5 sm:py-4 rounded-full text-sm sm:text-base hover:bg-foreground hover:text-background transition-all duration-300 cursor-pointer active:scale-[0.98] w-full sm:w-auto sm:min-w-[140px] select-none">
              Hire Me
            </button>
          </div>
        </div>

        {/* Right Column: Interactive Image (Appears 2nd on mobile) */}
        <div className="relative w-full flex justify-center items-end animate-fade-in-right self-stretch order-2">
          <div className="relative w-full max-w-md lg:max-w-3xl aspect-square select-none pointer-events-none md:hover:scale-[1.02] transition-transform duration-500 ease-out mb-0 z-10">
            <Image
              src={theme === 'dark' ? "/assets/images/dark1.png" : "/assets/images/developer.jpg"}
              alt="Zulqarnain - MERN Stack Developer"
              fill
              priority
              className="object-contain object-bottom"
            />
          </div>
        </div>

        {/* Mobile Banner: displays right after image on mobile with no gap */}
        <MarqueeBanner className="lg:hidden order-3 col-span-1 mt-[-3rem]" />

      </div>

      {/* Slanted Marquee Banner Container for Desktop */}
      <MarqueeBanner className="hidden lg:block mt-auto" />
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee-scroll {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        .custom-marquee {
          display: flex;
          width: max-content;
          animation: marquee-scroll 22s linear infinite;
        }
      `}} />
    </section>
  );
};

export default Hero;
