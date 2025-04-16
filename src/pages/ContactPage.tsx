import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FaTelegram } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { useEffect, useState } from "react";

export default function ContactPage() {
  const [_, navigate] = useLocation();
  const [plan, setPlan] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [duration, setDuration] = useState<string>("");
  const [currency, setCurrency] = useState<string>("₹");

  useEffect(() => {
    // Get URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const planParam = urlParams.get("plan");
    const priceParam = urlParams.get("price");
    const durationParam = urlParams.get("duration");
    const currencyParam = urlParams.get("currency");

    if (planParam) setPlan(planParam);
    if (priceParam) setPrice(priceParam);
    if (durationParam) setDuration(durationParam);
    if (currencyParam) setCurrency(currencyParam);
  }, []);

  return (
    <div className="min-h-screen dark:bg-[#121212] bg-white dark:text-[#e1e1e1] text-gray-900">
      <Navbar />

      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-3xl mx-auto bg-white dark:bg-[#1d1d1d] shadow-lg rounded-xl p-8">
          <div className="text-center mb-12">
            <span className="inline-block bg-[#5f6df8]/10 text-[#5f6df8] font-medium rounded-full px-4 py-1.5 mb-4">
              <FaTelegram className="inline-block mr-2" />
              Contact Us
            </span>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white text-gray-900">Complete Your Purchase</h1>
            
            {plan && price && duration ? (
              <div className="mt-6 mb-8 bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                <h2 className="text-xl font-semibold mb-4 dark:text-white text-gray-900">Selected Plan Details</h2>
                <div className="flex flex-col md:flex-row justify-between items-center text-left">
                  <div>
                    <p className="text-gray-600 dark:text-gray-400 mb-2"><span className="font-medium">Plan:</span> {plan}</p>
                    <p className="text-gray-600 dark:text-gray-400 mb-2"><span className="font-medium">Duration:</span> {duration}</p>
                  </div>
                  <div className="text-2xl font-bold text-[#5f6df8] mt-4 md:mt-0">
                    {currency}{price}
                  </div>
                </div>
              </div>
            ) : (
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Please select a plan from our pricing page to continue.
              </p>
            )}
            
            <p className="text-gray-600 dark:text-gray-400">
              To complete your purchase, please contact us on Telegram. Our support team will guide you through the payment process and set up your premium access.
            </p>
          </div>
          
          <div className="flex flex-col items-center justify-center">
            <Button 
              className="bg-[#0088cc] hover:bg-[#0077b5] text-white flex items-center justify-center w-full max-w-md"
              size="lg"
              asChild
            >
              <a href="https://t.me/ProYato" target="_blank" rel="noopener noreferrer">
                <FaTelegram className="mr-2 h-5 w-5" />
                Contact on Telegram
              </a>
            </Button>
            
            <p className="mt-6 text-gray-500 dark:text-gray-400 text-sm text-center">
              Our support team is available 24/7 to assist you with your purchase. 
              <br />You will receive access to premium channels immediately after payment confirmation.
            </p>
            
            <Button 
              variant="outline"
              className="mt-8 dark:text-white text-gray-900"
              onClick={() => navigate("/")}
            >
              Return to Home
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
