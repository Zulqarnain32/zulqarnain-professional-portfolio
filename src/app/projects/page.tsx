"use client";

import React from "react";
import Projects from "@/components/Projects";
import Footer from "@/components/Footer";

export default function ProjectsPage() {
  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col font-sans transition-colors duration-300">
      {/* Spacer for fixed Navbar */}
      <div className="h-28" />

      {/* Projects component */}
      <main className="flex-1">
        <Projects />
      </main>

      {/* Footer component */}
      <Footer />
    </div>
  );
}
