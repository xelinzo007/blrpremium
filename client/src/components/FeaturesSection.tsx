import FeatureCard from "./FeatureCard";
import { Shield, Zap, Download, Tv, Award, Headphones } from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: <Tv className="text-blue-500" />,
      title: "Ad-Free Experience",
      description: "Enjoy uninterrupted Movies and Adult Content without any advertisements or disruptions.",
      linkText: "Go Premium",
      link: "https://t.me/Premium_Fliix/23"
    },
    {
      icon: <Download className="text-teal-500" />,
      title: "Unlimited Downloads",
      description: "Download as much content as you want for offline viewing, with no daily limits.",
      linkText: "Learn more",
      link: "https://t.me/Premium_Fliix/23"
    },
    {
      icon: <Shield className="text-purple-500" />,
      title: "Priority Support",
      description: "Get faster responses from our support team when you need assistance.",
      linkText: "Get support",
      link: "https://t.me/Premium_Fliix/23"
    },
    {
      icon: <Zap className="text-amber-500" />,
      title: "Enhanced Performance",
      description: "Experience faster downloads and smoother playback with high quality files.",
      linkText: "See details",
      link: "https://t.me/Premium_Fliix/23"
    },
    {
      icon: <Award className="text-red-500" />,
      title: "Exclusive Content",
      description: "Access premium content and features that are only available to subscribers.",
      linkText: "View exclusives",
      link: "https://t.me/Premium_Fliix/23"
    },
    {
      icon: <Headphones className="text-green-500" />,
      title: "High Quality Audio",
      description: "Enjoy enhanced audio quality for a more immersive viewing experience.",
      linkText: "Try it now",
      link: "https://t.me/Premium_Fliix/23"
    }
  ];

  return (
    <section id="features" className="py-16 px-4 md:px-8 lg:px-16 dark:bg-[#121212] bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <span className="inline-block bg-[#5f6df8]/10 text-[#5f6df8] font-medium rounded-full px-4 py-1.5 mb-4">Premium Benefits</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 dark:text-white text-gray-900">Premium Features</h2>
          <p className="text-xl dark:text-gray-400 text-gray-600">
            Unlock these premium features when you subscribe to any of our paid plans
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard 
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              linkText={feature.linkText}
              link={feature.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
