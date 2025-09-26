import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-team-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `linear-gradient(135deg, hsl(220 15% 8% / 0.85), hsl(220 15% 8% / 0.7)), url(${heroImage})` 
        }}
      />

      {/* Curved Design Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full">
        <div className="curve-element w-full h-full opacity-80" />
      </div>
      
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2">
        <div className="curve-accent w-full h-full" />
      </div>

      {/* Curved Lines/Shapes */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 opacity-20">
        <svg viewBox="0 0 400 400" className="w-full h-full">
          <path 
            d="M50,200 Q200,50 350,200 Q200,350 50,200" 
            fill="none" 
            stroke="hsl(var(--primary))" 
            strokeWidth="2"
          />
          <path 
            d="M100,200 Q200,100 300,200 Q200,300 100,200" 
            fill="none" 
            stroke="hsl(var(--primary))" 
            strokeWidth="1" 
            opacity="0.6"
          />
        </svg>
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-4xl">
          {/* Welcome Text */}
          <div className="mb-6">
            <span className="text-primary text-sm font-medium tracking-widest uppercase">
              welcome to Wishlan Agency
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black text-foreground mb-8 leading-none text-shadow-glow">
            SMART IT<br />
            <span className="text-primary">SOLUTIONS</span>
          </h1>

          {/* Subheading */}
          <div className="mb-12 max-w-2xl">
            <h2 className="text-xl md:text-2xl text-foreground/90 font-medium mb-4">
              Smart, Fast & Future-Ready
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              We specialize in Website Development and innovative IT services designed to transform 
              businesses for the digital age. From Web Design and Development to Mobile Application 
              Design and Development, our team delivers powerful online experiences that boost 
              visibility, growth, and success.
            </p>
          </div>

          {/* CTA Button */}
          <Button className="btn-hero shadow-primary hover:shadow-glow">
            DISCOVER MORE
          </Button>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 right-10 opacity-10">
        <svg width="200" height="200" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r="80" fill="none" stroke="hsl(var(--primary))" strokeWidth="1"/>
          <circle cx="100" cy="100" r="60" fill="none" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.7"/>
          <circle cx="100" cy="100" r="40" fill="none" stroke="hsl(var(--primary))" strokeWidth="1" opacity="0.5"/>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;