import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Send, Github, Linkedin,MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import coverimage from "../assets/adilalaheee.jpg"

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(1000),
});

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setIsSubmitting(true);

  //   try {
  //     const validatedData = contactSchema.parse(formData);
      
  //     // Simulate form submission
  //     await new Promise((resolve) => setTimeout(resolve, 1000));
      
  //     toast({
  //       title: "Message sent!",
  //       description: "Thank you for reaching out. I'll get back to you soon.",
  //     });
      
  //     setFormData({ name: "", email: "", message: "" });
  //   } catch (error) {
  //     if (error instanceof z.ZodError) {
  //       toast({
  //         title: "Validation error",
  //         description: error.errors[0].message,
  //         variant: "destructive",
  //       });
  //     }
  //   } finally {
  //     setIsSubmitting(false);
  //   }
  // };
  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    // Validate form data using Zod
    const validatedData = contactSchema.parse(formData);

    // Send POST request to PHP endpoint
    const response = await fetch("https://adilalahee.com/contact.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(validatedData),
    });

    const result = await response.json();

    if (result.success) {
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
    } else {
      toast({
        title: "Error",
        description: result.message || "Failed to send message. Please try again later.",
        variant: "destructive",
      });
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      toast({
        title: "Validation error",
        description: error.errors[0].message,
        variant: "destructive",
      });
    } else {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    }
  } finally {
    setIsSubmitting(false);
  }
};

  const contactInfo = [
    { icon: Mail, label: "Email", value: "adilalahee@yahoo.com", href: "mailto:adilmdctg@gmail.com" },
    { icon: MapPin, label: "Location", value: "Dhaka, Bangladesh", href: "#" },
  ];

  const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com/Adilalahee" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/adilalahee" },
    { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/8801849255411" },
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-in fade-in slide-in-from-bottom duration-700">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Get In <span className="gradient-primary text-white bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Let's discuss your next project or opportunity
          </p>
        </div>

        {/* Profile Photo */}
        <div className="flex justify-center mb-12 animate-in fade-in slide-in-from-bottom duration-700">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary shadow-glow">
            <img 
              src={coverimage}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <Card className="p-6 bg-card border-border shadow-card">
              <h3 className="text-2xl font-display font-semibold mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info) => {
                  const Icon = info.icon;
                  return (
                    <a
                      key={info.label}
                      href={info.href}
                      className="flex items-center gap-4 p-3 rounded-lg hover:bg-secondary/50 transition-smooth group"
                    >
                      <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center">
                        <Icon className="text-primary-foreground" size={20} />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{info.label}</p>
                        <p className="font-medium group-hover:text-primary transition-smooth">{info.value}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </Card>

            <Card className="p-6 bg-card border-border shadow-card">
              <h3 className="text-2xl font-display font-semibold mb-6">Connect With Me</h3>
              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-lg bg-secondary hover:bg-primary transition-smooth flex items-center justify-center group"
                      aria-label={social.label}
                    >
                      <Icon className="text-foreground group-hover:text-primary-foreground transition-smooth" size={20} />
                    </a>
                  );
                })}
              </div>
            </Card>
          </div>

          <Card className="p-6 bg-card border-border shadow-card">
            <h3 className="text-2xl font-display font-semibold mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <Input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-background border-border"
                  required
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-background border-border"
                  required
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-background border-border min-h-[150px]"
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full gradient-primary text-primary-foreground font-semibold shadow-glow"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={16} className="ml-2" />
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
