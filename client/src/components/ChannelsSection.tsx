import { Button } from "@/components/ui/button";
import { FaTelegram, FaYoutube, FaInstagram, FaTwitter, FaGlobe } from "react-icons/fa";
import { Users, MessageCircle, Video, Film, Music, BookOpen, Globe } from "lucide-react";

interface ChannelCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  subscriberCount: string;
  category: string;
  link: string;
}

function ChannelCard({ title, description, icon, subscriberCount, category, link }: ChannelCardProps) {
  return (
    <div className="bg-white dark:bg-[#1d1d1d] rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all">
      <div className="h-3 bg-[#5f6df8]"></div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div className="flex items-center">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#5f6df8]/10 text-[#5f6df8]">
              {icon}
            </div>
            <div className="ml-4">
              <h3 className="font-bold text-lg dark:text-white text-gray-900">{title}</h3>
              <span className="text-xs text-gray-500 px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full">{category}</span>
            </div>
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <Users className="w-3 h-3 mr-1" />
            <span>{subscriberCount}</span>
          </div>
        </div>
        
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-5">
          {description}
        </p>
        
        <div className="flex justify-between items-center">
          <Button 
            className="w-full bg-[#5f6df8] hover:bg-[#4a58e3] text-white flex items-center justify-center"
            size="sm"
            asChild
          >
            <a href={link} target="_blank" rel="noopener noreferrer">
              <FaTelegram className="mr-2 h-4 w-4" />
              Join Channel
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default function ChannelsSection() {
  const channels = [
    {
      title: "Meetups",
      description: "Join our exclusive Telegram channel for Bangalore meetups, events, and local news.",
      icon: <Film className="h-6 w-6" />,
      subscriberCount: "9k+",
      category: "Meetups",
      link: "https://t.me/bangloree"
    },
    {
      title: "Banglore Chats",
      description: "Join the vibrant community of Bangalore for discussions, events, and local news.",
      icon: <Video className="h-6 w-6" />,
      subscriberCount: "2K+",
      category: "Chats",
      link: "https://t.me/bengalorechats"
    },
    {
      title: "Banglore friends",
      description: "Bangalore's exclusive community for friends, events, and local news.",
      icon: <BookOpen className="h-6 w-6" />,
      subscriberCount: "5K+",
      category: "Friends",
      link: "https://t.me/bengalurufrnds"
    },
    {
      title: "Mallu Voice Chat",
      description: "Join the Mallu community for voice chats, discussions, and local news.",
      icon: <Music className="h-6 w-6" />,
      subscriberCount: "1K+",
      category: "voice chat",
      link: "https://t.me/+Gy9Of3QjoydmNGVl"
    },
    {
      title: "Banglore Dating",
      description: "Exclusive dating channel for Bangalore singles to connect and meet.",
      icon: <Globe className="h-6 w-6" />,
      subscriberCount: "10K+",
      category: "Adult",
      link: "https://t.me/bangloredatings"
    },
    {
      title: "Banglore Jobs",
      description: "Find the latest job opportunities in Bangalore. Connect with recruiters and job seekers.",
      icon: <MessageCircle className="h-6 w-6" />,
      subscriberCount: "10K+",
      category: "Jobs",
      link: "https://t.me/jobsbanglore"
    },
  ];

  return (
    <section id="channels" className="py-16 px-4 md:px-8 lg:px-16 dark:bg-[#17172d] bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <span className="inline-block bg-[#5f6df8]/10 text-[#5f6df8] font-medium rounded-full px-4 py-1.5 mb-4">
            <FaTelegram className="inline-block mr-2" />
            Premium Access
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 dark:text-white text-gray-900">Premium Channels</h2>
          <p className="text-xl dark:text-gray-400 text-gray-600">
            Explore our exclusive Telegram channels available with premium subscription
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {channels.map((channel, index) => (
            <ChannelCard 
              key={index}
              title={channel.title}
              description={channel.description}
              icon={channel.icon}
              subscriberCount={channel.subscriberCount}
              category={channel.category}
              link={channel.link}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-500 dark:text-gray-400 mb-6">
            More channels are added regularly. Premium subscribers get priority access to all new channels.
          </p>
          <Button 
            className="bg-[#5f6df8] hover:bg-[#4a58e3]"
            size="lg"
            onClick={() => {
              const element = document.getElementById('premium-plans');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            Get Premium Access Now
          </Button>
        </div>
      </div>
    </section>
  );
}
