
'use client';
import React, { useState, useRef, useEffect } from 'react';

const PlatformSuite = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);


  const cards = [
    {
      title: "Sovereign AI",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop"
    },
    {
      title: "Cloud Orbiter",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop"
    },
    {
      title: "Cirrus Cloud Platform",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop"
    },
    {
      title: "Kubernetes Platform",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&h=600&fit=crop"
    },
    {
      title: "Cloud Orbiter",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop"
    },
    {
      title: "Kubernetes Platform",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&h=600&fit=crop"
    },
    {
      title: "Cloud Orbiter",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop"
    },
    {
      title: "Kubernetes Platform",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&h=600&fit=crop"
    },
    {
      title: "Cloud Orbiter",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop"
    }
  ];

  // Auto-scroll logic: Whenever activeIndex changes, scroll the container
  useEffect(() => {
    if (containerRef.current && cardRefs.current[activeIndex]) {
      const container = containerRef.current;
      const targetCard = cardRefs.current[activeIndex];
      
      if (targetCard) {
        // Calculate the scroll position so the active card is centered or well-aligned
        const scrollPosition = targetCard.offsetLeft - (container.offsetWidth / 4);
        
        container.scrollTo({
          left: scrollPosition,
          behavior: 'smooth'
        });
      }
    }
  }, [activeIndex]);

  const handlePrevious = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev < cards.length - 1 ? prev + 1 : cards.length - 1));
  };
  return (
    <section className="bg-[#0D0D0D] py-16 md:py-24 font-sans overflow-hidden">
      <div className="max-w-full mx-auto ">
        
        {/* Header Area */}
        <div className="text-center mb-16">
          <h2 className="text-white text-[2.5rem] md:text-[3.4rem] lg:text-[4rem] font-medium tracking-tight leading-tight mb-4">
            Comprehensive Platform Suite
          </h2>
          <p className="text-white text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[30px] max-w-2xl mx-auto">
            Everything you need to build, deploy, and manage sovereign cloud infrastructure at scale
          </p>
        </div>

        {/* Cards Container - Scrollable */}
        <div className="relative">
          <div 
            ref={containerRef}
            className="flex gap-4 mb-12 pl-2 md:pl-24 pb-1 overflow-x-auto scrollbar-hide"
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none'
            }}
          >
            {cards.map((card, index) => (
              <div
                key={index}
                ref={(el) => { cardRefs.current[index] = el; }}
                onClick={() => setActiveIndex(index)}
                className={`relative rounded-2xl overflow-auto cursor-pointer transition-all duration-700 ease-in-out flex-shrink-0 h-[450px] ${
                  activeIndex === index ? 'shadow-[0_10px_10px_rgba(241,245,249,0.2)]' : 'opacity-60 hover:opacity-100'
                }`}
                style={{
                  width: activeIndex === index ? '450px' : '250px',
                }}
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img 
                    src={card.img} 
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-500"
                  />
                </div>
              
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Content - Only show fully on active card */}
                <div className={`absolute bottom-0 left-0 right-0 p-6 md:p-8 transition-all duration-500 ${
                  activeIndex === index ? 'opacity-100' : 'opacity-0'
                }`}>
                  <h3 className="text-white text-[24px] md:text-[28px] lg:text-[32px] font-medium leading-tight mb-3">
                    {card.title}
                  </h3>
                  <p className="text-white text-[14px] md:text-[16px] lg:text-[18px] font-normal leading-relaxed mb-6">
                    {card.desc}
                  </p>
                  
                  {/* Action Button */}
                  <button className="bg-[#0095b6] hover:bg-[#007a94] text-white rounded-md font-bold
                             2xl:h-10 xl:h-10 lg:h-10 h-10
                             2xl:px-4 xl:px-6 lg:px-4 px-4
                             2xl:text-[14px] xl:text-[16px] lg:text-[14px] transition-all duration-300">
                    Explore Platform
                  </button>
                </div>

                {/* Title for inactive cards - Show on side */}
                <div className={`absolute bottom-8 left-0 right-0 transition-all duration-500 ${
                  activeIndex === index ? 'opacity-0' : 'opacity-100'
                }`}>
                  <h3 className="text-white text-[20px] md:text-[24px] font-medium px-6 text-center">
                    {card.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center gap-3">
           
            <button onClick={handlePrevious} className="industry-prev bg-[#1515154F] hover:bg-[#3030304f] text-white px-6 py-4 text-center text-2xl rounded-full border-[1px] border-[#3F3F3F] ">
              <img src="Industry-right-arrow.png" alt="" />
            </button>
           
            <button onClick={handleNext} className="industry-prev bg-[#1515154F] hover:bg-[#3030304f] text-white px-6 py-4 text-center text-2xl rounded-full border-[1px] border-[#3F3F3F] ">
                           <img src="Industry-left-arrow.png" alt=""/>
            </button>
          </div>
        </div>

      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default PlatformSuite;





