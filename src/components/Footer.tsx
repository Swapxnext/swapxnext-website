import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-navy-blue text-white p-3  lg:p-5 lg:pb-0">
      <div className="bg-[#FFFFFF0D] rounded-[35px] px-3 lg:px-5 overflow-hidden">
        <div className="py-10 lg:px-30 lg:py-20 flex flex-col lg:flex-row lg:items-center justify-between">
          <div className="space-y-5">
            <div className="flex items-center gap-[10px]">
              <img src="/logo-white.svg" alt="logo" width={40} height={40} />
              <p className="text-[18px] font-bold">SwapXnext</p>
            </div>
            <p className="text-[16px] lg:max-w-[300px]">
              SwapXnext is our fast and secure crypto-to-naira exchange service
              that allows you to convert supported cryptocurrencies
            </p>
            <div className="flex items-center gap-[20px]">
              <div className="h-[45px] w-[45px] flex items-center justify-center rounded-full border-2 border-gray-500">
                <FaLinkedinIn />
              </div>
              <div className="h-[45px] w-[45px] flex items-center justify-center rounded-full border-2 border-gray-500">
                <FaFacebookF />
              </div>
              <div className="h-[45px] w-[45px] flex items-center justify-center rounded-full border-2 border-gray-500">
                <FaInstagram size={18} />
              </div>
              <div className="h-[45px] w-[45px] flex items-center justify-center rounded-full border-2 border-gray-500">
                <FaYoutube />
              </div>
            </div>
          </div>

          {/* Links section */}
          <div className="grid grid-cols-2 gap-10 lg:flex flex-col lg:flex-row lg:gap-[70px] lg:items-start my-10 lg:my-0">
            <div>
              <p className="text-[18px] font-[500] mb-3">Navigation</p>
              <ul className="space-y-3 font-[300]">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>Rates</li>
                <li>Support</li>
              </ul>
            </div>
            <div>
              <p className="text-[18px] font-[600] mb-3">Company</p>
              <ul className="space-y-3 font-[300]">
                <li>About Us</li>
                <li>Careers</li>
                <li>Blog</li>
              </ul>
            </div>
            <div>
              <p className="text-[18px] font-[600] mb-3">Contact</p>
              <ul className="space-y-3 font-[300]">
                <li>Chat with us</li>
                <li>
                  <a href="mailto:hello@swapxnext.com">Send Email</a>
                </li>
                <li>Call us</li>
              </ul>
            </div>
            <div>
              <p className="text-[18px] font-[600] mb-3">Legal</p>
              <ul className="space-y-3 font-[300]">
                <li>
                  <Link to="terms-of-service">Terms of Service</Link>
                </li>
                <li>
                  <Link to="/privacy-policy">Privacy Policy</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <img src="/SwapXnext.svg" alt="" className="w-full h-auto" />
      </div>
    </div>
  );
};

export default Footer;
