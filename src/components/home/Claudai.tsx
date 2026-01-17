'use client';
import React, { useState } from 'react';
import Link from 'next/link';

const Claudai = () => {
  const [isOpen, setIsOpen] = useState(false);

  const logos = [
    "cisco.png",
    "dell.png",
    "google.png",
    "qualcomm.png",
    "broadcom.png",
    "maerif.png",
  ];

  return (
    <div className="bg-[#0B0B0B] text-white min-h-screen font-sans">
      {/* --- NAVIGATION --- */}
      <header className="absolute top-0 left-0 z-50 w-full">
        <nav className="relative w-full">
          <div className="max-w-full mx-auto flex items-center justify-between h-17.5 px-6 xl:px-15 2xl:px-27">
            {/* Logo */}
            <div className="flex items-center shrink-0">
              <Link href="/">
                <img
                  src="/logonav.png"
                  alt="Logo"
                  className="w-35 md:w-45 h-auto object-contain"
                />
              </Link>
            </div>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-10 text-[14px] font-normal text-white">
              {['Products', 'Solutions', 'Resources', 'Company', 'Services'].map((item) => (
                <Link key={item} href="#" className="hover:text-[#00A9CE] transition-colors">{item}</Link>
              ))}
            </div>

            {/* Desktop Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <button className="border border-white rounded-md transition-all font-medium whitespace-nowrap
                             2xl:h-10 xl:h-10 lg:h-10 h-10
                             2xl:px-4 xl:px-6 lg:px-4 px-4
                             2xl:text-[14px] xl:text-[16px] lg:text-[14px] hover:bg-white/10 ">
                Request a Demo
              </button>
              <button className="bg-[#0095B6] rounded-md transition-all font-bold whitespace-nowrap hover:bg-cyan-700
                             2xl:h-10 xl:h-10 lg:h-10 h-10
                             2xl:px-4 xl:px-6 lg:px-4 px-4
                             2xl:text-[14px] xl:text-[16px] lg:text-[14px]">
                Get in Touch
              </button>
            </div>

            {/* Hamburger */}
            <div className="lg:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="flex flex-col gap-1.5 outline-none">
                <span className={`block w-7 h-0.5 bg-white transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`block w-7 h-0.5 bg-white transition-all ${isOpen ? 'opacity-0' : ''}`}></span>
                <span className={`block w-7 h-0.5 bg-white transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className={`lg:hidden absolute top-full left-0 w-full bg-[#0B0B0B] transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="flex flex-col items-center p-8 gap-6">
              {['Products', 'Solutions', 'Resources', 'Company', 'Services'].map((item) => (
                <Link key={item} href="#" onClick={() => setIsOpen(false)}>{item}</Link>
              ))}
              <div className="flex flex-col w-full gap-4">
                <button className="w-full h-12 border border-white rounded-md">Request a Demo</button>
                <button className="w-full h-12 bg-[#0095B6] rounded-md font-bold">Get in Touch</button>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* --- HERO SECTION --- */}
      <section className="relative w-full h-[110vh] md-[100vh] overflow-hidden ">
        {/* Background Image & Merge Gradient */}
        <div className="absolute inset-0">
          <img 
            src="claud.png" 
            alt="Hero Background" 
            className="h-full w-full object-cover opacity-100"
          />
          {/* This gradient merges the image into the bottom black background */}
          <div className="absolute inset-0 bg-linear-to-b from-[#0B0B0B]/50 via-[#0B0B0B]/60 to-[#0B0B0B]"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
           <h1 className="text-white font-semibold text-4xl md:text-[44px] xl:text-[54px] 2xl:text-[64px] leading-tight mb-6">
              Sovereign Cloud & AI Infrastructure
              <br className="hidden sm:block" />
              For The Modern Enterprise
            </h1>
           <p className="text-white max-w-212.5 mx-auto text-base md:text-[16px] 2xl:text-[20px] font-normal leading-relaxed mb-8">
              Deploy secure, scalable, and compliant cloud infrastructure with full data sovereignty.
              From GPU-powered AI workloads to edge computing—all orchestrated from a single platform.
            </p>

            {/* Buttons Group */}
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center z-10 pb-90 md:pb-90 lg:pb-80 xl:pb-100">
              <button className=" bg-[#0095B6] rounded-md transition-all font-bold whitespace-nowrap hover:bg-cyan-700
                             2xl:h-10 xl:h-10 lg:h-10 h-10
                             2xl:px-4 xl:px-6 lg:px-4 px-4
                             2xl:text-[14px] xl:text-[16px] lg:text-[14px]">
                Discover Products
              </button>
              <button className=" rounded-md transition-all font-bold whitespace-nowrap
                             2xl:h-10 xl:h-10 lg:h-10 h-10
                             2xl:px-4 xl:px-6 lg:px-4 px-4
                             2xl:text-[14px] xl:text-[16px] lg:text-[14px] border border-[#0095B6] text-white  hover:bg-[#0095B6]/10 ">
                Request a Demo
              </button>
            </div>
        </div>

        {/* --- INTEGRATED MARQUEE --- */}
        <div className="absolute bottom-20 md:bottom-20 lg:bottom-20 xl:bottom-20 2xl:bottom-10 w-full z-20">
          {/* Subtle fade on left and right edges */}
          <div className="absolute inset-0 z-30 pointer-events-none"></div>
          
          <div className="relative h-37.5 md-[50px] flex items-center overflow-hidden">
            <div className="flex animate-marquee whitespace-nowrap items-center">
              {logos.concat(logos).map((logo, index) => (
                <img 
                  key={index} 
                  src={logo} 
                  className="mx-12 h-8 md:h-8 grayscale opacity-100 transition-all duration-500" 
                  alt="Partner" 
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Claudai;