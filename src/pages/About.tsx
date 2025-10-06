import { Card, CardContent } from "@/components/ui/card";
import { Code, Cpu, Wrench, MessageSquare } from "lucide-react";
import clubMembers from "@/assets/club-members.jpg";
import eloquense from "@/assets/eloquense.jpg";
import robonix from "@/assets/robonix.jpg";
import cybernix from "@/assets/cybernix.jpg";
import nirmaan from "@/assets/nirmaan.jpg";

const About = () => {
  const clubs = [
    {
      name: "ELOQUENSE",
      description: "Language and debate club focused on public speaking, communication skills, and intellectual discourse.",
      icon: MessageSquare,
      image: eloquense,
    },
    {
      name: "ROBONIX",
      description: "Robotics club dedicated to RC cars, drones, and innovative prototypes. Building the future, one robot at a time.",
      icon: Cpu,
      image: robonix,
    },
    {
      name: "CYBERNIX",
      description: "IT and coding club exploring cybersecurity, software development, and cutting-edge programming technologies.",
      icon: Code,
      image: cybernix,
    },
    {
      name: "NIRMAAN",
      description: "Civil and Mechanical engineering club working on structural designs, mechanical systems, and engineering solutions.",
      icon: Wrench,
      image: nirmaan,
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="gradient-hero py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-primary-foreground mb-6 animate-fade-in">
            Our Wings
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Discover the diverse clubs that make Phoenix soar
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="animate-fade-in">
              <h2 className="text-4xl font-display mb-6">Who We Are</h2>
              <p className="text-lg text-muted-foreground mb-4">
                Phoenix is the official tech club of Netaji Subhash Engineering College,
                founded in 2006. We are a vibrant community of students passionate about
                technology, innovation, and learning.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Our mission is to foster friendship, teamwork, and leadership while
                providing hands-on experience in various technical domains including
                coding, robotics, and engineering innovation.
              </p>
              <p className="text-lg text-muted-foreground">
                Through weekly forums and domain-specific clubs, we create an environment
                where students can explore their interests, develop new skills, and build
                lasting connections.
              </p>
            </div>
            <div className="animate-slide-up">
              <img
                src={clubMembers}
                alt="Phoenix Club Members"
                className="rounded-xl shadow-card w-full h-auto"
              />
            </div>
          </div>

          {/* What We Offer */}
          <div className="mb-12">
            <h2 className="text-4xl font-display text-center mb-4">What We Offer</h2>
            <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-16">
              Phoenix hosts weekly forums and operates four specialized clubs, each
              focusing on different aspects of technology and innovation.
            </p>
          </div>

          {/* Clubs Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {clubs.map((club, index) => (
              <Card
                key={club.name}
                className="overflow-hidden hover:shadow-glow transition-shadow duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={club.image}
                    alt={club.name}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-lg gradient-accent flex items-center justify-center mr-4">
                      <club.icon className="h-6 w-6 text-accent-foreground" />
                    </div>
                    <h3 className="text-2xl font-display">{club.name}</h3>
                  </div>
                  <p className="text-muted-foreground">{club.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
