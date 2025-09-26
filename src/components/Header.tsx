import { Search, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const navItems = [
    { name: "HOME", path: "/" },
    { name: "ABOUT US", path: "/about" },
    { name: "SERVICES", path: "/services" },
    { name: "MISSION & VISION", path: "/mission-vision" },
    { name: "CONTACT", path: "/contact" }
  ];

  return (
    <header className="relative z-50 w-full bg-background/95 backdrop-blur-sm border-b border-border/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-primary rounded-sm flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">I2S</span>
            </div>
            <span className="text-2xl font-bold text-foreground">IRIDESCENT</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`nav-item ${location.pathname === item.path ? 'text-primary' : ''}`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right Section */}
          <div className="flex items-center space-x-6">
            {/* Search */}
            <Button variant="ghost" size="icon" className="text-foreground/70 hover:text-primary">
              <Search className="w-5 h-5" />
            </Button>

            {/* Contact Info */}
            <div className="hidden md:flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-2 text-foreground/90">
                <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <Phone className="w-4 h-4 text-primary-foreground" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground uppercase tracking-wide">Call Anytime</div>
                  <div className="font-semibold text-primary">+234 807 115 5200</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;