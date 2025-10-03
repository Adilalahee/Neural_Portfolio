import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award, ExternalLink, Zap } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "Agile Project Management",
      issuer: "HP Life",
      date: "2024",
      category: "Agile",
      verifyUrl: "#",
    },
    {
      title: "Six Sigma White Belt",
      issuer: "Six Sigma Council",
      date: "2023",
      category: "Process",
      verifyUrl: "#",
    },
    {
      title: "Introduction to Cybersecurity",
      issuer: "Cisco Networking Academy",
      date: "2023",
      category: "Security",
      verifyUrl: "#",
    },
    {
      title: "Cisco Certified Network Associate (CCNA)",
      issuer: "Cisco",
      date: "2022",
      category: "Networking",
      verifyUrl: "#",
    },
    {
      title: "Oracle APEX Application Development",
      issuer: "Oracle University",
      date: "2024",
      category: "Database",
      verifyUrl: "#",
    },
    {
      title: "Web Design & Development",
      issuer: "BASIS Institute of Technology & Management",
      date: "2021",
      category: "Web Dev",
      verifyUrl: "#",
    },
    {
      title: "Mobile App Development",
      issuer: "BASIS Institute of Technology & Management",
      date: "2021",
      category: "Mobile",
      verifyUrl: "#",
    },
    {
      title: "Technical Support Fundamentals",
      issuer: "Google / Coursera",
      date: "2023",
      category: "Support",
      verifyUrl: "#",
    },
    {
      title: "Data Center Physical Infrastructure",
      issuer: "Huawei",
      date: "2022",
      category: "Infrastructure",
      verifyUrl: "#",
    },
  ];

  const recentTech = [
    "Next.js 14",
    "Tailwind CSS",
    "Render Deployment",
    "Vercel Deployment",
    "Oracle APEX 23.1",
    "ORDS 24",
  ];

  const upcomingSkills = [
    "Docker & Containerization",
    "CI/CD Pipelines",
    "AI/ML Integration",
    "Advanced Cybersecurity",
    "Flutter Mobile Development",
    "Antenna Research & IoT",
  ];

  return (
    <section id="certifications" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom duration-700">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Certifications & <span className="gradient-accent text-white bg-clip-text text-transparent">Learning</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Continuous growth through formal training and self-directed learning
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {certifications.map((cert, index) => (
            <Card
              key={cert.title}
              className="p-6 bg-card border-border hover:border-primary/50 transition-smooth shadow-card group animate-in fade-in slide-in-from-bottom duration-700"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center">
                  <Award className="text-primary-foreground" size={24} />
                </div>
                <Badge variant="secondary" className="bg-secondary text-secondary-foreground">
                  {cert.category}
                </Badge>
              </div>
              <h3 className="text-lg font-display font-semibold mb-2">{cert.title}</h3>
              <p className="text-sm text-muted-foreground mb-1">{cert.issuer}</p>
              <p className="text-sm text-muted-foreground mb-4">{cert.date}</p>
              <a
                href={cert.verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm text-primary hover:text-primary/80 transition-smooth"
              >
                Verify
                <ExternalLink size={14} className="ml-1" />
              </a>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-8 bg-card border-border shadow-card">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center">
                <Zap className="text-primary-foreground" size={24} />
              </div>
              <h3 className="text-2xl font-display font-semibold">Recent Tech Exploration</h3>
            </div>
            <p className="text-muted-foreground mb-6">
              Technologies I've recently learned and integrated into my projects:
            </p>
            <div className="flex flex-wrap gap-3">
              {recentTech.map((tech) => (
                <Badge
                  key={tech}
                  className="bg-primary text-primary-foreground cursor-default"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </Card>

          <Card className="p-8 bg-card border-border shadow-card">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg gradient-accent flex items-center justify-center">
                <Award className="text-accent-foreground" size={24} />
              </div>
              <h3 className="text-2xl font-display font-semibold">Future Learning Goals</h3>
            </div>
            <p className="text-muted-foreground mb-6">
              Technologies and skills I'm planning to master in the near future:
            </p>
            <div className="flex flex-wrap gap-3">
              {upcomingSkills.map((skill) => (
                <Badge
                  key={skill}
                  className="bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-smooth cursor-default"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
