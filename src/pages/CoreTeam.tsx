import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin } from "lucide-react";

const CoreTeam = () => {
  const teamMembers = [
    {
      name: "Rajesh Kumar",
      role: "President",
      department: "Computer Science",
      email: "rajesh@nsec.edu",
      linkedin: "#",
    },
    {
      name: "Priya Sharma",
      role: "Vice President",
      department: "Electronics",
      email: "priya@nsec.edu",
      linkedin: "#",
    },
    {
      name: "Amit Patel",
      role: "Technical Head",
      department: "Information Technology",
      email: "amit@nsec.edu",
      linkedin: "#",
    },
    {
      name: "Sneha Gupta",
      role: "Events Coordinator",
      department: "Mechanical Engineering",
      email: "sneha@nsec.edu",
      linkedin: "#",
    },
    {
      name: "Arjun Singh",
      role: "Robonix Lead",
      department: "Robotics",
      email: "arjun@nsec.edu",
      linkedin: "#",
    },
    {
      name: "Kavya Reddy",
      role: "Cybernix Lead",
      department: "Cyber Security",
      email: "kavya@nsec.edu",
      linkedin: "#",
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="gradient-hero py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-primary-foreground mb-6 animate-fade-in">
            Core Team
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Meet the dedicated leaders driving Phoenix forward
          </p>
        </div>
      </section>

      {/* Team Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card
                key={member.name}
                className="overflow-hidden hover:shadow-glow transition-shadow duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="h-64 gradient-primary flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-primary-foreground/20 flex items-center justify-center text-primary-foreground text-5xl font-display">
                    {member.name.charAt(0)}
                  </div>
                </div>
                <CardContent className="p-6 text-center">
                  <h3 className="text-2xl font-display mb-2">{member.name}</h3>
                  <p className="text-primary font-semibold mb-1">{member.role}</p>
                  <p className="text-muted-foreground text-sm mb-4">
                    {member.department}
                  </p>
                  <div className="flex justify-center space-x-4">
                    <a
                      href={`mailto:${member.email}`}
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="Email"
                    >
                      <Mail className="h-5 w-5" />
                    </a>
                    <a
                      href={member.linkedin}
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-5 w-5" />
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

export default CoreTeam;
