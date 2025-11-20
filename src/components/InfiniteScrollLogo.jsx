import React from 'react';

export default function DualLogoScroll() {
  // First row logos
  const logosRow1 = [
    { name: 'Connect', img: './images/logo5.png' },
    { name: 'IMPACT', img: './images/logo1.png' },
    { name: 'Milaap', img: './images/logo2.png' },
    { name: 'Ketto', img: './images/logo3.png' },
    { name: 'Navankur', img: './images/logo4.png' },
  ];

  // Second row logos
  const logosRow2 = [
    { name: 'Connect', img: './images/logo5.png' },
    { name: 'Navankur', img: './images/logo4.png' },
    { name: 'Ketto', img: './images/logo3.png' },
    { name: 'IMPACT', img: './images/logo1.png' },
    { name: 'Milaap', img: './images/logo2.png' },
];

  return (
    <div className="w-full flex flex-col items-center justify-center gap-8 py-12 overflow-hidden">
      {/* First Row - Scrolling Right */}
      <div className="relative w-full overflow-hidden">
        <div className="flex animate-scroll-right">
          {/* First set */}
          {logosRow1.map((logo, index) => (
            <div
              key={`row1-first-${index}`}
              className={`flex-shrink-0 w-80 h-32 ${index == 4 ? "bg-zinc-800 border-zinc-700 border" : ""} mx-6 bg-white rounded-none shadow-lg flex items-center justify-center`}
            >
              <img 
                src={logo.img} 
                alt={logo.name}
                className="w-full h-full object-contain p-4"
              />
            </div>
          ))}
          
          {/* Duplicate set for seamless loop */}
          {logosRow1.map((logo, index) => (
            <div
              key={`row1-second-${index}`}
              className="flex-shrink-0 w-80 h-32 mx-6 bg-white rounded-none shadow-lg flex items-center justify-center"
            >
              <img 
                src={logo.img} 
                alt={logo.name}
                className="w-full h-full object-contain p-4"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Second Row - Scrolling Left */}
      <div className="relative w-full overflow-hidden">
        <div className="flex animate-scroll-left">
          {/* First set */}
          {logosRow2.map((logo, index) => (
            <div
              key={`row2-first-${index}`}
              className={`flex-shrink-0 w-80 h-32 mx-6 bg-white ${index == 1 ? "bg-zinc-800 border-zinc-700 border" : ""} rounded-none shadow-lg flex items-center justify-center`}
            >
              <img 
                src={logo.img} 
                alt={logo.name}
                className="w-full h-full object-contain p-4"
              />
            </div>
          ))}
          
          {/* Duplicate set for seamless loop */}
          {logosRow2.map((logo, index) => (
            <div
              key={`row2-second-${index}`}
              className="flex-shrink-0 w-80 h-32 mx-6 bg-white rounded-none shadow-lg flex items-center justify-center"
            >
              <img 
                src={logo.img} 
                alt={logo.name}
                className="w-full h-full object-contain p-4"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-right {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        @keyframes scroll-left {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        
        .animate-scroll-right {
          animation: scroll-right 30s linear infinite;
        }
        
        .animate-scroll-left {
          animation: scroll-left 30s linear infinite;
        }
        
        .animate-scroll-right:hover,
        .animate-scroll-left:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}