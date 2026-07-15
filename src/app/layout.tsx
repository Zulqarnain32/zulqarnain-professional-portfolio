import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zulqarnain | MERN & PERN Stack Developer & Software Engineer",
  description: "Experienced MERN & PERN Stack Developer collaborating with clients and startups to build high-performance, user-friendly, and visually stunning web applications.",
  keywords: [
    "Zulqarnain",
    "MERN Stack Developer",
    "PERN Stack Developer",
    "Software Engineer",
    "Frontend Developer",
    "Backend Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "Full Stack Developer Portfolio",
    "Web Developer Pakistan"
  ],
  authors: [{ name: "Zulqarnain", url: "https://github.com/zulqarnainoraxtech" }],
  creator: "Zulqarnain",
  metadataBase: new URL("https://zulqarnain-professional-portfolio.vercel.app/"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://zulqarnain-professional-portfolio.vercel.app/",
    title: "Zulqarnain | MERN & PERN Stack Developer",
    description: "Experienced MERN & PERN Stack Developer collaborating with clients and startups to build high-performance, user-friendly, and visually stunning web applications.",
    siteName: "Zulqarnain Portfolio",
    images: [
      {
        url: "/assets/images/developer.jpg",
        width: 1200,
        height: 630,
        alt: "Zulqarnain - MERN Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zulqarnain | MERN & PERN Stack Developer",
    description: "Experienced MERN & PERN Stack Developer collaborating with clients and startups to build high-performance, user-friendly, and visually stunning web applications.",
    creator: "@Zulqarnain_dev",
    images: ["/assets/images/developer.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Zulqarnain",
  },
};

import Navbar from "@/components/Navbar/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0d0e12" />
        <Script
          id="pwa-register"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js').then(
                    function(registration) {
                      console.log('ServiceWorker registered with scope: ', registration.scope);
                    },
                    function(err) {
                      console.log('ServiceWorker registration failed: ', err);
                    }
                  );
                });
              }
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans">
        <Script
          id="theme-loader"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var mode = localStorage.getItem('theme');
                if (mode === 'dark') {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (e) {}
            `,
          }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
