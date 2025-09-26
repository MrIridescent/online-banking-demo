import { MessageCircle, X } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="mb-4 w-80 h-96 bg-card border border-border rounded-lg shadow-2xl overflow-hidden">
          <div className="bg-primary text-primary-foreground p-4 flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <MessageCircle className="w-5 h-5" />
              <span className="font-semibold">Chat with us</span>
            </div>
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setIsOpen(false)}
              className="text-primary-foreground hover:bg-primary-foreground/20 h-8 w-8"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
          <div className="p-4 flex items-center justify-center h-full bg-secondary/20">
            <p className="text-muted-foreground text-center">
              Chat functionality will be available soon.<br />
              Contact us for immediate support!
            </p>
          </div>
        </div>
      )}
      
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-primary hover:bg-primary/90 shadow-primary hover:shadow-glow transition-all duration-300"
        size="icon"
      >
        <MessageCircle className="w-6 h-6" />
      </Button>
    </div>
  );
};

export default ChatWidget;