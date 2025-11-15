import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "@/components/Logo";
import Orb from "@/components/Orb";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20">
      {/* Orb Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-auto">
        <Orb 
          hue={220}
          hoverIntensity={1.05}
          rotateOnHover={true}
          forceHoverState={false}
        />
      </div>

      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background/70 pointer-events-none" />

      {/* Centered Content - In front of 3D model */}
      <div className="relative z-10 container mx-auto px-4 py-12 pointer-events-none">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="flex justify-center mb-8">
            <div className="w-32 h-32 rounded-lg overflow-hidden">
              <img 
                src="/logo.png" 
                alt=" the Logo" 
                className="w-full h-full object-contain"
              />
            </div>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
            Welcome to{" "}
            <span className="text-gradient glow-primary">TechDome</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
            Building the future of technology together. Join our community of innovators, 
            developers, and tech enthusiasts shaping tomorrow.
          </p>
          <div className="flex flex-wrap gap-4 justify-center pt-4 pointer-events-auto">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
              <a href="https://chat.whatsapp.com/DnDRCiKrraZ6Tqux581Y9n" target="_blank" rel="noopener noreferrer">
                Join Now
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-border hover:bg-muted">
              <a href="#about">Learn More</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
