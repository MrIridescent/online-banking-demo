import Header from "@/components/Header";
import SocialSidebar from "@/components/SocialSidebar";
import ChatWidget from "@/components/ChatWidget";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const About = () => {
  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "100+", label: "Happy Clients" },
    { number: "24/7", label: "Support Available" },
    { number: "99%", label: "Uptime Guarantee" }
  ];

  const values = [
    {
      title: "Innovation",
      description: "We embrace cutting-edge technologies to deliver future-ready solutions."
    },
    {
      title: "Excellence",
      description: "Quality is at the heart of everything we do, from code to customer service."
    },
    {
      title: "Reliability",
      description: "Our clients trust us to deliver on time, every time, with unwavering consistency."
    },
    {
      title: "Partnership",
      description: "We work as an extension of your team, invested in your success."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <SocialSidebar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">About Us</Badge>
            <h1 className="text-4xl md:text-6xl font-black text-foreground mb-6">
              Empowering Digital
              <span className="block text-primary">Transformation</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              IRIDESCENT INTERNET SOLUTIONS LIMITED is a full-spectrum IT services company 
              dedicated to providing innovative digital solutions that drive business growth.
            </p>
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-16 px-6 bg-secondary/20">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded with a vision to bridge the technology gap for businesses across Nigeria and beyond, 
                  IRIDESCENT INTERNET SOLUTIONS LIMITED has emerged as a trusted partner in digital transformation.
                </p>
                <p>
                  Our comprehensive approach combines technical expertise with strategic thinking to deliver 
                  solutions that not only meet today's challenges but also prepare our clients for tomorrow's opportunities.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-foreground">Registration Number</h4>
                  <p className="text-sm text-muted-foreground">RC: 1437825</p>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Tax ID</h4>
                  <p className="text-sm text-muted-foreground">TIN: 1023043647</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <Card key={index} className="p-6 text-center bg-card/50 border-border/50">
                  <div className="text-3xl font-black text-primary mb-2">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Core Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do and define who we are as a company.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="p-6 bg-card/30 border-border/50 hover:bg-card/50 transition-colors">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <div className="w-6 h-6 bg-primary rounded-sm"></div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-6 bg-secondary/20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Expert Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our diverse team of technology experts brings together years of experience 
              in delivering world-class digital solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {["Software Development", "Cloud Architecture", "Cybersecurity"].map((expertise, index) => (
              <Card key={index} className="p-8 text-center bg-card/50 border-border/50">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-primary rounded-full"></div>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{expertise}</h3>
                <p className="text-muted-foreground text-sm">
                  Certified professionals with extensive experience in {expertise.toLowerCase()}.
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <ChatWidget />
    </div>
  );
};

export default About;