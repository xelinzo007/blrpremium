import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FaTelegram, FaArrowLeft } from "react-icons/fa";
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
    const urlParams = new URLSearchParams(window.location.search);
    setPlan(urlParams.get("plan") || "");
    setPrice(urlParams.get("price") || "");
    setDuration(urlParams.get("duration") || "");
    setCurrency(urlParams.get("currency") || "₹");
  }, []);

  return (
    <div className="min-h-screen dark:bg-[#0a0a0a] bg-gray-50 dark:text-[#e1e1e1]">
      <Navbar />

      <section className="py-12 px-4 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto bg-white dark:bg-[#161616] shadow-xl rounded-2xl overflow-hidden">
          <div className="p-8">
            <Button
              variant="ghost"
              className="mb-6 -ml-2"
              onClick={() => navigate("/")}
            >
              <FaArrowLeft className="mr-2" />
              Back to Plans
            </Button>

            <div className="text-center mb-8">
              <span className="inline-block bg-gradient-to-r from-[#5f6df8] to-[#8a6df8] text-white font-medium rounded-full px-4 py-1.5 mb-4">
                <FaTelegram className="inline-block mr-2" />
                Complete Your Purchase
              </span>
              <h1 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#5f6df8] to-[#8a6df8]">
                Secure Payment Gateway
              </h1>

              {plan && price && duration ? (
                <div className="mt-6 mb-8 bg-gray-50 dark:bg-gray-800/50 p-6 rounded-xl border dark:border-gray-700">
                  <h2 className="text-xl font-semibold mb-4 flex items-center justify-center gap-2">
                    <span className="bg-[#5f6df8] text-white p-1.5 rounded-full">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"></path>
                        <path d="M8.5 8.5v.01"></path>
                        <path d="M16 15.5v.01"></path>
                        <path d="M12 12v.01"></path>
                        <path d="M11 17v.01"></path>
                        <path d="M7 14v.01"></path>
                      </svg>
                    </span>
                    Your Plan Details
                  </h2>
                  <div className="flex flex-col md:flex-row justify-between items-center text-left gap-4">
                    <div>
                      <p className="text-gray-600 dark:text-gray-300 mb-2">
                        <span className="font-medium">Plan:</span> {plan}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300">
                        <span className="font-medium">Duration:</span> {duration}
                      </p>
                    </div>
                    <div className="text-2xl font-bold bg-gradient-to-r from-[#5f6df8] to-[#8a6df8] bg-clip-text text-transparent">
                      {currency}
                      {price}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
                  <p className="text-yellow-700 dark:text-yellow-300">
                    Please select a plan from our pricing page to continue.
                  </p>
                </div>
              )}
            </div>

            {plan && price && (
              <div className="space-y-6">
                <div className="bg-white dark:bg-gray-900 border dark:border-gray-700 rounded-xl p-6 text-center">
                  <h3 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">
                    Bank Transfer Details
                  </h3>
                  <div className="text-left space-y-2 text-gray-700 dark:text-gray-300 font-mono">
                    <p>
                      <strong>Bank Name:</strong> Federal Bank
                    </p>
                    <p>
                      <strong>Account Number:</strong> 14020200004432
                    </p>
                    <p>
                      <strong>IFSC Code:</strong> FDRL0001402
                    </p>
                  </div>
                  <p className="mt-6 text-sm text-gray-600 dark:text-gray-400">
                    Please make the payment and send a screenshot to our Telegram
                    support for instant activation.
                  </p>
                  <Button
                    size="lg"
                    className="w-full mt-4 bg-[#0088cc] hover:bg-[#0077b5] text-white"
                    onClick={() => window.open("https://t.me/Xelsix", "_blank")}
                  >
                    <FaTelegram className="mr-2" />
                    Send Payment Proof
                  </Button>
                </div>
              </div>
            )}
          </div>

          <div className="bg-gray-50 dark:bg-gray-800/50 px-8 py-6 border-t dark:border-gray-700">
            <p className="text-center text-gray-500 dark:text-gray-400 text-sm">
              Secured with end-to-end encryption • No payment data stored
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
