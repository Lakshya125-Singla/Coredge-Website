'use client';
import React from 'react';

const leading = () => {
  
  const certifications = [
    { id: 1, src: '/9001.png', alt: 'ISO 9001:2015' },
    { id: 2, src: '/2000.png', alt: 'ISO 20000-1:2018' },
    { id: 3, src: '/cmmi.png', alt: 'CMMI Level 3' },
    { id: 4, src: '/27001.png', alt: 'ISO 27001:2022' },
    { id: 5, src: '/openstack.png', alt: 'OpenStack' },
  ];

  return (
    <section className="bg-[#0D0D0D] py-20 px-6">           
      <div className="container mx-auto text-center ">
        {/* Heading */}
        <h2 className="text-white text-[3rem] md:text-[3.5rem] lg:text-[4rem] font-medium mb-12 tracking-tight">
          Trusted by leading enterprises
        </h2>

        {/* Logo Grid */}
        <div className="flex flex-wrap  justify-center gap-4 xl:gap-12 2xl:gap-12 ">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className=" bg-[#1515154F] border
        shadow-[inset_-1px_-1px_4px_#2E3436]
         border-[#3F3F3F] rounded-lg w-40 h-28 md:w-48 md:h-30 lg:w-45 xl:w-47 2x1:w-72 lg:h-30 flex items-center justify-center p-6 "
            >
              <img
                src={cert.src}
                alt={cert.alt}
                className="max-w-full max-h-full object-contain filter brightness-100"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default leading;