"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

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
    <section className="relative min-h-screen flex flex-col justify-between bg-background text-foreground transition-colors duration-300 pt-32 overflow-hidden px-6 sm:px-8 lg:px-12 pb-0">
      {/* Decorative background grids or blur shapes if desired, keeping the primary focus clean */}
      
      <div className="max-w-7xl mx-auto  w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-stretch z-10 flex-1">
        
        {/* Left Column: Text & Content */}
        <div className="flex flex-col items-start space-y-6 md:space-y-8 animate-fade-in-left justify-center py-12 order-2 lg:order-1">
          
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
          <h1 className="text-[2.6rem] sm:text-5xl md:text-4xl lg:text-[3.8rem] font-extrabold text-foreground leading-[1.1] tracking-tight font-sans">
            I&apos;m{" "}
            <span className="relative inline-block text-secondary">
              Zulqarnain,
              {/* Offset underline matching the premium reference vibe */}
              <span className="absolute bottom-[4px] left-0 w-full h-[5px] bg-secondary rounded-full"></span>
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
          <p className="text-foreground/75 text-sm sm:text-base md:text-lg max-w-xl font-normal leading-relaxed transition-colors duration-300">
            I&apos;m an experienced MERN Stack Developer, collaborating with various clients and startups to build high-performance, user-friendly, and visually stunning web applications.
          </p>

          {/* Button Row */}
          <div className="flex flex-wrap items-center gap-5 sm:gap-6 w-full sm:w-auto">
            {/* Compound Button: View My Portfolio */}
            <div className="inline-flex items-center bg-secondary p-[3px] rounded-full group cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-secondary/20 hover:scale-[1.02] active:scale-[0.98]">
              <div className="bg-primary text-white font-semibold px-6 py-3.5 rounded-full text-sm sm:text-base transition-colors hover:bg-primary/95 select-none">
                View My Portfolio
              </div>
              <div className="w-9 h-9 bg-background rounded-full flex items-center justify-center ml-3 mr-2 shadow-sm transition-transform duration-300 group-hover:translate-x-1">
                {/* Play icon */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-primary ml-0.5">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>

            {/* Standard Button: Hire Me */}
            <button className="inline-flex items-center justify-center border border-foreground/80 text-foreground font-semibold px-8 py-4 rounded-full text-sm sm:text-base hover:bg-foreground hover:text-background transition-all duration-300 cursor-pointer active:scale-[0.98] min-w-[140px] select-none">
              Hire Me
            </button>
          </div>
        </div>

        {/* Right Column: Interactive Image */}
        <div className="relative w-full flex justify-center items-end animate-fade-in-right self-stretch order-1 lg:order-2">
          <div className="relative w-full max-w-3xl aspect-square select-none pointer-events-none md:hover:scale-[1.02] transition-transform duration-500 ease-out mb-0 z-10">
            <Image
              src={theme === 'dark' ? "/assets/images/dark1.png" : "/assets/images/developer.jpg"}
              //  src={theme === 'dark' ? "/assets/images/dark-hero.png" : "/assets/images/developer.jpg"}
              alt="Zulqarnain - MERN Stack Developer"
              fill
              priority
              className="object-contain object-bottom"
              // sizes="(max-w-968px) 200vw, 70vw"
            />
          </div>
        </div>

      </div>

      {/* Slanted Marquee Banner Container */}
      <div className="relative left-[-4%] right-[0%] w-[104vw] h-20 select-none overflow-hidden z-20 mt-auto">
        {/* Green slanted background strip */}
        <div className="absolute inset-0 bg-primary -rotate-1.5 origin-center h-20"></div>
        {/* Yellow slanted marquee banner */}
        <div className="absolute inset-0 bg-secondary rotate-1 shadow-md origin-center flex items-center overflow-hidden h-20">
          <div className="custom-marquee flex items-center whitespace-nowrap text-secondary-foreground font-bold text-xl sm:text-2xl md:text-3xl tracking-wider py-3">
            <span className="flex items-center">
              <span className="mx-6">App Design</span>
              <Asterisk />
              <span className="mx-6">Website Design</span>
              <Asterisk />
              <span className="mx-6">Dashboard</span>
              <Asterisk />
              <span className="mx-6">Wireframe</span>
              <Asterisk />
            </span>
            <span className="flex items-center">
              <span className="mx-6">App Design</span>
              <Asterisk />
              <span className="mx-6">Website Design</span>
              <Asterisk />
              <span className="mx-6">Dashboard</span>
              <Asterisk />
              <span className="mx-6">Wireframe</span>
              <Asterisk />
            </span>
            <span className="flex items-center">
              <span className="mx-6">App Design</span>
              <Asterisk />
              <span className="mx-6">Website Design</span>
              <Asterisk />
              <span className="mx-6">Dashboard</span>
              <Asterisk />
              <span className="mx-6">Wireframe</span>
              <Asterisk />
            </span>
            <span className="flex items-center">
              <span className="mx-6">App Design</span>
              <Asterisk />
              <span className="mx-6">Website Design</span>
              <Asterisk />
              <span className="mx-6">Dashboard</span>
              <Asterisk />
              <span className="mx-6">Wireframe</span>
              <Asterisk />
            </span>
          </div>
        </div>
      </div>
      
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
