import React, { useState, useEffect } from 'react';

const CTASection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      
      // Show CTA when scrolled down, hide when near top
      if (scrollPosition > windowHeight * 0.5) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className={`transition-all duration-700 ease-in-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{
        background: 'linear-gradient(156deg, #052462 -1.32%, #CA97CE 77.58%, #F09485 97.31%)',
      }}
    >
      <div 
        className="flex items-center justify-between"
        style={{
          padding: '30px 300px',
          display: 'flex',
          justifyContent: 'flex-end',
          gap: '120px'
        }}
      >
        {/* Left side - Text content */}
        <div className="flex flex-col gap-4">
          <h2 
            className="font-dm-sans"
            style={{
              color: '#FFFFFF',
              fontSize: '55px',
              fontWeight: 700,
              lineHeight: 'normal',
              marginBottom: '10px',
              textShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
            }}
          >
            Never miss out
          </h2>
          <p 
            className="font-dm-sans"
            style={{
              color: '#FFFFFF',
              fontSize: '16px',
              fontWeight: 400,
              lineHeight: '1.6',
              width: '400px',
              marginBottom: '30px',
              opacity: 0.9,
            }}
          >
            Subscribe to our newsletter to stay updated on all things UX Hub—events, design tips, community spotlights, and exclusive opportunities.
          </p>
        </div>

        {/* Right side - Input and button */}
        <div className="relative" style={{ width: '360px', marginLeft: 'auto' }}>
          <input
            type="email"
            placeholder="ex: myname@example.com"
            className="outline-none transition-all duration-300 ease-in-out hover:bg-[rgba(242,244,248,0.45)] focus:bg-[rgba(242,244,248,0.45)] w-full hover:scale-[1.02] focus:scale-[1.02]"
            style={{
              display: 'flex',
              height: '25px',
              padding: '10px 0px 10px 10px',
              alignItems: 'center',
              gap: '0px',
              borderRadius: '42342px',
              background: 'rgba(242, 244, 248, 0.40)',
              color: '#FFFFFF',
              fontSize: '12px',
              fontFamily: 'DM Sans',
              backdropFilter: 'blur(10px)',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
              border: 'none',
            }}
          />
          <div 
            style={{
              position: 'absolute',
              right: '0px',
              top: '50%',
              transform: 'translateY(-50%)',
            }}
          >
            <button
              className="rounded-full bg-white text-black font-dm-sans transition-all duration-300 ease-in-out hover:bg-opacity-95 hover:transform hover:scale-[1.05] hover:shadow-lg hover:shadow-black/20 active:scale-[0.98] transform hover:-translate-y-1"
              style={{
                display: 'flex',
                height: '33px',
                padding: '0px 20px',
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: '12px',
                fontWeight: 500,
                border: 'none',
                outline: 'none',
              }}
            >
              SUBMIT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection; 