import Header from "@/components/Header";
import SocialSidebar from "@/components/SocialSidebar";
import ChatWidget from "@/components/ChatWidget";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Eye, Lightbulb, Users, Globe2, TrendingUp } from "lucide-react";

const MissionVision = () => {
  const goals = [
    {
      icon: Globe2,
      title: "Global Reach",
      description: "Expand our services across Africa and beyond, bringing world-class IT solutions to emerging markets."
    },
    {
      icon: Lightbulb,
      title: "Innovation Leadership",
      description: "Stay at the forefront of technology trends and provide cutting-edge solutions to our clients."
    },
    {
      icon: Users,
      title: "Community Impact",
      description: "Empower local businesses and contribute to Nigeria's digital economy growth."
    },
    {
      icon: TrendingUp,
      title: "Sustainable Growth",
      description: "Build lasting partnerships and achieve consistent growth through excellence and reliability."
    }
  ];

  const values = [
    "Customer-Centric Approach",
    "Technical Excellence",
    "Continuous Learning",
    "Ethical Business Practices",
    "Innovation & Creativity",
    "Teamwork & Collaboration"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <SocialSidebar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Our Purpose</Badge>
            <h1 className="text-4xl md:text-6xl font-black text-foreground mb-6">
              Mission &
              <span className="block text-primary">Vision</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Driving digital transformation through innovative technology solutions 
              that create lasting value for businesses and communities.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision Cards */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Mission */}
            <Card className="p-8 bg-card/30 border-border/50">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold text-foreground">Our Mission</h2>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                To empower businesses across Nigeria and Africa with innovative, reliable, and scalable 
                IT solutions that drive digital transformation and sustainable growth.
              </p>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-sm text-muted-foreground">
                    Deliver world-class technology solutions tailored to local market needs
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-sm text-muted-foreground">
                    Foster long-term partnerships built on trust, excellence, and mutual success
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-sm text-muted-foreground">
                    Contribute to the growth of Nigeria's digital economy and technological advancement
                  </p>
                </div>
              </div>
            </Card>

            {/* Vision */}
            <Card className="p-8 bg-card/30 border-border/50">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                  <Eye className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-3xl font-bold text-foreground">Our Vision</h2>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                To become Africa's leading technology partner, recognized for innovation, excellence, 
                and our commitment to transforming businesses through cutting-edge digital solutions.
              </p>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-sm text-muted-foreground">
                    Establish ourselves as the go-to IT solutions provider across West Africa
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-sm text-muted-foreground">
                    Pioneer innovative technologies that solve real-world business challenges
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  <p className="text-sm text-muted-foreground">
                    Create a positive impact on communities through technology accessibility
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Strategic Goals */}
      <section className="py-16 px-6 bg-secondary/20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Strategic Goals</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our roadmap for achieving sustainable growth while delivering exceptional value 
              to our clients and stakeholders.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {goals.map((goal, index) => {
              const IconComponent = goal.icon;
              return (
                <Card key={index} className="p-6 bg-card/50 border-border/50 hover:bg-card/70 transition-colors">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-3">{goal.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{goal.description}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Core Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              The fundamental principles that guide our decisions, shape our culture, 
              and define our approach to business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {values.map((value, index) => (
              <Card key={index} className="p-6 text-center bg-card/30 border-border/50 hover:bg-card/50 transition-colors">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <div className="w-4 h-4 bg-primary rounded-sm"></div>
                </div>
                <h3 className="font-semibold text-foreground">{value}</h3>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-16 px-6 bg-secondary/20">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Our Commitment to Excellence
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            At IRIDESCENT INTERNET SOLUTIONS LIMITED, we are committed to delivering exceptional 
            value through innovative technology solutions. Our success is measured not just by 
            our growth, but by the positive impact we create for our clients and the communities 
            we serve.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="text-center">
              <div className="text-4xl font-black text-primary mb-2">RC: 1437825</div>
              <div className="text-sm text-muted-foreground">Registered Company</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-primary mb-2">TIN: 1023043647</div>
              <div className="text-sm text-muted-foreground">Tax Identification</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-primary mb-2">2024+</div>
              <div className="text-sm text-muted-foreground">Years of Innovation</div>
            </div>
          </div>
        </div>
      </section>

      <ChatWidget />
    </div>
  );
};

export default MissionVision;