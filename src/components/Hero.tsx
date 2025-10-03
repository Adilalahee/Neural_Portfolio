import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import coverimage from "../assets/adilalaheee.jpg"

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen mt-16 flex items-center justify-center gradient-hero relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Part - Left Side */}
          <div className="space-y-8">
            <div className="space-y-4 animate-in fade-in slide-in-from-bottom duration-700" style={{ animationDelay: "100ms" }}>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-display font-bold leading-tight text-start">
                This is Syed Adil Mohammad Noor-A-Alahee{" "}
              </h1>
              <span className="gradient-primary text-2xl font-semibold text-start text-white bg-clip-text text-transparent block">
                Software Service Engineer
              </span>
              <p className="text-xl md:text-2xl text-muted-foreground font-medium">
                Bridging Technical Support, Client Success, and Full-Stack Web Development.
              </p>
            </div>

            <p className="text-lg md:text-xl text-muted-foreground animate-in fade-in slide-in-from-bottom duration-700" style={{ animationDelay: "200ms" }}>
              With <span className="text-primary font-semibold">3+ years of experience</span> in ERP support & software troubleshooting, 
              I'm transitioning into a full-stack web development role. Skilled in web technologies, ERP systems, 
              and problem-solving to deliver robust enterprise solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-start animate-in fade-in slide-in-from-bottom duration-700" style={{ animationDelay: "400ms" }}>
              <Button
                onClick={() => scrollToSection("projects")}
                size="lg"
                className="gradient-primary text-primary-foreground font-semibold shadow-glow hover:scale-105 transition-smooth group"
              >
                View Projects
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-smooth" size={20} />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary text-foreground hover:bg-primary/10 font-semibold"
                asChild
              >
                <a href="https://drive.google.com/file/d/1z3Ek8u_CiByTWXrBXIpLDT-FlZ_A8Ys_/view?usp=sharing" download>
                  Download Resume
                </a>
              </Button>
            </div>

            <div className="flex gap-6 pt-4 animate-in fade-in slide-in-from-bottom duration-700" style={{ animationDelay: "600ms" }}>
              <a
                href="https://github.com/Adilalahee"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-smooth"
                aria-label="GitHub"
              >
                <Github size={28} />
              </a>
              <a
                href="https://www.linkedin.com/in/adilalahee"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-smooth"
                aria-label="LinkedIn"
              >
                <Linkedin size={28} />
              </a>
              <a
                href="mailto:adilalahee@yahoo.com"
                className="text-muted-foreground hover:text-primary transition-smooth"
                aria-label="Email"
              >
                <Mail size={28} />
              </a>
            </div>
          </div>

          {/* Professional Photo - Right Side */}
          <div className="flex justify-center lg:justify-end animate-in fade-in slide-in-from-bottom duration-700">
            <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary shadow-glow">
              <img 
                src={coverimage} 
                alt="Professional Photo"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;