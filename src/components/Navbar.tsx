import { HiMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
  const links = [
    { name: "Home", url: "/" },
    { name: "How it works", url: "/" },
    { name: "FAQs", url: "/" },
    { name: "Blog", url: "/" },
  ];

  return (
    <nav className="h-[var(--navbar-height)] bg-white flex items-center justify-between px-5 lg:px-10 w-screen sticky top-0">
      <div className="flex items-center gap-[10px]">
        <img src="/logo.svg" alt="logo" width={40} height={40} />
        <p className="text-navy-blue text-[18px] font-bold">SwapXnext</p>
      </div>

      <ul className="text-[16px] items-center gap-[30px] hidden lg:flex">
        {links.map((link) => (
          <li key={link.name} className="text-[#66707F]">
            <a href={link.url}>{link.name}</a>
          </li>
        ))}
      </ul>
      <div className="hidden lg:flex">
        <button className="text-[16px] px-5 py-1 rounded-[30px]">
          Download
        </button>
      </div>

      <HiMenuAlt3 className="block lg:hidden" size={30} />
    </nav>
  );
};

export default Navbar;
