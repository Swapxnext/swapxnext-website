import { useState } from "react";
import { RiDoubleQuotesL } from "react-icons/ri";

const Testimonials = () => {
  const [active, setActive] = useState<number>(0);

  const testimonials = [
    {
      name: "Tolu A.",
      role: "Student",
      image: "/tolu.png",
      message:
        "I was honestly skeptical about using a crypto-to-naira service that didn’t require a wallet, but I was blown away by how smooth the experience was. I sent USDT, and within 10 minutes, the money was in my bank account — no stress. The platform was super easy to use, and I didn’t need to jump through any hoops. I’ve already recommended it to a few friends",
    },
    {
      name: "Chioma A.",
      role: "High Volume Trader",
      image: "/tolu.png",
      message:
        "As someone who does multiple crypto transactions per week, I really value speed and transparency. This platform has consistently offered better rates than what I see elsewhere, and I love that I can scale my limits just by completing simple KYC tiers. It’s honestly made managing my crypto liquidity much easie",
    },
    {
      name: "Smith W.",
      role: "Business Owner",
      image: "/tolu.png",
      message:
        "I use this platform to convert crypto payments from international clients into naira. It’s fast, secure, and the rates are fair. What I appreciate most is the reliability. I’ve never had a payout delayed or stuck. Plus, the customer support actually responds quickly, which is rare these days",
    },
    {
      name: "Tosin A",
      role: "Frequent User",
      image: "/tolu.png",
      message:
        "I’ve been using this platform almost every week now, and I have to say, it’s the fastest I’ve ever seen. No long wait times, no shady fees. Just a clean UI and solid delivery. I especially love how I get notified the moment my account is credited. It feels super polished",
    },
  ];

  return (
    <div className="p-5 lg:p-20">
      <div className="bg-[#F5FAFF] border border-[#E6EFFE] rounded-[20px] p-10 flex flex-col gap-5 items-center">
        <div className="lg:max-w-[40vw] space-y-5">
          <div className="flex items-center gap-2 bg-white p-3 py-2 rounded-full shadow-md w-fit mx-auto">
            <RiDoubleQuotesL size={20} />
            Testimonals
          </div>
          <h1 className="font-semibold text-[20px] lg:text-[36px] text-center text-navy-blue">
            What Users Are Saying
          </h1>
          <div className="text-[14px] lg:text-[18px] font-medium bg-white p-5 rounded-[24px] text-center">
            {testimonials[active].message}
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="text-navy-blue text-[18px] font-semibold">
              {testimonials[active].name}
            </p>
            <p className="text-[#66707F] text-[14px] lg:text-[16px]">
              {testimonials[active].role}
            </p>
          </div>
          <div className="flex justify-center gap-5 items-center ">
            {testimonials.map((item, index) => (
              <button
                key={index}
                onClick={() => setActive(index)}
                className={` rounded-full ${
                  index === active ? "" : "opacity-50"
                } disabled:cursor-none`}
              >
                <img src={item.image} alt={item.name} width={50} height={50} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
