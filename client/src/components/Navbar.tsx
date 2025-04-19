import { Search, Github, Crown } from "lucide-react";
import { FaTelegram } from "react-icons/fa";
import AniyomiLogo from "./icons/AniyomiLogo";
import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="flex items-center justify-between px-4 md:px-8 py-4 border-b border-gray-800 dark:border-gray-800 border-gray-200 sticky top-0 z-50 bg-[#121212]/95 dark:bg-[#121212]/95 bg-white/95 backdrop-blur-sm">
      <div className="flex items-center">
        <div className="mr-4 flex items-center">
          <AniyomiLogo className="h-8 w-8" />
          <span className="ml-2 font-semibold text-white dark:text-white text-gray-900">Premium Plans</span>
        </div>
        <div className="relative hidden md:block">
          <div className="flex items-center bg-gray-800 dark:bg-gray-800 bg-gray-100 rounded-md px-3 py-1">
            <Search className="h-4 w-4 text-gray-400 dark:text-gray-400 text-gray-500 mr-2" />
            <input 
              type="text" 
              placeholder="Search" 
              className="bg-transparent focus:outline-none text-sm w-32 lg:w-48 text-gray-700 dark:text-gray-300" 
            />
            <span className="text-xs text-gray-500 ml-2">Ctrl K</span>
          </div>
        </div>
      </div>
      
      <div className="flex items-center space-x-4 sm:space-x-6">
        <Button
          variant="outline"
          size="sm"
          className="gap-1.5 text-[#5f6df8] border-[#5f6df8] border hover:bg-[#5f6df8] hover:text-white hidden md:flex"
          onClick={() => scrollToSection('premium-plans')}
        >
          <Crown className="h-4 w-4" />
          <span>Premium</span>
        </Button>
        <a 
          href="#" 
          className="text-sm font-medium hidden lg:inline-block hover:text-[#5f6df8]"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('features');
          }}
        >
          Features
        </a>
        <a 
          href="#" 
          className="text-sm font-medium hidden lg:inline-block hover:text-[#5f6df8]"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('premium-plans');
          }}
        >
          Pricing
        </a>
        <a 
          href="#" 
          className="text-sm font-medium hidden lg:inline-block hover:text-[#5f6df8]"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('channels');
          }}
        >
          Channels
        </a>
        <ThemeToggle />
        <a 
          href="https://t.me/codeflix_bots" 
          target="_blank" 
          className="p-1 rounded-full hover:bg-gray-800 dark:hover:bg-gray-800 hover:bg-gray-200" 
          aria-label="Telegram"
        >
          <FaTelegram className="h-4 w-4" />
        </a>
      </div>

      {/* Mobile menu button */}
      <div className="md:hidden flex items-center">
        <button
          onClick={toggleMenu}
          className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 focus:outline-none"
        >
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white dark:bg-[#1d1d1d] shadow-lg rounded-b-lg z-50 md:hidden">
          <div className="px-4 py-2">
            <a 
              href="#" 
              className="block py-2 text-sm font-medium hover:text-[#5f6df8]"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('premium-plans');
              }}
            >
              Premium
            </a>
            <a 
              href="#" 
              className="block py-2 text-sm font-medium hover:text-[#5f6df8]"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('features');
              }}
            >
              Features
            </a>
            <a 
              href="#" 
              className="block py-2 text-sm font-medium hover:text-[#5f6df8]"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('premium-plans');
              }}
            >
              Pricing
            </a>
            <a 
              href="#" 
              className="block py-2 text-sm font-medium hover:text-[#5f6df8]"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('channels');
              }}
            >
              Channels
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
