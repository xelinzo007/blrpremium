import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FaTelegram, FaQrcode, FaPaperPlane, FaPaypal, FaBitcoin, FaCreditCard } from "react-icons/fa";
import { SiStripe } from "react-icons/si";
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

  const UPI_ID = "rohit1234@fam";
  const PAYPAL_EMAIL = "premium@yourdomain.com";
  const BITCOIN_ADDRESS = "3FZbgi29cpjq2GjdwV8eyHuJJnkLtktZc5";

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

  // Payment methods visibility
  const showUPI = currency === "₹" && price !== "";
  const showUSD = (currency === "$" || currency === "€" || currency === "£") && price !== "";

  // Generate UPI payment link
  const getUpiLink = () => {
    if (currency !== "₹" || !price) return "";
    
    const amount = price;
    const paymentDesc = `Channel Premium - ${plan} (${duration})`;
    
    return `upi://pay?pa=${UPI_ID}&pn=TG%20Premium&am=${amount}&cu=INR&tn=${encodeURIComponent(paymentDesc)}`;
  };

  // Generate PayPal payment link
  const getPaypalLink = () => {
    if (!price) return "";
    const amount = parseFloat(price);
    const paymentDesc = `Channel Premium - ${plan} (${duration})`;
    
    return `https://www.paypal.com/paypalme/${PAYPAL_EMAIL}?amount=${amount}&currencyCode=USD&text=${encodeURIComponent(paymentDesc)}`;
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
                {showUPI ? (
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
                  </div>
                ) : showUSD ? (
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {/* PayPal Option */}
                      <div className="border rounded-lg p-4 flex flex-col items-center">
                        <FaPaypal className="text-blue-500 text-4xl mb-3" />
                        <h3 className="font-semibold mb-2">PayPal</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-3 text-center">
                          Pay securely with your PayPal account
                        </p>
                        <Button 
                          className="w-full bg-[#003087] hover:bg-[#00256b] text-white"
                          onClick={() => window.open(getPaypalLink(), '_blank')}
                        >
                          Pay with PayPal
                        </Button>
                      </div>

                      {/* Stripe Option */}
                      <div className="border rounded-lg p-4 flex flex-col items-center">
                        <SiStripe className="text-purple-600 text-4xl mb-3" />
                        <h3 className="font-semibold mb-2">Credit/Debit Card</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-3 text-center">
                          Secure payment via Stripe
                        </p>
                        <Button 
                          variant="outline"
                          className="w-full border-purple-600 text-purple-600 hover:bg-purple-50 dark:hover:bg-purple-900/20"
                          onClick={() => window.open("https://buy.stripe.com/your-stripe-link", '_blank')}
                        >
                          <FaCreditCard className="mr-2 h-4 w-4" />
                          Pay with Card
                        </Button>
                      </div>
                    </div>

                    {/* Crypto Option */}
                    <div className="border rounded-lg p-4">
                      <div className="flex flex-col items-center">
                        <FaBitcoin className="text-orange-500 text-4xl mb-3" />
                        <h3 className="font-semibold mb-2">Cryptocurrency</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-3 text-center">
                          Pay with Bitcoin or other cryptocurrencies
                        </p>
                        
                        <div className="w-full max-w-xs bg-white p-4 rounded-lg border border-gray-200 shadow-sm mb-4">
                          <div className="flex flex-col items-center">
                            <QRCodeSVG 
                              value={`bitcoin:${BITCOIN_ADDRESS}?amount=${price}&label=TG%20Premium`}
                              size={160}
                              bgColor={"#ffffff"}
                              fgColor={"#000000"}
                              level={"L"}
                              includeMargin={false}
                            />
                            <div className="mt-3 text-center">
                              <p className="text-xs font-mono break-all">{BITCOIN_ADDRESS}</p>
                              <p className="text-sm mt-1">Amount: {currency}{price}</p>
                            </div>
                          </div>
                        </div>
                        
                        <Button 
                          variant="outline"
                          className="w-full max-w-xs border-orange-500 text-orange-500 hover:bg-orange-50 dark:hover:bg-orange-900/20"
                          onClick={() => navigator.clipboard.writeText(BITCOIN_ADDRESS)}
                        >
                          Copy Address
                        </Button>
                      </div>
                    </div>

                    <Button
                      variant="outline" 
                      className="w-full border-[#5f6df8] dark:text-white text-gray-800 flex items-center justify-center"
                      onClick={handleSendScreenshot}
                    >
                      <FaPaperPlane className="mr-2 h-4 w-4" />
                      Send Payment Proof
                    </Button>
                  </div>
                ) : (
                  <div className="text-center p-8">
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Please select a valid plan to see payment options.
                    </p>
                  </div>
                )}
                
                <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 text-center">
                  After payment, please send us the payment proof on Telegram to activate your premium access immediately.
                </p>
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
