"use client";

import React, { useState } from "react";
import { ExternalLink, Code2, Monitor, Database, Terminal } from "lucide-react";
import Image from "next/image";
const GithubIcon = ({ size = 16 }: { size?: number }) => (
  <svg className="fill-current" width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
  </svg>
);

interface Project {
  id: number;
  title: string;
  category: "Fullstack" | "Frontend" | "Backend" | "All";
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl: string;
  visualType: "dashboard" | "editor" | "database" | "terminal";
  gradient: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "OraxTask Manager",
    category: "Fullstack",
    description: "Enterprise task management suite featuring interactive Kanban boards, real-time activity feeds, workload charts, and role-based permissions.",
    tags: ["Next.js", "Node.js", "PostgreSQL", "Socket.io", "Tailwind CSS"],
    githubUrl: "https://github.com/zulqarnainoraxtech/oraxtask",
    liveUrl: "https://oraxtask.vercel.app",
    visualType: "dashboard",
    gradient: "from-[#344C36] via-[#1E2E20] to-background",
  },
  {
    id: 2,
    title: "CodeShare - Live Editor",
    category: "Frontend",
    description: "A real-time collaborative code editor with audio/video room integration, supporting syntax highlighting for 15+ languages and instant share links.",
    tags: ["React", "Tailwind CSS", "WebRTC", "Monaco Editor", "Framer Motion"],
    githubUrl: "https://github.com/zulqarnainoraxtech/codeshare",
    liveUrl: "https://codeshare-live.vercel.app",
    visualType: "editor",
    gradient: "from-[#FAAD1A]/20 via-[#1B1B1B] to-background",
  },
  {
    id: 3,
    title: "Redis-Backed Cache API",
    category: "Backend",
    description: "Ultra-fast RESTful API Gateway utilizing Redis cache layer, token bucket rate-limiting, and detailed Prometheus monitoring metrics.",
    tags: ["Node.js", "Express", "Redis", "Docker", "Prometheus"],
    githubUrl: "https://github.com/zulqarnainoraxtech/redis-api-gateway",
    liveUrl: "https://github.com/zulqarnainoraxtech/redis-api-gateway",
    visualType: "database",
    gradient: "from-[#344C36]/30 via-[#0B0F0C] to-background",
  },
  {
    id: 4,
    title: "SecureAuth Identity Provider",
    category: "Backend",
    description: "Robust authentication provider supporting multi-factor authentication, JWT keys rotation, OAuth2 logins, and session auditing databases.",
    tags: ["Node.js", "PostgreSQL", "Prisma", "TypeScript", "MFA"],
    githubUrl: "https://github.com/zulqarnainoraxtech/secureauth-idp",
    liveUrl: "https://github.com/zulqarnainoraxtech/secureauth-idp",
    visualType: "terminal",
    gradient: "from-[#FAAD1A]/10 via-[#121613] to-background",
  },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const filteredProjects = projectsData.filter(
    (project) => activeCategory === "All" || project.category === activeCategory
  );

  const categories = ["All", "Fullstack", "Frontend", "Backend"];

  // Helper to render beautiful interactive CSS representations instead of static image placeholders
  const renderVisualDemo = (type: string) => {
    switch (type) {
      case "dashboard":
        return (
          <div className="w-full h-full p-4 flex flex-col justify-between text-[10px] font-mono text-white/70">
            <div className="flex items-center justify-between border-b border-white/10 pb-2">
              <span className="flex items-center gap-1.5"><Monitor size={12} className="text-secondary" /> OraxTask Board</span>
              <span className="px-1.5 py-0.5 rounded bg-secondary/15 text-secondary text-[8px]">v1.0.4</span>
            </div>
            <div className="grid grid-cols-3 gap-2 my-2 flex-1">
              <div className="bg-white/5 rounded p-2 flex flex-col gap-1 border border-white/5">
                <span className="text-white font-bold text-[8px] uppercase tracking-wider text-secondary">To Do</span>
                <div className="bg-white/5 p-1 rounded text-[8px]">Setup DB</div>
                <div className="bg-white/5 p-1 rounded text-[8px]">OAuth Config</div>
              </div>
              <div className="bg-white/5 rounded p-2 flex flex-col gap-1 border border-white/5">
                <span className="text-white font-bold text-[8px] uppercase tracking-wider text-primary-foreground">In Progress</span>
                <div className="bg-primary/20 border border-primary/30 p-1 rounded text-[8px] text-white">Refactor APIs</div>
              </div>
              <div className="bg-white/5 rounded p-2 flex flex-col gap-1 border border-white/5">
                <span className="text-white font-bold text-[8px] uppercase tracking-wider text-emerald-400">Done</span>
                <div className="bg-emerald-500/10 border border-emerald-500/20 p-1 rounded text-[8px] text-emerald-300">CI/CD Setup</div>
              </div>
            </div>
          </div>
        );
      case "editor":
        return (
          <div className="w-full h-full p-4 flex flex-col justify-between text-[10px] font-mono text-white/60">
            <div className="flex items-center gap-2 border-b border-white/10 pb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
              <span className="w-2.5 h-2.5 rounded-full bg-green-500/80"></span>
              <span className="text-[9px] ml-2 text-white/40">workspace/editor.tsx</span>
            </div>
            <div className="flex-1 py-3 text-[9px] leading-relaxed text-emerald-400">
              <p><span className="text-purple-400">const</span> CodeEditor = () =&gt; &#123;</p>
              <p className="pl-3 text-white/80"><span className="text-blue-400">const</span> [code, setCode] = <span className="text-yellow-400">useState</span>(<span className="text-orange-300">&quot;&quot;</span>);</p>
              <p className="pl-3 text-white/50"></p>
              <p className="pl-3 text-emerald-400"><span className="text-yellow-400">useEffect</span>(() =&gt; socket.on(<span className="text-orange-300">&quot;sync&quot;</span>)...</p>
              <p>&#125;;</p>
            </div>
          </div>
        );
      case "database":
        return (
          <div className="w-full h-full p-4 flex flex-col justify-between text-[10px] font-mono text-white/60">
            <div className="flex items-center justify-between border-b border-white/10 pb-2">
              <span className="flex items-center gap-1.5"><Database size={12} className="text-secondary" /> Redis Cache layer</span>
              <span className="text-emerald-400 animate-pulse">● Connected</span>
            </div>
            <div className="flex-1 flex flex-col justify-center gap-2">
              <div className="flex justify-between items-center bg-white/5 px-3 py-1.5 rounded border border-white/5">
                <span className="text-secondary">GET /api/v1/users/42</span>
                <span className="text-[8px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300">CACHE HIT</span>
              </div>
              <div className="flex justify-between items-center bg-white/5 px-3 py-1.5 rounded border border-white/5">
                <span className="text-white/80">Latency:</span>
                <span className="text-secondary font-bold">1.24 ms</span>
              </div>
            </div>
          </div>
        );
      case "terminal":
        return (
          <div className="w-full h-full p-4 flex flex-col justify-between text-[10px] font-mono text-white/60">
            <div className="flex items-center gap-2 border-b border-white/10 pb-2">
              <Terminal size={12} className="text-secondary" />
              <span className="text-[9px] text-white/40">secureauth-audit.sh</span>
            </div>
            <div className="flex-1 py-3 text-[8px] text-yellow-300/80 leading-normal">
              <p className="text-white/40">$ node audit-sessions.js</p>
              <p className="text-emerald-400">[OK] JWT Verification Keys Rotated successfully.</p>
              <p>[INFO] Checked 14,204 active sessions.</p>
              <p className="text-red-400">[WARN] 2 unauthenticated access attempts logged.</p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="projects" className="py-12 md:py-24 bg-background text-foreground transition-colors duration-300 relative overflow-hidden border-t border-border/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-8 mb-16">
          <div className="flex flex-col space-y-3">
            <div className="flex items-center text-sm font-semibold tracking-wider text-primary dark:text-foreground/80 uppercase">
              <span className="w-6 h-0.5 bg-secondary mr-3 rounded-full"></span>
              Projects
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight font-sans">
              Featured <span className="text-secondary">Works</span> & Demos
            </h2>
          </div>

          {/* Filtering buttons */}
          <div className="flex w-full md:w-auto overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden gap-1.5 sm:gap-2.5 bg-custom-gray/60 dark:bg-custom-gray/40 border border-border/50 p-1.5 rounded-full backdrop-blur-sm whitespace-nowrap">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`flex-1 md:flex-initial text-center shrink-0 px-3 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 cursor-pointer ${
                  activeCategory === category
                    ? "bg-primary dark:bg-secondary text-white dark:text-secondary-foreground shadow-lg"
                    : "text-foreground/75 hover:text-foreground hover:bg-white/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col rounded-[2rem] bg-custom-gray/60 dark:bg-custom-gray/40 border border-border backdrop-blur-sm overflow-hidden transition-all"
            >
              {/* Visual Demo / Graphic Top Section */}
              <div className="relative h-[400px] bg-[#090D0A] border-b border-border/10 overflow-hidden">
                <Image
                  src="/assets/images/glintpro.png"
                  height={100}
                  width={100}
                  alt={project.title}
                  className="w-full h-full object-contain transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-black/5  transition-all duration-500 pointer-events-none" />
              </div>

              {/* Text / Details Section */}
              <div className="p-8 flex flex-col flex-1">
                <span className="text-[10px] font-bold tracking-widest uppercase text-secondary mb-3">
                  {project.category} Project
                </span>

                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 font-sans group-hover:text-primary dark:group-hover:text-secondary transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-foreground/75 text-sm md:text-base leading-relaxed font-normal mb-6 flex-1">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-md text-xs font-semibold bg-white dark:bg-background border border-border/40 text-foreground/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Project links footer */}
                <div className="flex items-center gap-4 pt-4 border-t border-border/30">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold text-foreground/70 hover:text-primary dark:hover:text-secondary transition-colors"
                  >
                    <GithubIcon size={16} /> Code
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-bold text-secondary hover:underline transition-colors ml-auto"
                  >
                    Live Demo <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
