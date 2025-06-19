import Link from 'next/link';

const navLinkStyles = "text-[#000000] no-underline font-dm-sans text-[16px] font-medium leading-normal hover:text-gray-600 whitespace-nowrap decoration-transparent";
const activeNavLinkStyles = "border-b-2 border-black pb-1";

const buttonStyles = `
  flex justify-center items-center
  w-[231px] h-[54px]
  px-[10px] py-[8px]
  gap-[12px]
  flex-shrink-0
  rounded-[67.066px]
  text-[#FFFFFF]
  font-dm-sans text-[16px] font-medium leading-normal
  hover:opacity-90 transition-opacity
  backdrop-blur-[0.5px]
  no-underline decoration-transparent
  visited:text-white hover:text-white
`;

const Navbar = () => {
  return (
    <div className="w-[1512px] h-[80px] bg-[#f5f5f5] fixed top-0 z-50 mx-auto left-1/2 -translate-x-1/2">
      <nav className="h-full flex items-center">
        {/* Left frame with logo */}
        <div className="pl-[70px]">
          <div className="w-[72px] h-[72px]">
            <img src="/logo.svg" alt="UBC UX HUB" className="w-full h-full" />
          </div>
        </div>

        {/* Right frame with nav links and button */}
        <div className="ml-auto pr-[70px] flex items-center gap-[40px]">
          {/* Navigation Links */}
          <Link 
            href="/" 
            className={`${navLinkStyles} ${activeNavLinkStyles}`}
            style={{ textDecoration: 'none' }}
          >
            Home
          </Link>
          <Link 
            href="/about" 
            className={navLinkStyles}
            style={{ textDecoration: 'none' }}
          >
            About Us
          </Link>
          <Link 
            href="/events" 
            className={navLinkStyles}
            style={{ textDecoration: 'none' }}
          >
            Events
          </Link>
          <Link 
            href="/team" 
            className={navLinkStyles}
            style={{ textDecoration: 'none' }}
          >
            Meet the Team
          </Link>

          {/* Become a Member Button */}
          <Link 
            href="/join"
            className={buttonStyles}
            style={{
              background: 'linear-gradient(156deg, #00183B -1.32%, #9478B1 42.98%, #E89595 121.99%)',
              textDecoration: 'none',
              color: '#FFFFFF'
            }}
          >
            Become a Member
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar; 