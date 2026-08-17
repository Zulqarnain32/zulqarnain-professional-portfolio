/**
 * Structured Portfolio Knowledge Base for Zulqarnain Chohan.
 * 
 * Contains exclusively verified factual information from the portfolio website.
 * No speculative or external information is included.
 */

export interface PortfolioKnowledge {
  personal: {
    fullName: string;
    preferredName: string;
    titles: string[];
    summary: string;
    location: string;
  };
  contact: {
    email: string;
    phone: string;
    whatsapp: string;
    website: string;
    socials: {
      github: string;
      linkedin: string;
      twitter: string;
      instagram: string;
    };
  };
  education: Array<{
    duration: string;
    institution: string;
    degree: string;
  }>;
  experience: Array<{
    duration: string;
    company: string;
    role: string;
    description?: string;
  }>;
  skills: {
    frontend: string[];
    backend: string[];
    databasesAndCaching: string[];
    toolsAndDevOps: string[];
    proficiencyScores: Record<string, string>;
  };
  services: Array<{
    title: string;
    description: string;
    technologies: string[];
  }>;
  projects: Array<{
    id: number | string;
    title: string;
    category: string;
    description: string;
    tags: string[];
    githubUrl: string;
    liveUrl?: string;
    features?: string[];
  }>;
  blogs: Array<{
    title: string;
    category: string;
    readTime: string;
    date: string;
    excerpt: string;
  }>;
}

export const PORTFOLIO_CONTEXT: PortfolioKnowledge = {
  personal: {
    fullName: "Zulqarnain Chohan",
    preferredName: "Zulqarnain",
    titles: [
      "MERN Stack Developer",
      "PERN Stack Developer",
      "Software Engineer",
      "Full Stack Developer",
      "Backend Developer",
      "Frontend Developer",
    ],
    summary:
      "Experienced MERN & PERN Stack Developer collaborating with clients and startups to build high-performance, user-friendly, and visually stunning web applications.",
    location: "Pak Arab Phase 2, Lahore, Pakistan",
  },
  contact: {
    email: "zulqarnainc67@gmail.com",
    phone: "+92 3030128036",
    whatsapp: "+92 3030128036",
    website: "https://zulqarnain-professional-portfolio.vercel.app/",
    socials: {
      github: "https://github.com/zulqarnainoraxtech",
      linkedin: "https://www.linkedin.com/in/zulqarnain-chohan/",
      twitter: "https://x.com/Zulqarnain_dev",
      instagram: "https://www.instagram.com/zulqarnainchohan10/",
    },
  },
  education: [
    {
      duration: "2017 - 2019",
      institution: "The Quest High School",
      degree: "Matriculation",
    },
    {
      duration: "2019 - 2021",
      institution: "Civil Lines College",
      degree: "Intermediate in Computer Science (ICS)",
    },
    {
      duration: "2021 - 2025",
      institution: "Superior University Lahore",
      degree: "BS in Computer Science (BSCS)",
    },
  ],
  experience: [
    {
      duration: "2023 - 2025",
      company: "Self-Employed",
      role: "Full Stack Developer",
      description: "Collaborated with clients and startups building full-stack web solutions and user-centric applications.",
    },
    {
      duration: "2025 - 2026",
      company: "Orax Technologies",
      role: "Software Engineer Internship",
      description: "Contributed to software engineering workflows, backend architecture, and frontend components.",
    },
    {
      duration: "2026 - Present",
      company: "Orax Technologies",
      role: "Associate Software Engineer",
      description: "Building scalable backend services, performant frontend user experiences, and database systems.",
    },
  ],
  skills: {
    frontend: [
      "React",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "Tailwind CSS",
      "Redux",
      "TanStack Query",
      "Framer Motion",
    ],
    backend: [
      "Node.js",
      "Express",
      "RESTful APIs",
      "GraphQL",
      "WebSockets",
      "Socket.io",
      "Microservices",
    ],
    databasesAndCaching: [
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Prisma ORM",
      "SQL Optimization",
    ],
    toolsAndDevOps: [
      "Docker",
      "Prometheus",
      "Monaco Editor",
      "WebRTC",
      "NextAuth",
      "Clerk",
      "Stripe Connect",
      "React Native",
      "Expo",
    ],
    proficiencyScores: {
      "React": "95%",
      "Tailwind CSS": "95%",
      "TypeScript": "92%",
      "Next.js": "90%",
      "JavaScript": "90%",
      "TanStack Query": "88%",
      "Node.js": "88%",
      "Redux": "85%",
      "MongoDB": "85%",
      "PostgreSQL": "85%",
      "Prisma": "82%",
      "Redis": "80%",
    },
  },
  services: [
    {
      title: "Frontend Development",
      description:
        "Building responsive, modern, and highly interactive user interfaces using React, Next.js, and Tailwind CSS. Focused on clean code and pixel-perfect execution.",
      technologies: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Framer Motion"],
    },
    {
      title: "Backend Development",
      description:
        "Designing robust server-side architecture, RESTful/GraphQL APIs, and scalable microservices using Node.js, Express, and modern middleware practices.",
      technologies: ["Node.js", "Express", "RESTful APIs", "GraphQL", "WebSockets"],
    },
    {
      title: "Database & API Design",
      description:
        "Structuring secure database schemas, implementing caching, and writing efficient queries using PostgreSQL, MongoDB, Redis, and Prisma ORM.",
      technologies: ["PostgreSQL", "MongoDB", "Redis", "Prisma ORM", "SQL Optimization"],
    },
    {
      title: "Full-Stack SaaS Development",
      description:
        "Developing end-to-end software as a service (SaaS) products from scratch, featuring secure multi-tenant authentication and Stripe payment flows.",
      technologies: ["Next.js", "NextAuth", "Stripe Connect", "Clerk", "Dashboard Metrics"],
    },
    {
      title: "SEO & Performance Tuning",
      description:
        "Optimizing website speed, maximizing Lighthouse scores, implementing server-side rendering, and structuring metadata for peak search engine rankings.",
      technologies: ["Next.js SSR", "Google Lighthouse", "Core Web Vitals", "Meta Tags", "Semantics"],
    },
    {
      title: "Mobile App Development",
      description:
        "Creating highly performant, native-feeling cross-platform mobile apps for Android using React Native and Expo.",
      technologies: ["React Native", "Expo", "Native APIs", "Mobile Navigation"],
    },
  ],
  projects: [
    {
      id: 1,
      title: "OraxTask Manager",
      category: "Fullstack",
      description:
        "Enterprise task management suite featuring interactive Kanban boards, real-time activity feeds, workload charts, and role-based permissions.",
      tags: ["Next.js", "Node.js", "PostgreSQL", "Socket.io", "Tailwind CSS"],
      githubUrl: "https://github.com/zulqarnainoraxtech/oraxtask",
      liveUrl: "https://oraxtask.vercel.app",
    },
    {
      id: 2,
      title: "CodeShare - Live Editor",
      category: "Frontend",
      description:
        "A real-time collaborative code editor with audio/video room integration, supporting syntax highlighting for 15+ languages and instant share links.",
      tags: ["React", "Tailwind CSS", "WebRTC", "Monaco Editor", "Framer Motion"],
      githubUrl: "https://github.com/zulqarnainoraxtech/codeshare",
      liveUrl: "https://codeshare-live.vercel.app",
    },
    {
      id: 3,
      title: "Redis-Backed Cache API",
      category: "Backend",
      description:
        "Ultra-fast RESTful API Gateway utilizing Redis cache layer, token bucket rate-limiting, and detailed Prometheus monitoring metrics.",
      tags: ["Node.js", "Express", "Redis", "Docker", "Prometheus"],
      githubUrl: "https://github.com/zulqarnainoraxtech/redis-api-gateway",
      liveUrl: "https://github.com/zulqarnainoraxtech/redis-api-gateway",
    },
    {
      id: 4,
      title: "SecureAuth Identity Provider",
      category: "Backend",
      description:
        "Robust authentication provider supporting multi-factor authentication, JWT keys rotation, OAuth2 logins, and session auditing databases.",
      tags: ["Node.js", "PostgreSQL", "Prisma", "TypeScript", "MFA"],
      githubUrl: "https://github.com/zulqarnainoraxtech/secureauth-idp",
      liveUrl: "https://github.com/zulqarnainoraxtech/secureauth-idp",
    },
    {
      id: 5,
      title: "GlintPro",
      category: "Fullstack / Design Showcase",
      description:
        "Featured project demo and visual showcase highlighting high-performance UI and full-stack capabilities.",
      tags: ["Next.js", "Tailwind CSS", "React"],
      githubUrl: "https://github.com/zulqarnainoraxtech",
    },
  ],
  blogs: [
    {
      title: "Scaling Database Operations in PERN Stack: PostgreSQL Optimization Guide",
      category: "Database",
      readTime: "5 min read",
      date: "July 10, 2026",
      excerpt:
        "Learn how to leverage connection pooling, smart indexing, and query optimization to handle millions of records in modern Node.js & PostgreSQL applications.",
    },
    {
      title: "Unlocking Next-Level Performance with the React 19 Compiler & Server Actions",
      category: "React",
      readTime: "7 min read",
      date: "June 28, 2026",
      excerpt:
        "A deep dive into how React 19's compiler automates memoization and how Server Actions simplify asynchronous data fetching in modern Next.js apps.",
    },
    {
      title: "Designing Event-Driven Microservices with Node.js and Redis",
      category: "Node.js",
      readTime: "6 min read",
      date: "May 15, 2026",
      excerpt:
        "How to implement robust Pub/Sub patterns, message queues, and job scheduling using BullMQ and Redis in a modern web ecosystem.",
    },
  ],
};
