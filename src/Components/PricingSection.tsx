import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface PricingPlanProps {
  title: string;
  price: string;
  priceUSD?: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  buttonText: string;
  discount?: string;
  period: string;
  planId?: string;
}

import { useLocation } from "wouter";

function PricingPlan({
  title,
  price,
  priceUSD,
  description,
  features,
  isPopular,
  buttonText,
  discount,
  period,
  planId,
}: PricingPlanProps) {
  const [_, navigate] = useLocation();

  const handleSubscribe = () => {
    navigate(
      `/contact?plan=${title}&price=${price.substring(1)}&duration=${period}&currency=₹`,
    );
  };

  const handleSubscribeUSD = () => {
    if (priceUSD) {
      navigate(
        `/contact?plan=${title}&price=${priceUSD.substring(1)}&duration=${period}&currency=$`,
      );
    }
  };

  return (
    <div
      className={`dark:bg-[#1d1d1d] bg-white rounded-xl shadow-lg p-8 relative transition-all duration-300 hover:shadow-2xl hover:shadow-[#5f6df8]/10 ${isPopular ? "border-2 border-[#5f6df8]" : "dark:border dark:border-gray-800 border border-gray-200"}`}
    >
      {isPopular && (
        <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#5f6df8] text-white border-0 flex items-center">
          <Star className="h-3 w-3 mr-1" />
          Most Popular
        </Badge>
      )}
      <h3 className="text-xl font-bold mb-2 dark:text-white text-gray-900">
        {title}
      </h3>
      <div className="mb-1">
        <div className="flex items-baseline">
          <span className="text-3xl font-bold dark:text-white text-gray-900">
            {price}
          </span>
          <span className="dark:text-gray-400 text-gray-500 ml-1">
            /{period}
          </span>
        </div>
        {priceUSD && (
          <div className="flex items-baseline mt-1">
            <span className="text-xl font-semibold dark:text-gray-300 text-gray-600">
              {priceUSD}
            </span>
            <span className="dark:text-gray-400 text-gray-500 ml-1 text-sm">
              /{period}
            </span>
          </div>
        )}
        {discount && (
          <div className="flex items-center text-green-400 text-sm mt-2">
            <Sparkles className="h-3 w-3 mr-1" />
            {discount}
          </div>
        )}
      </div>
      <p className="dark:text-gray-400 text-gray-600 mt-4 mb-6 min-h-[50px]">
        {description}
      </p>
      <ul className="space-y-3 mb-8 min-h-[200px]">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check className="h-5 w-5 text-[#5f6df8] mr-2 shrink-0 mt-0.5" />
            <span className="dark:text-gray-300 text-gray-700">{feature}</span>
          </li>
        ))}
      </ul>
      <div className="space-y-2">
        <Button
          className={`w-full ${isPopular ? "bg-[#5f6df8] hover:bg-opacity-90 text-white" : "dark:bg-gray-800 bg-gray-100 dark:hover:bg-gray-700 hover:bg-gray-200 dark:text-white text-gray-800"}`}
          size="lg"
          onClick={handleSubscribe}
        >
          {buttonText} (₹)
        </Button>
        {priceUSD && (
          <Button
            variant="outline"
            className="w-full border-[#5f6df8] dark:text-white text-gray-800"
            onClick={handleSubscribeUSD}
          >
            {buttonText} ($)
          </Button>
        )}
      </div>
    </div>
  );
}

export default function PricingSection() {
  const plans = [
    {
      title: "1 Month",
      price: "₹130",
      priceUSD: "$1.50",
      period: "month",
      description: "Single month access to premium channels",
      features: [
        "Access to all premium Telegram channels",
        "Latest content updates",
        "HD quality media",
        "Direct download links",
        "Basic support",
      ],
      buttonText: "Subscribe Now",
      isPopular: false,
      planId: "1month",
    },
    {
      title: "2 Months",
      price: "₹200",
      priceUSD: "$2.40",
      period: "2 months",
      discount: "Save ₹60 compared to monthly",
      description: "Best value for regular users",
      features: [
        "Everything in 1 Month plan",
        "Extended access period (60 days)",
        "Priority content access",
        "Premium downloads",
        "Fast customer support",
        "Special offers",
      ],
      buttonText: "Subscribe Now",
      isPopular: true,
      planId: "2months",
    },
    {
      title: "3 Months",
      price: "₹250",
      priceUSD: "$3.00",
      period: "3 months",
      discount: "Save ₹140 compared to monthly",
      description: "Maximum savings for dedicated users",
      features: [
        "Everything in 2 Months plan",
        "Extended access period (90 days)",
        "First access to exclusive content",
        "Highest priority support",
        "Access to archive content",
        "Personal channel requests",
        "Customized content delivery",
      ],
      buttonText: "Subscribe Now",
      isPopular: false,
      planId: "3months",
    },
  ];

  return (
    <section
      id="premium-plans"
      className="py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-b dark:from-[#121212] dark:to-[#17172d] from-white to-gray-100"
    >
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <span className="inline-block bg-[#5f6df8]/10 text-[#5f6df8] font-medium rounded-full px-4 py-1.5 mb-4">
          Pricing Options
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 dark:text-white text-gray-900">
          Premium Plans
        </h2>
        <p className="text-xl dark:text-gray-400 text-gray-600">
          Upgrade your Telegram experience with our premium channel plans
          tailored for every type of user
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {plans.map((plan, index) => (
          <PricingPlan
            key={index}
            title={plan.title}
            price={plan.price}
            priceUSD={plan.priceUSD}
            period={plan.period}
            description={plan.description}
            features={plan.features}
            isPopular={plan.isPopular}
            buttonText={plan.buttonText}
            discount={plan.discount}
            planId={plan.planId}
          />
        ))}
      </div>

      <div className="max-w-3xl mx-auto mt-16 pt-8 border-t border-gray-800 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div>
          <h3 className="text-lg font-medium mb-2">Satisfaction Guaranteed</h3>
          <p className="text-gray-400 text-sm">
            30-day money-back guarantee for all premium plans.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-medium mb-2">Flexible Billing</h3>
          <p className="text-gray-400 text-sm">
            Choose between monthly or annual billing options.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-medium mb-2">No Hidden Fees</h3>
          <p className="text-gray-400 text-sm">
            All features included in the advertised price.
          </p>
        </div>
      </div>

      <div className="text-center mt-12 dark:text-gray-400 text-gray-600 max-w-xl mx-auto">
        <p className="text-sm">
          All plans include access to premium Telegram channels. Subscriptions
          support continued access to exclusive content.
        </p>
      </div>
    </section>
  );
}
