import { motion } from "framer-motion";
import { Terminal, ChevronDown } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-grid opacity-30"></div>
        <div className="absolute inset-0 bg-scanline pointer-events-none mix-blend-overlay"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none"></div>
      </div>

      <div className="container relative z-10 px-4 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/50 bg-primary/10 text-primary text-sm font-medium mb-8 box-shadow-neon-purple"
        >
          <Terminal size={14} />
          <span>System Online</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <h1 
            className="font-display text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter mb-4 glitch"
            data-text="Omar Alakhras"
          >
            Omar Alakhras
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-xl md:text-2xl text-secondary font-medium tracking-wide mb-6 max-w-2xl text-shadow-neon-blue"
        >
          Computer Engineering Graduate | AI & Data Engineering Enthusiast
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-12"
        >
          Building the future at the intersection of software and intelligence
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto"
        >
          <a
            href="#journey"
            className="px-8 py-4 rounded-md bg-primary/20 border border-primary text-white font-semibold tracking-wider uppercase transition-all hover:bg-primary/40 hover:box-shadow-neon-purple relative overflow-hidden group"
          >
            <span className="relative z-10">View My Journey</span>
            <div className="absolute inset-0 -translate-x-full bg-primary/20 group-hover:translate-x-0 transition-transform duration-500 ease-in-out"></div>
          </a>
          <a
            href="#contact"
            className="px-8 py-4 rounded-md bg-transparent border border-secondary text-secondary font-semibold tracking-wider uppercase transition-all hover:bg-secondary/20 hover:box-shadow-neon-blue hover:text-white"
          >
            Contact Me
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground animate-bounce"
      >
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <ChevronDown size={20} className="text-primary" />
      </motion.div>
    </section>
  );
}
