import { FaApple } from "react-icons/fa";

const GetStarted = () => {
  return (
    <div>
      {/* Vector Background  */}
      <svg
        className="-mb-10"
        width="100%"
        height="100%"
        viewBox="0 0 1440 196"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <path
          d="M1063 0H377C365.838 0 354.848 2.74749 345 8L195 88C185.152 93.2525 174.162 96 163 96H0V195.5H1440V96H1277C1265.84 96 1254.85 93.2525 1245 88L1095 8C1085.15 2.74749 1074.16 0 1063 0Z"
          fill="#0A0F2C"
        />
        <path
          d="M1063 0H377C365.838 0 354.848 2.74749 345 8L195 88C185.152 93.2525 174.162 96 163 96H0V195.5H1440V96H1277C1265.84 96 1254.85 93.2525 1245 88L1095 8C1085.15 2.74749 1074.16 0 1063 0Z"
          fill="url(#pattern0_983_10611)"
          fill-opacity="0.16"
        />
        <defs>
          <pattern
            id="pattern0_983_10611"
            patternContentUnits="objectBoundingBox"
            width="0.711111"
            height="5.23785"
          >
            <use
              xlinkHref="#image0_983_10611"
              transform="scale(0.000694444 0.00511509)"
            />
          </pattern>
          <image
            id="image0_983_10611"
            width="1024"
            height="1024"
            preserveAspectRatio="none"
          />
        </defs>
      </svg>

      <div className="bg-navy-blue py-10 lg:py-20 lg:pt-5 flex items-center flex-col gap-[20px] lg:gap-[40px]">
        <h1 className="text-white text-[20px] lg:text-[48px] font-semibold max-w-[350px] lg:max-w-[700px] mx-auto text-center">
          Turn Crypto into Cash in Just a Few Taps. Get the App Now
        </h1>

        {/* Buttons  */}
        <div className="flex items-center gap-5">
          {/* Google play button  */}
          <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-[30px] cursor-pointer">
            <img loading="lazy" src="/google-play-icon.svg" alt="google-play" />
            <p className="text-[14px] text-black">Google Play</p>
          </div>

          {/* Play Store button  */}
          <div className="flex items-center gap-1 bg-white px-4 py-2 rounded-[30px] cursor-pointer">
            <FaApple size={20} />
            <p className="text-[14px] text-black">App Store</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
