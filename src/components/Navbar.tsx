import Link from "next/link";
import Image from "next/image";

const navLinkStyles =
  "text-[#000000] no-underline font-dm-sans lg:text-[16px] md:text-[14px] sm:text-[12px] font-medium leading-normal hover:text-gray-600 whitespace-nowrap decoration-transparent transition-all duration-300 ease-in-out hover:scale-105 hover:translate-y-[-1px]";

const buttonStyles = `
  flex justify-center items-center
  lg:w-[180px] lg:h-[45px] md:w-[160px] md:h-[40px] sm:w-[140px] sm:h-[35px]
  px-[10px] py-[8px]
  gap-[12px]
  flex-shrink-0
  rounded-[67.066px]
  text-[#FFFFFF]
  font-dm-sans lg:text-[15px] md:text-[14px] sm:text-[12px] font-medium leading-normal
  hover:opacity-90 transition-all duration-300 ease-in-out
  hover:scale-105 hover:shadow-lg hover:shadow-black/20
  backdrop-blur-[0.5px]
  no-underline decoration-transparent
  visited:text-white hover:text-white
  transform hover:-translate-y-1
`;

const Navbar = () => {
  return (
    <div
      className="w-full max-w-[1512px] h-[80px] lg:h-[80px] md:h-[70px] sm:h-[60px] bg-[#f5f5f5] fixed top-0 left-0 right-0 z-50 mx-auto"
      style={{ margin: "0 auto", transform: "translateX(-50%)", left: "50%" }}
    >
      <nav className="h-full flex items-center">
        <div className="lg:pl-[70px] md:pl-[50px] sm:pl-[30px]">
          <div className="w-[72px] h-[72px] lg:w-[72px] lg:h-[72px] md:w-[60px] md:h-[60px] sm:w-[50px] sm:h-[50px]">
            <Image
              src="/logo.png"
              alt="UBC UX HUB"
              width={72}
              height={72}
              className="w-full h-full"
            />
          </div>
        </div>

        <div className="ml-auto lg:pr-[70px] md:pr-[50px] sm:pr-[30px] flex items-center">
          <Link
            href="#home"
            className={navLinkStyles}
            style={{ textDecoration: "none", marginRight: "32px" }}
          >
            Home
          </Link>
          <Link
            href="#about-us"
            className={navLinkStyles}
            style={{ textDecoration: "none", marginRight: "32px" }}
          >
            About Us
          </Link>
          <Link
            href="#events"
            className={navLinkStyles}
            style={{ textDecoration: "none", marginRight: "32px" }}
          >
            Events
          </Link>
          <Link
            href="#team"
            className={navLinkStyles}
            style={{ textDecoration: "none", marginRight: "32px" }}
          >
            Meet the Team
          </Link>
          <Link
            href="mailto:ubcuxhub@gmail.com"
            className={navLinkStyles}
            style={{ textDecoration: "none", marginRight: "32px" }}
          >
            Contact Us
          </Link>

          <Link
            href="/join"
            className={buttonStyles}
            style={{
              background:
                "linear-gradient(156deg, #00183B -1.32%, #9478B1 42.98%, #E89595 121.99%)",
              textDecoration: "none",
              color: "#FFFFFF",
              marginLeft: "32px",
              paddingLeft: "12px",
              paddingRight: "12px",
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
