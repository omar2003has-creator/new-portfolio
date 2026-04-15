import { motion } from "framer-motion";
import { Database, BrainCircuit, Activity, ExternalLink } from "lucide-react";

export function Projects() {
  const placeholders = [
    {
      title: "AI & ML Foundations",
      icon: BrainCircuit,
      link: "https://github.com/omar2003has-creator/Engineering-Prework",
    },
    {
      title: "PyTorch & Deep Learning",
      icon: Activity,
      link: "https://github.com/LevelUp-Applied-AI/m2-i2-pytorch-omar2003has-creator",
    },
    {
      title: "Data Pipelines & SQL",
      icon: Database,
      link: "https://github.com/omar2003has-creator/SQL-Murder-Mystery",
    },
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="container px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold uppercase tracking-wider text-white inline-block text-shadow-neon-blue">
            Projects
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {placeholders.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative aspect-video rounded-lg border-2 border-dashed border-primary/40 bg-card/20 flex flex-col items-center justify-center p-6 overflow-hidden group hover:border-primary/80 transition-colors"
              >
                <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-primary/5 to-transparent pointer-events-none"></div>

                <Icon
                  size={48}
                  className="text-primary/50 mb-4 group-hover:text-primary transition-colors"
                />
                <h3 className="font-display text-xl font-medium text-white mb-1">
                  {item.title}
                </h3>

                {/* --- الرابط الذي يظهر دائماً تحت الاسم --- */}
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-secondary text-xs font-mono hover:underline flex items-center gap-1 mb-4 z-10"
                >
                  <ExternalLink size={12} />
                  view source code
                </a>
                {/* -------------------------------------- */}

                <div className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-secondary px-4 py-2 border border-secondary rounded box-shadow-neon-blue hover:bg-secondary hover:text-background transition-all"
                  >
                    VIEW ON GITHUB
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center text-muted-foreground font-mono text-sm"
        >
          <p>Click on cards to explore the repositories.</p>
        </motion.div>
      </div>
    </section>
  );
}
