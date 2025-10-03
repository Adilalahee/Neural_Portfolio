import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Certifications", id: "certifications" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-lg border-b border-border shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo - Left Side */}
          <button
            onClick={() => scrollToSection("hero")}
            className="hover:opacity-80 transition-all duration-300 z-50"
          >
            <img 
              src="https://i.ibb.co/Wv1wQMvR/adilalahee-logo.png" 
              alt="Adil Alahee Logo" 
              className="h-10 w-auto md:h-12"
            />
          </button>

          {/* Desktop Navigation - Right Side */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-muted-foreground hover:text-foreground transition-all duration-300 font-medium relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
            <Button
              onClick={() => scrollToSection("contact")}
              className="gradient-accent text-accent-foreground font-semibold px-6 hover:scale-105 transition-all duration-300"
            >
              Get in Touch
            </Button>
          </div>

          {/* Mobile Hamburger Menu Button - Right Side */}
          <button
            className="lg:hidden text-foreground hover:text-primary transition-all duration-300 z-50"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation - Slide-in from Right */}
        <div
          className={`lg:hidden fixed top-0 right-0 h-screen w-64 bg-background/95 backdrop-blur-xl border-l border-border shadow-2xl transform transition-transform duration-300 ease-in-out ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col pt-20 px-6 space-y-6">
            {navLinks.map((link, index) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-left text-lg text-muted-foreground hover:text-foreground transition-all duration-300 font-medium py-3 border-b border-border/50 hover:border-primary"
                style={{
                  animation: isMobileMenuOpen ? `slideIn 0.3s ease-out ${index * 0.1}s both` : 'none'
                }}
              >
                {link.label}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection("contact")}
              className="w-full gradient-accent text-accent-foreground font-semibold py-3 mt-4 hover:scale-105 transition-all duration-300"
              style={{
                animation: isMobileMenuOpen ? `slideIn 0.3s ease-out ${navLinks.length * 0.1}s both` : 'none'
              }}
            >
              Get in Touch
            </Button>
          </div>
        </div>

        {/* Overlay for Mobile Menu */}
        {isMobileMenuOpen && (
          <div
            className="lg:hidden fixed inset-0 bg-black/50 backdrop-blur-sm -z-10"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </div>

      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </nav>
  );
};

export default Navigation;