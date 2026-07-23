import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Skills } from "@/sections/Skills";
import { Experience } from "@/sections/Experience";
import { Projects } from "@/sections/Projects";
import { CodingProfiles } from "@/sections/CodingProfiles";
import { Leadership } from "@/sections/Leadership";
import { Contact } from "@/sections/Contact";
import { Footer } from "@/sections/Footer";
import { SidebarNav } from "@/components/layout/SidebarNav";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full lg:grid lg:grid-cols-[280px_1fr] xl:grid-cols-[340px_1fr] max-w-[1920px] mx-auto">
      <SidebarNav />
      <div className="flex flex-col w-full min-w-0 pr-0 lg:pr-12 xl:pr-24">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <CodingProfiles />
        <Leadership />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
