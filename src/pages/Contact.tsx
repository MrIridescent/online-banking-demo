import Header from "@/components/Header";
import SocialSidebar from "@/components/SocialSidebar";
import ChatWidget from "@/components/ChatWidget";
import Map from "@/components/Map";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Globe,
  Send
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone Number",
      details: "+234 807 115 5200",
      description: "Available 24/7 for urgent matters"
    },
    {
      icon: Mail,
      title: "Email Address",
      details: "hello@i2sltd.tech",
      description: "We'll respond within 24 hours"
    },
    {
      icon: MapPin,
      title: "Office Address",
      details: "2nd Avenue, 23 Road, M Close",
      description: "Festac Town, Lagos, Nigeria"
    },
    {
      icon: Globe,
      title: "Website",
      details: "www.i2sltd.tech",
      description: "Visit our online portfolio"
    }
  ];

  const businessHours = [
    { day: "Monday - Friday", hours: "8:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "9:00 AM - 4:00 PM" },
    { day: "Sunday", hours: "Emergency Support Only" }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    const subject = encodeURIComponent(formData.subject || `Project inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      [
        `Name: ${formData.name}`,
        `Email: ${formData.email}`,
        `Phone: ${formData.phone || "Not provided"}`,
        "",
        "Message:",
        formData.message,
      ].join("\n")
    );

    window.location.href = `mailto:hello@i2sltd.tech?subject=${subject}&body=${body}`;
    
    toast({
      title: "Draft Email Prepared",
      description: "Your email client should open with your pre-filled message.",
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <SocialSidebar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">Contact Us</Badge>
            <h1 className="text-4xl md:text-6xl font-black text-foreground mb-6">
              Get In
              <span className="block text-primary">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Ready to transform your business with innovative IT solutions? 
              Let's discuss your project and explore how we can help you succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => {
              const IconComponent = info.icon;
              return (
                <Card key={index} className="p-6 text-center bg-card/30 border-border/50 hover:bg-card/50 transition-colors">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{info.title}</h3>
                  <p className="text-primary font-medium mb-1">{info.details}</p>
                  <p className="text-xs text-muted-foreground">{info.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Business Hours */}
      <section className="py-16 px-6 bg-secondary/20">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-3 gap-12">
            
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="p-8 bg-card/50 border-border/50">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-foreground mb-4">Send us a Message</h2>
                  <p className="text-muted-foreground">
                    Fill out the form below and our team will get back to you as soon as possible.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <Input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Phone Number
                      </label>
                      <Input
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+234 XXX XXX XXXX"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Subject
                      </label>
                      <Input
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="Project inquiry, support, etc."
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us about your project requirements..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button type="submit" className="btn-hero w-full sm:w-auto">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </Card>
            </div>

            {/* Business Hours & Company Info */}
            <div className="space-y-6">
              
              {/* Business Hours */}
              <Card className="p-6 bg-card/50 border-border/50">
                <div className="flex items-center mb-4">
                  <Clock className="w-5 h-5 text-primary mr-2" />
                  <h3 className="font-semibold text-foreground">Business Hours</h3>
                </div>
                <div className="space-y-3">
                  {businessHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{schedule.day}</span>
                      <span className="text-foreground font-medium">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </Card>

              {/* Company Registration */}
              <Card className="p-6 bg-card/50 border-border/50">
                <h3 className="font-semibold text-foreground mb-4">Company Registration</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="text-muted-foreground">Registration Number:</span>
                    <p className="font-medium text-foreground">RC: 1437825</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Tax Identification:</span>
                    <p className="font-medium text-foreground">TIN: 1023043647</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Company Name:</span>
                    <p className="font-medium text-foreground">IRIDESCENT INTERNET SOLUTIONS LIMITED</p>
                  </div>
                </div>
              </Card>

              {/* Emergency Contact */}
              <Card className="p-6 bg-primary/10 border-primary/20">
                <h3 className="font-semibold text-foreground mb-2">Emergency Support</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  For urgent technical issues outside business hours:
                </p>
                <p className="text-primary font-semibold">+234 807 115 5200</p>
                <p className="text-xs text-muted-foreground mt-2">
                  Additional charges may apply for emergency support.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Find Our Office</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Located in the heart of Festac Town, Lagos. Our office is easily accessible 
              and we welcome visits by appointment.
            </p>
          </div>
          
          <Map />
          
          {/* Directions */}
          <div className="mt-8 text-center">
            <p className="text-muted-foreground mb-4">
              <strong className="text-foreground">Address:</strong> 2nd Avenue, 23 Road, M Close, Festac Town, Lagos, Nigeria
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary/10"
                onClick={() => window.open('https://maps.google.com/?q=Festac+Town+Lagos+Nigeria', '_blank')}
              >
                Get Directions
              </Button>
              <Button 
                variant="outline" 
                className="border-primary text-primary hover:bg-primary/10"
                onClick={() => window.open('tel:+2348071155200')}
              >
                Call Before Visit
              </Button>
            </div>
          </div>
        </div>
      </section>

      <ChatWidget />
    </div>
  );
};

export default Contact;