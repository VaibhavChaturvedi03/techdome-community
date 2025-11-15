import { Link, useLocation, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Logo from "@/components/Logo";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Events", path: "/events" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-sm">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center hover:opacity-80 transition-opacity flex-shrink-0">
            <div className="w-10 h-10 rounded-lg overflow-hidden">
              <img 
                src="/logo.png" 
                alt="TechDome Logo" 
                className="w-full h-full object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center space-x-16 absolute left-1/2 transform -translate-x-1/2">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-sm font-medium transition-colors ${
                    isActive ? "text-primary" : "text-foreground hover:text-primary"
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `block text-sm font-medium transition-colors ${
                    isActive ? "text-primary" : "text-foreground hover:text-primary"
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
