import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-2">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            Built with <Heart className="w-4 h-4 text-primary" fill="currentColor" /> using React, TypeScript & Tailwind CSS
          </p>
          <p className="text-sm text-muted-foreground">
            © {currentYear} Syed Adil Mohammad. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
