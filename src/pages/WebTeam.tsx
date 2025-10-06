import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin, Github, Code, Palette, Server, Sparkles } from "lucide-react";
import adityaImg from "@/assets/team/aditya.jpg";
import nehaImg from "@/assets/team/neha.jpg";
import rahulImg from "@/assets/team/rahul.jpg";
import ishitaImg from "@/assets/team/ishita.jpg";

const WebTeam = () => {
  const teamMembers = [
    {
      name: "Aditya Verma",
      role: "Lead Developer",
      department: "Computer Science",
      email: "aditya@nsec.edu",
      linkedin: "#",
      github: "#",
      image: adityaImg,
      icon: Sparkles,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      name: "Neha Chopra",
      role: "Frontend Developer",
      department: "Information Technology",
      email: "neha@nsec.edu",
      linkedin: "#",
      github: "#",
      image: nehaImg,
      icon: Code,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      name: "Rahul Mehta",
      role: "Backend Developer",
      department: "Computer Science",
      email: "rahul@nsec.edu",
      linkedin: "#",
      github: "#",
      image: rahulImg,
      icon: Server,
      gradient: "from-green-500 to-teal-500",
    },
    {
      name: "Ishita Bansal",
      role: "UI/UX Designer",
      department: "Electronics",
      email: "ishita@nsec.edu",
      linkedin: "#",
      github: "#",
      image: ishitaImg,
      icon: Palette,
      gradient: "from-orange-500 to-red-500",
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="gradient-hero py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-primary-foreground mb-6 animate-fade-in">
            Web Team
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            The creative minds behind Phoenix's digital presence
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 bg-background relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Meet the talented individuals who bring Phoenix's digital vision to life
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card
                key={member.name}
                className="group overflow-hidden border-2 hover:border-primary/50 transition-all duration-500 animate-slide-up hover:scale-105 hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image Container with Gradient Overlay */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
                  
                  {/* Floating Icon */}
                  <div className="absolute top-4 right-4 w-12 h-12 rounded-lg bg-primary-foreground/90 backdrop-blur-sm flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:rotate-12">
                    <member.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                
                {/* Content */}
                <CardContent className="p-6 text-center relative">
                  {/* Animated gradient line */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${member.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
                  
                  <h3 className="text-xl font-display mb-2 group-hover:text-primary transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-primary font-semibold mb-1 text-sm uppercase tracking-wide">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground text-sm mb-6">
                    {member.department}
                  </p>
                  
                  {/* Social Links with enhanced styling */}
                  <div className="flex justify-center space-x-3">
                    <a
                      href={`mailto:${member.email}`}
                      className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all duration-300 hover:shadow-lg"
                      aria-label="Email"
                    >
                      <Mail className="h-4 w-4" />
                    </a>
                    <a
                      href={member.linkedin}
                      className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all duration-300 hover:shadow-lg"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-4 w-4" />
                    </a>
                    <a
                      href={member.github}
                      className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:scale-110 transition-all duration-300 hover:shadow-lg"
                      aria-label="GitHub"
                    >
                      <Github className="h-4 w-4" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebTeam;
