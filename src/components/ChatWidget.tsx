import { MessageCircle, Send, X } from "lucide-react";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type ChatRole = "user" | "assistant";

interface ChatMessage {
  role: ChatRole;
  content: string;
}

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content:
        "Hello! I can help with services, pricing, support hours, and contact details. Ask me anything.",
    },
  ]);

  const quickReplies = useMemo(
    () => ["Pricing", "Support hours", "Cybersecurity services", "Contact details"],
    []
  );

  // Deterministic intent matcher keeps the widget fully functional without backend dependencies.
  const generateResponse = (rawMessage: string): string => {
    const message = rawMessage.toLowerCase();

    if (message.includes("price") || message.includes("cost") || message.includes("package")) {
      return "Our current service packages are Starter (₦150,000/month), Professional (₦350,000/month), and Enterprise (₦750,000/month). For a tailored quote, use the Contact page form.";
    }

    if (message.includes("hour") || message.includes("open") || message.includes("support")) {
      return "Business hours are Monday–Friday 8:00 AM–6:00 PM, Saturday 9:00 AM–4:00 PM, and Sunday for emergency support only.";
    }

    if (message.includes("cyber") || message.includes("security") || message.includes("hack")) {
      return "Our cybersecurity services include security audits, penetration testing, compliance support, and 24/7 monitoring.";
    }

    if (message.includes("contact") || message.includes("phone") || message.includes("email")) {
      return "You can reach us on +234 807 115 5200 or hello@i2sltd.tech. You can also submit the Contact form and receive a prepared email draft instantly.";
    }

    return "Thanks for your message. Please share your project goal, timeline, and budget range, and our team will respond with the next best step.";
  };

  const submitMessage = (message: string) => {
    const cleanedMessage = message.trim();
    if (!cleanedMessage) return;

    setMessages((previousMessages) => [
      ...previousMessages,
      { role: "user", content: cleanedMessage },
      { role: "assistant", content: generateResponse(cleanedMessage) },
    ]);
    setInputValue("");
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    submitMessage(inputValue);
  };

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

          <div className="h-[245px] overflow-y-auto bg-secondary/20 p-3 space-y-3">
            {messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={`rounded-md p-2 text-sm leading-relaxed ${
                  message.role === "assistant"
                    ? "bg-background text-foreground"
                    : "bg-primary text-primary-foreground ml-8"
                }`}
              >
                {message.content}
              </div>
            ))}
          </div>

          <div className="border-t border-border p-3 space-y-2">
            <div className="flex flex-wrap gap-2">
              {quickReplies.map((quickReply) => (
                <Button
                  key={quickReply}
                  type="button"
                  variant="outline"
                  size="sm"
                  className="h-7 text-xs"
                  onClick={() => submitMessage(quickReply)}
                >
                  {quickReply}
                </Button>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="flex items-center gap-2">
              <Input
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)}
                placeholder="Type a message..."
                aria-label="Chat message"
              />
              <Button size="icon" type="submit" aria-label="Send message">
                <Send className="w-4 h-4" />
              </Button>
            </form>
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