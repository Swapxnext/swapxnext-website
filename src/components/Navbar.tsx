import { HiMenuAlt3 } from "react-icons/hi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const links = [
    { name: "Home", url: "/" },
    { name: "How it works", url: "#how-it-works" },
    { name: "FAQs", url: "#faqs" },
    { name: "Blog", url: "/" },
  ];

  return (
    <nav className="h-[var(--navbar-height)] bg-white flex items-center justify-between px-5 lg:px-10 w-screen sticky top-0 z-50">
      <Link to="/">
        <div className="flex items-center gap-[10px]">
          <img src="/logo.svg" alt="logo" width={40} height={40} />
          <p className="text-navy-blue text-[18px] font-bold">SwapXnext</p>
        </div>
      </Link>

      <ul className="text-[16px] items-center gap-[30px] hidden lg:flex">
        {links.map((link) => (
          <li key={link.name} className="text-[#66707F]">
            <a href={link.url}>{link.name}</a>
          </li>
        ))}
      </ul>
      <div className="hidden lg:flex">
        <button className="bg-navy-blue text-white text-[16px] px-7 py-3 rounded-[30px]">
          Download
        </button>
      </div>

      <HiMenuAlt3 className="block lg:hidden" size={30} />
    </nav>
  );
};

export default Navbar;
