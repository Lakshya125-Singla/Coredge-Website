
'use client';
import React from 'react';

const Partners = () => {
  const partners = [
    { name: 'Cisco', logo: '/cisco.png' },
    { name: 'Dell', logo: '/dell.png' },
    { name: 'Google', logo: '/google.png' },
    { name: 'Qualcomm', logo: '/qualcomm.png' },
    { name: 'Broadcom', logo: '/broadcom.png' },
    { name: 'Maerifa', logo: '/maerif.png' },
  ];

  return (
    <div className="max-w-full">
      <section className="relative w-full bg-[#0D0D0D] py-28 md:py-36 lg:py-44 px-6 overflow-hidden min-h-150 md:min-h-175 lg:min-h-200 flex items-center">
        
        <div 
          className="absolute inset-0 opacity-100 bg-center bg-no-repeat bg-contain pointer-events-none"
          style={{ backgroundImage: "url('/partners.png')" }}
        />

        <div className="relative z-10 max-w-7xl mx-auto text-center w-full">
          <h2 className="text-[3rem] md:text-[3.4rem] lg:text-[4rem] leading-tight font-medium text-white mb-6">
            The Power of Our Partners Ecosystem
          </h2>
          <p className="text-white text-[16px] md:text-[18px] lg:text-[20px] max-w-3xl font-normal mx-auto mb-20 leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          </p>

          {/* LOGOS GRID */}
          <div className="grid grid-cols sm:grid-cols-2 md:grid-cols-6 lg:grid-cols-6 gap-12 md:gap-14 lg:gap-16 items-center justify-items-center">
            {partners.map((partner, index) => (
              <div key={index} className="w-full flex justify-center">
                <img
                  src={partner.logo} 
                  alt={partner.name}
                  className="h-12 md:h-14 lg:h-16 object-contain opacity-100 transition-opacity duration-300 bg-transparent"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partners;