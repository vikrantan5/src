import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Code, Users, Lightbulb, Trophy } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";
import phoenixLogo from "@/assets/phoenix-logo.png";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center gradient-hero overflow-hidden pt-16">
        <div className="absolute inset-0 opacity-20">
          <img
            src={heroImage}
            alt="Phoenix Tech Club Members"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 z-10 text-center animate-fade-in">
          <div className="flex justify-center mb-8">
            <img 
              src={phoenixLogo} 
              alt="Phoenix Logo" 
              className="w-32 h-32 md:w-40 md:h-40 object-contain drop-shadow-2xl animate-float"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-primary-foreground mb-6">
            PHOENIX
          </h1>
          <p className="text-xl md:text-3xl text-primary-foreground/90 mb-8 font-display">
            Come Let's Rise
          </p>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-12 max-w-2xl mx-auto">
            The official tech club of Netaji Subhash Engineering College, fostering
            innovation, teamwork, and technical excellence since 2006.
          </p>
          <div className="flex justify-center">
            <Button
              asChild
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-glow"
            >
              <Link to="/wings">
                Read More <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-display text-center mb-16">
            Why Join Phoenix?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-card p-8 rounded-xl shadow-card hover:shadow-glow transition-shadow duration-300 animate-slide-up">
              <div className="w-14 h-14 rounded-lg gradient-accent flex items-center justify-center mb-4">
                <Code className="h-7 w-7 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-display mb-3">Technical Growth</h3>
              <p className="text-muted-foreground">
                Master coding, robotics, and cutting-edge technologies with hands-on
                experience.
              </p>
            </div>

            <div className="bg-card p-8 rounded-xl shadow-card hover:shadow-glow transition-shadow duration-300 animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <div className="w-14 h-14 rounded-lg gradient-accent flex items-center justify-center mb-4">
                <Users className="h-7 w-7 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-display mb-3">Teamwork</h3>
              <p className="text-muted-foreground">
                Build lasting friendships while collaborating on exciting projects.
              </p>
            </div>

            <div className="bg-card p-8 rounded-xl shadow-card hover:shadow-glow transition-shadow duration-300 animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <div className="w-14 h-14 rounded-lg gradient-accent flex items-center justify-center mb-4">
                <Lightbulb className="h-7 w-7 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-display mb-3">Innovation</h3>
              <p className="text-muted-foreground">
                Transform ideas into reality through our domain-specific clubs.
              </p>
            </div>

            <div className="bg-card p-8 rounded-xl shadow-card hover:shadow-glow transition-shadow duration-300 animate-slide-up" style={{ animationDelay: "0.3s" }}>
              <div className="w-14 h-14 rounded-lg gradient-accent flex items-center justify-center mb-4">
                <Trophy className="h-7 w-7 text-accent-foreground" />
              </div>
              <h3 className="text-xl font-display mb-3">Leadership</h3>
              <p className="text-muted-foreground">
                Develop leadership skills through events and club activities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-display text-primary-foreground mb-6">
            Ready to Rise with Phoenix?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Join us in our journey of innovation, learning, and growth.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-glow"
          >
            <Link to="/contact">
              Get in Touch <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
