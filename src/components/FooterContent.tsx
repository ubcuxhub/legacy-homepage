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
    <div className="flex items-center justify-center py-20 lg:py-20 md:py-16 sm:py-12 w-[1000px] h-[500px] lg:w-[1000px] lg:h-[500px] md:w-[800px] md:h-[400px] sm:w-full sm:h-[300px] mx-auto rounded-[20px] mt-[100px] lg:mt-[100px] md:mt-20 sm:mt-15 bg-gradient-to-r from-[#052462] via-[#CA97CE] to-[#F09485]">
      <div className="max-w-6xl mx-auto px-8 text-center w-[552px] h-[301px] lg:w-[552px] lg:h-[301px] md:w-[500px] md:h-[250px] sm:w-full sm:h-[200px] flex flex-col justify-center items-center gap-5">
        <h2 className="font-dm-sans text-white text-[42px] lg:text-[42px] md:text-[32px] sm:text-2xl font-bold leading-normal mb-6 drop-shadow-sm">
          {title}
        </h2>
        
        <p className="font-dm-sans text-white text-center text-base lg:text-base md:text-sm sm:text-xs font-normal leading-normal mb-8 max-w-2xl mx-auto">
          {description}
        </p>
        
        <div className="flex gap-3 justify-center">
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