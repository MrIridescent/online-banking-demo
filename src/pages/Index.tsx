import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection"; 
import SocialSidebar from "@/components/SocialSidebar";
import ChatWidget from "@/components/ChatWidget";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <SocialSidebar />
      <HeroSection />
      <ChatWidget />
    </div>
  );
};

export default Index;
