import { motion } from "framer-motion";

export function About() {
  const skills = [
    "Python", "PyTorch", "SQL", "NLP", "Git", "Docker", "FastAPI", "Pandas", "PostgreSQL"
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row gap-12 items-center"
        >
          <div className="flex-1 space-y-6">
            <div className="inline-block">
              <h2 className="font-display text-3xl md:text-5xl font-bold uppercase tracking-wider text-white border-b-2 border-primary pb-2 pr-8 inline-block box-shadow-neon-purple shadow-none mb-6">
                About Me
              </h2>
            </div>
            
            <div className="p-6 rounded-lg border border-primary/30 bg-card/50 backdrop-blur-sm relative overflow-hidden group hover:border-primary/60 transition-colors">
              <div className="absolute top-0 left-0 w-1 h-full bg-primary box-shadow-neon-purple"></div>
              
              <p className="text-lg leading-relaxed text-gray-300 font-sans">
                I am a Computer Engineering graduate passionate about the intersection of software systems and Artificial Intelligence. Currently, I am deep-diving into the AI.SPIRE program to master AI, NLP, and Data Engineering.
              </p>
              
              <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center border border-secondary box-shadow-neon-blue">
                  <span className="font-display font-bold text-secondary">BAU</span>
                </div>
                <div>
                  <h4 className="text-white font-medium">Al-Balqa' Applied University</h4>
                  <p className="text-sm text-secondary font-mono">B.S. Computer Engineering</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 w-full">
            <h3 className="font-display text-xl text-secondary mb-6 tracking-wide text-shadow-neon-blue">Tech Stack & Arsenal</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  className="px-4 py-2 rounded border border-primary/40 bg-primary/5 text-white text-sm font-medium hover:bg-primary/20 hover:border-primary box-shadow-neon-purple transition-all cursor-default"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
