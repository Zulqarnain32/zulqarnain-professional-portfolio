"use client";

import React from "react";
import Link from "next/link";
import { Palette, Smartphone, Monitor, Play, ArrowRight } from "lucide-react";

const servicesData = [
  {
    icon: <Palette size={34} className="text-primary transition-transform duration-300 group-hover/card:scale-110" />,
    title: "UI/UX Design",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ...",
    link: "/services#ui-ux",
  },
  {
    icon: <Smartphone size={34} className="text-primary transition-transform duration-300 group-hover/card:scale-110" />,
    title: "Application Design",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ...",
    link: "/services#app-design",
  },
  {
    icon: <Monitor size={34} className="text-primary transition-transform duration-300 group-hover/card:scale-110" />,
    title: "Website Design",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ...",
    link: "/services#website-design",
  },
];

const Services = () => {
  return (
    <section className="py-24 bg-background text-foreground transition-colors duration-300 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8">
          <div className="flex flex-col space-y-3">
            {/* Sub-label */}
            <div className="flex items-center text-sm font-semibold tracking-wider text-primary dark:text-foreground/80 uppercase">
              <span className="w-6 h-0.5 bg-secondary mr-3 rounded-full"></span>
              Services
            </div>
            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-sans">
              <span className="text-secondary">Services</span> I Provide
            </h2>
          </div>

          {/* Custom Overlap Pill Button */}
          <div className="self-start md:self-auto">
            <Link 
              href="/services"
              className="inline-flex items-center bg-secondary p-1 rounded-full group transition-all duration-300 hover:shadow-lg hover:shadow-secondary/20 hover:scale-[1.02] active:scale-[0.98]"
            >
              <div className="bg-primary text-white font-semibold px-6 py-3 rounded-full text-sm md:text-base transition-colors hover:bg-primary/95">
                View All Services
              </div>
              <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center ml-3 mr-1 shadow-sm transition-transform duration-300 group-hover:translate-x-1">
                <Play className="w-4 h-4 text-primary fill-primary" />
              </div>
            </Link>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="group/card flex flex-col items-start p-8 md:p-10 rounded-[2rem] bg-custom-gray/60 dark:bg-custom-gray/40 border border-border backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20 cursor-pointer"
            >
              {/* Icon Container */}
              <div className="w-16 h-16 rounded-full bg-white dark:bg-background shadow-md shadow-black/5 flex items-center justify-center mb-8 border border-border/10">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 font-sans">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-foreground/75 text-sm md:text-base leading-relaxed mb-6 font-normal">
                {service.description}
              </p>

              {/* Learn More Link */}
              <Link 
                href={service.link}
                className="mt-auto inline-flex items-center gap-2 text-secondary font-bold text-sm md:text-base group/link transition-colors duration-300 hover:text-secondary/80"
              >
                Learn more
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/card:translate-x-2" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

