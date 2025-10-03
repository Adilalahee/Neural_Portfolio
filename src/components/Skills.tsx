import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Database, Cloud, Palette, Users, Zap } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Web Development",
      icon: Code,
      skills: [
        { name: "React.js", level: "Proficient" },
        { name: "Next.js", level: "Proficient" },
        { name: "Tailwind CSS", level: "Proficient" },
        { name: "HTML/CSS", level: "Proficient" },
        { name: "JavaScript", level: "Proficient" },
      ],
    },
    {
      title: "ERP & Databases",
      icon: Database,
      skills: [
        { name: "SQL", level: "Advanced" },
        { name: "Oracle Forms & Reports", level: "Familiar" },
        { name: "Oracle APEX", level: "Proficient" },
        { name: "ERP Implementation", level: "Advanced" },
        { name: "PostgreSQL", level: "Proficient" },
      ],
    },
    {
      title: "Backend & APIs",
      icon: Cloud,
      skills: [
        { name: "Node.js", level: "Familiar" },
        { name: "Express.js", level: "Familiar" },
        { name: "MongoDB", level: "Proficient" },
        { name: "REST APIs", level: "Proficient" },
        { name: "JWT Authentication", level: "Familiar" },
      ],
    },
    {
      title: "Networking & Security",
      icon: Palette,
      skills: [
        { name: "CCNA", level: "Proficient" },
        { name: "Cybersecurity Fundamentals", level: "Familiar" },
        { name: "Remote Desktop", level: "Advanced" },
        { name: "Network Troubleshooting", level: "Advanced" },
      ],
    },
    {
      title: "Tools & Deployment",
      icon: Zap,
      skills: [
        { name: "GitHub", level: "Proficient" },
        { name: "Netlify", level: "Proficient" },
        { name: "Vercel", level: "Proficient" },
        { name: "Render", level: "Proficient" },
        { name: "VS Code", level: "Advanced" },
      ],
    },
    {
      title: "Soft Skills",
      icon: Users,
      skills: [
        { name: "Problem-Solving", level: "Advanced" },
        { name: "Customer Support", level: "Advanced" },
        { name: "Client Training", level: "Advanced" },
        { name: "Team Collaboration", level: "Proficient" },
        { name: "Project Management", level: "Proficient" },
      ],
    },
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Advanced":
        return "bg-primary text-primary-foreground";
      case "Proficient":
        return "bg-accent text-accent-foreground";
      case "Familiar":
        return "bg-secondary text-secondary-foreground";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section id="skills" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom duration-700">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Skills <span className="gradient-accent bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit built through years of hands-on experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card
                key={category.title}
                className="p-6 bg-card border-border hover:border-primary/50 transition-smooth shadow-card animate-in fade-in slide-in-from-bottom duration-700"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center">
                    <Icon className="text-primary-foreground" size={20} />
                  </div>
                  <h3 className="text-lg font-display font-semibold">{category.title}</h3>
                </div>
                <div className="space-y-2">
                  {category.skills.map((skill) => (
                    <div key={skill.name} className="flex items-center justify-between">
                      <span className="text-sm text-foreground">{skill.name}</span>
                      <Badge className={getLevelColor(skill.level)} variant="secondary">
                        {skill.level}
                      </Badge>
                    </div>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
