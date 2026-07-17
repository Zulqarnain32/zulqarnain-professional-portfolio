"use client";

import React from "react";
import Link from "next/link";
import Footer from "@/components/Footer";
import {
  Code2,
  Server,
  Database,
  Smartphone,
  TrendingUp,
  Layers,
  ArrowLeft,
  ArrowRight,
  Sparkles,
} from "lucide-react";

interface ServiceItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  technologies: string[];
  gradient: string;
}

const servicesData: ServiceItem[] = [
  {
    icon: <Code2 size={36} className="text-primary dark:text-secondary" />,
    title: "Frontend Development",
    description:
      "Building responsive, modern, and highly interactive user interfaces using React, Next.js, and Tailwind CSS. Focused on clean code and pixel-perfect execution.",
    technologies: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "Framer Motion",
    ],
    gradient: "from-emerald-500/10 via-transparent to-transparent",
  },
  {
    icon: <Server size={36} className="text-primary dark:text-secondary" />,
    title: "Backend Development",
    description:
      "Designing robust server-side architecture, RESTful/GraphQL APIs, and scalable microservices using Node.js, Express, and modern middleware practices.",
    technologies: [
      "Node.js",
      "Express",
      "RESTful APIs",
      "GraphQL",
      "WebSockets",
    ],
    gradient: "from-blue-500/10 via-transparent to-transparent",
  },
  {
    icon: <Database size={36} className="text-primary dark:text-secondary" />,
    title: "Database & API Design",
    description:
      "Structuring secure database schemas, implementing caching, and writing efficient queries using PostgreSQL, MongoDB, Redis, and Prisma ORM.",
    technologies: [
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Prisma ORM",
      "SQL Optimization",
    ],
    gradient: "from-purple-500/10 via-transparent to-transparent",
  },
  {
    icon: <Layers size={36} className="text-primary dark:text-secondary" />,
    title: "Full-Stack SaaS Development",
    description:
      "Developing end-to-end software as a service (SaaS) products from scratch, featuring secure multi-tenant authentication and stripe payment flows.",
    technologies: [
      "Next.js",
      "NextAuth",
      "Stripe Connect",
      "Clerk",
      "Dashboard Metrics",
    ],
    gradient: "from-amber-500/10 via-transparent to-transparent",
  },
  {
    icon: <TrendingUp size={36} className="text-primary dark:text-secondary" />,
    title: "SEO & Performance Tuning",
    description:
      "Optimizing website speed, maximizing Lighthouse scores, implementing server-side rendering, and structuring metadata for peak search engine rankings.",
    technologies: [
      "Next.js SSR",
      "Google Lighthouse",
      "Core Web Vitals",
      "Meta Tags",
      "Semantics",
    ],
    gradient: "from-pink-500/10 via-transparent to-transparent",
  },
  {
    icon: <Smartphone size={36} className="text-primary dark:text-secondary" />,
    title: "Mobile App Development",
    description:
      "Creating highly performant, native-feeling cross-platform mobile apps for Android using React Native and Expo.",
    technologies: [
      "React Native",
      "Expo",
      "Native APIs",
      "Mobile Navigation",
   
    ],
    gradient: "from-rose-500/10 via-transparent to-transparent",
  },
];

export default function ServicesPage() {
  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col font-sans transition-colors duration-300">
      {/* Spacer for fixed Navbar */}
      <div className="h-28" />

      {/* Services Hero Section */}
      <section className="relative py-16 md:py-24 overflow-hidden border-b border-border/10 bg-gradient-to-b from-custom-gray/30 via-transparent to-transparent">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="max-w-3xl space-y-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-foreground/60 hover:text-foreground text-sm font-semibold tracking-wide transition-colors group cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              Back to Home
            </Link>
            <div className="flex items-center text-sm font-semibold tracking-widest uppercase text-secondary bg-secondary/10 px-4 py-1.5 rounded-full border border-secondary/15 w-max">
              <Sparkles className="w-4 h-4 mr-2" />
              Professional Services
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-sans leading-tight">
              My Premium <span className="text-secondary">Development</span>{" "}
              Services
            </h1>
            <p className="text-foreground/75 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl font-normal">
              Specialized developer capabilities tailored to scale your digital
              presence, enhance software reliability, and deliver premium web
              experiences.
            </p>
          </div>
        </div>

        {/* Ambient background blur elements */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-primary/10 rounded-full blur-3xl -z-10 pointer-events-none" />
        <div className="absolute top-1/3 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10 pointer-events-none" />
      </section>

      {/* Services Grid Section */}
      <section className="max-w-7xl mx-auto w-full px-6 sm:px-8 lg:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className={`group flex flex-col items-start p-8 md:p-10 rounded-[2.2rem] bg-custom-gray/60 dark:bg-custom-gray/40 border border-border backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20 relative overflow-hidden`}
            >
              {/* Subtle top background highlight */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-40 group-hover:opacity-100 transition-opacity duration-500 -z-10`}
              />

              {/* Icon Container */}
              <div className="w-16 h-16 rounded-2xl bg-white dark:bg-background shadow-md shadow-black/5 flex items-center justify-center mb-8 border border-border/10 transition-transform duration-500 group-hover:scale-110">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 font-sans group-hover:text-primary dark:group-hover:text-secondary transition-colors duration-300">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-foreground/75 text-sm md:text-base leading-relaxed font-normal mb-8">
                {service.description}
              </p>

              {/* Tech Badges */}
              <div className="mt-auto pt-6 border-t border-border/20 w-full">
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="text-[10px] md:text-xs font-semibold tracking-wide px-2.5 py-1 rounded-md bg-white/40 dark:bg-white/5 border border-border/10 text-foreground/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA section */}
      <section className="bg-custom-gray/20 border-t border-border/10 py-16">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Have a project in mind?
          </h2>
          <p className="text-foreground/70 max-w-xl mx-auto">
            Let&apos;s build something amazing together. Reach out for a free
            consultation or project proposal.
          </p>
          <div className="pt-4">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 bg-primary dark:bg-secondary text-white dark:text-secondary-foreground font-semibold px-8 py-4 rounded-full transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              Get in Touch
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer component */}
      <Footer />
    </div>
  );
}
