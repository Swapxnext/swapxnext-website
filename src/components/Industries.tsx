import React from "react";

const Industries = () => {
  return (
    <div className="p-5 lg:px-50 lg:pt-20 overflow-hidden">
      <p className="text-center text-[16px] lg:text-[20px] text-[#171717]">
        Trusted by Over 5,500+ Industry Leaders
      </p>
      <img
        src="/industries.svg"
        alt="industries"
        loading="lazy"
        fetchPriority="high"
        className="w-full h-auto"
      />
    </div>
  );
};

export default Industries;
