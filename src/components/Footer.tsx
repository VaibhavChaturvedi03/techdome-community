import { Link } from "react-router-dom";
import { Facebook, Twitter, Mail, Instagram, Linkedin, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-background/40 backdrop-blur-sm border-t border-border mt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg overflow-hidden flex-shrink-0">
              <img 
                src="/logo.png" 
                alt="TechDome Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-sm font-bold text-gradient">TechDome</span>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-3">
            <a href="https://x.com/Techdome226490?t=GVs3NewJUtEpTQxMKG9eeg&s=09" target="_blank" className="p-1.5 rounded-full hover:opacity-80 transition-opacity text-foreground">
              <Twitter size={14} />
            </a>
            <a href="https://www.instagram.com/techdome.official?igsh=MTJ0Zmdzd3lhbHA2YQ==" target="_blank" className="p-1.5 rounded-full hover:opacity-80 transition-opacity text-foreground">
              <Instagram size={14} />
            </a>
            <a href="https://www.linkedin.com/company/techdome-dev/about/" target="_blank" className="p-1.5 rounded-full hover:opacity-80 transition-opacity text-foreground">
              <Linkedin size={14} />
            </a>
            <a href="https://github.com/Tech-Dome" target="_blank" className="p-1.5 rounded-full hover:opacity-80 transition-opacity text-foreground">
              <Github size={14} />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-xs text-muted-foreground">
            <p>&copy; 2025 TechDome. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
