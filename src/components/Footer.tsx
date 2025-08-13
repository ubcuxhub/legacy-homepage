import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer 
      className="w-full py-16 bg-gray-100"
      style={{
        position: "relative",
        zIndex: 9999,
        backgroundColor: "#f3f4f6",
      }}
    >
      <div 
        className="max-w-6xl mx-auto px-8 text-center"
        style={{
          display: 'flex',
          width: '992px',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '44px',
          margin: '0 auto',
        }}
      >
        {/* Logo */}
        <div className="mb-8">
          <div className="w-[120px] h-[120px]">
            <Image src="/logo.png" alt="UBC UX HUB" width={120} height={120} className="w-full h-full" />
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="mb-6">
          <ul 
            className="flex justify-center list-none"
            style={{
              gap: '40px',
            }}
          >
            <li>
              <a 
                href="#home" 
                className="hover:text-gray-900 transition-colors no-underline"
                style={{
                  color: 'var(--Black, #2F2E41)',
                  fontFamily: 'DM Sans',
                  fontSize: '16px',
                  fontStyle: 'normal',
                  fontWeight: 500,
                  lineHeight: 'normal',
                  textDecoration: 'none',
                }}
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="#about-us" 
                className="hover:text-gray-900 transition-colors no-underline"
                style={{
                  color: 'var(--Black, #2F2E41)',
                  fontFamily: 'DM Sans',
                  fontSize: '16px',
                  fontStyle: 'normal',
                  fontWeight: 500,
                  lineHeight: 'normal',
                  textDecoration: 'none',
                }}
              >
                About Us
              </a>
            </li>
            <li>
              <a 
                href="#events" 
                className="hover:text-gray-900 transition-colors no-underline"
                style={{
                  color: 'var(--Black, #2F2E41)',
                  fontFamily: 'DM Sans',
                  fontSize: '16px',
                  fontStyle: 'normal',
                  fontWeight: 500,
                  lineHeight: 'normal',
                  textDecoration: 'none',
                }}
              >
                Events
              </a>
            </li>
            <li>
              <a 
                href="#team" 
                className="hover:text-gray-900 transition-colors no-underline"
                style={{
                  color: 'var(--Black, #2F2E41)',
                  fontFamily: 'DM Sans',
                  fontSize: '16px',
                  fontStyle: 'normal',
                  fontWeight: 500,
                  lineHeight: 'normal',
                  textDecoration: 'none',
                }}
              >
                Meet the Team
              </a>
            </li>
          </ul>
        </nav>

        {/* Social Media Icons */}
        <div 
          className="mb-12"
          style={{
            marginTop: '24px',
          }}
        >
          <div 
            className="flex justify-center"
            style={{
              gap: '40px',
            }}
          >
            {/* LinkedIn */}
            <a href="#" className="text-black hover:text-blue-600 transition-colors duration-300">
              <div 
                className="flex items-center justify-center"
                style={{
                  width: '48px',
                  height: '48px',
                  flexShrink: 0,
                }}
              >
                <svg width="24" height="24" viewBox="0 0 41 47" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clipPath="url(#clip0_201_6717)">
                    <path d="M37.5707 3.68489H3.32577C1.75662 3.68489 0.481689 4.97766 0.481689 6.56464V40.7471C0.481689 42.3341 1.75662 43.6269 3.32577 43.6269H37.5707C39.1398 43.6269 40.4237 42.3341 40.4237 40.7471V6.56464C40.4237 4.97766 39.1398 3.68489 37.5707 3.68489ZM12.5534 37.9209H6.63347V18.8593H12.5624V37.9209H12.5534ZM9.59346 16.2559C7.69443 16.2559 6.16094 14.7135 6.16094 12.8234C6.16094 10.9333 7.69443 9.39089 9.59346 9.39089C11.4836 9.39089 13.026 10.9333 13.026 12.8234C13.026 14.7224 11.4925 16.2559 9.59346 16.2559ZM34.7444 37.9209H28.8245V28.6486C28.8245 26.4376 28.7799 23.5935 25.7486 23.5935C22.6638 23.5935 22.1912 26.0007 22.1912 28.4882V37.9209H16.2713V18.8593H21.9505V21.4626H22.0308C22.8242 19.9648 24.7589 18.3868 27.6387 18.3868C33.63 18.3868 34.7444 22.3364 34.7444 27.4718V37.9209Z" fill="currentColor"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_201_6717">
                      <rect width="39.942" height="45.648" fill="white" transform="translate(0.481934 0.831909)"/>
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </a>
            
            {/* Instagram */}
            <a href="#" className="text-black hover:text-pink-600 transition-colors duration-300">
              <div 
                className="flex items-center justify-center"
                style={{
                  width: '48px',
                  height: '48px',
                  flexShrink: 0,
                }}
              >
                <svg width="24" height="24" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.7837 15.5483C19.8432 15.5487 18.924 15.8279 18.1422 16.3507C17.3603 16.8734 16.7511 17.6163 16.3914 18.4853C16.0317 19.3543 15.9378 20.3104 16.1215 21.2328C16.3052 22.1552 16.7583 23.0024 17.4234 23.6673C18.0886 24.3322 18.936 24.7849 19.8584 24.9683C20.7809 25.1516 21.737 25.0573 22.6058 24.6973C23.4747 24.3374 24.2173 23.7278 24.7398 22.9458C25.2623 22.1638 25.5411 21.2444 25.5411 20.3039C25.5402 19.0426 25.0386 17.8333 24.1466 16.9416C23.2545 16.0499 22.045 15.5488 20.7837 15.5483ZM31.9024 11.8929C31.6603 11.2794 31.2947 10.7221 30.8283 10.2558C30.362 9.78936 29.8047 9.42378 29.1912 9.18168C27.3189 8.44257 22.8611 8.60841 20.7837 8.60841C18.7064 8.60841 14.253 8.43633 12.3754 9.18168C11.7619 9.42378 11.2046 9.78936 10.7382 10.2558C10.2719 10.7221 9.90627 11.2794 9.66418 11.8929C8.92596 13.7652 9.0909 18.2275 9.0909 20.303C9.0909 22.3786 8.92596 26.8355 9.66774 28.714C9.90984 29.3276 10.2754 29.8848 10.7418 30.3512C11.2082 30.8176 11.7654 31.1832 12.379 31.4253C14.2513 32.1644 18.7091 31.9985 20.7873 31.9985C22.8655 31.9985 27.3171 32.1706 29.1947 31.4253C29.8083 31.1832 30.3655 30.8176 30.8319 30.3512C31.2983 29.8848 31.6639 29.3276 31.906 28.714C32.6504 26.8417 32.4793 22.3795 32.4793 20.3039C32.4793 18.2284 32.6504 13.7723 31.906 11.8938L31.9024 11.8929ZM20.7837 27.6147C19.3378 27.6147 17.9243 27.186 16.7221 26.3826C15.5198 25.5793 14.5828 24.4375 14.0294 23.1016C13.4761 21.7658 13.3313 20.2958 13.6134 18.8777C13.8955 17.4595 14.5918 16.1568 15.6142 15.1344C16.6367 14.112 17.9393 13.4157 19.3575 13.1336C20.7756 12.8515 22.2456 12.9963 23.5815 13.5496C24.9173 14.103 26.0591 15.04 26.8625 16.2423C27.6658 17.4445 28.0946 18.858 28.0946 20.3039C28.0957 21.2643 27.9074 22.2155 27.5404 23.103C27.1735 23.9906 26.635 24.797 25.9559 25.4761C25.2768 26.1552 24.4704 26.6936 23.5829 27.0606C22.6953 27.4276 21.7441 27.6159 20.7837 27.6147ZM28.3959 14.3929C28.0584 14.393 27.7283 14.2931 27.4476 14.1057C27.1669 13.9183 26.948 13.6519 26.8187 13.3401C26.6894 13.0283 26.6555 12.6851 26.7212 12.354C26.787 12.023 26.9494 11.7188 27.188 11.4801C27.4267 11.2413 27.7307 11.0787 28.0618 11.0128C28.3928 10.9469 28.736 10.9806 29.0478 11.1098C29.3597 11.2389 29.6263 11.4576 29.8138 11.7383C30.0014 12.0189 30.1015 12.3489 30.1015 12.6864C30.1024 12.9106 30.0591 13.1327 29.974 13.3401C29.8889 13.5474 29.7637 13.736 29.6055 13.8948C29.4474 14.0537 29.2595 14.1798 29.0525 14.2659C28.8455 14.3519 28.6236 14.3963 28.3995 14.3964L28.3959 14.3929ZM36.4752 0.332924H5.09224C3.95725 0.332924 2.86874 0.783799 2.06618 1.58636C1.26362 2.38892 0.812744 3.47743 0.812744 4.61242L0.812744 35.9954C0.812744 37.1304 1.26362 38.2189 2.06618 39.0215C2.86874 39.824 3.95725 40.2749 5.09224 40.2749H36.4752C37.6102 40.2749 38.6987 39.824 39.5013 39.0215C40.3039 38.2189 40.7547 37.1304 40.7547 35.9954V4.61242C40.7547 3.47743 40.3039 2.38892 39.5013 1.58636C38.6987 0.783799 37.6102 0.332924 36.4752 0.332924ZM34.9489 26.1882C34.8339 28.4733 34.3123 30.498 32.6442 32.1617C30.9761 33.8254 28.9531 34.3576 26.6707 34.4664C24.3161 34.5992 17.2567 34.5992 14.9021 34.4664C12.617 34.3514 10.5994 33.8289 8.92864 32.1617C7.25785 30.4945 6.73272 28.4688 6.62395 26.1882C6.4911 23.8327 6.4911 16.7724 6.62395 14.4196C6.73896 12.1345 7.25428 10.1098 8.92864 8.44614C10.603 6.78249 12.6259 6.25646 14.9021 6.14769C17.2567 6.01485 24.3161 6.01485 26.6707 6.14769C28.9558 6.2627 30.9796 6.78516 32.6442 8.45238C34.3087 10.1196 34.8401 12.1452 34.9489 14.4303C35.0817 16.7769 35.0817 23.8309 34.9489 26.1882Z" fill="currentColor"/>
                </svg>
              </div>
            </a>
            
            {/* Facebook */}
            <a href="#" className="text-black hover:text-blue-700 transition-colors duration-300">
              <div 
                className="flex items-center justify-center"
                style={{
                  width: '48px',
                  height: '48px',
                  flexShrink: 0,
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 40 46" fill="none">
                  <g clipPath="url(#clip0_201_6931)">
                    <path d="M35.714 2.9249H4.33101C3.19602 2.9249 2.10751 3.37577 1.30495 4.17833C0.502388 4.98089 0.0515137 6.0694 0.0515137 7.2044L0.0515137 38.5874C0.0515137 39.7224 0.502388 40.8109 1.30495 41.6135C2.10751 42.416 3.19602 42.8669 4.33101 42.8669H16.5677V29.2875H10.9509V22.8959H16.5677V18.0244C16.5677 12.4833 19.8665 9.4226 24.919 9.4226C27.3387 9.4226 29.8689 9.85412 29.8689 9.85412V15.2926H27.081C24.3341 15.2926 23.4773 16.9973 23.4773 18.7457V22.8959H29.6095L28.6288 29.2875H23.4773V42.8669H35.714C36.849 42.8669 37.9375 42.416 38.7401 41.6135C39.5426 40.8109 39.9935 39.7224 39.9935 38.5874V7.2044C39.9935 6.0694 39.5426 4.98089 38.7401 4.17833C37.9375 3.37577 36.849 2.9249 35.714 2.9249Z" fill="currentColor"/>
                  </g>
                  <defs>
                    <clipPath id="clip0_201_6931">
                      <rect width="39.942" height="45.648" fill="white" transform="translate(0.0515137 0.0718994)"/>
                    </clipPath>
                  </defs>
                </svg>
              </div>
            </a>
          </div>
        </div>

        {/* Land Acknowledgment */}
        <div className="max-w-4xl mx-auto">
          <p 
            style={{
              color: 'var(--Black, #2F2E41)',
              textAlign: 'center',
              fontFamily: 'DM Sans',
              fontSize: '12px',
              fontStyle: 'normal',
              fontWeight: 400,
              lineHeight: 'normal',
            }}
          >
            UX Hub recognizes that we live, learn, and host our events on the traditional, ancestral, and unceded territory of the xʷməθkʷəy̓əm (Musqueam) and səlilwətaɬ (Tsleil-Waututh) Nations. We acknowledge the privilege this carries and are committed to ongoing learning, reflection, and action as part of our role in reconciliation. To further your understanding, we encourage you to explore{' '}
            <a href="#" className="text-blue-600 underline hover:text-blue-800 transition-colors">
              xʷi7xʷa Library&apos;s Indigenous Research Guide
            </a>
            {' '}and{' '}
            <a href="https://native-land.ca" className="text-blue-600 underline hover:text-blue-800 transition-colors">
              native-land.ca
            </a>
            .
          </p>
        </div>
        <div className="mb-20">
        </div>
      </div>
    </footer>
  );
};

export default Footer; 