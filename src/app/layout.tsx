import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "@/components/SmoothScrolling";
import { SplineBackground } from "@/components/layout/SplineBackground";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Arjun Tapriya | Software Engineer & Developer",
  description: "Computer Science Engineering student & software developer specializing in modern web experiences, AI/ML, and App Development.",
  keywords: ["Arjun Tapriya", "Software Engineer", "Frontend Developer", "Next.js", "React", "AI/ML", "App Development", "Portfolio"],
  authors: [{ name: "Arjun Tapriya" }],
  creator: "Arjun Tapriya",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://arjun-tapriya.netlify.app",
    title: "Arjun Tapriya | Software Engineer & Developer",
    description: "Computer Science Engineering student & software developer specializing in modern web experiences, AI/ML, and App Development.",
    siteName: "Arjun Tapriya Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arjun Tapriya | Software Engineer & Developer",
    description: "Computer Science Engineering student & software developer specializing in modern web experiences, AI/ML, and App Development.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="min-h-screen bg-black text-brand-text antialiased selection:bg-brand-accent selection:text-white relative">
        <SplineBackground />
        
        <SmoothScrolling>
          {children}
        </SmoothScrolling>
      </body>
    </html>
  );
}
