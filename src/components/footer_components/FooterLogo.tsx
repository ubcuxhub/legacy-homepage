import React from "react";
import Image from "next/image";

const FooterLogo = () => {
  return (
    <div className="w-[120px] h-[120px]">
      <Image
        src="/logo.png"
        alt="UBC UX HUB"
        width={120}
        height={120}
        className="w-full h-full"
      />
    </div>
  );
};

export default FooterLogo;
