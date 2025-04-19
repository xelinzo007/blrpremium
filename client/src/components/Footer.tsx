import AniyomiLogo from "./icons/AniyomiLogo";
import { FaTelegram, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t dark:border-gray-800 border-gray-200 py-8 px-4 md:px-8 mt-12 dark:bg-[#121212] bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center">
              <AniyomiLogo className="h-8 w-8" />
              <span className="ml-2 font-semibold dark:text-white text-gray-900">TG Premium</span>
            </div>
            <p className="text-sm dark:text-gray-400 text-gray-600 mt-2">Premium Telegram channel subscription service</p>
          </div>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
            <div className="flex space-x-4">
              <a href="#" className="dark:text-gray-400 text-gray-600 hover:text-[#5f6df8]">
                <FaTelegram className="h-5 w-5" />
              </a>
              <a href="#" className="dark:text-gray-400 text-gray-600 hover:text-[#5f6df8]">
                <FaTwitter className="h-5 w-5" />
              </a>
              <a href="#" className="dark:text-gray-400 text-gray-600 hover:text-[#5f6df8]">
                <FaInstagram className="h-5 w-5" />
              </a>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-sm dark:text-gray-400 text-gray-600 hover:text-[#5f6df8]">Privacy Policy</a>
              <a href="#" className="text-sm dark:text-gray-400 text-gray-600 hover:text-[#5f6df8]">Terms of Service</a>
              <a href="#" className="text-sm dark:text-gray-400 text-gray-600 hover:text-[#5f6df8]">Contact Us</a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t dark:border-gray-800 border-gray-200 text-center text-sm dark:text-gray-400 text-gray-600">
          <p>© {new Date().getFullYear()} Premium Flix. Not affiliated with or endorsed by Telegram Inc.</p>
        </div>
      </div>
    </footer>
  );
}
