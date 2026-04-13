import { motion } from "framer-motion";

export function Journey() {
  const modules = [
    { num: "01", title: "Foundations & Dev Environment", tags: ["Git", "venv", "Agentic IDEs"] },
    { num: "02", title: "Programming for AI", tags: ["Python", "NumPy", "Pandas", "PyTorch"] },
    { num: "03", title: "Relational Databases & SQL", tags: ["PostgreSQL", "ETL pipelines"] },
    { num: "04", title: "Descriptive Analytics & EDA", tags: ["Hypothesis testing", "Seaborn", "Plotly"] },
    { num: "05", title: "Predictive Modeling", tags: ["Regression", "Trees", "Random Forests"] },
    { num: "06", title: "NLP Foundations", tags: ["spaCy", "Hugging Face", "BERT"] },
    { num: "07", title: "Advanced NLP", tags: ["Fine-tuning Transformers", "GPT"] },
    { num: "08", title: "RAG Systems", tags: ["Vector Retrieval", "Weaviate"] },
    { num: "09", title: "Knowledge Graphs", tags: ["SPARQL", "Semantic Web"] },
    { num: "10", title: "Deployment & DevOps", tags: ["FastAPI", "Docker", "Containerization"] },
  ];

  return (
    <section id="journey" className="py-24 relative bg-card/30">
      <div className="container px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold uppercase tracking-wider text-white inline-block text-shadow-neon-purple">
            AI Journey
          </h2>
          <p className="mt-4 text-secondary font-mono">Loading AI.SPIRE Curriculum Modules...</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative">
          {/* Subtle connecting lines behind grid */}
          <div className="absolute inset-0 bg-grid opacity-10 pointer-events-none -z-10"></div>
          
          {modules.map((mod, index) => (
            <motion.div
              key={mod.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="p-6 rounded-lg border border-primary/20 bg-background/80 backdrop-blur hover:border-primary box-shadow-neon-purple transition-all group relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <span className="font-display text-6xl font-black text-primary">{mod.num}</span>
              </div>
              
              <div className="text-secondary font-mono text-sm mb-2 opacity-80 group-hover:opacity-100 transition-opacity text-shadow-neon-blue">
                MODULE_{mod.num}
              </div>
              <h3 className="font-sans text-xl font-bold text-white mb-4 relative z-10 leading-tight">
                {mod.title}
              </h3>
              
              <div className="flex flex-wrap gap-2 mt-auto relative z-10">
                {mod.tags.map(tag => (
                  <span key={tag} className="text-xs px-2 py-1 bg-white/5 border border-white/10 rounded text-gray-300">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Capstone Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: modules.length * 0.1, duration: 0.5 }}
            className="p-6 rounded-lg border-2 border-secondary bg-secondary/10 backdrop-blur box-shadow-neon-blue relative overflow-hidden lg:col-span-2 flex flex-col justify-center animate-pulse duration-[3000ms]"
          >
            <div className="text-primary font-mono text-sm mb-2 text-shadow-neon-purple">
              MODULE_11 [ACTIVE]
            </div>
            <h3 className="font-display text-2xl font-bold text-white mb-2">
              Capstone Project
            </h3>
            <p className="text-secondary text-xl italic font-serif">"In progress..."</p>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary to-transparent"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
