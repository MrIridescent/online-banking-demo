import { Search, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const navItems = ["HOME", "ABOUT US", "SERVICES", "BLOG", "PRICING", "CONTACT"];

  return (
    <header className="relative z-50 w-full bg-background/95 backdrop-blur-sm border-b border-border/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-primary rounded-sm flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-xl">W</span>
            </div>
            <span className="text-2xl font-bold text-foreground">WishLan</span>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="nav-item"
              >
                {item}
              </a>
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
                  <div className="font-semibold text-primary">9355 388 555, 8355 388 556</div>
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