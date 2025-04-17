import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import PricingSection from "../components/PricingSection";
import ChannelsSection from "../components/ChannelsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen dark:bg-[#121212] bg-white dark:text-[#e1e1e1] text-gray-900">
      <Navbar />
      <HeroSection />
      <PricingSection />
      <FeaturesSection />
      <ChannelsSection />
      <Footer />
    </div>
  );
}
