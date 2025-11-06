const HowItWorks = () => {
  const steps = [
    {
      title: "Select Crypto",
      description:
        "Choose from major assets like Bitcoin, Ethereum, USDT, or Solana. We support a wide range of cryptocurrencies, and we’re constantly adding more. ",
      image: "/Illustration-1.png",
    },
    {
      title: "Generate Wallet",
      description:
        "We create a unique wallet address for your transaction. Send only on the selected network, we auto detect the transfer and lock your rate after the first confirmation.",
      image: "/step2.jpeg",
    },
    {
      title: "Receive Cash in Minutes",
      description:
        "Payouts go straight to your Nigerian bank account. After confirming your transfer to our crypto wallet, your Naira is disbursed quickly, typically within 5 to 15 minutes.",
      image: "/Illustration-3.png",
    },
  ];
  return (
    <div id="how-it-works" className="p-5 lg:p-40 lg:pt-10">
      <p className="text-center text-[12px] font-[400] lg:text-[16px] lg:font-[500] text-[#0A0F2C] bg-[#0A0F2C0D] rounded-[20px] w-fit mx-auto px-4 py-2 ">
        How it works
      </p>
      <div className="h-3" />

      <h1 className="text-[20px] lg:text-[36px] font-semibold text-center text-navy-blue">
        Get started in 3 steps
      </h1>
      <div className="h-10" />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
        {steps.map((item, index) => (
          <div
            key={index}
            className="border border-[#E7E7E7] rounded-[16px] p-5 space-y-5"
          >
            <img
              src={item.image}
              alt={item.title}
              width={300}
              height={200}
              fetchPriority="high"
              loading="lazy"
              className="mx-auto h-[200px]"
            />
            <div className="flex items-center gap-4">
              <p className="text-white bg-navy-blue size-[32px] flex items-center justify-center px-2 rounded-full">
                0{index + 1}
              </p>
              <h4 className="text-[16px] lg:text-[20px] font-[500]">
                {item.title}
              </h4>
            </div>
            <p className="text-[#66707F] text-[14px] lg:text-[16px] mt-4">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
