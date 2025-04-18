import { Button } from "@/components/ui/button";
import { Crown, Star, Zap } from "lucide-react";
import { FaTelegram } from "react-icons/fa";

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 px-4 md:px-8 lg:px-16 flex flex-col items-center relative overflow-hidden text-center dark:bg-[#121212] bg-white dark:text-white text-gray-900">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(95,109,248,0.2),transparent_70%)]"></div>
      
      <div className="max-w-4xl z-10">
        <div className="inline-flex items-center bg-[#5f6df8]/10 rounded-full px-4 py-2 mb-6">
          <FaTelegram className="h-5 w-5 text-[#5f6df8] mr-2" />
          <span className="text-[#5f6df8] font-medium">Telegram Premium Channels</span>
        </div>
        <h1 className="text-[#5f6df8] text-4xl md:text-6xl font-bold mb-4">TG Premium</h1>
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6 dark:text-white text-gray-900">
            Exclusive Content at Your Fingertips
          </h2>
          <p className="text-[#9ca3af] dark:text-[#9ca3af] text-gray-600 mb-8 text-lg md:text-xl max-w-3xl mx-auto">
            Get access to premium telegram channels with exclusive content, early releases, and ad-free experience. Join our growing community of premium subscribers.
          </p>
        </div>
        
        <div className="flex flex-wrap gap-4 justify-center">
          <Button 
            className="bg-[#5f6df8] hover:bg-opacity-90 text-white px-6 py-2.5 flex items-center"
            size="lg"
            onClick={() => scrollToSection('premium-plans')}
          >
            <Star className="mr-2 h-5 w-5" />
            Get Premium Now
          </Button>
          <Button 
            variant="outline" 
            className="bg-[#1d1d1d] dark:bg-[#1d1d1d] bg-gray-100 hover:bg-gray-200 dark:hover:bg-gray-800 text-gray-900 dark:text-white border-0 px-6 py-2.5 flex items-center"
            size="lg"
            onClick={() => scrollToSection('channels')}
          >
            <Zap className="mr-2 h-5 w-5" />
            View Channels
          </Button>
        </div>
        
        <div className="mt-10 text-[#9ca3af] dark:text-[#9ca3af] text-gray-500 text-sm">
          No credit card required to start your free trial. Cancel anytime.
        </div>
      </div>
    </section>
  );
}
