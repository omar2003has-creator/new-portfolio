import { FaLinkedin, FaGithub } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="border-t border-primary/20 bg-background py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-muted-foreground font-mono text-sm">
          © 2025 Omar Alakhras. All rights reserved.
        </p>
        
        <div className="flex items-center gap-6">
          <a href="#" className="text-muted-foreground hover:text-secondary transition-colors">
            <FaLinkedin size={20} />
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            <FaGithub size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
