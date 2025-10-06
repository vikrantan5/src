import { useState } from "react";
import heroImage from "@/assets/hero-image.jpg";
import clubMembers from "@/assets/club-members.jpg";
import eloquense from "@/assets/eloquense.jpg";
import robonix from "@/assets/robonix.jpg";
import cybernix from "@/assets/cybernix.jpg";
import nirmaan from "@/assets/nirmaan.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    { src: heroImage, title: "Tech Club Activities", category: "Events" },
    { src: clubMembers, title: "Team Phoenix", category: "Team" },
    { src: eloquense, title: "Eloquense Debate", category: "Eloquense" },
    { src: robonix, title: "Robotics Workshop", category: "Robonix" },
    { src: cybernix, title: "Coding Session", category: "Cybernix" },
    { src: nirmaan, title: "Engineering Projects", category: "Nirmaan" },
    { src: heroImage, title: "Annual Fest", category: "Events" },
    { src: clubMembers, title: "Group Photo", category: "Team" },
    { src: robonix, title: "Drone Project", category: "Robonix" },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="gradient-hero py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-display font-bold text-primary-foreground mb-6 animate-fade-in">
            Gallery
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Capturing moments of innovation, teamwork, and excellence
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-xl shadow-card hover:shadow-glow transition-all duration-300 cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
                onClick={() => setSelectedImage(image.src)}
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 text-primary-foreground">
                    <p className="text-sm font-medium mb-1">{image.category}</p>
                    <h3 className="text-xl font-display">{image.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-6xl max-h-[90vh]">
            <img
              src={selectedImage}
              alt="Gallery Image"
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 bg-primary-foreground text-primary rounded-full w-10 h-10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
