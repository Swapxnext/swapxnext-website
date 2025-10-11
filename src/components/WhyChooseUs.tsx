import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";

const WhyChooseUs = () => {
  const [activeTab, setActiveTab] = useState(0);

  // Auto-change tabs with interval
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prevTab) => (prevTab + 1) % 4); // Loop through 4 tabs
    }, 7000); // Change tab every 7 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const tabs = [
    {
      title: "Fast Payout",
      description:
        "Experience Lightning-Fast Payouts Straight to Your Bank, No Wallet Setup Required",
      sub: "Once your crypto is confirmed, we process your naira payout within minutes. No need to create or manage a digital wallet, just convert and get paid directly into your Nigerian bank account, hassle-free.",
    },
    {
      title: "Tiered KYC",
      description:
        "Upgrade Your Limits with Simple, Tier-Based KYC That Works for Everyone",
      sub: "Whether you’re a casual user or a high-volume trader, our flexible KYC tiers adapt to your needs. Start with just your name and phone number, and unlock higher transaction limits with basic ID and address verification.",
    },
    {
      title: "Competitive Rates",
      description:
        "Get More for Every Conversion with Transparent, Real-Time Rates That Beat the Market",
      sub: "We give you access to top-tier exchange rates for Bitcoin, Ethereum, USDT and more — without hidden fees or sudden dips. Enjoy consistent pricing and see exactly what you’ll receive before you hit convert.",
    },
    {
      title: "Secure Platform",
      description:
        "Your Security Is Our Priority, Bank-Grade Encryption and Fraud Monitoring, Always On",
      sub: "From real-time KYC checks to encrypted payment flows, we’ve built our platform with security at its core. Every transaction is monitored and protected, so you can trade with complete peace of mind.",
    },
  ];

  return (
    <div
      style={{ backgroundImage: `url('/Noise & Texture.svg')` }}
      className="w-screen lg:px-40 lg:py-20 p-5">
      <p className="text-center text-[12px] font-[400] lg:text-[16px] lg:font-[500] text-[#0A0F2C] bg-[#0A0F2C0D] rounded-[20px] w-fit mx-auto px-4 py-2 ">
        How it works
      </p>
      <div className="h-3" />
      <h3 className="text-navy-blue text-[20px] lg:text-[36px] font-[600] text-center">
        Why Thousands Trust Our Platform
      </h3>
      <div className="h-10" />

      <div className="flex gap-[72px] ">
        {/* Phone mockup  */}
        <div>
          <img
            key={`phone-${activeTab}`}
            src={`/phone-${activeTab + 1}.png`}
            alt={`phone-${activeTab + 1}`}
            className="w-[500px] h-auto transition-opacity duration-500 animate-fadeIn"
            fetchPriority="high"
            loading="lazy"
          />
        </div>
        {/* Steps */}
        <div className="flex flex-col gap-5 mt-6">
          <div className="grid grid-cols-4">
            {[...tabs].map((item, index) => (
              <div
                key={index}
                className={`${
                  activeTab === index
                    ? "text-navy-blue border-b-2 border-navy-blue font-[600]"
                    : "text-[#66707F] border-b border-[#E4E7EC]"
                }  p-5 text-center cursor-pointer`}
                onClick={() => setActiveTab(index)}>
                {item.title}
              </div>
            ))}
          </div>
          <div className="space-y-4">
            <h5
              key={activeTab}
              className="text-[16px] lg:text-[32px] font-[500] lg:font-[600] transition-opacity duration-500 animate-fadeIn">
              {tabs[activeTab].description}
            </h5>
            <p
              key={`sub-${activeTab}`}
              className="text-[#66707F] text-[14px] lg:text-[16px] transition-opacity duration-500 animate-fadeIn">
              {tabs[activeTab].sub}
            </p>
            <button className="bg-navy-blue text-white text-[16px] px-7 py-3 rounded-[30px] flex items-center gap-3">
              Learn More
              <ArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
