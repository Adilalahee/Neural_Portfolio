import { Briefcase, GraduationCap, Rocket } from "lucide-react";
import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom duration-700">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            About <span className="gradient-primary bg-clip-text text-white text-transparent">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate about technology and continuous learning
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="p-6 bg-card border-border hover:border-primary/50 transition-smooth shadow-card">
            <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4">
              <Briefcase className="text-primary-foreground" size={24} />
            </div>
            <h3 className="text-xl font-display font-semibold mb-3">Current Role</h3>
            <p className="text-muted-foreground">
              I handle end-to-end technical support, ensuring smooth system operations, collaborating with development and QA teams, and guiding clients through onboarding, training, and product adoption.
            </p>
          </Card>

          <Card className="p-6 bg-card border-border hover:border-primary/50 transition-smooth shadow-card">
            <div className="w-12 h-12 rounded-lg gradient-accent flex items-center justify-center mb-4">
              <GraduationCap className="text-accent-foreground" size={24} />
            </div>
            <h3 className="text-xl font-display font-semibold mb-3">Education</h3>
            <p className="text-muted-foreground">
              Electrical & Electronic Engineering graduate with extensive certifications in 
              Agile, Six Sigma, Cybersecurity, Oracle APEX, CCNA, and Web Development. 
              Continuous learner with hands-on industry experience.
            </p>
          </Card>

          <Card className="p-6 bg-card border-border hover:border-primary/50 transition-smooth shadow-card">
            <div className="w-12 h-12 rounded-lg gradient-primary flex items-center justify-center mb-4">
              <Rocket className="text-primary-foreground" size={24} />
            </div>
            <h3 className="text-xl font-display font-semibold mb-3">Career Goals</h3>
            <p className="text-muted-foreground">
              Looking ahead, my goal is to grow into a leadership position, where I can combine my technical skills, business understanding, and team collaboration to drive impactful software solutions.
            </p>
          </Card>
        </div>

        <Card className="p-8 bg-card border-border shadow-card">
          <h3 className="text-2xl font-display font-semibold mb-4">My Journey</h3>
    <div className="space-y-4 text-muted-foreground">
  <p>
    My professional journey began with a degree in <span className="text-foreground font-semibold">Electrical & Electronic Engineering</span>, 
    which built a strong foundation in technical problem-solving and analytical thinking. 
    I initially worked with <span className="text-foreground font-semibold">ERP solutions</span>, providing support across modules like HR, Accounts, Sales, Procurement, Production, and Inventory.
  </p>
  <p>
    Currently, I work as a <span className="text-foreground font-semibold">Software Service Engineer</span>, supporting clients in <span className="text-foreground font-semibold">banks and NBFIs</span>. 
    I leverage my prior ERP experience to deliver <span className="text-foreground font-semibold">end-to-end technical support, client training, onboarding, and system reliability</span>, ensuring smooth operations and high customer satisfaction.
  </p>
  <p>
    Alongside my service engineering role, I am actively transitioning into <span className="text-foreground font-semibold">full-stack web development</span>, 
    combining my enterprise support experience with modern web technologies. I have built and deployed 7+ web projects, mastered frameworks like React, Next.js, and Node.js, 
    and earned certifications in Agile, Cybersecurity, CCNA, and Oracle APEX.
  </p>
  <p>
    My career vision is to grow into a <span className="text-foreground font-semibold">leadership role</span>, 
    guiding high-performing teams and delivering scalable, secure, and impactful software solutions. 
    To stay future-ready, I am exploring <span className="text-foreground font-semibold">Cybersecurity, AI/ML and Networking</span>, 
    while also advancing my <span className="text-foreground font-semibold">research work in wireless communication</span>.
  </p>
</div>

        </Card>
      </div>
    </section>
  );
};

export default About;
