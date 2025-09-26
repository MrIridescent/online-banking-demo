import { Facebook, Twitter, Youtube, Linkedin } from "lucide-react";

const SocialSidebar = () => {
  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" }, 
    { icon: Youtube, href: "#", label: "YouTube" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ];

  return (
    <div className="fixed left-0 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
      <div className="bg-secondary/80 backdrop-blur-sm border-r border-border/50 p-3">
        {/* Social Links */}
        <div className="flex flex-col space-y-4 mb-8">
          {socialLinks.map((social) => {
            const IconComponent = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                className="w-10 h-10 bg-muted/50 hover:bg-primary transition-all duration-300 rounded-sm flex items-center justify-center text-muted-foreground hover:text-primary-foreground group"
                aria-label={social.label}
              >
                <IconComponent className="w-4 h-4" />
              </a>
            );
          })}
        </div>

        {/* Vertical Text Labels */}
        <div className="space-y-6">
          <div className="social-vertical text-xs text-muted-foreground/70 tracking-widest uppercase font-medium">
            MAIL US
          </div>
          <div className="social-vertical text-xs text-muted-foreground/70 tracking-widest uppercase font-medium">
            CALL US
          </div>
          <div className="social-vertical text-xs text-muted-foreground/70 tracking-widest uppercase font-medium">
            FOLLOW US
          </div>
          <div className="social-vertical text-xs text-muted-foreground/70 tracking-widest uppercase font-medium">
            YOUTUBE
          </div>
          <div className="social-vertical text-xs text-muted-foreground/70 tracking-widest uppercase font-medium">
            FACEBOOK
          </div>
        </div>
      </div>
    </div>
  );
};

export default SocialSidebar;