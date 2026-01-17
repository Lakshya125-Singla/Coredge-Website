'use client';
import React from 'react';

const solutions = [
  {
    tag: "By Use Case",
    title: "AI/ML Training & Inference",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    image: "Solutions.png",
  },
  {
    tag: "By Industry",
    title: "AI/ML Training & Inference",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    image: "Solutions.png",
  },
  {
    tag: "By Role",
    title: "AI/ML Training & Inference",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
    image: "Solutions.png",
  },
];

export default function SolutionsSection() {
  return (
    <section className="bg-[#0D0D0D] text-white py-16 md:py-24  ">
      <div className="max-w-full mx-auto px-20">

        {/* Header Section */}
        <div className="text-center max-w-full mx-auto mb-12 md:mb-16 px-4">
          <h2 className="text-white text-[2rem] sm:text-[2.5rem] md:text-[3.4rem] lg:text-[4rem] font-medium tracking-tight leading-tight mb-4">
            Solutions That Drive Real Outcomes
          </h2>
          <p className="text-white text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[28px] md:leading-[30px] max-w-2xl mx-auto">
            Purpose-built for your industry and use case
          </p>
        </div>

        {/* Vertical Stack with Grid Lines */}
        <div className=" ">
          {solutions.map((item, index) => {
            return (
              <div
                key={index}
                className={`flex flex-col md:flex-col lg:flex-row items-stretch border-t border-[#FFFFFF66] ${index == 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                {/* Image Side */}
                <div className="w-full  p-8 flex items-center justify-center">
                  <div className="relative w-full rounded-xl overflow-hidden ">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover opacity-100" />
                  </div>
                </div>

                {/* Middle Vertical Line (Only on Desktop) */}
                <div className="hidden md:block w-px my-10 bg-[#FFFFFF66] self-stretch" />

                {/* Text Side */}
                <div className={`w-full  mb-10 md:mb-0 md:p-8 flex flex-col justify-center  `}>
                  <div className="max-w-lg mx-auto md:mx-0">
                    <span className="text-white text-[14px] md:text-[20px] leading-7.5 font-normal mb-4 block">
                      {item.tag}
                    </span>

                    <h3 className="text-[32px] md:text-[40px] font-semibold leading-tight mb-6">
                      {item.title}
                    </h3>

                    <p className="text-white text-[14px] md:text-[20px] leading-7.5 font-normal mb-7">
                      {item.desc}
                    </p>

                    <div className="cursor-pointer group inline-block">
                      <img
                        src="Solution-arrow.png"
                        alt="Explore"
                        className="w-6 h-5.5 " />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}