import { FaApple } from "react-icons/fa";
import {
  IoHeartSharp,
  IoLogoGooglePlaystore,
  IoShieldCheckmarkOutline,
} from "react-icons/io5";
import Lottie from "lottie-react";
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    // Fetch the JSON animation data
    fetch("/Scene-1.json")
      .then((response) => response.json())
      .then((data) => setAnimationData(data))
      .catch((error) => console.error("Error loading animation:", error));

    fetch("/Scene-2.json")
      .then((response) => response.json())
      .catch((error) => console.error("Error loading animation:", error));
  }, []);

  return (
    <div className="bg-[url(/hero-bg.svg)] h-full grid grid-cols-1 lg:grid-cols-2 gap-5 items-center px-5 lg:px-20 xl:px-30 overflow-hidden">
      <div>
        {/* smart finance smart living */}
        <div className="bg-[#F8F8F8] rounded-[100px] flex items-center justify-center gap-5 w-fit mx-auto lg:mx-0 mb-5 px-2 py-1">
          <div className="bg-white rounded-full p-2">
            <IoShieldCheckmarkOutline />
          </div>
          <p className="text-[14px] lg:text-[16px] font-[400]">
            Smart Finance, Smart Living
          </p>
        </div>

        <div className="flex items-center gap-2 mb-3 justify-center lg:justify-start">
          <img src="/avatars.png" alt="avatars" width={80} height={80} />
          <IoHeartSharp color="#0A0F2C" size={20} />
          <p className="text-[#171717] text-[14px]">Loved by 12k+ users</p>
        </div>

        <h1 className="text-navy-blue text-[32px] lg:text-[54px] font-bold leading-[100%] text-center lg:text-left">
          Convert Crypto to Naira Instantly
        </h1>
        <div className="h-[15px]" />
        <p className="text-[#66707F] text-[16px] text-center lg:text-left">
          Fast, secure, and seamless crypto-to-naira conversion. No wallet
          required, straight to your bank account.
        </p>
        <div className="flex gap-[10px] mt-5 justify-center lg:justify-start">
          {/* App Store button  */}
          <button className="bg-navy-blue text-white flex items-center gap-[7px] border border-[#A6A6A6] rounded-[35px] px-4 lg:px-7 py-1">
            <FaApple size={30} />
            <div className="flex flex-col gap-0 items-start">
              <p className="flex flex-col items-start leading-4 text-[12px] lg:text-[13px]">
                Download on the{" "}
                <span className="block font-bold text-[18px]">App Store</span>
              </p>
            </div>
          </button>

          {/* Google Play button */}
          <button className="bg-navy-blue text-white flex items-center gap-[7px] border border-[#A6A6A6] rounded-[35px] px-4 lg:px-7 py-2">
            <IoLogoGooglePlaystore size={30} />
            <div className="flex flex-col gap-0 items-start">
              <p className="flex flex-col items-start leading-4 text-[12px] lg:text-[13px]">
                GET IT ON
                <span className="block font-bold text-[18px]">Google Play</span>
              </p>
            </div>
          </button>
        </div>
      </div>
      <div className="relative flex items-center justify-center">
        <img
          src="/bitcoin.gif"
          alt="bitcoin"
          loading="lazy"
          className="absolute top-1/2 lg:top-0 left-0 lg:left-auto lg:right-0 z-40 block size-[65px] lg:size-[150px]"
          fetchPriority="high"
        />
        <img
          src="/phone-image.png"
          alt="phone-image"
          loading="lazy"
          fetchPriority="high"
          className="z-10 -mb-[110px] lg:mb-0 w-[250px] lg:w-[450px] h-auto"
        />
        {/* {phoneMockup && (
          <Lottie
            animationData={phoneMockup}
            loop={true}
            autoplay={true}
            className="w-full h-auto"
          />
        )} */}
        <div className="absolute -bottom-[30px] lg:-bottom-20 z-40 right-0 lg:left-0 size-[170px] lg:size-[290px]">
          {animationData && (
            <Lottie
              animationData={animationData}
              loop={true}
              autoplay={true}
              className="w-full h-auto"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
