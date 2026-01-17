'use client'
import React from 'react';
const logos = [
    "Footer-Facebook.png",
    "Footer-Linkdin.png",
    "Footer-X.png",
]
export default function Footer() {
    return (
        <footer className="relative bg-[#0B0B0B] text-white overflow-hidden ">
            {/* Main Content */}
            <div className="relative z-10 max-w-full mx-auto px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 pb-14 sm:pb-16">

                {/* Top Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 ml-2 sm:ml-2 md:ml-5 lg:ml-0 xl:ml-20">

                    {/* Platforms */}
                    <div>
                        <h3 className="text-[32px] lg:text-[32px] md:text-[32px] xl:text-[32px] 2xl:text-[32px] font-semibold  sm:mb-6">
                            Platforms
                        </h3>
                        <ul className="space-y-2 sm:space-y-3 text-auto font-normal font-inter  lg:text-[20px] text-white ">
                            <li>Sovereign AI</li>
                            <li>Cloud Orbiter</li>
                            <li>Cirrus Cloud Platform</li>
                            <li>Coredge Kubernetes</li>
                            <li>Cirrus Cloud Suite</li>
                            <li>Corobots</li>
                            <li>Dflare AI</li>
                        </ul>
                    </div>

                    {/* Industry */}
                    <div>
                        <h3 className="text-[32px] lg:text-[32px] md:text-[32px] xl:text-[32px] 2xl:text-[32px] font-semibold  sm:mb-6">
                            Industry
                        </h3>
                        <ul className="space-y-2 sm:space-y-3 text-auto font-normal font-inter  lg:text-[20px] text-white">
                            <li>Telecom</li>
                            <li>Healthcare</li>
                            <li>Finance</li>
                            <li>Private Sector</li>
                            <li>Mid-Size Enterprise</li>
                            <li>Government</li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="text-[32px] lg:text-[32px] md:text-[32px] xl:text-[32px] 2xl:text-[32px] font-semibold  sm:mb-6">
                            Company
                        </h3>
                        <ul className="space-y-2 sm:space-y-3 text-auto font-normal font-inter  lg:text-[20px] text-[#fff]">
                            <li>Products</li>
                            <li>Solutions</li>
                            <li>Company</li>
                            <li>Pricing</li>
                        </ul>
                    </div>

                    {/* Get in Touch */}
                    <div>
                        <h3 className="text-[32px] lg:text-[32px] md:text-[32px] xl:text-[32px] 2xl:text-[32px] font-semibold sm:mb-6 w-full lg:w-[110%] 2xl:w-[120%]">
                            Get in Touch
                        </h3>
                        <div className="flex gap-3 sm:gap-4 w-[250px] ">
                            {logos.map((logo, i) => (
                                <div key={i} className="flex items-center justify-center w-[42px] h-[42px] pl-1">
                                    <img
                                        src={logo}
                                        alt={logo}
                                        className="h-auto w-auto object-fill gap-[10px] cursor-pointer rounded-[8px]"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* Background Watermark */}
                <div className="relative text-center select-none pointer-events-none w-full mt-10">
                    <img
                        src="Footer-logo.png"
                        alt="Coredge Watermark"
                        className="
                        mx-auto
                        w-[100%]
                        sm:w-[100%]
                        md:w-[100%]
                        lg:w-[100%]
                        xl:w-[90%]
                        2xl:w-[90%]
                        max-w-full
                        opacity-[40%]
                         h-auto w-full object-fill "
                    />
                </div>

                {/* Bottom Row */}
                <div className="mt-12 flex flex-col lg:flex-row xl:flex-row 2xl:flex-row md:flex-row justify-center items-center gap-0 text-auto text-[#fff] opacity-[50%]">



                    <div className="flex flex-col gap-8 md:gap-8 lg:flex-row xl:flex-row 2xl:flex-row md:flex-row sm:flex-col">
                        <p className="text-center lg:text-left font-medium  sm:text-[16px] md:text-[16px] lg:text-[20px] xl:text-[20px] ">
                            © 2026 Coredge. All Rights Reserved
                        </p>
                        <p className="cursor-pointer hover:text-white font-medium font-inter sm:text-[16px] md:text-[16px] lg:text-[20px] xl:text-[20px] ">
                            Terms & Conditions
                        </p>
                        <p className="cursor-pointer hover:text-white font-medium sm:text-[16px] md:text-[16px] lg:text-[20px] xl:text-[20px] ">
                            Privacy Policy
                        </p>
                    </div>


                </div>
            </div>


            {/* <div className="relative pb-6 sm:pb-8 lg:pb-10 text-center select-none pointer-events-none w-full">
  <img
    src="Footer-logo.png"
    alt="Footer Logo"
    className="
      mx-auto
      w-[85%]
      sm:w-[70%]
      md:w-[60%]
      lg:w-[50%]
      xl:w-[100%]
      max-w-[1400px]
      object-contain
    "
  />
</div> */}

        </footer>
    );
}