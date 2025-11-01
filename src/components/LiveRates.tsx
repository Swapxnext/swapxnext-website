const LiveRates = () => {
  return (
    <div className="bg-navy-blue text-white p-5 py-8 lg:p-40 lg:py-20">
      <p className="text-center text-[12px] font-[400] lg:text-[16px] lg:font-[500] bg-[white] text-[#0A0F2C] rounded-[20px] w-fit mx-auto px-4 py-2 ">
        Today&apos;s Rates
      </p>
      <img
        src="/rates.png"
        alt="Live Rates"
        className="h-auto w-full mt-5 lg:mt-10 hidden lg:block"
        fetchPriority="high"
      />
      <img
        src="/rates-mobile.png"
        alt="Live Rates"
        className="h-auto w-full mt-5 lg:mt-10 block lg:hidden"
        fetchPriority="high"
      />
      <p className="font-semibold text-[20px] lg:text-[36px] text-center mt-5">
        Live Exchange Rates
      </p>
      <p className="text-center text-[14px] lg:text-[20px] font-[300] mt-1">
        Real-time rates for popular crypto assets
      </p>
    </div>
  );
};

export default LiveRates;
