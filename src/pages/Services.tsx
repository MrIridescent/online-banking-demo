import Header from "@/components/Header";
import SocialSidebar from "@/components/SocialSidebar";
import ChatWidget from "@/components/ChatWidget";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Globe, 
  Smartphone, 
  Cloud, 
  Shield, 
  Database, 
  BarChart3,
  Settings,
  Headphones
} from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies for optimal performance and user experience.",
      features: ["Responsive Design", "E-commerce Solutions", "CMS Development", "Progressive Web Apps"]
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that engage users and drive business growth.",
      features: ["iOS & Android", "React Native", "UI/UX Design", "App Store Optimization"]
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services to enhance your business operations.",
      features: ["AWS/Azure/GCP", "Cloud Migration", "DevOps", "Serverless Architecture"]
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Comprehensive security solutions to protect your digital assets and ensure business continuity.",
      features: ["Security Audits", "Penetration Testing", "Compliance", "24/7 Monitoring"]
    },
    {
      icon: Database,
      title: "Data Management",
      description: "Database design, optimization, and management services for efficient data operations.",
      features: ["Database Design", "Data Migration", "Performance Tuning", "Backup Solutions"]
    },
    {
      icon: BarChart3,
      title: "Data Analytics",
      description: "Transform your data into actionable insights with advanced analytics and reporting solutions.",
      features: ["Business Intelligence", "Data Visualization", "Predictive Analytics", "Custom Dashboards"]
    },
    {
      icon: Settings,
      title: "IT Consulting",
      description: "Strategic technology guidance to help your business make informed IT decisions.",
      features: ["Technology Strategy", "Digital Transformation", "Process Optimization", "Vendor Selection"]
    },
    {
      icon: Headphones,
      title: "Technical Support",
      description: "Reliable 24/7 technical support and maintenance services for all your IT infrastructure.",
      features: ["24/7 Support", "Remote Assistance", "System Maintenance", "User Training"]
    }
  ];

  const packages = [
    {
      name: "Starter",
      price: "₦150,000",
      period: "per month",
      description: "Perfect for small businesses starting their digital journey",
      features: [
        "Basic Website Development",
        "Domain & Hosting Setup",
        "Email Support",
        "Monthly Maintenance"
      ]
    },
    {
      name: "Professional",
      price: "₦350,000",
      period: "per month",
      description: "Comprehensive solution for growing businesses",
      features: [
        "Custom Web Application",
        "Mobile App Development", 
        "Cloud Infrastructure",
        "Priority Support",
        "Analytics Dashboard"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "₦750,000",
      period: "per month",
      description: "Full-scale digital transformation for large organizations",
      features: [
        "Complete IT Infrastructure",
        "Advanced Security Solutions",
        "Data Analytics Platform",
        "24/7 Dedicated Support",
        "Custom Integration"
      ]
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
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Our Services</Badge>
            <h1 className="text-4xl md:text-6xl font-black text-foreground mb-6">
              Full Spectrum
              <span className="block text-primary">IT Services</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Comprehensive technology solutions designed to transform your business 
              and accelerate your digital growth.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="p-6 bg-card/30 border-border/50 hover:bg-card/50 transition-all duration-300 hover:shadow-primary/10 hover:shadow-lg group">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{service.description}</p>
                  
                  <div className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-xs text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                        {feature}
                      </div>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16 px-6 bg-secondary/20">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Service Packages</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose the perfect package for your business needs. All plans include our commitment 
              to excellence and dedicated support.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card key={index} className={`p-8 bg-card/50 border-border/50 relative ${pkg.popular ? 'ring-2 ring-primary/50 bg-card/70' : ''}`}>
                {pkg.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
                    Most Popular
                  </Badge>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{pkg.name}</h3>
                  <div className="text-4xl font-black text-primary mb-1">{pkg.price}</div>
                  <div className="text-sm text-muted-foreground mb-4">{pkg.period}</div>
                  <p className="text-muted-foreground text-sm">{pkg.description}</p>
                </div>

                <div className="space-y-3 mb-8">
                  {pkg.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link to="/contact" className="block">
                  <Button className={`w-full ${pkg.popular ? 'bg-primary hover:bg-primary/90' : 'variant-outline'}`}>
                    Get Started
                  </Button>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Let's discuss your specific requirements and create a customized solution 
            that drives your business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button className="btn-hero">
                Get Free Consultation
              </Button>
            </Link>
            <Link to="/about">
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                Learn More About Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <ChatWidget />
    </div>
  );
};

export default Services;