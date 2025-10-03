import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Tutor Management System",
      description: "A comprehensive tutoring platform connecting students with qualified teachers in Chittagong. Features include teacher profiles, course listings, student enrollment, and real-time messaging.",
      tags: ["React", "Node.js", "MongoDB", "Express"],
      image: "https://i.ibb.co/gMCcsSt4/screencapture-tutorbooking-3cbfe-web-app-2025-10-03-00-30-25.png",
      github_client: "https://github.com/Adilalahee/Tutor_Booking_Client",
      github_server:"https://github.com/Adilalahee/Tutor_Booking_Server",
      live: "https://tutorbooking-3cbfe.web.app/",
      challenges: "Building an intuitive and user-friendly system with proper booking management, CRUD operations, and role-based access for students and teachers",
  solution: "Implemented secure authentication, optimized CRUD operations, and designed a clean interface for easy navigation and efficient booking management",
    },
    
{
  title: "Online Medicine Store",
  description: "A web-based platform that allows customers to browse, search, and purchase medicines online. Features include user-friendly ordering for prescription and OTC drugs, timely delivery, and pharmacist tools for inventory management and prescription verification.",
  tags: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS", "Daisy UI"],
  image: "https://i.ibb.co/F4PRvdQM/screencapture-pharma-market-5fbb8-web-app-2025-10-03-00-28-30.png", // replace with your actual screenshot URL
  github_client: "https://github.com/Adilalahee/PharmaMarketPlace-Client",
  github_server: "https://github.com/Adilalahee/PharmaMarketPlace-Server",
  live: "https://pharma-market-5fbb8.web.app/",
  challenges: "Building a secure, user-friendly platform for ordering prescription and OTC drugs with real-time inventory management for pharmacists",
  solution: "Implemented responsive front-end with React and Tailwind, secure back-end with Node.js/Express, and real-time inventory handling using MongoDB",
},
    // {
    //   title: "URL Shortener Application",
    //   description: "Full-stack URL shortener with analytics tracking, custom short links, and QR code generation. Deployed on Render with MongoDB backend.",
    //   tags: ["React", "Express.js", "MongoDB", "Render"],
    //   image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop",
    //   github: "https://github.com/yourusername/url-shortener",
    //   live: "https://url-shortener.onrender.com",
    //   challenges: "Handling high-volume URL redirects efficiently",
    //   solution: "Implemented caching strategies and database indexing for optimal performance",
    // },
    // {
    //   title: "ERP Custom Module Development",
    //   description: "Developed custom modules for Oracle ERP including automated report generation, inventory tracking, and sales analytics dashboard for enterprise clients.",
    //   tags: ["Oracle APEX", "SQL", "PL/SQL", "Oracle Reports"],
    //   image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&auto=format&fit=crop",
    //   github: "#",
    //   live: "#",
    //   challenges: "Integrating custom modules with existing ERP infrastructure without disruption",
    //   solution: "Used Oracle APEX 23.1 with ORDS 24 for seamless integration and backward compatibility",
    // },
    // {
    //   title: "E-Commerce Store",
    //   description: "Modern e-commerce platform with product catalog, shopping cart, secure checkout, and order management. Built with Next.js and Stripe integration.",
    //   tags: ["Next.js", "Tailwind CSS", "Stripe", "MongoDB"],
    //   image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&auto=format&fit=crop",
    //   github: "https://github.com/yourusername/ecommerce-store",
    //   live: "https://ecommerce-store.vercel.app",
    //   challenges: "Implementing secure payment processing and inventory management",
    //   solution: "Integrated Stripe API with real-time inventory updates and webhook notifications",
    // },
    // {
    //   title: "Portfolio Management System",
    //   description: "Dynamic portfolio management system for professionals to showcase projects, skills, and certifications with admin dashboard for easy content updates.",
    //   tags: ["React", "Node.js", "PostgreSQL", "JWT"],
    //   image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&auto=format&fit=crop",
    //   github: "https://github.com/yourusername/portfolio-system",
    //   live: "https://portfolio-system.netlify.app",
    //   challenges: "Creating a flexible CMS-like system for non-technical users",
    //   solution: "Built intuitive admin interface with drag-and-drop functionality and WYSIWYG editor",
    // },
    // {
    //   title: "Task Management Application",
    //   description: "Collaborative task management tool with project boards, team assignments, deadlines, and progress tracking. Features real-time updates and notifications.",
    //   tags: ["React", "Express.js", "MongoDB", "Socket.io"],
    //   image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&auto=format&fit=crop",
    //   github: "https://github.com/yourusername/task-manager",
    //   live: "https://task-manager.vercel.app",
    //   challenges: "Synchronizing real-time updates across multiple users",
    //   solution: "Implemented WebSocket connections with optimistic UI updates",
    // },
    // {
    //   title: "Weather Dashboard",
    //   description: "Interactive weather dashboard displaying current conditions, forecasts, and historical data with beautiful data visualizations and location-based services.",
    //   tags: ["React", "OpenWeather API", "Chart.js", "Vercel"],
    //   image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&auto=format&fit=crop",
    //   github: "https://github.com/yourusername/weather-dashboard",
    //   live: "https://weather-dashboard.vercel.app",
    //   challenges: "Handling API rate limits and providing offline functionality",
    //   solution: "Implemented local caching and service workers for offline access",
    // },
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom duration-700">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Featured <span className="gradient-primary text-white bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real-world applications showcasing technical expertise and problem-solving skills
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="overflow-hidden bg-card border-border hover:border-primary/50 transition-smooth shadow-card group animate-in fade-in slide-in-from-bottom duration-700"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-smooth group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
              </div>
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-display font-semibold">{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>
                
                <div className="space-y-2">
                  <div>
                    <span className="text-sm font-semibold text-primary">Challenge:</span>
                    <p className="text-sm text-muted-foreground">{project.challenges}</p>
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-accent">Solution:</span>
                    <p className="text-sm text-muted-foreground">{project.solution}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary" className="bg-secondary text-secondary-foreground">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-primary text-foreground hover-white hover-border-glow hover:bg-primary/10"
                    asChild
                  >
                    <a href={project.github_client} target="_blank" rel="noopener noreferrer">
                      <Github size={16} className="mr-2" />
                      Code-Client
                    </a>
                  </Button>
                     <Button
                    variant="outline"
                    size="sm"
                    className="border-primary hover-white hover-border-glow text-foreground hover:bg-primary/10"
                    asChild
                  >
                    <a href={project.github_server} target="_blank" rel="noopener noreferrer">
                      <Github size={16} className="mr-2" />
                      Code-Server
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className="gradient-accent text-accent-foreground"
                    asChild
                  >
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
