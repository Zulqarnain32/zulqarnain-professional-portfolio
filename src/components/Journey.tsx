"use client";

import React from "react";

const GraduationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-secondary-foreground">
    <path d="M12 2L1 8l11 6 9-4.91V17h2V9L12 2z" />
    <path d="M4.18 12.22l-.18.1V17c0 1.66 3.58 3 8 3s8-1.34 8-3v-4.68l-8 4.36-7.82-4.46z" />
  </svg>
);

const BriefcaseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-secondary-foreground">
    <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" />
  </svg>
);

const educationData = [
  {
    duration: "2017 -2019",
    institution: "The Quest High Schoool",
    degree: "Matriculation",
  },
   {
    duration: "2019 -2021",
    institution: "Civil Lines College",
    degree: "Intermidiate in Computer Science",
  },
  {
    duration: "2021 -2025",
    institution: "Superior Univeristy Lahore",
    degree: "BS in Computer Science",
  },
 
];

const workData = [
   {
    duration: "2023 -2025",
    company: "Self-Employed",
    role: "Full Stack Developer",
  },
  {
    duration: "2025 -2026",
    company: "Orax Technolies",
    role: "Software Engineer Internship",
  },
  {
    duration: "2026 - present",
    company: "Orax Technologies",
    role: "Associate Software Engineer",
  },
];

const Journey = () => {
  return (
    <section className="py-24 bg-background text-foreground transition-colors duration-300 relative overflow-hidden border-t border-border/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header Section */}
        <div className="flex flex-col items-center space-y-3 mb-16 text-center">
          <div className="flex items-center text-sm font-semibold tracking-wider text-primary dark:text-foreground/80 uppercase">
            <span className="w-6 h-0.5 bg-secondary mr-3 rounded-full"></span>
            Education & Work
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-sans">
            My <span className="text-secondary">Academic and Professional</span> Journey
          </h2>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12 items-stretch">
          
          {/* Education Card */}
          <div className="bg-custom-gray/60 dark:bg-custom-gray/40 border border-border backdrop-blur-sm rounded-[2rem] p-8 md:p-10 flex flex-col justify-start">
            {/* Card Header */}
            <div className="flex items-center gap-4 border-b border-border/30 pb-6 mb-8">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center shadow-md shadow-secondary/10">
                <GraduationIcon />
              </div>
              <h3 className="text-xl md:text-2xl font-extrabold tracking-tight text-foreground font-sans">
                Education
              </h3>
            </div>

            {/* List of Education items */}
            <div className="space-y-8">
              {educationData.map((item, idx) => (
                <div 
                  key={idx}
                  className="group/item relative pl-6 border-l-2 border-border/80 hover:border-secondary transition-colors duration-300 py-1"
                >
                  <span className="text-foreground/50 text-xs md:text-sm font-semibold tracking-wider mb-1.5 block">
                    {item.duration}
                  </span>
                  <h4 className="text-lg md:text-xl font-bold text-foreground transition-transform duration-300 group-hover/item:translate-x-1 group-hover/item:text-primary dark:group-hover/item:text-secondary">
                    {item.institution}
                  </h4>
                  <p className="text-foreground/70 text-sm md:text-base font-normal mt-1 transition-transform duration-300 group-hover/item:translate-x-1">
                    {item.degree}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Work Experience Card */}
          <div className="bg-custom-gray/60 dark:bg-custom-gray/40 border border-border backdrop-blur-sm rounded-[2rem] p-8 md:p-10 flex flex-col justify-start">
            {/* Card Header */}
            <div className="flex items-center gap-4 border-b border-border/30 pb-6 mb-8">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center shadow-md shadow-secondary/10">
                <BriefcaseIcon />
              </div>
              <h3 className="text-xl md:text-2xl font-extrabold tracking-tight text-foreground font-sans">
                Work Experience
              </h3>
            </div>

            {/* List of Work items */}
            <div className="space-y-8">
              {workData.map((item, idx) => (
                <div 
                  key={idx}
                  className="group/item relative pl-6 border-l-2 border-border/80 hover:border-secondary transition-colors duration-300 py-1"
                >
                  <span className="text-foreground/50 text-xs md:text-sm font-semibold tracking-wider mb-1.5 block">
                    {item.duration}
                  </span>
                  <h4 className="text-lg md:text-xl font-bold text-foreground transition-transform duration-300 group-hover/item:translate-x-1 group-hover/item:text-primary dark:group-hover/item:text-secondary">
                    {item.company}
                  </h4>
                  <p className="text-foreground/70 text-sm md:text-base font-normal mt-1 transition-transform duration-300 group-hover/item:translate-x-1">
                    {item.role}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Journey;
