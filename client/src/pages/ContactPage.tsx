import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FaTelegram, FaPaypal, FaBitcoin, FaCreditCard, FaCopy, FaArrowLeft } from "react-icons/fa";
import { SiStripe } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { QRCodeSVG } from "qrcode.react";

export default function ContactPage() {
  const [_, navigate] = useLocation();
  const [plan, setPlan] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [duration, setDuration] = useState<string>("");
  const [currency, setCurrency] = useState<string>("₹");
  const [copied, setCopied] = useState(false);

  const UPI_ID = "rohit1234@fam";
  const PAYPAL_EMAIL = "premium@yourdomain.com";
  const BITCOIN_ADDRESS = "3FZbgi29cpjq2GjdwV8eyHuJJnkLtktZc5";

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    setPlan(urlParams.get("plan") || "");
    setPrice(urlParams.get("price") || "");
    setDuration(urlParams.get("duration") || "");
    setCurrency(urlParams.get("currency") || "₹");
  }, []);

  const showUPI = currency === "₹" && price !== "";
  const showUSD = (currency === "$" || currency === "€" || currency === "£") && price !== "";

  const getUpiLink = () => {
    if (currency !== "₹" || !price) return "";
    const paymentDesc = `Channel Premium - ${plan} (${duration})`;
    return `upi://pay?pa=${UPI_ID}&pn=TG%20Premium&am=${price}&cu=INR&tn=${encodeURIComponent(paymentDesc)}`;
  };

  const getPaypalLink = () => {
    if (!price) return "";
    const paymentDesc = `Channel Premium - ${plan} (${duration})`;
    return `https://www.paypal.com/paypalme/${PAYPAL_EMAIL}?amount=${price}&currencyCode=USD&text=${encodeURIComponent(paymentDesc)}`;
  };

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const PaymentCard = ({ 
    icon, 
    title, 
    description, 
    buttonText, 
    onClick, 
    buttonVariant = "default",
    color = "bg-blue-500"
  }: {
    icon: React.ReactNode;
    title: string;
    description: string;
    buttonText: string;
    onClick: () => void;
    buttonVariant?: "default" | "outline";
    color?: string;
  }) => (
    <div className="border dark:border-gray-700 rounded-xl p-6 flex flex-col items-center transition-all hover:shadow-lg hover:-translate-y-1">
      <div className={`${color} text-white p-3 rounded-full mb-4`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2 text-center">{title}</h3>
      <p className="text-gray-500 dark:text-gray-400 mb-4 text-center text-sm">{description}</p>
      <Button 
        variant={buttonVariant} 
        className="w-full mt-auto"
        onClick={onClick}
      >
        {buttonText}
      </Button>
    </div>
  );

  const QRCodeDisplay = ({ 
    value, 
    title, 
    copyText,
    amountText
  }: {
    value: string;
    title: string;
    copyText: string;
    amountText: string;
  }) => (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 p-6 rounded-xl border dark:border-gray-700">
      <h3 className="text-lg font-semibold mb-4 text-center">{title}</h3>
      <div className="bg-white p-4 rounded-lg shadow-inner mb-4 flex justify-center">
        <QRCodeSVG 
          value={value}
          size={200}
          bgColor="#ffffff"
          fgColor="#000000"
          level="H"
          includeMargin={false}
        />
      </div>
      <div className="bg-gray-100 dark:bg-gray-800 p-3 rounded-lg mb-4">
        <p className="text-xs font-mono break-all text-center">{copyText}</p>
      </div>
      <p className="text-center font-medium mb-4">{amountText}</p>
      <Button 
        variant="outline"
        className="w-full"
        onClick={() => handleCopy(copyText)}
      >
        <FaCopy className="mr-2" />
        {copied ? "Copied!" : "Copy Address"}
      </Button>
    </div>
  );

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
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
                      {currency}{price}
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
              <Tabs defaultValue="payment" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-8 bg-gray-100 dark:bg-gray-800 p-1.5 rounded-xl">
                  <TabsTrigger 
                    value="payment" 
                    className="data-[state=active]:bg-white data-[state=active]:shadow-sm data-[state=active]:dark:bg-gray-700 rounded-lg py-2"
                  >
                    Payment Options
                  </TabsTrigger>
                  <TabsTrigger 
                    value="contact" 
                    className="data-[state=active]:bg-white data-[state=active]:shadow-sm data-[state=active]:dark:bg-gray-700 rounded-lg py-2"
                  >
                    Contact Support
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="payment" className="space-y-8">
                  {showUPI ? (
                    <div className="space-y-6">
                      <QRCodeDisplay
                        value={getUpiLink()}
                        title="Scan UPI QR Code"
                        copyText={UPI_ID}
                        amountText={`Amount: ₹${price}`}
                      />
                      
                      <div className="grid grid-cols-1 gap-4">
                        <Button 
                          size="lg"
                          className="w-full bg-green-600 hover:bg-green-700 text-white py-6 text-lg"
                          onClick={() => window.open(getUpiLink(), '_blank')}
                        >
                          Open UPI App to Pay
                        </Button>
                        
                        <Button
                          variant="outline" 
                          size="lg"
                          className="w-full border-[#5f6df8] text-[#5f6df8] hover:bg-[#5f6df8]/10 dark:hover:bg-[#5f6df8]/20 py-6 text-lg"
                          onClick={() => window.open("https://t.me/ProYato", '_blank')}
                        >
                          <FaTelegram className="mr-2 h-5 w-5" />
                          Send Payment Proof
                        </Button>
                      </div>
                    </div>
                  ) : showUSD ? (
                    <div className="space-y-8">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <PaymentCard
                          icon={<FaPaypal className="text-2xl" />}
                          title="PayPal"
                          description="Secure payments with PayPal account"
                          buttonText="Pay with PayPal"
                          onClick={() => window.open(getPaypalLink(), '_blank')}
                          color="bg-[#003087]"
                        />
                        
                        <PaymentCard
                          icon={<SiStripe className="text-2xl" />}
                          title="Credit Card"
                          description="Visa, Mastercard, Amex supported"
                          buttonText="Pay with Card"
                          onClick={() => window.open("https://buy.stripe.com/your-stripe-link", '_blank')}
                          buttonVariant="outline"
                          color="bg-purple-600"
                        />
                      </div>

                      <div className="space-y-6">
                        <h3 className="text-xl font-bold flex items-center gap-2">
                          <FaBitcoin className="text-orange-500" />
                          Cryptocurrency Payment
                        </h3>
                        
                        <QRCodeDisplay
                          value={`bitcoin:${BITCOIN_ADDRESS}?amount=${price}&label=TG%20Premium`}
                          title="Bitcoin Payment Address"
                          copyText={BITCOIN_ADDRESS}
                          amountText={`Amount: ${currency}${price}`}
                        />
                        
                        <Button
                          size="lg"
                          variant="outline"
                          className="w-full border-orange-500 text-orange-500 hover:bg-orange-50 dark:hover:bg-orange-900/20 py-6 text-lg"
                          onClick={() => window.open("https://t.me/ProYato", '_blank')}
                        >
                          <FaTelegram className="mr-2 h-5 w-5" />
                          Send Transaction Hash
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center p-8 bg-gray-50 dark:bg-gray-800 rounded-xl">
                      <p className="text-gray-600 dark:text-gray-400">
                        Please select a valid currency to see payment options.
                      </p>
                    </div>
                  )}
                  
                  <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-4 text-center">
                    <p className="text-blue-700 dark:text-blue-300 font-medium">
                      After payment, send the proof to @ProYato on Telegram for instant activation
                    </p>
                  </div>
                </TabsContent>
                
<TabsContent value="contact">
  <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 text-center">
    <div className="bg-[#0088cc]/10 text-[#0088cc] dark:text-[#5ab5f3] p-3 rounded-full inline-block mb-6">
      <FaTelegram className="text-3xl" />
    </div>
    <h2 className="text-2xl font-bold mb-4">Need Help?</h2>
    <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-md mx-auto">
      Our support team is available 24/7 to assist with payments or any questions about your subscription.
    </p>
    
    <Button 
      size="lg"
      className="bg-[#0088cc] hover:bg-[#0077b5] text-white px-8 py-6 text-lg w-full max-w-md mx-auto"
      onClick={() => window.open("https://t.me/ProYato", '_blank')}
    >
      <FaTelegram className="mr-2 h-5 w-5" />
      Message Us on Telegram
    </Button>
    
    <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
      Typically replies within 5 minutes
    </p>
  </div>
</TabsContent>
              </Tabs>
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
