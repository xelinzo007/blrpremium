import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FaTelegram, FaQrcode, FaPaperPlane } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { useEffect, useState, useRef } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { QRCodeSVG } from "qrcode.react";

export default function ContactPage() {
  const [_, navigate] = useLocation();
  const [plan, setPlan] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [duration, setDuration] = useState<string>("");
  const [currency, setCurrency] = useState<string>("₹");
  const qrRef = useRef<HTMLDivElement>(null);

  const UPI_ID = "rohit162@fam";

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

  // Only generate QR if currency is INR and price is present
  const showQRCode = currency === "₹" && price !== "";

  // Generate UPI payment link
  const getUpiLink = () => {
    if (currency !== "₹" || !price) return "";
    
    const amount = price;
    const paymentDesc = `TG Premium - ${plan} (${duration})`;
    
    return `upi://pay?pa=${UPI_ID}&pn=TG%20Premium&am=${amount}&cu=INR&tn=${encodeURIComponent(paymentDesc)}`;
  };

  const handleSendScreenshot = () => {
    const telegramLink = `https://t.me/ProYato`;
    window.open(telegramLink, '_blank');
  };

  return (
    <div className="min-h-screen dark:bg-[#121212] bg-white dark:text-[#e1e1e1] text-gray-900">
      <Navbar />

      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="max-w-3xl mx-auto bg-white dark:bg-[#1d1d1d] shadow-lg rounded-xl p-8">
          <div className="text-center mb-8">
            <span className="inline-block bg-[#5f6df8]/10 text-[#5f6df8] font-medium rounded-full px-4 py-1.5 mb-4">
              <FaTelegram className="inline-block mr-2" />
              Complete Purchase
            </span>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white text-gray-900">Complete Your Payment</h1>
            
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
          </div>
          
          {plan && price && (
            <Tabs defaultValue="payment" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="payment">Payment Options</TabsTrigger>
                <TabsTrigger value="contact">Contact Support</TabsTrigger>
              </TabsList>
              
              <TabsContent value="payment" className="space-y-4">
                {showQRCode ? (
                  <div className="flex flex-col items-center">
                    <div className="relative bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                      <div ref={qrRef} className="flex flex-col items-center">
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Scan QR to Pay</h3>
                        <div className="bg-white p-3 rounded-lg mb-2 flex justify-center">
                          {getUpiLink() && (
                            <QRCodeSVG 
                              value={getUpiLink()}
                              size={200}
                              bgColor={"#ffffff"}
                              fgColor={"#000000"}
                              level={"L"}
                              includeMargin={false}
                            />
                          )}
                        </div>
                        <div className="text-center">
                          <p className="text-sm text-gray-600 font-medium">UPI ID: {UPI_ID}</p>
                          <p className="text-sm text-gray-600">Amount: ₹{price}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6 space-y-4 w-full max-w-md">
                      <Button 
                        className="w-full bg-green-600 hover:bg-green-700 text-white"
                        onClick={() => window.open(getUpiLink(), '_blank')}
                      >
                        Pay with UPI App
                      </Button>
                      
                      <Button
                        variant="outline" 
                        className="w-full border-[#5f6df8] dark:text-white text-gray-800 flex items-center justify-center"
                        onClick={handleSendScreenshot}
                      >
                        <FaPaperPlane className="mr-2 h-4 w-4" />
                        Send Payment Screenshot
                      </Button>
                    </div>
                    
                    <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 text-center">
                      After payment, please send us a screenshot on Telegram to activate your premium access immediately.
                    </p>
                  </div>
                ) : (
                  <div className="text-center p-8">
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Online payment is currently only available for Indian Rupee (₹) payments.
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      Please contact us on Telegram for USD payments or other payment methods.
                    </p>
                  </div>
                )}
              </TabsContent>
              
              <TabsContent value="contact">
                <div className="flex flex-col items-center justify-center">
                  <p className="text-gray-600 dark:text-gray-400 mb-6 text-center">
                    Need help with your payment or have questions about your subscription? Our support team is available 24/7 to assist you.
                  </p>
                  
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
                    You will receive access to premium channels immediately after payment confirmation.
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          )}
          
          <Separator className="my-8" />
          
          <div className="flex justify-center">
            <Button 
              variant="outline"
              className="dark:text-white text-gray-900"
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
