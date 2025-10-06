import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Users, Award, Laptop } from "lucide-react";

const Events = () => {
  const events = [
    {
      title: "Avenir",
      description: "Our flagship annual technical fest featuring competitions, workshops, and guest lectures from industry experts.",
      date: "March 2024",
      icon: Award,
      category: "Annual Fest",
      color: "bg-primary",
    },
    {
      title: "Aavahan",
      description: "A grand cultural and technical extravaganza showcasing talent across various domains.",
      date: "September 2024",
      icon: Users,
      category: "Cultural Fest",
      color: "bg-accent",
    },
    {
      title: "Robotics Bootcamp",
      description: "Intensive hands-on workshop on robotics, Arduino programming, and prototype development.",
      date: "Quarterly",
      icon: Laptop,
      category: "Workshop",
      color: "bg-primary-light",
    },
    {
      title: "Computing Using Python",
      description: "Comprehensive Python programming workshop covering basics to advanced concepts and real-world applications.",
      date: "Monthly",
      icon: Laptop,
      category: "Workshop",
      color: "bg-accent",
    },
  ];

  const collaborations = [
    "TCS",
    "NIIT",
    "TIME",
    "Google Developer Groups",
    "Microsoft Learn",
    "IEEE",
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="gradient-hero py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-primary-foreground mb-6 animate-fade-in">
            Events & Workshops
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Join us for exciting events, workshops, and competitions throughout the year
          </p>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-display text-center mb-12">Major Events</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            {events.map((event, index) => (
              <Card
                key={event.title}
                className="overflow-hidden hover:shadow-glow transition-shadow duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader className={`${event.color} text-primary-foreground`}>
                  <div className="flex items-start justify-between">
                    <div>
                      <Badge variant="secondary" className="mb-2 bg-primary-foreground text-primary">
                        {event.category}
                      </Badge>
                      <CardTitle className="text-2xl font-display">
                        {event.title}
                      </CardTitle>
                    </div>
                    <event.icon className="h-8 w-8" />
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-muted-foreground mb-4">{event.description}</p>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2" />
                    {event.date}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Collaborations */}
          <div className="text-center">
            <h2 className="text-4xl font-display mb-8">Our Collaborations</h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
              Phoenix proudly collaborates with leading institutions and organizations
              to bring the best learning experiences to our members.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {collaborations.map((company, index) => (
                <Badge
                  key={company}
                  variant="outline"
                  className="text-lg px-6 py-2 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {company}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-primary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-display text-primary-foreground mb-6">
            Don't Miss Out!
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Stay updated with our latest events and workshops. Follow us on social media
            or contact us to learn more.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Events;
