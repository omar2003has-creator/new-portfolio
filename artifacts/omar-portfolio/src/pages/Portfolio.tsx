import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Journey } from "@/components/sections/Journey";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";

export default function Portfolio() {
  return (
    <div className="dark min-h-screen bg-background text-foreground selection:bg-primary/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Journey />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
