import React from "react";
import Button from "./Button";
import { ArrowUpRight } from "lucide-react";

interface FooterContentProps {
  title: string;
  description: string;
  showContactButton?: boolean;
}

const FooterContent: React.FC<FooterContentProps> = ({
  title,
  description,
  showContactButton = false,
}) => {
  const handleContactClick = () => {
    window.location.href = "mailto:ubcuxhub@gmail.com";
  };

  return (
    <div className="flex items-center justify-center py-20 lg:py-20 md:py-16 sm:py-12 max-h-[500px] mx-auto rounded-[20px] lg:mt-[100px] mt-20 bg-gradient-to-r from-[#052462] via-[#CA97CE] to-[#F09485] px-10">
      <div className="text-center  lg:w-[552px]  md:w-[500px]  sm:w-full  flex flex-col justify-center items-center gap-5">
        <h2 className="font-dm-sans text-white text-[24px] lg:text-[42px] md:text-[32px] sm:text-2xl font-bold leading-normal mb-6 drop-shadow-sm">
          {title}
        </h2>

        <p className="font-dm-sans text-white text-center text-base font-normal leading-normal mb-8 max-w-2xl mx-auto">
          {description}
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button variant="primary" icon={<ArrowUpRight className="w-6 h-6" />}>
            BECOME A MEMBER
          </Button>

          {showContactButton && (
            <Button
              variant="secondary"
              onClick={handleContactClick}
              icon={<ArrowUpRight className="w-6 h-6" />}
            >
              CONTACT US
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default FooterContent;