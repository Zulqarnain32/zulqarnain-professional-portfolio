"use client";

import React, { useState } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";
import { Search, Clock, Calendar, ArrowRight, X, ChevronRight, Share2, Check } from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  category: "Database" | "React" | "Node.js";
  readTime: string;
  date: string;
  excerpt: string;
  content: string[];
  imagePrompt: string;
}

const blogPosts: BlogPost[] = [
  {
    id: "pern-postgres-scaling",
    title: "Scaling Database Operations in PERN Stack: PostgreSQL Optimization Guide",
    category: "Database",
    readTime: "5 min read",
    date: "July 10, 2026",
    excerpt: "Learn how to leverage connection pooling, smart indexing, and query optimization to handle millions of records in modern Node.js & PostgreSQL applications.",
    imagePrompt: "PostgreSQL scaling architecture, high tech database schema node diagram, abstract minimal dark theme",
    content: [
      "Building application backends using the PERN stack (PostgreSQL, Express, React, and Node.js) has become a industry favorite due to type safety, rich relational modeling, and the performance of Postgres. However, as your user base grows from hundreds to hundreds of thousands, database queries can quickly become your application's primary bottleneck.",
      "To optimize database performance, the first line of defense is database indexing. Without appropriate indexes, PostgreSQL must perform sequential scans (scanning every row in a table) which leads to high CPU and disk I/O. By creating B-Tree indexes on frequently filtered columns (like user IDs or foreign keys), you can reduce query latency from seconds to milliseconds.",
      "Another critical aspect of scaling is connection pooling. By default, every database connection in Node.js consumes server resources. Using pg-pool or pgBouncer ensures that a set of active connections are reused efficiently, rather than opening and destroying connections on every single API request.",
      "Lastly, analyze slow queries using the EXPLAIN ANALYZE command. This reveals the actual execution plan of your SQL query, letting you detect nested loops, unindexed scans, and sub-optimal joins so you can rewrite them for peak efficiency."
    ]
  },
  {
    id: "react-19-compiler",
    title: "Unlocking Next-Level Performance with the React 19 Compiler & Server Actions",
    category: "React",
    readTime: "7 min read",
    date: "June 28, 2026",
    excerpt: "A deep dive into how React 19's compiler automates memoization and how Server Actions simplify asynchronous data fetching in modern Next.js apps.",
    imagePrompt: "React JS compiler code visual abstract concept, glowing yellow react logo, dark green background",
    content: [
      "React 19 marks one of the most radical shifts in the React framework since the introduction of Hooks. The headline feature is the React Compiler (formerly React Forget), which completely automates memoization. Developers no longer need to manually write useMemo or useCallback hooks to prevent unnecessary child component rerenders.",
      "The compiler compiles your standard React JavaScript code into optimized code behind the scenes, determining exactly when dependencies change and only updating the DOM when necessary. This simplifies component codebases, eliminating boilerplate memo hooks and reducing room for human error.",
      "Alongside the compiler, React 19 introduces native Server Actions, allowing frontend components to call server-side functions directly without manually setting up API endpoints. This bridges the gap between client and server, enabling seamless form handling, loading states, and error handling through simple async functions.",
      "By combining auto-memoization with server actions, modern React applications achieve significantly lower bundle sizes, faster initial page loads, and highly responsive user experiences."
    ]
  },
  {
    id: "event-driven-node-redis",
    title: "Designing Event-Driven Microservices with Node.js and Redis",
    category: "Node.js",
    readTime: "6 min read",
    date: "May 15, 2026",
    excerpt: "How to implement robust Pub/Sub patterns, message queues, and job scheduling using BullMQ and Redis in a modern web ecosystem.",
    imagePrompt: "Redis pub sub message queue flow diagram design style neon lines dark mode",
    content: [
      "Modern web architectures often require running heavy tasks like sending verification emails, processing image uploads, or syncing third-party APIs. Running these synchronously in your main Express request-response loop ruins user experience and quickly exhausts server resources.",
      "An event-driven structure offloads these intensive operations to background workers. By using Redis as a high-performance in-memory message broker, you can instantiate robust task queues. BullMQ is a popular Node.js library that utilizes Redis to manage job states (waiting, active, completed, failed) with ease.",
      "In this design, the main Node.js web server acts as a 'producer', pushing jobs onto a named queue in Redis and immediately returning a success response to the user. Independent background 'worker' processes then pull these jobs off the queue and execute them asynchronously.",
      "This separation of concerns guarantees that your client-facing API remains extremely fast, while also providing automatic retries, concurrency limits, and scheduled execution parameters for background tasks."
    ]
  }
];

export default function BlogsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>(" ");
  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const categories = ["All", "React", "Node.js", "Database"];

  const filteredBlogs = blogPosts.filter((blog) => {
    const matchesCategory = selectedCategory === "All" || blog.category === selectedCategory;
    const matchesSearch = blog.title.toLowerCase().includes(searchQuery.toLowerCase().trim()) || 
                          blog.excerpt.toLowerCase().includes(searchQuery.toLowerCase().trim());
    return matchesCategory && matchesSearch;
  });

  const handleCopyLink = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(`${window.location.origin}/blogs#${id}`);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col font-sans transition-colors duration-300">
      
      {/* Blog Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden border-b border-border/10 bg-gradient-to-b from-custom-gray/30 via-transparent to-transparent">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="max-w-3xl space-y-6">
            <span className="text-secondary font-bold text-sm tracking-widest uppercase bg-secondary/10 px-4 py-1.5 rounded-full border border-secondary/15">
              Insights & Knowledge
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight font-sans leading-tight">
              My Technical <span className="text-secondary">Blog</span>
            </h1>
            <p className="text-foreground/75 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl font-normal">
              Deep dives, tutorials, and discussions on full-stack architecture, React compiler, databases, microservices, and modern web developer ecosystems.
            </p>
          </div>
        </div>

        {/* Ambient background blur elements */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-primary/10 rounded-full blur-3xl -z-10 pointer-events-none" />
        <div className="absolute top-1/3 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl -z-10 pointer-events-none" />
      </section>

      {/* Blog Filter & Search Section */}
      <section className="max-w-7xl mx-auto w-full px-6 sm:px-8 lg:px-12 py-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-8 border-b border-border/20">
          {/* Categories Tab */}
          <div className="flex flex-wrap gap-2.5">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide border transition-all duration-300 cursor-pointer ${
                  selectedCategory === category
                    ? "bg-secondary text-secondary-foreground border-secondary shadow-md shadow-secondary/10"
                    : "bg-custom-gray/60 dark:bg-custom-gray/40 text-foreground/75 border-border/50 hover:border-primary/40 dark:hover:border-secondary/40"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-80">
            <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-foreground/45">
              <Search className="w-4 h-4" />
            </span>
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery === " " ? "" : searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-custom-gray/60 dark:bg-custom-gray/40 border border-border/60 rounded-full pl-11 pr-4 py-2.5 text-sm text-foreground focus:outline-none focus:border-primary/50 dark:focus-border-secondary/50 transition-colors duration-300"
            />
          </div>
        </div>

        {/* Blogs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-12">
          {filteredBlogs.length > 0 ? (
            filteredBlogs.map((blog) => (
              <article
                key={blog.id}
                onClick={() => setSelectedBlog(blog)}
                className="group flex flex-col bg-custom-gray/40 dark:bg-custom-gray/20 border border-border/40 hover:border-primary/30 dark:hover:border-secondary/30 rounded-3xl p-6 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 dark:hover:shadow-secondary/5 hover:-translate-y-1.5 cursor-pointer"
              >
                <div className="flex items-center justify-between mb-5">
                  <span className="text-[11px] font-bold tracking-widest uppercase text-secondary bg-secondary/10 px-3 py-1 rounded-md">
                    {blog.category}
                  </span>
                  <div className="flex items-center gap-1.5 text-xs text-foreground/50">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{blog.readTime}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold font-sans tracking-tight mb-3 text-foreground group-hover:text-primary dark:group-hover:text-secondary transition-colors duration-300 line-clamp-2">
                  {blog.title}
                </h3>

                <p className="text-foreground/70 text-sm leading-relaxed mb-6 font-normal line-clamp-3">
                  {blog.excerpt}
                </p>

                <div className="mt-auto pt-5 border-t border-border/20 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-foreground/50">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{blog.date}</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <button
                      onClick={(e) => handleCopyLink(blog.id, e)}
                      className="p-2 rounded-full hover:bg-custom-gray text-foreground/50 hover:text-foreground transition-colors cursor-pointer"
                      title="Copy Link"
                      aria-label="Copy blog link"
                    >
                      {copiedId === blog.id ? <Check className="w-4 h-4 text-emerald-500" /> : <Share2 className="w-4 h-4" />}
                    </button>
                    <div className="w-8 h-8 rounded-full bg-primary/10 group-hover:bg-primary dark:group-hover:bg-secondary text-primary dark:text-secondary dark:group-hover:text-secondary-foreground group-hover:text-white flex items-center justify-center transition-all duration-300">
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </div>
                  </div>
                </div>
              </article>
            ))
          ) : (
            <div className="col-span-full py-16 text-center text-foreground/55">
              No articles found matching your query.
            </div>
          )}
        </div>
      </section>

      {/* Footer component */}
      <Footer />

      {/* Blog Details Modal */}
      {selectedBlog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md transition-opacity duration-300">
          <div 
            className="bg-background border border-border max-w-3xl w-full max-h-[85vh] overflow-y-auto rounded-3xl shadow-2xl p-6 sm:p-8 md:p-10 relative flex flex-col animate-fade-in-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between pb-6 border-b border-border/30">
              <div className="flex items-center gap-3">
                <span className="text-xs font-bold tracking-widest uppercase text-secondary bg-secondary/10 px-3.5 py-1.5 rounded-md">
                  {selectedBlog.category}
                </span>
                <span className="text-xs text-foreground/55 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> {selectedBlog.readTime}
                </span>
              </div>
              <button
                onClick={() => setSelectedBlog(null)}
                className="w-10 h-10 rounded-full bg-custom-gray/60 dark:bg-custom-gray/40 border border-border flex items-center justify-center text-foreground/60 hover:text-foreground transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="py-6 space-y-6 flex-1">
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight font-sans text-foreground">
                {selectedBlog.title}
              </h2>
              
              <div className="flex items-center gap-2 text-xs text-foreground/50">
                <Calendar className="w-4 h-4" />
                <span>Published on {selectedBlog.date} • Written by Zulqarnain</span>
              </div>

              <div className="prose prose-neutral dark:prose-invert max-w-none text-foreground/80 space-y-4 text-sm sm:text-base leading-relaxed font-normal">
                {selectedBlog.content.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>

            {/* Modal Footer */}
            <div className="pt-6 border-t border-border/30 flex items-center justify-between mt-6">
              <button
                onClick={(e) => handleCopyLink(selectedBlog.id, e)}
                className="inline-flex items-center gap-2 text-sm font-semibold text-foreground/75 hover:text-secondary transition-colors cursor-pointer"
              >
                {copiedId === selectedBlog.id ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-500" /> Link Copied!
                  </>
                ) : (
                  <>
                    <Share2 className="w-4 h-4" /> Share Article
                  </>
                )}
              </button>
              <button
                onClick={() => setSelectedBlog(null)}
                className="px-6 py-2.5 rounded-full bg-primary text-white hover:bg-primary/95 dark:bg-secondary dark:text-secondary-foreground dark:hover:bg-secondary/95 font-semibold text-sm transition-all duration-300 cursor-pointer"
              >
                Close Reading Mode
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
