import { ReactNode } from "react";
import { ArrowRight } from "lucide-react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  linkText: string;
  link: string;
}

export default function FeatureCard({ icon, title, description, linkText, link }: FeatureCardProps) {
  return (
    <div className="dark:bg-[#1d1d1d] bg-white rounded-lg p-6 hover:bg-opacity-95 transition-all shadow-md hover:shadow-lg">
      <div className="w-12 h-12 dark:bg-[#121212] bg-gray-100 rounded-lg flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-4 dark:text-white text-gray-900">{title}</h3>
      <p className="dark:text-[#9ca3af] text-gray-600 mb-6">
        {description}
      </p>
      <a href={link} className="flex items-center text-[#5f6df8] hover:underline font-medium">
        <span>{linkText}</span>
        <ArrowRight className="ml-2 h-4 w-4" />
      </a>
    </div>
  );
}
