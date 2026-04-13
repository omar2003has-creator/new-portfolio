import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export function Contact() {
  return (
    <section id="contact" className="py-24 relative bg-card/50">
      <div className="container px-4 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="p-12 rounded-2xl border border-secondary/30 bg-background/50 backdrop-blur-lg relative overflow-hidden box-shadow-neon-blue"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-secondary box-shadow-neon-blue"></div>
          
          <h2 className="font-display text-3xl md:text-5xl font-bold uppercase tracking-wider text-white mb-6">
            Get In Touch
          </h2>
          
          <p className="text-lg text-gray-300 mb-10 max-w-2xl mx-auto">
            My inbox is always open. Whether you have a question, an opportunity, or just want to say hi, I'll try my best to get back to you!
          </p>

          <a 
            href="mailto:contact@omar-alakhras.com" 
            className="inline-flex items-center gap-3 px-8 py-4 rounded bg-primary text-white font-bold tracking-wide uppercase hover:bg-primary/80 transition-colors box-shadow-neon-purple mb-12"
          >
            <Mail size={20} />
            <span>Send Transmission</span>
          </a>

          <div className="flex justify-center gap-8 border-t border-white/10 pt-10 mt-4">
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-secondary transition-all hover:scale-110 hover:text-shadow-neon-blue"
            >
              <FaLinkedin size={36} />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a 
              href="#" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-all hover:scale-110 hover:text-shadow-neon-purple"
            >
              <FaGithub size={36} />
              <span className="sr-only">GitHub</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
